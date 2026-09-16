/**
 * Build script: generates _engine/bilingual-data.js
 * Consolidates all 15 studies across 4 languages (en, zh-hk, zh-cn, ja),
 * along with engine defaults, UI translations, and catalog metadata.
 */

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT_DIR = path.resolve(__dirname, '..');

const STUDY_IDS = [
  'who-is-this',
  'the-basics',
  'stories-of-hope',
  'signs-of-john',
  'overcoming-fear',
  'philippians',
  'ruth',
  'learn-to-follow-jesus',
  'commands-of-jesus',
  'multiplying-disciples',
  'crossing-barriers',
  'promises-of-comfort',
  'prayer',
  'kingdom-of-god',
  'sermon-on-the-mount'
];

const LANGS = [
  { code: 'en', name: 'English', short: 'EN', prefix: '' },
  { code: 'zh-hk', name: '繁體中文', short: '繁', prefix: 'zh-hk/' },
  { code: 'zh-cn', name: '简体中文', short: '簡', prefix: 'zh-cn/' },
  { code: 'ja', name: '日本語', short: '日', prefix: 'ja/' }
];

console.log('--- Building Bilingual Data Bundle ---');

// 1. Parse defaults for each language
const defaults = {};
for (const lang of LANGS) {
  const defPath = path.join(ROOT_DIR, `${lang.prefix}_engine/defaults.js`);
  const code = fs.readFileSync(defPath, 'utf8');
  const context = {};
  vm.createContext(context);
  const res = vm.runInContext(code + '; ENGINE_DEFAULTS;', context);
  defaults[lang.code] = res;
  console.log(`Loaded defaults for ${lang.code}`);
}

// 2. Parse studies catalog metadata from studies.html
const catalog = {};
for (const lang of LANGS) {
  const htmlPath = path.join(ROOT_DIR, `${lang.prefix}studies.html`);
  const content = fs.readFileSync(htmlPath, 'utf8');
  const match = content.match(/const STUDIES = (\[[\s\S]*?\]);/);
  if (!match) {
    throw new Error(`Failed to match STUDIES array in ${htmlPath}`);
  }
  const context = {};
  vm.createContext(context);
  catalog[lang.code] = vm.runInContext(match[1], context);
  console.log(`Loaded catalog for ${lang.code} (${catalog[lang.code].length} studies)`);
}

// 3. Parse study data for each study and language
const studies = {};
for (const lang of LANGS) {
  studies[lang.code] = {};
  for (const id of STUDY_IDS) {
    const studyFile = path.join(ROOT_DIR, `${lang.prefix}studies/${id}/data.js`);
    if (!fs.existsSync(studyFile)) {
      throw new Error(`Study file not found: ${studyFile}`);
    }
    const code = fs.readFileSync(studyFile, 'utf8');
    const context = { window: {} };
    vm.createContext(context);
    vm.runInContext(code, context);
    if (!context.window.STUDY) {
      throw new Error(`window.STUDY not set in ${studyFile}`);
    }
    studies[lang.code][id] = context.window.STUDY;
  }
  console.log(`Loaded 15 studies for ${lang.code}`);
}

// 4. UI dictionary
const i18n = {
  'en': {
    bilingualTitle: "Discovery Bible Studies &middot; Bilingual",
    bilingualSubtitle: "Read Scripture side-by-side in two languages. Look back, look up, look forward.",
    lang1Label: "Language 1",
    lang2Label: "Language 2",
    swapLangs: "Swap languages",
    studyLabel: "Study",
    sessionLabel: "Session",
    allSessions: "All Sessions",
    viewMode: "Display Mode",
    sideBySide: "Side by Side",
    stacked: "Stacked",
    fontSize: "Font Size",
    normalFont: "Standard",
    largeFont: "Large",
    journeyModalTitle: "Study Outline & Sessions",
    startSession: "Start Session &rarr;",
    stepCover: "Overview",
    stepLookBack: "Look Back",
    stepLookUp: "Look Up",
    stepLookForward: "Look Forward",
    stepReading: "Between Sessions",
    stepFinish: "Complete",
    back: "Back",
    next: "Next",
    finish: "Finish Session",
    thisSession: "This Session",
    memoryVerse: "Memory Verse",
    readingVerse: "This Session's Reading",
    readCommand: "Read the command:",
    readStory: "Then read the story:",
    openBible: "Open your own Bible to:",
    stepRead: "<strong>Read</strong> the passage aloud (twice).",
    stepRetell: "<strong>Retell</strong> it. Close your Bibles, ask someone to retell it in their own words.",
    stepCheck: "<strong>Check</strong> together: did they capture the whole story?",
    discover: "Discover",
    prayTogether: "<strong>Pray</strong> together, briefly.",
    watchTogether: "Watch together",
    watchFilm: "Watch the film",
    lastVersePrompt: "Does anyone remember last session's verse? No pressure if not, here's a reminder.",
    responsePrompt: "From this passage, is there...",
    yourResponse: "Your Response",
    oneIdea: "One idea",
    turnIntoGoal: "Turn it into a goal",
    promiseVerse: "Promise verse",
    practice: "Practice exercise",
    shareIt: "Share it",
    shareQuestion: "Who will you share this passage with this week?",
    prayEachOther: "Pray for each other",
    sessionDone: "That's this session done.",
    betweenTitle: "Between Now and Next Session",
    worthMemorising: "Worth memorising this week",
    courseComplete: "Course complete: what's next?",
    nextSession: "Next Session &rarr;",
    selectFewNote: "No need to ask all of these, pick two or three that fit the conversation.",
    day: "Day"
  },
  'zh-hk': {
    bilingualTitle: "發現式查經 &middot; 雙語模式",
    bilingualSubtitle: "兩種語言並排研讀聖經。回顧、向上看、展望。",
    lang1Label: "語言一",
    lang2Label: "語言二",
    swapLangs: "對調語言",
    studyLabel: "查經課程",
    sessionLabel: "聚會課次",
    allSessions: "所有課次",
    viewMode: "版面模式",
    sideBySide: "並排閱讀",
    stacked: "上下疊放",
    fontSize: "字體大小",
    normalFont: "標準",
    largeFont: "放大",
    journeyModalTitle: "課程大綱與課次",
    startSession: "開始聚會 &rarr;",
    stepCover: "聚會概覽",
    stepLookBack: "回顧",
    stepLookUp: "向上看",
    stepLookForward: "展望",
    stepReading: "在下次聚會之前",
    stepFinish: "完成聚會",
    back: "返回",
    next: "下一步",
    finish: "完成今次聚會",
    thisSession: "今次聚會",
    memoryVerse: "背誦金句",
    readingVerse: "今次聚會經文",
    readCommand: "閱讀這條命令：",
    readStory: "然後閱讀相關故事：",
    openBible: "請打開自己嘅聖經閱讀：",
    stepRead: "<strong>朗讀</strong> 出聲讀出經文（兩次）。",
    stepRetell: "<strong>重述</strong>：合上聖經，請一位組員用自己嘅說話重述出嚟。",
    stepCheck: "<strong>核對</strong>：大家一齊核對，有冇遺漏故事嘅任何重要細節？",
    discover: "發現探索",
    prayTogether: "一齊做個簡短嘅<strong>禱告</strong>。",
    watchTogether: "一齊觀看影片",
    watchFilm: "觀看影片",
    lastVersePrompt: "有冇人記得上次聚會嘅金句？唔記得都完全冇問題，呢度俾大家重溫一下。",
    responsePrompt: "從呢段經文中，有冇&hellip;",
    yourResponse: "你嘅回應",
    oneIdea: "一個實踐想法",
    turnIntoGoal: "將佢化為一個具體目標",
    promiseVerse: "應許金句",
    practice: "今次聚會嘅實踐操練",
    shareIt: "與人分享",
    shareQuestion: "今次聚會後，你會同邊個分享呢段經文？",
    prayEachOther: "彼此代禱",
    sessionDone: "今次聚會到此結束。",
    betweenTitle: "在下次聚會之前",
    worthMemorising: "今個星期值得背誦嘅金句",
    courseComplete: "課程完成：下一步係咩？",
    nextSession: "下一課 &rarr;",
    selectFewNote: "唔需要全部問晒，揀兩至三條適合當下交流嘅問題即可。",
    day: "第"
  },
  'zh-cn': {
    bilingualTitle: "发现式查经 &middot; 双语模式",
    bilingualSubtitle: "两种语言并排研读圣经。回顾、向上看、向前看。",
    lang1Label: "语言一",
    lang2Label: "语言二",
    swapLangs: "对调语言",
    studyLabel: "查经课程",
    sessionLabel: "聚会课次",
    allSessions: "所有课次",
    viewMode: "版面模式",
    sideBySide: "并排阅读",
    stacked: "上下叠放",
    fontSize: "字体大小",
    normalFont: "标准",
    largeFont: "放大",
    journeyModalTitle: "课程大纲与课次",
    startSession: "开始聚会 &rarr;",
    stepCover: "聚会概览",
    stepLookBack: "回顾",
    stepLookUp: "向上看",
    stepLookForward: "向前看",
    stepReading: "在下次聚会之前",
    stepFinish: "完成聚会",
    back: "返回",
    next: "下一步",
    finish: "完成本次聚会",
    thisSession: "本次聚会",
    memoryVerse: "背诵金句",
    readingVerse: "本次聚会经文",
    readCommand: "阅读这条命令：",
    readStory: "然后阅读相关故事：",
    openBible: "请打开自己的圣经阅读：",
    stepRead: "<strong>朗读</strong> 出声朗读经文（两次）。",
    stepRetell: "<strong>复述</strong>：合上圣经，请一位组员用自己的话复述出来。",
    stepCheck: "<strong>核对</strong>：大家一起核对，有没有遗漏故事的任何重要细节？",
    discover: "发现探索",
    prayTogether: "一起做一个简短的<strong>祷告</strong>。",
    watchTogether: "一起观看影片",
    watchFilm: "观看影片",
    lastVersePrompt: "有人记得上次聚会的金句吗？不记得也没关系，这里给大家提个醒。",
    responsePrompt: "从这段经文中，有没有&hellip;",
    yourResponse: "你的回应",
    oneIdea: "一个实践想法",
    turnIntoGoal: "将其化为一个具体目标",
    promiseVerse: "应许金句",
    practice: "本次聚会的实践操练",
    shareIt: "与人分享",
    shareQuestion: "本次聚会后，你会和谁分享这段经文？",
    prayEachOther: "彼此代祷",
    sessionDone: "本次聚会到此结束。",
    betweenTitle: "在下次聚会之前",
    worthMemorising: "本周值得背诵的金句",
    courseComplete: "课程完成：接下来是什么？",
    nextSession: "下一课 &rarr;",
    selectFewNote: "不需要全部都问，挑选两三个适合当前交流的问题即可。",
    day: "第"
  },
  'ja': {
    bilingualTitle: "ディスカバリー・バイブル・スタディ &middot; バイリンガル",
    bilingualSubtitle: "2つの言語を並べて一緒に聖書を読む。振り返る、見上げる、前を向く。",
    lang1Label: "言語 1",
    lang2Label: "言語 2",
    swapLangs: "言語を入れ替える",
    studyLabel: "スタディ",
    sessionLabel: "セッション",
    allSessions: "すべてのセッション",
    viewMode: "レイアウト",
    sideBySide: "左右に並べる",
    stacked: "上下に重ねる",
    fontSize: "文字サイズ",
    normalFont: "標準",
    largeFont: "大",
    journeyModalTitle: "スタディのアウトラインとセッション一覧",
    startSession: "セッションを始める &rarr;",
    stepCover: "概要",
    stepLookBack: "振り返る",
    stepLookUp: "見上げる",
    stepLookForward: "前を向く",
    stepReading: "次回までの読書",
    stepFinish: "セッション完了",
    back: "戻る",
    next: "次へ",
    finish: "セッションを終える",
    thisSession: "今回のセッション",
    memoryVerse: "暗誦聖句",
    readingVerse: "今回の聖書箇所",
    readCommand: "命令の箇所を読む：",
    readStory: "続いて物語の箇所を読む：",
    openBible: "各自の聖書を開いてください：",
    stepRead: "<strong>読む</strong> 聖書箇所を声に出して読みます（2回）。",
    stepRetell: "<strong>自分の言葉で語る</strong>：聖書を閉じ、誰かに自分の言葉でストーリーを話してもらいます。",
    stepCheck: "<strong>確認する</strong>：物語の全体が伝わっていたか、みんなで確認します。",
    discover: "発見する",
    prayTogether: "短く共に<strong>祈りましょう</strong>。",
    watchTogether: "一緒に映像を見る",
    watchFilm: "映像を見る",
    lastVersePrompt: "前回の暗誦聖句を覚えている人はいますか？忘れていても大丈夫です。確認しましょう。",
    responsePrompt: "この箇所から、次のようなものがありますか&hellip;",
    yourResponse: "あなたの応答",
    oneIdea: "1つのヒント",
    turnIntoGoal: "具体的な目標にする",
    promiseVerse: "約束のみことば",
    practice: "今回の実践エクササイズ",
    shareIt: "分かち合う",
    shareQuestion: "今週、この聖書箇所を誰と分かち合いますか？",
    prayEachOther: "互いのために祈る",
    sessionDone: "今回のセッションはこれで終了です。",
    betweenTitle: "次回までの個人読書",
    worthMemorising: "今週心に留めたい暗誦聖句",
    courseComplete: "コース完了：次はどうする？",
    nextSession: "次のセッション &rarr;",
    selectFewNote: "すべてを尋ねる必要はありません。会話の流れに合ったものを2〜3つ選んでください。",
    day: ""
  }
};

// 5. Build final data bundle
const output = {
  studiesList: STUDY_IDS,
  languages: LANGS,
  defaults,
  catalog,
  studies,
  i18n
};

const outputPath = path.join(ROOT_DIR, '_engine/bilingual-data.js');
const jsContent = `/* DBS Bilingual Dataset - Auto-generated on ${new Date().toISOString()} */\nwindow.BILINGUAL_DATA = ${JSON.stringify(output)};\n`;

fs.writeFileSync(outputPath, jsContent, 'utf8');
console.log(`Successfully generated ${outputPath}`);
console.log(`File size: ${(fs.statSync(outputPath).size / 1024).toFixed(1)} KB`);
