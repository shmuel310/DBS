/* =========================================================================
   DBS STUDY ENGINE (Multilingual: en, zh-HK, zh-CN, ja)
   Shared router + renderer. Expects window.STUDY to already be set (by the
   study's own data.js) before this file runs. Universal strings are localized
   by document.documentElement.lang; anything per-study is read from STUDY,
   falling back to ENGINE_DEFAULTS.
   ========================================================================= */

const ICONS = {
  back: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 3-6.7"/><polyline points="3 4 3 9 8 9"/></svg>',
  up: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 7c-1.5-1.2-3.6-2-6-2-1 0-2 .1-3 .4v13.6c1-.3 2-.4 3-.4 2.4 0 4.5.8 6 2 1.5-1.2 3.6-2 6-2 1 0 2 .1 3 .4V5.4C20 5.1 19 5 18 5c-2.4 0-4.5.8-6 2z"/><line x1="12" y1="7" x2="12" y2="21"/></svg>',
  forward: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 1 1-3-6.7"/><polyline points="21 4 21 9 16 9"/></svg>',
  check: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>',
  timeline: '<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><line x1="3" y1="12" x2="21" y2="12"/><circle cx="6.5" cy="12" r="2.4" fill="currentColor" stroke="none"/><circle cx="12" cy="12" r="2.4" fill="currentColor" stroke="none"/><circle cx="17.5" cy="12" r="2.4" fill="currentColor" stroke="none"/></svg>'
};

/* ---------- Language Detection & Dictionary ---------- */
function detectLang() {
  const htmlLang = (document.documentElement.lang || "").toLowerCase();
  if (htmlLang.includes("hk") || htmlLang.includes("hant") || htmlLang.includes("tw")) return "zh-HK";
  if (htmlLang.includes("cn") || htmlLang.includes("hans") || htmlLang.includes("zh")) return "zh-CN";
  if (htmlLang.startsWith("ja")) return "ja";
  return "en";
}

const CURRENT_LANG = detectLang();

const I18N = {
  "en": {
    brand: "discovery bible studies",
    howItWorks: "How it works",
    studies: "Studies",
    bilingual: "Bilingual",
    about: "About",
    defaultNoun: "session",
    beginJourney: "begin the journey &rarr;",
    rhythm: "look back &middot; look up &middot; look forward",
    journey: "the journey",
    sessionsComplete: (done, total, noun) => `${done} of ${total} ${noun}s complete`,
    courseComplete: "Course complete: what&rsquo;s next?",
    sessionsLabel: (noun) => `The ${noun.charAt(0).toUpperCase() + noun.slice(1)}s`,
    bonusSessions: "Bonus Sessions",
    bonusSubtitle: (noun) => `Extra material for groups who want to go further, or for personal reading between ${noun}s.`,
    resetDevice: "Reset progress on this device",
    resetConfirm: (noun) => `Reset progress on this device? This clears every ${noun} marked complete, useful if you're about to start the course again with someone new.`,
    timeline: "The Timeline",
    beforeBegin: "Before You Begin",
    preparesFor: (noun) => `Prepares you for ${noun.charAt(0).toUpperCase() + noun.slice(1)} 1`,
    backToJourney: "back to the journey &rarr;",
    leadSomeone: "Lead someone through it",
    resetStartAgain: "Reset progress and start again",
    pickNext: "Pick your next study",
    browseOther: "browse other studies &rarr;",
    thisSession: (noun) => `This ${noun}`,
    sessionIndex: (idx, noun) => `${noun.charAt(0).toUpperCase() + noun.slice(1)} ${idx}`,
    bonusSession: "Bonus Session",
    thisReading: (noun, isVideo) => `This ${noun}${isVideo ? "" : "&rsquo;s reading"}`,
    memoryVerse: "Memory verse",
    startSession: "start the session &rarr;",
    lastVerse: (noun) => `last ${noun}&rsquo;s verse`,
    lastVersePrompt: "Does anyone remember it? No pressure if not, here&rsquo;s a reminder.",
    betweenReadingCheck: (noun) => `Did you get to any of the reading since last ${noun}? What stood out, if you did?`,
    selectFewNote: "No need to ask all of these, pick two or three that fit the conversation.",
    prayTogether: "<strong>Pray</strong> together, briefly.",
    watchTogether: "Watch together",
    watchFilm: "watch the film",
    openBible: "Open your own Bible to",
    readCommand: "Read the command",
    readStory: "Then read the story",
    stepRead: "<strong>Read</strong> ",
    stepRetell: "<strong>Retell</strong> it. Close your Bibles, ask someone to retell it in their own words.",
    stepCheck: "<strong>Check</strong> together: did they capture the whole story?",
    discover: "discover",
    leaderNotePrefix: "Background for you: ",
    responsePrompt: "From this passage, is there&hellip;",
    yourResponse: "your response",
    oneIdea: "One idea",
    turnIntoGoal: "Turn it into a goal",
    promiseVerse: "Promise verse",
    practice: (noun) => `This ${noun}&rsquo;s practice`,
    shareIt: "Share it",
    shareQuestion: (noun) => `Who will you share this passage with this ${noun}?`,
    prayEachOther: "pray for each other",
    sessionDone: "That&rsquo;s this session done.",
    betweenTitle: "Between Now and Next Week",
    betweenNote: (book, noun) => `Optional, private reading, no one will check up on it. It fills in the part of ${book ? book + "&rsquo;s" : "the"} story we skip over this ${noun}, for anyone who&rsquo;d like the fuller picture before the next session.`,
    day: (num) => `Day ${num}`,
    worthMemorising: (noun) => `Worth memorising this ${noun}`,
    memoriseNote: "Try to learn it by heart: read it a few times, say it without looking, then try again tomorrow.",
    back: "Back",
    next: "Next",
    finish: "Finish",
    stepLookBack: "Look Back",
    stepLookUp: "Look Up",
    stepLookForward: "Look Forward"
  },
  "zh-HK": {
    brand: "發現式查經",
    howItWorks: "運作方式",
    studies: "查經庫",
    bilingual: "雙語模式",
    about: "關於",
    defaultNoun: "個聚會",
    beginJourney: "開始旅程 &rarr;",
    rhythm: "回顧 &middot; 向上看 &middot; 展望",
    journey: "查經旅程",
    sessionsComplete: (done, total, noun) => `已完成 ${done} / ${total} ${noun}`,
    courseComplete: "課程完成：下一步係咩？",
    sessionsLabel: () => "聚會列表",
    bonusSessions: "延伸聚會",
    bonusSubtitle: () => `為希望更進一步嘅小組或聚會之間個人閱讀提供嘅豐富內容。`,
    resetDevice: "重設此裝置上嘅進度",
    resetConfirm: () => `要重設此裝置上嘅進度嗎？呢個動作會清除所有已標記完成嘅紀錄。如果你準備同新嘅朋友重新開始課程，呢個功能會好有用。`,
    timeline: "時間軸",
    beforeBegin: "開始之前",
    preparesFor: () => `為第 1 個聚會做好準備`,
    backToJourney: "返回旅程 &rarr;",
    leadSomeone: "帶領其他人一齊讀",
    resetStartAgain: "重設進度並重新開始",
    pickNext: "揀選你嘅下一個查經課程",
    browseOther: "瀏覽其他查經課程 &rarr;",
    thisSession: () => `今次聚會`,
    sessionIndex: (idx) => `第 ${idx} 課`,
    bonusSession: "延伸聚會",
    thisReading: (_, isVideo) => `今次聚會${isVideo ? "" : "經文"}`,
    memoryVerse: "背誦金句",
    startSession: "開始聚會 &rarr;",
    lastVerse: () => `上次聚會嘅金句`,
    lastVersePrompt: "有冇人記得？唔記得都完全冇問題，呢度俾大家重溫一下。",
    betweenReadingCheck: () => `自上次聚會以來，有冇讀過任何自選經文？如果有，有咩特別令你印象深刻？`,
    selectFewNote: "唔需要全部問晒，揀兩至三條適合當下交流嘅問題即可。",
    prayTogether: "一齊做個簡短嘅<strong>禱告</strong>。",
    watchTogether: "一齊觀看影片",
    watchFilm: "觀看影片",
    openBible: "請打開自己嘅聖經閱讀：",
    readCommand: "閱讀這條命令：",
    readStory: "然後閱讀相關故事：",
    stepRead: "<strong>朗讀</strong> ",
    stepRetell: "<strong>重述</strong>：合上聖經，請一位組員用自己嘅說話重述出嚟。",
    stepCheck: "<strong>核對</strong>：大家一齊核對，有冇遺漏咗故事嘅任何重要細節？",
    discover: "發現探索",
    leaderNotePrefix: "帶領者背景參考：",
    responsePrompt: "從呢段經文中，有冇&hellip;",
    yourResponse: "你嘅回應",
    oneIdea: "一個實踐想法",
    turnIntoGoal: "將佢化為一個具體目標",
    promiseVerse: "應許金句",
    practice: () => `今次聚會嘅實踐操練`,
    shareIt: "與人分享",
    shareQuestion: () => `今次聚會後，你會同邊個分享呢段經文？`,
    prayEachOther: "彼此代禱",
    sessionDone: "今次聚會到此結束。",
    betweenTitle: "在下次聚會之前",
    betweenNote: (book) => `自選嘅個人閱讀，冇人會檢查。呢部分補充咗我哋今次略過嘅${book ? book : ""}故事背景，供希望喺下次聚會前更全面掌握情節嘅人閱讀。`,
    day: (num) => `第 ${num} 日`,
    worthMemorising: () => `今個星期值得背誦嘅金句`,
    memoriseNote: "試下背熟佢：讀幾次，合埋眼試下背出嚟，聽日再試一次。",
    back: "返回",
    next: "下一步",
    finish: "完成",
    stepLookBack: "回顧",
    stepLookUp: "向上看",
    stepLookForward: "展望"
  },
  "zh-CN": {
    brand: "发现式查经",
    howItWorks: "运作方式",
    studies: "查经库",
    bilingual: "双语模式",
    about: "关于",
    defaultNoun: "次聚会",
    beginJourney: "开启旅程 &rarr;",
    rhythm: "回顾 &middot; 向上看 &middot; 向前看",
    journey: "查经旅程",
    sessionsComplete: (done, total, noun) => `已完成 ${done} / ${total} ${noun}`,
    courseComplete: "课程完成：接下来是什么？",
    sessionsLabel: () => "聚会列表",
    bonusSessions: "拓展聚会",
    bonusSubtitle: () => `为希望进一步深入的小组或聚会之间的个人阅读提供的丰富内容。`,
    resetDevice: "重置此设备上的进度",
    resetConfirm: () => `确定要重置此设备上的进度吗？这会清除所有已标记完成的记录。如果你准备与新朋友重新开始本课程，这会很有帮助。`,
    timeline: "时间轴",
    beforeBegin: "开始之前",
    preparesFor: () => `为第 1 次聚会做好准备`,
    backToJourney: "返回旅程 &rarr;",
    leadSomeone: "带领其他人一起读",
    resetStartAgain: "重置进度并重新开始",
    pickNext: "选择你的下一个查经课程",
    browseOther: "浏览其他查经课程 &rarr;",
    thisSession: () => `本次聚会`,
    sessionIndex: (idx) => `第 ${idx} 课`,
    bonusSession: "拓展聚会",
    thisReading: (_, isVideo) => `本次聚会${isVideo ? "" : "经文"}`,
    memoryVerse: "背诵金句",
    startSession: "开始聚会 &rarr;",
    lastVerse: () => `上次聚会的金句`,
    lastVersePrompt: "有人记得吗？不记得也没关系，这里给大家提个醒。",
    betweenReadingCheck: () => `自上次聚会以来，有没有读过推荐的经文？如果有，有什么让你印象深刻？`,
    selectFewNote: "不需要全部都问，挑选两三个适合当前交流的问题即可。",
    prayTogether: "一起做一个简短的<strong>祷告</strong>。",
    watchTogether: "一起观看影片",
    watchFilm: "观看影片",
    openBible: "请打开自己的圣经阅读：",
    readCommand: "阅读这条命令：",
    readStory: "然后阅读相关故事：",
    stepRead: "<strong>朗读</strong> ",
    stepRetell: "<strong>复述</strong>：合上圣经，请一位组员用自己的话复述出来。",
    stepCheck: "<strong>核对</strong>：大家一起核对，有没有遗漏故事的任何重要细节？",
    discover: "发现探索",
    leaderNotePrefix: "带领者背景参考：",
    responsePrompt: "从这段经文中，有没有&hellip;",
    yourResponse: "你的回应",
    oneIdea: "一个实践想法",
    turnIntoGoal: "将其化为一个具体目标",
    promiseVerse: "应许金句",
    practice: () => `本次聚会的实践操练`,
    shareIt: "与人分享",
    shareQuestion: () => `本次聚会后，你会和谁分享这段经文？`,
    prayEachOther: "彼此代祷",
    sessionDone: "本次聚会到此结束。",
    betweenTitle: "在下次聚会之前",
    betweenNote: (book) => `自选的个人阅读，没有人会检查。这部分补充了我们这次略过的${book ? book : ""}故事背景，供希望在下次聚会前更全面掌握情节的人阅读。`,
    day: (num) => `第 ${num} 天`,
    worthMemorising: () => `本周值得背诵的金句`,
    memoriseNote: "尝试背熟它：多读几次，试着不看背诵出来，明天再复习一次。",
    back: "返回",
    next: "下一步",
    finish: "完成",
    stepLookBack: "回顾",
    stepLookUp: "向上看",
    stepLookForward: "向前看"
  },
  "ja": {
    brand: "ディスカバリー・バイブル・スタディ",
    howItWorks: "DBSとは",
    studies: "スタディ一覧",
    bilingual: "バイリンガル",
    about: "このサイトについて",
    defaultNoun: "回",
    beginJourney: "ジャーニーを始める &rarr;",
    rhythm: "振り返る &middot; 見上げる &middot; 前を向く",
    journey: "全体の流れ",
    sessionsComplete: (done, total) => `${total} 回中 ${done} 回完了`,
    courseComplete: "コース完了：次はどうする？",
    sessionsLabel: () => "セッション一覧",
    bonusSessions: "ボーナス・セッション",
    bonusSubtitle: () => `さらに深く学びたいグループや、セッションの合間の個人読書のための追加テキスト。`,
    resetDevice: "この端末の進捗をリセット",
    resetConfirm: () => `この端末の進捗をリセットしますか？完了済みのすべてのマークが消去されます。新しい人と一緒にこのコースを始め直す場合に便利です。`,
    timeline: "タイムライン",
    beforeBegin: "始める前に",
    preparesFor: () => `第1回の準備`,
    backToJourney: "ジャーニーに戻る &rarr;",
    leadSomeone: "誰かを導いてみる",
    resetStartAgain: "進捗をリセットして再スタート",
    pickNext: "次のスタディを選ぶ",
    browseOther: "他のスタディを見る &rarr;",
    thisSession: () => `今回のセッション`,
    sessionIndex: (idx) => `第 ${idx} 回`,
    bonusSession: "ボーナス・セッション",
    thisReading: (_, isVideo) => `今回のセッション${isVideo ? "" : "の聖書箇所"}`,
    memoryVerse: "暗誦聖句",
    startSession: "セッションを始める &rarr;",
    lastVerse: () => `前回の暗誦聖句`,
    lastVersePrompt: "覚えている人はいますか？忘れていても大丈夫です。こちらで確認しましょう。",
    betweenReadingCheck: () => `前回から今日までに、通読箇所を読むことができましたか？印象に残ったところはありましたか？`,
    selectFewNote: "すべてを尋ねる必要はありません。会話の流れに合ったものを2〜3つ選んでください。",
    prayTogether: "短く共に<strong>祈りましょう</strong>。",
    watchTogether: "一緒に映像を見る",
    watchFilm: "映像を見る",
    openBible: "各自の聖書を開いてください：",
    readCommand: "命令の箇所を読む：",
    readStory: "続いて物語の箇所を読む：",
    stepRead: "<strong>読む</strong> ",
    stepRetell: "<strong>自分の言葉で語る</strong>：聖書を閉じ、誰かに自分の言葉でストーリーを話してもらいます。",
    stepCheck: "<strong>確認する</strong>：物語の全体が伝わっていたか、みんなで確認します。",
    discover: "発見する",
    leaderNotePrefix: "リーダー用背景メモ：",
    responsePrompt: "この箇所から、次のようなものがありますか&hellip;",
    yourResponse: "あなたの応答",
    oneIdea: "1つのヒント",
    turnIntoGoal: "具体的な目標にする",
    promiseVerse: "約束のみことば",
    practice: () => `今回の実践エクササイズ`,
    shareIt: "分かち合う",
    shareQuestion: () => `今週、この聖書箇所を誰と分かち合いますか？`,
    prayEachOther: "互いのために祈る",
    sessionDone: "今回のセッションはこれで終了です。",
    betweenTitle: "次回までの個人読書",
    betweenNote: (book) => `任意で読む個人通読です。チェックされることはありません。より広い全体像を知りたい人のために、今回飛ばした${book ? book + "の" : ""}ストーリーを補うものです。`,
    day: (num) => `${num}日目`,
    worthMemorising: () => `今週心に留めたい暗誦聖句`,
    memoriseNote: "暗記してみましょう。数回声に出して読み、見ないで言ってみて、また明日試してみましょう。",
    back: "戻る",
    next: "次へ",
    finish: "完了",
    stepLookBack: "振り返る",
    stepLookUp: "見上げる",
    stepLookForward: "前を向く"
  }
};

const t = I18N[CURRENT_LANG] || I18N["en"];

/* ---------- Resolved, per-study content ---------- */
const NOUN = STUDY.sessionNoun || t.defaultNoun;
function capNoun(){ return typeof NOUN === "string" && NOUN.length > 0 ? NOUN.charAt(0).toUpperCase() + NOUN.slice(1) : NOUN; }

const WELCOME_COPY = Object.assign({}, ENGINE_DEFAULTS.welcomeCopy, STUDY.welcomeCopy || {});
const METHOD_COPY = Object.assign({}, ENGINE_DEFAULTS.methodCopy, STUDY.methodCopy || {});
const FINISH_COPY = Object.assign({}, ENGINE_DEFAULTS.finishCopy, STUDY.finishCopy || {});
const DISCOVERY_QUESTIONS = METHOD_COPY.discoveryQuestions || ENGINE_DEFAULTS.discoveryQuestions;
const LOOKBACK_DEFAULTS = METHOD_COPY.lookBackDefaults || ENGINE_DEFAULTS.lookBackQuestions;
const RESPOND_ITEMS = METHOD_COPY.respondItems || ENGINE_DEFAULTS.respondItems;
const STEP_TIMES = Object.assign({
  lookback: "10&ndash;15 min", lookup: "30&ndash;40 min", lookforward: "15&ndash;20 min"
}, STUDY.stepTimes || {});

const STEP_LABELS = {
  cover: t.thisSession(capNoun()),
  lookback: t.stepLookBack,
  lookup: t.stepLookUp,
  lookforward: t.stepLookForward,
  reading: t.betweenTitle
};

/* =========================================================================
   STATE & PROGRESS (stored on this device only, namespaced per study & lang)
   ========================================================================= */

let view = "welcome"; // welcome | method | journey | session | finish
let currentSession = null;
let currentStep = 0; // 0 = cover, 1..N = rhythm steps

const PROGRESS_KEY = `dbs.${STUDY.id}.${CURRENT_LANG}.progress.v1`;

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
  if (confirm(t.resetConfirm(NOUN))){
    localStorage.removeItem(PROGRESS_KEY);
    render();
  }
}

function beginJourney(){ goJourney(); }

function cap(str){ return str ? str.charAt(0).toUpperCase() + str.slice(1) : str; }

// Protected words in Latin text
const PROTECTED_WORDS = ["I","God","Jesus","Christ","Lord","Abraham","Isaac","Jacob","Moses","David",
  "Daniel","Isaiah","Israel","Moab","Bethlehem","Naomi","Ruth","Boaz","Obed","Levi","Nicodemus",
  "Lazarus","Mark","John","Paul","Peter","James","Timothy","Titus","Silas","Epaphroditus","Philippi",
  "Galilee","Jerusalem","Hannah"];
const PROTECTED_WORDS_RE = new RegExp("\\b(" + PROTECTED_WORDS.join("|") + ")\\b", "g");
function titleHtml(title){
  if (CURRENT_LANG !== "en") return title;
  return title.replace(PROTECTED_WORDS_RE, '<span style="text-transform:none;">$1</span>');
}

function markSvg(size, color){
  return `<svg width="${size}" height="${size}" viewBox="0 0 100 100" style="display:block;color:${color};">
    <circle cx="50" cy="50" r="46" fill="none" stroke="currentColor" stroke-width="2.5"/>
    <path d="M30 68 Q40 40 50 50 Q60 60 70 32" fill="none" stroke="currentColor" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="30" cy="68" r="5" fill="currentColor"/>
    <circle cx="50" cy="50" r="5" fill="currentColor"/>
    <circle cx="70" cy="32" r="5" fill="currentColor"/>
  </svg>`;
}

function getLangSwitcher(onDark){
  const langs = [
    { code: "en", label: "English" },
    { code: "zh-HK", label: "繁體中文" },
    { code: "zh-CN", label: "简体中文" },
    { code: "ja", label: "日本語" }
  ];

  const isEn = CURRENT_LANG === "en";
  const globalRoot = isEn ? "../../" : "../../../";

  const options = langs.map(l => {
    let url = "";
    const langFolder = l.code.toLowerCase();
    if (l.code === "en") {
      url = globalRoot + "studies/" + STUDY.id + "/index.html";
    } else {
      url = globalRoot + langFolder + "/studies/" + STUDY.id + "/index.html";
    }
    const sel = l.code === CURRENT_LANG ? " selected" : "";
    return `<option value="${url}"${sel}>${l.label}</option>`;
  }).join("");

  return `
    <div class="lang-switcher${onDark ? ' on-dark' : ''}">
      <span>🌐</span>
      <select onchange="if(this.value) location.href=this.value;" aria-label="Language selector">
        ${options}
      </select>
    </div>
  `;
}

function siteNav(onDark){
  const isEn = CURRENT_LANG === "en";
  const globalRoot = isEn ? "../../" : "../../../";
  const currentLangCode = CURRENT_LANG.toLowerCase();
  const homeUrl = isEn ? "../../index.html" : globalRoot + currentLangCode + "/index.html";
  const howUrl = isEn ? "../../how-it-works.html" : globalRoot + currentLangCode + "/how-it-works.html";
  const studiesUrl = isEn ? "../../studies.html" : globalRoot + currentLangCode + "/studies.html";
  const aboutUrl = isEn ? "../../about.html" : globalRoot + currentLangCode + "/about.html";
  const biUrl = globalRoot + "bilingual.html?study=" + STUDY.id + (currentSession ? "&session=" + currentSession.data.id : "") + "&lang1=" + currentLangCode + "&lang2=" + (currentLangCode === "en" ? "zh-hk" : "en");

  return `<div class="wrap"><nav class="top${onDark ? ' on-dark' : ''}">
    <a class="brand" href="${homeUrl}" aria-label="Home">
      ${markSvg(38, onDark ? "var(--cream)" : "var(--ink-900)")}
      <span class="brand-name lower">${t.brand}</span>
    </a>
    <div class="nav-links">
      <a href="${howUrl}">${t.howItWorks}</a>
      <a href="${studiesUrl}">${t.studies}</a>
      <a href="${biUrl}">${t.bilingual || "Bilingual"}</a>
      <a href="${aboutUrl}">${t.about}</a>
      ${getLangSwitcher(onDark)}
    </div>
  </nav></div>`;
}

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
        <div class="display on-dark lower" style="font-size:64px;">${WELCOME_COPY.titleHtml || (CURRENT_LANG === 'en' ? STUDY.title.toLowerCase() : STUDY.title)}</div>
        <p class="lead on-dark" style="margin-top:24px;max-width:320px;">${WELCOME_COPY.lead}</p>
        <div class="stat-row">
          <div><div class="stat-num">${STUDY.sessions.length}</div><div class="stat-label">${NOUN}</div></div>
          <div class="stat-div"></div>
          ${(STUDY.bonusSessions || []).length ? `
          <div><div class="stat-num">${STUDY.bonusSessions.length}</div><div class="stat-label">${CURRENT_LANG === 'en' ? 'bonus' : '延伸'}</div></div>
          <div class="stat-div"></div>` : ""}
          <div><div class="stat-num">3</div><div class="stat-label">${CURRENT_LANG === 'en' ? 'steps' : '步驟'}</div></div>
        </div>
        <div style="margin-top:34px;">
          <button class="pill solid on-dark" onclick="beginJourney()">${t.beginJourney}</button>
        </div>
        <div style="text-align:center;font-size:11.5px;color:rgba(236,234,221,.5);margin-top:16px;letter-spacing:.04em;">${t.rhythm}</div>
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
        <div class="journey-meta">${isCurrent ? t.thisSession(capNoun()) : t.sessionIndex(s.id, capNoun())} &middot; ${refDisplay(s)}</div>
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
      <div class="eyebrow">${CURRENT_LANG === 'en' ? STUDY.title.toLowerCase() : STUDY.title}</div>
      <div class="display lower" style="font-size:36px;margin-top:8px;">${t.journey}</div>
      <p class="lead" style="margin-top:8px;font-size:12.5px;">${t.sessionsComplete(completedCore, STUDY.sessions.length, NOUN)}</p>
      <div class="progress-track" style="margin-top:10px;"><div class="progress-fill" style="width:${pct}%;"></div></div>

      ${completedCore === STUDY.sessions.length ? `
      <button type="button" style="display:flex;align-items:center;justify-content:space-between;width:100%;margin:16px 0 0;padding:14px 16px;border-radius:14px;border:none;background:var(--black);font:inherit;text-align:left;cursor:pointer;" onclick="view='finish';render();window.scrollTo(0,0);">
        <span style="font-family:var(--font-body);font-weight:600;font-size:13.5px;color:var(--cream);">${t.courseComplete}</span>
        <span style="color:var(--cream);font-size:16px;">&rarr;</span>
      </button>` : ""}

      <div class="section-label" style="margin-top:24px;">${STUDY.sessionsLabel || t.sessionsLabel(capNoun())}</div>
      <div>
        ${STUDY.timeline ? `
        <a class="journey-row" href="${STUDY.timeline.href}" style="text-decoration:none;">
          <div class="journey-num">${ICONS.timeline}</div>
          <div style="flex:1;">
            <div class="journey-title lower">${STUDY.timeline.title || t.timeline}</div>
            <div class="journey-meta">${STUDY.timeline.meta || ""}</div>
          </div>
          <div class="journey-chevron">&rsaquo;</div>
        </a>` : ""}
        ${STUDY.preReading ? `
        <button type="button" class="journey-row" onclick="view='prereading';render();window.scrollTo(0,0);">
          <div class="journey-num">0</div>
          <div style="flex:1;">
            <div class="journey-title lower">${STUDY.preReading.title || t.beforeBegin}</div>
            <div class="journey-meta">${t.preparesFor(capNoun())}</div>
          </div>
          <div class="journey-chevron">&rsaquo;</div>
        </button>` : ""}
        ${coreRows}
      </div>

      ${bonusSessions.length ? `
      <div class="section-label">${t.bonusSessions}</div>
      <p class="lead" style="font-size:12.5px;margin-bottom:8px;">${t.bonusSubtitle(NOUN)}</p>
      <div>${bonusRows}</div>` : ""}

      <div style="text-align:center;margin-top:22px;">
        <button type="button" style="background:none;border:none;padding:0;font-family:var(--font-body);font-size:12px;color:var(--ink-500);text-decoration:underline;cursor:pointer;" onclick="resetProgress()">${t.resetDevice}</button>
      </div>

      <div class="footer-note">${STUDY.footerAttribution ? STUDY.footerAttribution + "<br><br>" : ""}${STUDY.copyrightNote || (CURRENT_LANG.startsWith("zh") ? "經文引用自聖經《和合本》修訂版 / 新標點和合本。" : CURRENT_LANG === "ja" ? "聖書引用は新改訳または新共同訳聖書に準拠しています。" : "Scripture quotations marked (NIV) taken from the Holy Bible, New International Version&reg;, NIV&reg; Copyright &copy; 1973, 1978, 1984, 2011 by Biblica, Inc.&reg; Used by permission.")}</div>
    </div>
  `;
}

function renderPreReading(){
  const pr = STUDY.preReading;
  document.getElementById("app").innerHTML = `
    ${siteNav(false)}
    <div class="topbar">
      <button type="button" onclick="goJourney()" class="nav-back" aria-label="Back">&larr;</button>
      <div class="tb-title lower">${pr.title || t.beforeBegin}</div>
    </div>
    <div style="padding:20px 22px 40px;">
      <div class="eyebrow" style="color:var(--ink-700);">${pr.title || t.beforeBegin}</div>
      <div class="display lower" style="font-size:24px;margin-top:6px;">${CURRENT_LANG === 'en' ? STUDY.title.toLowerCase() : STUDY.title}</div>
      ${(Array.isArray(pr.intro) ? pr.intro : [pr.intro || ""]).map((para,i) => `<p class="leader-note" style="margin-top:${i === 0 ? 8 : 10}px;">${para}</p>`).join("")}
      ${pr.days.map((d,i) => `
      <div class="card" style="margin-top:${i === 0 ? 10 : 8}px;border-style:dashed;">
        <span class="eyebrow" style="color:var(--ink-500);">${t.day(i+1)}</span>
        <p style="font-size:14.5px;line-height:1.55;margin-top:6px;"><strong>${d.ref}.</strong> ${d.desc}</p>
      </div>`).join("")}
      <button class="pill solid" style="margin-top:20px;" onclick="goJourney()">${t.backToJourney}</button>
    </div>
  `;
}

function renderFinish(){
  document.getElementById("app").innerHTML = `
    <div style="display:flex;flex-direction:column;min-height:100vh;min-height:100dvh;">
      <div style="background:var(--black);color:var(--cream);padding-bottom:32px;">
        ${siteNav(true)}
        <div style="padding:0 26px;">
        <div class="eyebrow on-dark">${CURRENT_LANG === 'en' ? 'Course Complete' : '課程完成'}</div>
        <div class="display on-dark lower" style="font-size:42px;margin-top:18px;">${FINISH_COPY.heading}</div>
        <p class="lead on-dark" style="margin-top:16px;">${FINISH_COPY.body}</p>
        </div>
      </div>
      <div style="background:var(--cream);padding:28px 26px 34px;flex:1;">
        <div class="card">
          <span class="eyebrow" style="color:var(--ink-500);">${t.leadSomeone}</span>
          <p style="font-size:14.5px;line-height:1.55;margin-top:8px;">${FINISH_COPY.leadSomeoneElse}</p>
          <button class="pill ghost" style="margin-top:14px;height:46px;font-size:14px;" onclick="resetProgress()">${t.resetStartAgain}</button>
        </div>
        <div class="card">
          <span class="eyebrow" style="color:var(--ink-500);">${t.pickNext}</span>
          <p style="font-size:14.5px;line-height:1.55;margin-top:8px;">${FINISH_COPY.nextStudy}</p>
          <a class="pill ghost" style="margin-top:14px;height:46px;font-size:14px;" href="../../studies.html">${t.browseOther}</a>
        </div>
        <button class="pill solid" style="margin-top:8px;" onclick="goJourney()">${t.backToJourney}</button>
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
  const isEn = CURRENT_LANG === "en";
  const globalRoot = isEn ? "../../" : "../../../";
  const currentLangCode = CURRENT_LANG.toLowerCase();
  const biUrl = globalRoot + "bilingual.html?study=" + STUDY.id + (currentSession ? "&session=" + currentSession.data.id : "") + "&lang1=" + currentLangCode + "&lang2=" + (currentLangCode === "en" ? "zh-hk" : "en");

  if (step === "cover"){
    const kicker = currentSession.isBonus ? t.bonusSession : `${t.sessionIndex(s.id, capNoun())} &middot; ${t.thisSession(capNoun())}`;
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
            <span class="eyebrow">${t.thisReading(NOUN, !!s.video)}</span>
            <div class="display" style="font-size:22px;margin-top:4px;">${refDisplay(s)}</div>
          </div>
          ${s.memoryVerse ? `
          <div class="memory-block" style="margin-top:4px;">
            <div class="ml">${t.memoryVerse}</div>
            <div class="mv">${s.memoryVerse.text}</div>
            <div class="mr">${s.memoryVerse.ref} (${STUDY.translation || (CURRENT_LANG.startsWith('zh') ? '和合本' : CURRENT_LANG === 'ja' ? '新改訳' : 'NIV')})</div>
          </div>` : ""}
          <div style="margin-top:16px;text-align:center;">
            <a href="${biUrl}" style="display:inline-flex;align-items:center;gap:6px;font-size:13px;font-weight:600;color:var(--ink-500);text-decoration:none;padding:6px 14px;border:1px solid var(--ink-200);border-radius:999px;background:var(--white);">
              <span>🌐</span> <span>${t.bilingual || "Bilingual Mode"} &rarr;</span>
            </a>
          </div>
        </div>
      </div>
      <div style="position:fixed;bottom:0;left:50%;transform:translateX(-50%);width:100%;max-width:640px;background:var(--cream);border-top:1px solid var(--ink-200);padding:12px 26px calc(12px + env(safe-area-inset-bottom));">
        <button class="pill solid" onclick="currentStep=1;render();window.scrollTo(0,0);">${t.startSession}</button>
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
      lbQuestions.push(t.betweenReadingCheck(NOUN));
    }
    body = `
      <div class="eyebrow" style="display:flex;align-items:center;gap:6px;color:var(--ink-700);">${ICONS.back}${t.stepLookBack}</div>
      <div class="display lower" style="font-size:24px;margin-top:6px;">${titleHtml(s.title)}</div>
      ${lb && lb.note ? `<p class="leader-note" style="margin-top:8px;">${lb.note}</p>` : `<div style="height:8px;"></div>`}
      <div class="card" style="margin-top:10px;">
        <ol>${lbQuestions.map((q,i) => `<li><span class="num">${i+1}</span><span>${q}</span></li>`).join("")}</ol>
      </div>
      ${!lb ? `<p class="leader-note" style="margin-top:8px;">${t.selectFewNote}</p>` : ""}
      ${prevSession && prevSession.memoryVerse ? `
      <div class="divider-label"><span class="line"></span><span class="txt">${t.lastVerse(NOUN)}</span><span class="line"></span></div>
      <p class="leader-note" style="text-align:center;">${t.lastVersePrompt}</p>
      <div class="memory-block" style="margin-top:10px;">
        <div class="ml">${t.memoryVerse}</div>
        <div class="mv">${prevSession.memoryVerse.text}</div>
        <div class="mr">${prevSession.memoryVerse.ref} (${STUDY.translation || (CURRENT_LANG.startsWith('zh') ? '和合本' : CURRENT_LANG === 'ja' ? '新改訳' : 'NIV')})</div>
      </div>` : ""}`;
  }

  if (step === "lookup"){
    body = `
      <div class="eyebrow" style="display:flex;align-items:center;gap:6px;color:var(--ink-700);">${ICONS.up}${t.stepLookUp}</div>
      <div class="display lower" style="font-size:24px;margin-top:6px;">${titleHtml(s.title)}</div>
      ${s.retellIntro ? `<p class="leader-note" style="margin-top:8px;">${s.retellIntro}</p>` : ""}
      <div class="card" style="margin-top:10px;">
        <ol>
          <li><span class="num dot"></span><span>${t.prayTogether}</span></li>
        </ol>
      </div>
      <p class="leader-note">${s.lookUpPrayer || ENGINE_DEFAULTS.defaultLookUpPrayer}</p>
      ${s.video ? `
      <div class="card" style="border-style:dashed;">
        <span class="eyebrow">${t.watchTogether}</span>
        <p style="font-size:14.5px;line-height:1.6;margin-top:8px;">${s.video.desc}</p>
        <a class="pill solid" style="margin-top:14px;height:46px;font-size:14px;" href="${s.video.url}" target="_blank" rel="noopener noreferrer">${s.video.linkText || t.watchFilm} &rarr;</a>
      </div>` : `
      ${s.passages ? s.passages.map(p => `
      <div class="card">
        <span class="eyebrow">${p.ref}</span>
        <p style="font-size:14.5px;line-height:1.6;margin-top:8px;">${p.text}</p>
      </div>`).join("") : `
      <div class="refbox">
        <span class="rl">${s.story ? t.readCommand : t.openBible}</span>
        ${s.refs.map(r => `<span class="rb">${r}</span>`).join("")}
      </div>`}
      ${s.story ? `
      <div class="refbox" style="margin-top:-4px;">
        <span class="rl">${t.readStory}</span>
        ${s.story.refs.map(r => `<span class="rb">${r}</span>`).join("")}
      </div>
      ${s.story.note ? `<p class="leader-note">${s.story.note}</p>` : ""}` : ""}
      ${s.noBibleNote ? `<p class="leader-note">${s.noBibleNote}</p>` : ""}
      <div class="card">
        <ol>
          <li><span class="num dot"></span><span>${t.stepRead}${s.readNote || STUDY.defaultReadNote || ENGINE_DEFAULTS.defaultReadNote}</span></li>
          <li><span class="num dot"></span><span>${t.stepRetell}</span></li>
          <li><span class="num dot"></span><span>${t.stepCheck}</span></li>
        </ol>
      </div>`}
      <div class="divider-label"><span class="line"></span><span class="txt">${t.discover}</span><span class="line"></span></div>
      <div class="card">
        <ol>${(s.discoveryQuestions || DISCOVERY_QUESTIONS).map((q,i) => `<li><span class="num">${i+1}</span><span>${q}</span></li>`).join("")}</ol>
      </div>
      ${s.leaderNote ? `<p class="leader-note">${t.leaderNotePrefix}${s.leaderNote}</p>` : ""}`;
  }

  if (step === "lookforward"){
    body = `
      <div class="eyebrow" style="display:flex;align-items:center;gap:6px;color:var(--ink-700);">${ICONS.forward}${t.stepLookForward}</div>
      <div class="display lower" style="font-size:24px;margin-top:6px;">${titleHtml(s.title)}</div>
      <div class="card" style="margin-top:10px;">
        <span class="eyebrow" style="color:var(--ink-500);">${t.responsePrompt}</span>
        <ol style="margin-top:6px;">${RESPOND_ITEMS.map((q,i) => `<li><span class="num">${i+1}</span><span>${q}</span></li>`).join("")}</ol>
      </div>
      <div class="divider-label"><span class="line"></span><span class="txt">${t.yourResponse}</span><span class="line"></span></div>
      <div class="card">
        <span class="eyebrow" style="color:var(--ink-500);">${t.oneIdea}</span>
        <p style="font-size:14.5px;line-height:1.5;margin-top:8px;">${cap(s.lookForwardIdea)}</p>
      </div>
      ${STUDY.lookForwardTemplate ? `
      <div class="card" style="border-style:dashed;">
        <span class="eyebrow" style="color:var(--ink-500);">${t.turnIntoGoal}</span>
        <p style="font-size:14.5px;line-height:1.5;margin-top:8px;">${STUDY.lookForwardTemplate}</p>
      </div>` : ""}
      ${s.promiseVerse ? `
      <div class="memory-block" style="margin-top:4px;">
        <div class="ml">${t.promiseVerse}</div>
        <div class="mv">${s.promiseVerse.text}</div>
        <div class="mr">${s.promiseVerse.ref} (${STUDY.translation || (CURRENT_LANG.startsWith('zh') ? '和合本' : CURRENT_LANG === 'ja' ? '新改訳' : 'NIV')})</div>
      </div>` : ""}
      ${s.trainingAction ? `
      <div class="card">
        <span class="eyebrow" style="color:var(--ink-500);">${t.practice(NOUN)}</span>
        <p style="font-size:14.5px;line-height:1.5;margin-top:8px;">${s.trainingAction}</p>
      </div>` : ""}
      <div class="card">
        <span class="eyebrow" style="color:var(--ink-500);">${t.shareIt}</span>
        <p style="font-size:14.5px;line-height:1.5;margin-top:8px;">${t.shareQuestion(NOUN)}</p>
      </div>
      <div class="divider-label"><span class="line"></span><span class="txt">${t.prayEachOther}</span><span class="line"></span></div>
      <div class="card">
        <p style="font-size:14.5px;line-height:1.55;">${s.prayerNote || ENGINE_DEFAULTS.defaultPrayerNote}</p>
      </div>
      ${currentStep === steps.length - 1 ? `<p class="leader-note" style="text-align:center;">${t.sessionDone}</p>` : ""}`;
  }

  if (step === "reading" && s.betweenSessions){
    const bs = s.betweenSessions;
    const daysHtml = bs.days
      ? bs.days.map((d,i) => `
      <div class="card" style="margin-top:${i === 0 ? 10 : 8}px;border-style:dashed;">
        <span class="eyebrow" style="color:var(--ink-500);">${t.day(i+1)}</span>
        <p style="font-size:14.5px;line-height:1.55;margin-top:6px;"><strong>${d.ref}.</strong> ${d.desc}</p>
      </div>`).join("")
      : `<div class="card" style="margin-top:10px;border-style:dashed;">
        ${bs.ref ? `<p style="font-size:14.5px;line-height:1.55;"><strong>${bs.ref}.</strong> ${bs.desc}</p>` : `<p style="font-size:14.5px;line-height:1.55;">${bs.desc}</p>`}
      </div>`;
    body = `
      <div class="eyebrow" style="color:var(--ink-700);">${t.betweenTitle}</div>
      <div class="display lower" style="font-size:24px;margin-top:6px;">${titleHtml(s.title)}</div>
      <p class="leader-note" style="margin-top:8px;">${t.betweenNote(STUDY.book, NOUN)}</p>
      ${daysHtml}
      ${bs.note ? `<p style="font-size:13.5px;line-height:1.5;font-style:italic;color:var(--ink-500);margin-top:10px;">${bs.note}</p>` : ""}
      ${s.memoryVerse ? `
      <div class="memory-block" style="margin-top:16px;">
        <div class="ml">${t.worthMemorising(NOUN)}</div>
        <div class="mv">${s.memoryVerse.text}</div>
        <div class="mr">${s.memoryVerse.ref} (${STUDY.translation || (CURRENT_LANG.startsWith('zh') ? '和合本' : CURRENT_LANG === 'ja' ? '新改訳' : 'NIV')})</div>
      </div>
      <p class="leader-note">${t.memoriseNote}</p>` : ""}
      ${currentStep === steps.length - 1 ? `<p class="leader-note" style="text-align:center;">${t.sessionDone}</p>` : ""}`;
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
      ${currentStep !== 1 ? `<button class="pill ghost" style="width:auto;flex:0 0 110px;" onclick="currentStep--;render();window.scrollTo(0,0);">${t.back}</button>` : ""}
      <button class="pill solid" style="flex:1;" onclick="${currentStep === steps.length-1 ? 'finishSession()' : '(currentStep++, render(), window.scrollTo(0,0))'}">${currentStep === steps.length - 1 ? t.finish : t.next}</button>
    </div>
  `;
}

if (location.hash === "#journey") view = "journey";

render();
