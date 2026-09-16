/* =========================================================================
   DBS STUDY ENGINE
   Shared router + renderer. Expects window.STUDY to already be set (by the
   study's own data.js) before this file runs. Content that's universal to
   the discovery method itself lives here as plain text; anything that
   varies by study is read from STUDY, falling back to ENGINE_DEFAULTS.
   ========================================================================= */

const ICONS = {
  back: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 3-6.7"/><polyline points="3 4 3 9 8 9"/></svg>',
  up: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 7c-1.5-1.2-3.6-2-6-2-1 0-2 .1-3 .4v13.6c1-.3 2-.4 3-.4 2.4 0 4.5.8 6 2 1.5-1.2 3.6-2 6-2 1 0 2 .1 3 .4V5.4C20 5.1 19 5 18 5c-2.4 0-4.5.8-6 2z"/><line x1="12" y1="7" x2="12" y2="21"/></svg>',
  forward: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 1 1-3-6.7"/><polyline points="21 4 21 9 16 9"/></svg>',
  check: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>',
  timeline: '<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><line x1="3" y1="12" x2="21" y2="12"/><circle cx="6.5" cy="12" r="2.4" fill="currentColor" stroke="none"/><circle cx="12" cy="12" r="2.4" fill="currentColor" stroke="none"/><circle cx="17.5" cy="12" r="2.4" fill="currentColor" stroke="none"/></svg>'
};

/* ---------- Resolved, per-study content (study overrides, engine fallbacks) ---------- */
const NOUN = STUDY.sessionNoun || "session";
function capNoun(){ return NOUN.charAt(0).toUpperCase() + NOUN.slice(1); }

const WELCOME_COPY = Object.assign({}, ENGINE_DEFAULTS.welcomeCopy, STUDY.welcomeCopy || {});
const METHOD_COPY = Object.assign({}, ENGINE_DEFAULTS.methodCopy, STUDY.methodCopy || {});
const FINISH_COPY = Object.assign({}, ENGINE_DEFAULTS.finishCopy, STUDY.finishCopy || {});
const DISCOVERY_QUESTIONS = METHOD_COPY.discoveryQuestions || ENGINE_DEFAULTS.discoveryQuestions;
const LOOKBACK_DEFAULTS = METHOD_COPY.lookBackDefaults || ENGINE_DEFAULTS.lookBackQuestions;
const RESPOND_ITEMS = METHOD_COPY.respondItems || ENGINE_DEFAULTS.respondItems;
const STEP_TIMES = Object.assign({
  lookback: "10&ndash;15 min", lookup: "30&ndash;40 min", lookforward: "15&ndash;20 min"
}, STUDY.stepTimes || {});
const HAS_BETWEEN_SESSIONS = STUDY.sessions.some(s => s.betweenSessions) || (STUDY.bonusSessions || []).some(s => s.betweenSessions);

const STEP_LABELS = {
  cover: "This " + capNoun(), lookback: "Look Back", lookup: "Look Up", lookforward: "Look Forward",
  reading: "Between Now and Next Week"
};

/* =========================================================================
   STATE & PROGRESS (stored on this device only, namespaced per study)
   ========================================================================= */

let view = "welcome"; // welcome | method | journey | session | finish
let currentSession = null;
let currentStep = 0; // 0 = cover, 1..N = rhythm steps

const PROGRESS_KEY = `dbs.${STUDY.id}.progress.v1`;

function loadProgress(){
  try { return JSON.parse(localStorage.getItem(PROGRESS_KEY)) || {}; } catch(e){ return {}; }
}
function isComplete(id){ return !!loadProgress()[id]; }
function setComplete(id, done){
  const p = loadProgress();
  if (done) p[id] = true; else delete p[id];
  localStorage.setItem(PROGRESS_KEY, JSON.stringify(p));
}
function finishSession(){
  setComplete(currentSession.data.id, true);
  if (!currentSession.isBonus && STUDY.sessions.every(s => isComplete(s.id))){
    view = "finish"; render(); window.scrollTo(0,0);
  } else {
    goJourney();
  }
}
function resetProgress(){
  if (confirm("Reset progress on this device? This clears every " + NOUN + " marked complete, useful if you're about to start the course again with someone new.")){
    localStorage.removeItem(PROGRESS_KEY);
    render();
  }
}

function beginJourney(){ goJourney(); }

function cap(str){ return str ? str.charAt(0).toUpperCase() + str.slice(1) : str; }

// Opts a standalone "I" and proper names (God, Jesus, John, etc.) out of the CSS lowercase
// transform applied to titles, so they don't render as "god", "jesus", "john".
const PROTECTED_WORDS = ["I","God","Jesus","Christ","Lord","Abraham","Isaac","Jacob","Moses","David",
  "Daniel","Isaiah","Israel","Moab","Bethlehem","Naomi","Ruth","Boaz","Obed","Levi","Nicodemus",
  "Lazarus","Mark","John","Paul","Peter","James","Timothy","Titus","Silas","Epaphroditus","Philippi",
  "Galilee","Jerusalem","Hannah"];
const PROTECTED_WORDS_RE = new RegExp("\\b(" + PROTECTED_WORDS.join("|") + ")\\b", "g");
function titleHtml(title){ return title.replace(PROTECTED_WORDS_RE, '<span style="text-transform:none;">$1</span>'); }

// The library's mark: a circle with a bending path connecting three waypoints, echoing the
// look back / look up / look forward rhythm. Drawn as SVG so it works as a favicon too.
function markSvg(size, color){
  return `<svg width="${size}" height="${size}" viewBox="0 0 100 100" style="display:block;color:${color};">
    <circle cx="50" cy="50" r="46" fill="none" stroke="currentColor" stroke-width="2.5"/>
    <path d="M30 68 Q40 40 50 50 Q60 60 70 32" fill="none" stroke="currentColor" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="30" cy="68" r="5" fill="currentColor"/>
    <circle cx="50" cy="50" r="5" fill="currentColor"/>
    <circle cx="70" cy="32" r="5" fill="currentColor"/>
  </svg>`;
}

// Shared site nav (logo/wordmark + How it works/Studies/About), used on every screen so
// the fuller explanation and the rest of the library are never more than one tap away,
// even mid-study.
function siteNav(onDark){
  return `<div class="wrap"><nav class="top${onDark ? ' on-dark' : ''}">
    <a class="brand" href="../../index.html" aria-label="Home">
      ${markSvg(38, onDark ? "var(--cream)" : "var(--ink-900)")}
      <span class="brand-name">discovery bible studies</span>
    </a>
    <div class="nav-links">
      <a href="../../how-it-works.html">How it works</a>
      <a href="../../studies.html">Studies</a>
      <a href="../../about.html">About</a>
    </div>
  </nav></div>`;
}

// Optional per-session stage tag (e.g. Connect / Win / Build / Train / Send). Purely additive:
// only studies that set session.stage render anything here.
const STAGE_COLORS = {
  connect: { light: "#2E6B7A", dark: "#6FB8C9" },
  win:     { light: "#A8472A", dark: "#E08A62" },
  build:   { light: "#9C7A1E", dark: "#E0BB55" },
  train:   { light: "#454F79", dark: "#9AA3D6" },
  send:    { light: "#3F7A3A", dark: "#8EC97F" }
};
function stagePill(stage, onDark){
  if (!stage) return "";
  const c = STAGE_COLORS[stage.toLowerCase()];
  const color = c ? (onDark ? c.dark : c.light) : "currentColor";
  return `<span style="display:inline-block;font-size:10px;letter-spacing:.08em;text-transform:uppercase;font-weight:700;color:${color};border:1px solid ${color};border-radius:999px;padding:2px 8px;white-space:nowrap;">${stage}</span>`;
}

function stepsFor(session){
  const steps = ["cover", "lookback", "lookup", "lookforward"];
  if (session.betweenSessions) steps.push("reading");
  return steps;
}

function goJourney(){ view = "journey"; render(); window.scrollTo(0,0); }

function openSession(data, isBonus){
  currentSession = { data, isBonus };
  currentStep = 0;
  view = "session";
  render();
  window.scrollTo(0,0);
}

function render(){
  const darkTop = view === "welcome" || view === "finish" || (view === "session" && currentStep === 0);
  const bg = darkTop ? "var(--black)" : "var(--cream)";
  document.documentElement.style.background = bg;
  document.body.style.background = bg;
  if (view === "welcome") return renderWelcome();
  if (view === "journey") return renderJourney();
  if (view === "prereading") return renderPreReading();
  if (view === "session") return renderSession();
  if (view === "finish") return renderFinish();
}

function renderWelcome(){
  document.getElementById("app").innerHTML = `
    ${siteNav(true)}
    <div class="screen-dark" style="padding-top:8px;">
      <div>
        <div class="eyebrow on-dark" style="margin-bottom:20px;">${WELCOME_COPY.tagline}</div>
        <div class="display on-dark lower" style="font-size:64px;">${WELCOME_COPY.titleHtml || STUDY.title.toLowerCase()}</div>
        <p class="lead on-dark" style="margin-top:24px;max-width:320px;">${WELCOME_COPY.lead}</p>
        <div class="stat-row">
          <div><div class="stat-num">${STUDY.sessions.length}</div><div class="stat-label">${NOUN}s</div></div>
          <div class="stat-div"></div>
          ${(STUDY.bonusSessions || []).length ? `
          <div><div class="stat-num">${STUDY.bonusSessions.length}</div><div class="stat-label">bonus</div></div>
          <div class="stat-div"></div>` : ""}
          <div><div class="stat-num">3</div><div class="stat-label">steps</div></div>
        </div>
        <div style="margin-top:34px;">
          <button class="pill solid on-dark" onclick="beginJourney()">begin the journey &rarr;</button>
        </div>
        <div style="text-align:center;font-size:11.5px;color:rgba(236,234,221,.5);margin-top:16px;letter-spacing:.04em;">look back &middot; look up &middot; look forward</div>
      </div>
    </div>
  `;
}

function renderJourney(){
  const progress = loadProgress();
  const completedCore = STUDY.sessions.filter(s => progress[s.id]).length;
  const pct = Math.round((completedCore / STUDY.sessions.length) * 100);
  const nextCore = STUDY.sessions.find(s => !progress[s.id]);
  const currentId = nextCore ? nextCore.id : null;

  const coreRows = STUDY.sessions.map((s,i) => {
    const done = isComplete(s.id);
    const isCurrent = s.id === currentId;
    return `
    <button type="button" class="journey-row${isCurrent ? ' current' : ''}" onclick="openSession(STUDY.sessions[${i}], false)">
      <div class="journey-num${done ? ' done' : ''}">${done ? ICONS.check : s.id}</div>
      <div style="flex:1;">
        ${s.stage ? `<div style="margin-bottom:4px;">${stagePill(s.stage, isCurrent)}</div>` : ""}
        <div class="journey-title lower">${titleHtml(s.title)}</div>
        <div class="journey-meta">${isCurrent ? `This ${NOUN}` : `${capNoun()} ${s.id}`} &middot; ${refDisplay(s)}</div>
      </div>
      <div class="journey-chevron">${isCurrent ? '&rarr;' : '&rsaquo;'}</div>
    </button>`;
  }).join("");

  const bonusSessions = STUDY.bonusSessions || [];
  const bonusRows = bonusSessions.map((s,i) => `
    <button type="button" class="journey-row bonus" onclick="openSession(STUDY.bonusSessions[${i}], true)">
      <div class="journey-num${isComplete(s.id) ? ' done' : ''}">${isComplete(s.id) ? ICONS.check : s.id}</div>
      <div style="flex:1;">
        <div class="journey-title lower">${titleHtml(s.title)}</div>
        <div class="journey-meta">${refDisplay(s)}</div>
      </div>
      <div class="journey-chevron">&rsaquo;</div>
    </button>`).join("");

  document.getElementById("app").innerHTML = `
    ${siteNav(false)}
    <div class="screen-light" style="padding-top:8px;">
      <div class="eyebrow">${STUDY.title.toLowerCase()}</div>
      <div class="display lower" style="font-size:36px;margin-top:8px;">the journey</div>
      <p class="lead" style="margin-top:8px;font-size:12.5px;">${completedCore} of ${STUDY.sessions.length} ${NOUN}s complete</p>
      <div class="progress-track" style="margin-top:10px;"><div class="progress-fill" style="width:${pct}%;"></div></div>

      ${completedCore === STUDY.sessions.length ? `
      <button type="button" style="display:flex;align-items:center;justify-content:space-between;width:100%;margin:16px 0 0;padding:14px 16px;border-radius:14px;border:none;background:var(--black);font:inherit;text-align:left;cursor:pointer;" onclick="view='finish';render();window.scrollTo(0,0);">
        <span style="font-family:var(--font-body);font-weight:600;font-size:13.5px;color:var(--cream);">Course complete: what&rsquo;s next?</span>
        <span style="color:var(--cream);font-size:16px;">&rarr;</span>
      </button>` : ""}

      <div class="section-label" style="margin-top:24px;">The ${STUDY.sessionsLabel || (capNoun() + "s")}</div>
      <div>
        ${STUDY.timeline ? `
        <a class="journey-row" href="${STUDY.timeline.href}" style="text-decoration:none;">
          <div class="journey-num">${ICONS.timeline}</div>
          <div style="flex:1;">
            <div class="journey-title lower">${STUDY.timeline.title || "The Timeline"}</div>
            <div class="journey-meta">${STUDY.timeline.meta || ""}</div>
          </div>
          <div class="journey-chevron">&rsaquo;</div>
        </a>` : ""}
        ${STUDY.preReading ? `
        <button type="button" class="journey-row" onclick="view='prereading';render();window.scrollTo(0,0);">
          <div class="journey-num">0</div>
          <div style="flex:1;">
            <div class="journey-title lower">Before You Begin</div>
            <div class="journey-meta">Prepares you for ${capNoun()} 1</div>
          </div>
          <div class="journey-chevron">&rsaquo;</div>
        </button>` : ""}
        ${coreRows}
      </div>

      ${bonusSessions.length ? `
      <div class="section-label">Bonus Sessions</div>
      <p class="lead" style="font-size:12.5px;margin-bottom:8px;">Extra material for groups who want to go further, or for personal reading between ${NOUN}s.</p>
      <div>${bonusRows}</div>` : ""}

      <div style="text-align:center;margin-top:22px;">
        <button type="button" style="background:none;border:none;padding:0;font-family:var(--font-body);font-size:12px;color:var(--ink-500);text-decoration:underline;cursor:pointer;" onclick="resetProgress()">Reset progress on this device</button>
      </div>

      <div class="footer-note">${STUDY.footerAttribution ? STUDY.footerAttribution + "<br><br>" : ""}${STUDY.copyrightNote || "Scripture quotations marked (NIV) taken from the Holy Bible, New International Version&reg;, NIV&reg; Copyright &copy; 1973, 1978, 1984, 2011 by Biblica, Inc.&reg; Used by permission."}</div>
    </div>
  `;
}

function renderPreReading(){
  const pr = STUDY.preReading;
  document.getElementById("app").innerHTML = `
    ${siteNav(false)}
    <div class="topbar">
      <button type="button" onclick="goJourney()" class="nav-back" aria-label="Back">&larr;</button>
      <div class="tb-title lower">before you begin</div>
    </div>
    <div style="padding:20px 22px 40px;">
      <div class="eyebrow" style="color:var(--ink-700);">Before You Begin</div>
      <div class="display lower" style="font-size:24px;margin-top:6px;">${STUDY.title.toLowerCase()}</div>
      ${(Array.isArray(pr.intro) ? pr.intro : [pr.intro || "A little reading before " + capNoun() + " 1, giving context for how the story leads in."]).map((para,i) => `<p class="leader-note" style="margin-top:${i === 0 ? 8 : 10}px;">${para}</p>`).join("")}
      ${pr.days.map((d,i) => `
      <div class="card" style="margin-top:${i === 0 ? 10 : 8}px;border-style:dashed;">
        <span class="eyebrow" style="color:var(--ink-500);">Day ${i+1}</span>
        <p style="font-size:14.5px;line-height:1.55;margin-top:6px;"><strong>${d.ref}.</strong> ${d.desc}</p>
      </div>`).join("")}
      <button class="pill solid" style="margin-top:20px;" onclick="goJourney()">back to the journey &rarr;</button>
    </div>
  `;
}

function renderFinish(){
  document.getElementById("app").innerHTML = `
    <div style="display:flex;flex-direction:column;min-height:100vh;min-height:100dvh;">
      <div style="background:var(--black);color:var(--cream);padding-bottom:32px;">
        ${siteNav(true)}
        <div style="padding:0 26px;">
        <div class="eyebrow on-dark">Course Complete</div>
        <div class="display on-dark lower" style="font-size:42px;margin-top:18px;">${FINISH_COPY.heading}</div>
        <p class="lead on-dark" style="margin-top:16px;">${FINISH_COPY.body}</p>
        </div>
      </div>
      <div style="background:var(--cream);padding:28px 26px 34px;flex:1;">
        <div class="card">
          <span class="eyebrow" style="color:var(--ink-500);">Lead someone through it</span>
          <p style="font-size:14.5px;line-height:1.55;margin-top:8px;">${FINISH_COPY.leadSomeoneElse}</p>
          <button class="pill ghost" style="margin-top:14px;height:46px;font-size:14px;" onclick="resetProgress()">Reset progress and start again</button>
        </div>
        <div class="card">
          <span class="eyebrow" style="color:var(--ink-500);">Pick your next study</span>
          <p style="font-size:14.5px;line-height:1.55;margin-top:8px;">${FINISH_COPY.nextStudy}</p>
          <a class="pill ghost" style="margin-top:14px;height:46px;font-size:14px;" href="../../studies.html">browse other studies &rarr;</a>
        </div>
        <button class="pill solid" style="margin-top:8px;" onclick="goJourney()">back to the journey &rarr;</button>
      </div>
    </div>
  `;
}

function refDisplay(s){ return s.refDisplay || s.refs.join(", "); }

function renderSession(){
  const s = currentSession.data;
  const steps = stepsFor(s);
  const step = steps[currentStep];
  const app = document.getElementById("app");
  let body = "";

  if (step === "cover"){
    const kicker = currentSession.isBonus ? "Bonus Session" : `${capNoun()} ${s.id} &middot; This ${capNoun()}`;
    body = `
      <div style="display:flex;flex-direction:column;min-height:100vh;min-height:100dvh;">
        <div style="background:var(--black);color:var(--cream);padding-bottom:32px;">
          ${siteNav(true)}
          <div style="padding:0 26px;">
          <button type="button" onclick="goJourney()" class="nav-back on-dark" aria-label="Back to journey" style="margin:-12px 0 6px -12px;">&larr;</button>
          <div class="eyebrow on-dark" style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;">
            <span>${kicker}</span>
            ${s.stage ? stagePill(s.stage, true) : ""}
          </div>
          <div class="display on-dark lower" style="font-size:42px;margin-top:18px;">${titleHtml(s.title)}</div>
          ${currentSession.isBonus ? `<p class="lead on-dark" style="margin-top:14px;">${s.fitsAfter}</p>` : ""}
          ${s.summary ? `<p class="lead on-dark" style="margin-top:16px;">${s.summary}</p>` : ""}
          </div>
        </div>
        <div style="background:var(--cream);padding:28px 26px 110px;flex:1;">
          <div class="card" style="background:var(--white);">
            <span class="eyebrow">This ${NOUN}${s.video ? "" : "&rsquo;s reading"}</span>
            <div class="display" style="font-size:22px;margin-top:4px;">${refDisplay(s)}</div>
          </div>
          ${s.memoryVerse ? `
          <div class="memory-block" style="margin-top:4px;">
            <div class="ml">Memory verse</div>
            <div class="mv">${s.memoryVerse.text}</div>
            <div class="mr">${s.memoryVerse.ref} (${STUDY.translation || "NIV"})</div>
          </div>` : ""}
        </div>
      </div>
      <div style="position:fixed;bottom:0;left:50%;transform:translateX(-50%);width:100%;max-width:640px;background:var(--cream);border-top:1px solid var(--ink-200);padding:12px 26px calc(12px + env(safe-area-inset-bottom));">
        <button class="pill solid" onclick="currentStep=1;render();window.scrollTo(0,0);">start the session &rarr;</button>
      </div>`;
    app.innerHTML = body;
    return;
  }

  if (step === "lookback"){
    const lb = s.lookBack;
    const coreIndex = currentSession.isBonus ? -1 : STUDY.sessions.findIndex(cs => cs.id === s.id);
    const prevSession = coreIndex > 0 ? STUDY.sessions[coreIndex - 1] : null;
    const lbQuestions = (lb ? lb.questions : LOOKBACK_DEFAULTS).slice();
    if (prevSession && prevSession.betweenSessions){
      lbQuestions.push(`Did you get to any of the reading since last ${NOUN}? What stood out, if you did?`);
    }
    body = `
      <div class="eyebrow" style="display:flex;align-items:center;gap:6px;color:var(--ink-700);">${ICONS.back}Look Back</div>
      <div class="display lower" style="font-size:24px;margin-top:6px;">${titleHtml(s.title)}</div>
      ${lb && lb.note ? `<p class="leader-note" style="margin-top:8px;">${lb.note}</p>` : `<div style="height:8px;"></div>`}
      <div class="card" style="margin-top:10px;">
        <ol>${lbQuestions.map((q,i) => `<li><span class="num">${i+1}</span><span>${q}</span></li>`).join("")}</ol>
      </div>
      ${!lb ? `<p class="leader-note" style="margin-top:8px;">No need to ask all of these, pick two or three that fit the conversation.</p>` : ""}
      ${prevSession && prevSession.memoryVerse ? `
      <div class="divider-label"><span class="line"></span><span class="txt">last ${NOUN}&rsquo;s verse</span><span class="line"></span></div>
      <p class="leader-note" style="text-align:center;">Does anyone remember it? No pressure if not, here&rsquo;s a reminder.</p>
      <div class="memory-block" style="margin-top:10px;">
        <div class="ml">Memory verse</div>
        <div class="mv">${prevSession.memoryVerse.text}</div>
        <div class="mr">${prevSession.memoryVerse.ref} (${STUDY.translation || "NIV"})</div>
      </div>` : ""}`;
  }

  if (step === "lookup"){
    body = `
      <div class="eyebrow" style="display:flex;align-items:center;gap:6px;color:var(--ink-700);">${ICONS.up}Look Up</div>
      <div class="display lower" style="font-size:24px;margin-top:6px;">${titleHtml(s.title)}</div>
      ${s.retellIntro ? `<p class="leader-note" style="margin-top:8px;">${s.retellIntro}</p>` : ""}
      <div class="card" style="margin-top:10px;">
        <ol>
          <li><span class="num dot"></span><span><strong>Pray</strong> together, briefly.</span></li>
        </ol>
      </div>
      <p class="leader-note">${s.lookUpPrayer || ENGINE_DEFAULTS.defaultLookUpPrayer}</p>
      ${s.video ? `
      <div class="card" style="border-style:dashed;">
        <span class="eyebrow">Watch together</span>
        <p style="font-size:14.5px;line-height:1.6;margin-top:8px;">${s.video.desc}</p>
        <a class="pill solid" style="margin-top:14px;height:46px;font-size:14px;" href="${s.video.url}" target="_blank" rel="noopener noreferrer">${s.video.linkText || "watch the film"} &rarr;</a>
      </div>` : `
      ${s.passages ? s.passages.map(p => `
      <div class="card">
        <span class="eyebrow">${p.ref}</span>
        <p style="font-size:14.5px;line-height:1.6;margin-top:8px;">${p.text}</p>
      </div>`).join("") : `
      <div class="refbox">
        <span class="rl">${s.story ? "Read the command" : "Open your own Bible to"}</span>
        ${s.refs.map(r => `<span class="rb">${r}</span>`).join("")}
      </div>`}
      ${s.story ? `
      <div class="refbox" style="margin-top:-4px;">
        <span class="rl">Then read the story</span>
        ${s.story.refs.map(r => `<span class="rb">${r}</span>`).join("")}
      </div>
      ${s.story.note ? `<p class="leader-note">${s.story.note}</p>` : ""}` : ""}
      ${s.noBibleNote ? `<p class="leader-note">${s.noBibleNote}</p>` : ""}
      <div class="card">
        <ol>
          <li><span class="num dot"></span><span><strong>Read</strong> ${s.readNote || STUDY.defaultReadNote || ENGINE_DEFAULTS.defaultReadNote}</span></li>
          <li><span class="num dot"></span><span><strong>Retell</strong> it. Close your Bibles, ask someone to retell it in their own words.</span></li>
          <li><span class="num dot"></span><span><strong>Check</strong> together: did they capture the whole story?</span></li>
        </ol>
      </div>`}
      <div class="divider-label"><span class="line"></span><span class="txt">discover</span><span class="line"></span></div>
      <div class="card">
        <ol>${(s.discoveryQuestions || DISCOVERY_QUESTIONS).map((q,i) => `<li><span class="num">${i+1}</span><span>${q}</span></li>`).join("")}</ol>
      </div>
      ${s.leaderNote ? `<p class="leader-note">Background for you: ${s.leaderNote}</p>` : ""}`;
  }

  if (step === "lookforward"){
    body = `
      <div class="eyebrow" style="display:flex;align-items:center;gap:6px;color:var(--ink-700);">${ICONS.forward}Look Forward</div>
      <div class="display lower" style="font-size:24px;margin-top:6px;">${titleHtml(s.title)}</div>
      <div class="card" style="margin-top:10px;">
        <span class="eyebrow" style="color:var(--ink-500);">From this passage, is there&hellip;</span>
        <ol style="margin-top:6px;">${RESPOND_ITEMS.map((q,i) => `<li><span class="num">${i+1}</span><span>${q}</span></li>`).join("")}</ol>
      </div>
      <div class="divider-label"><span class="line"></span><span class="txt">your response</span><span class="line"></span></div>
      <div class="card">
        <span class="eyebrow" style="color:var(--ink-500);">One idea</span>
        <p style="font-size:14.5px;line-height:1.5;margin-top:8px;">${cap(s.lookForwardIdea)}</p>
      </div>
      ${STUDY.lookForwardTemplate ? `
      <div class="card" style="border-style:dashed;">
        <span class="eyebrow" style="color:var(--ink-500);">Turn it into a goal</span>
        <p style="font-size:14.5px;line-height:1.5;margin-top:8px;">${STUDY.lookForwardTemplate}</p>
      </div>` : ""}
      ${s.promiseVerse ? `
      <div class="memory-block" style="margin-top:4px;">
        <div class="ml">Promise verse</div>
        <div class="mv">${s.promiseVerse.text}</div>
        <div class="mr">${s.promiseVerse.ref} (${STUDY.translation || "NIV"})</div>
      </div>` : ""}
      ${s.trainingAction ? `
      <div class="card">
        <span class="eyebrow" style="color:var(--ink-500);">This ${NOUN}&rsquo;s practice</span>
        <p style="font-size:14.5px;line-height:1.5;margin-top:8px;">${s.trainingAction}</p>
      </div>` : ""}
      <div class="card">
        <span class="eyebrow" style="color:var(--ink-500);">Share it</span>
        <p style="font-size:14.5px;line-height:1.5;margin-top:8px;">Who will you share this passage with this ${NOUN}?</p>
      </div>
      <div class="divider-label"><span class="line"></span><span class="txt">pray for each other</span><span class="line"></span></div>
      <div class="card">
        <p style="font-size:14.5px;line-height:1.55;">${s.prayerNote || ENGINE_DEFAULTS.defaultPrayerNote}</p>
      </div>
      ${currentStep === steps.length - 1 ? `<p class="leader-note" style="text-align:center;">That&rsquo;s this session done.</p>` : ""}`;
  }

  if (step === "reading" && s.betweenSessions){
    const bs = s.betweenSessions;
    const daysHtml = bs.days
      ? bs.days.map((d,i) => `
      <div class="card" style="margin-top:${i === 0 ? 10 : 8}px;border-style:dashed;">
        <span class="eyebrow" style="color:var(--ink-500);">Day ${i+1}</span>
        <p style="font-size:14.5px;line-height:1.55;margin-top:6px;"><strong>${d.ref}.</strong> ${d.desc}</p>
      </div>`).join("")
      : `<div class="card" style="margin-top:10px;border-style:dashed;">
        ${bs.ref ? `<p style="font-size:14.5px;line-height:1.55;"><strong>${bs.ref}.</strong> ${bs.desc}</p>` : `<p style="font-size:14.5px;line-height:1.55;">${bs.desc}</p>`}
      </div>`;
    body = `
      <div class="eyebrow" style="color:var(--ink-700);">Between Now and Next Week</div>
      <div class="display lower" style="font-size:24px;margin-top:6px;">${titleHtml(s.title)}</div>
      <p class="leader-note" style="margin-top:8px;">Optional, private reading, no one will check up on it. It fills in the part of ${STUDY.book ? STUDY.book + "&rsquo;s" : "the"} story we skip over this ${NOUN}, for anyone who&rsquo;d like the fuller picture before the next session.</p>
      ${daysHtml}
      ${bs.note ? `<p style="font-size:13.5px;line-height:1.5;font-style:italic;color:var(--ink-500);margin-top:10px;">${bs.note}</p>` : ""}
      ${s.memoryVerse ? `
      <div class="memory-block" style="margin-top:16px;">
        <div class="ml">Worth memorising this ${NOUN}</div>
        <div class="mv">${s.memoryVerse.text}</div>
        <div class="mr">${s.memoryVerse.ref} (${STUDY.translation || "NIV"})</div>
      </div>
      <p class="leader-note">Try to learn it by heart: read it a few times, say it without looking, then try again tomorrow.</p>` : ""}
      ${currentStep === steps.length - 1 ? `<p class="leader-note" style="text-align:center;">That&rsquo;s this session done.</p>` : ""}`;
  }

  const stepNumForBar = currentStep; // cover=0
  const pct = Math.round((stepNumForBar / (steps.length - 1)) * 100);

  app.innerHTML = `
    ${siteNav(false)}
    <div class="topbar">
      <button type="button" onclick="goJourney()" class="nav-back" aria-label="Back">&larr;</button>
      <div class="tb-title lower">${titleHtml(s.title)}</div>
      <div class="tb-step">${STEP_LABELS[step]}${STEP_TIMES[step] ? ` &middot; ${STEP_TIMES[step]}` : ""}</div>
    </div>
    <div style="padding:0 22px;"><div class="progress-track"><div class="progress-fill" style="width:${pct}%;"></div></div></div>
    <div style="padding:20px 22px 110px;">
      ${body}
    </div>
    <div style="position:fixed;bottom:0;left:50%;transform:translateX(-50%);width:100%;max-width:640px;background:var(--cream);border-top:1px solid var(--ink-200);display:flex;gap:10px;padding:12px 20px calc(12px + env(safe-area-inset-bottom));">
      ${currentStep !== 1 ? `<button class="pill ghost" style="width:auto;flex:0 0 110px;" onclick="currentStep--;render();window.scrollTo(0,0);">Back</button>` : ""}
      <button class="pill solid" style="flex:1;" onclick="${currentStep === steps.length-1 ? 'finishSession()' : '(currentStep++, render(), window.scrollTo(0,0))'}">${currentStep === steps.length - 1 ? 'Finish' : 'Next'}</button>
    </div>
  `;
}

// Returning from a linked page (for example a study's timeline) can ask for a
// particular screen: index.html#journey opens the journey instead of the welcome.
if (location.hash === "#journey") view = "journey";

render();
