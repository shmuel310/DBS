const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');

// Exact string translation dictionaries
const DICT = {
  // Notes
  'There&rsquo;s no &ldquo;last time&rdquo; yet, so start here instead.': {
    'zh-hk': '仲未有「上次聚會」，所以今次先從呢度開始。',
    'ja': 'まだ「前回」はないので、まずはここから始めましょう。',
    'zh-cn': '还没有“上次聚会”，所以先从这里开始。'
  },
  'There&rsquo;s no &ldquo;last week&rdquo; yet, so start here instead.': {
    'zh-hk': '仲未有「上個星期」，所以今次先從呢度開始。',
    'ja': 'まだ「先週」はないので、まずはここから始めましょう。',
    'zh-cn': '还没有“上周”，所以先从这里开始。'
  },

  // Common icebreaker questions
  'What&rsquo;s your name, and one thing about you the group might not know?': {
    'zh-hk': '你叫咩名？同埋有冇一件事係小組大家可能仲未知道嘅？',
    'ja': 'お名前と、このグループのメンバーがまだ知らないようなあなたについてのことを1つ教えてください。',
    'zh-cn': '你叫什么名字？有什么是大家可能还不知道关于你的事？'
  },
  'How can we pray for you as we start this course?': {
    'zh-hk': '當我哋開始呢個課程之際，我哋可以點樣為你禱告？',
    'ja': 'このコースを始めるにあたり、あなたのためにどのように祈ることができますか？',
    'zh-cn': '当我们开始这门课程时，我们可以怎样为你祷告？'
  },
  'What are you thankful for this week?': {
    'zh-hk': '今個星期你有咩感恩嘅事？',
    'ja': '今週、感謝していることは何ですか？',
    'zh-cn': '这周你有什么感恩的事？'
  },
  'What led you to start following Jesus, or to want to learn more?': {
    'zh-hk': '係咩引導你開始跟隨耶穌，或者想了解更多？',
    'ja': '何をきっかけにイエスに従い始めましたか？または、もっと知りたいと思うようになりましたか？',
    'zh-cn': '是什么引导你开始跟随耶稣，或是想要了解更多？'
  },

  // Course duration expectations
  'What are you hoping to get out of these five sessions together?': {
    'zh-hk': '你期望喺呢五次聚會中一齊有咩收穫？',
    'ja': 'これから5回のセッションを一緒に過ごす中で、どのようなことを期待していますか？',
    'zh-cn': '你期望在这一起度过的五次聚会中有什么收获？'
  },
  'What are you hoping to get out of these six weeks together?': {
    'zh-hk': '你期望喺呢六個星期中一齊有咩收穫？',
    'ja': 'これから6週間の歩みを共にする中で、どのようなことを期待していますか？',
    'zh-cn': '你期望在这一起度过的六周里有什么收获？'
  },
  'What are you hoping to get out of these eight sessions together?': {
    'zh-hk': '你期望喺呢八次聚會中一齊有咩收穫？',
    'ja': 'これから8回のセッションを一緒に過ごす中で、どのようなことを期待していますか？',
    'zh-cn': '你期望在这一起度过的八次聚会中有什么收获？'
  },
  'What are you hoping to get out of these ten sessions together?': {
    'zh-hk': '你期望喺呢十次聚會中一齊有咩收穫？',
    'ja': 'これから10回のセッションを一緒に過ごす中で、どのようなことを期待していますか？',
    'zh-cn': '你期望在这一起度过的十次聚会中有什么收获？'
  },
  'What are you hoping to get out of these ten weeks together?': {
    'zh-hk': '你期望喺呢十個星期中一齊有咩收穫？',
    'ja': 'これから10週間の歩みを共にする中で、どのようなことを期待していますか？',
    'zh-cn': '你期望在这一起度过的十周里有什么收获？'
  },
  'What are you hoping to get out of these twelve sessions together?': {
    'zh-hk': '你期望喺呢十二次聚會中一齊有咩收穫？',
    'ja': 'これから12回のセッションを一緒に過ごす中で、どのようなことを期待していますか？',
    'zh-cn': '你期望在这一起度过的十二次聚会中有什么收获？'
  },
  'What are you hoping to get out of these fourteen sessions together?': {
    'zh-hk': '你期望喺呢十四次聚會中一齊有咩收穫？',
    'ja': 'これから14回のセッションを一緒に過ごす中で、どのようなことを期待していますか？',
    'zh-cn': '你期望在这一起度过的十四次聚会中有什么收获？'
  },
  'What are you hoping to get out of these seventeen weeks together?': {
    'zh-hk': '你期望喺呢十七個星期中一齊有咩收穫？',
    'ja': 'これから17週間の歩みを共にする中で、どのようなことを期待していますか？',
    'zh-cn': '你期望在这一起度过的十七周里有什么收获？'
  },
  'What are your expectations? What do you hope to get out of these ten sessions together?': {
    'zh-hk': '你有咩期望？你希望喺呢十次聚會中一齊有咩收穫？',
    'ja': 'どのような期待を持っていますか？この10回のセッションを通して何を得たいですか？',
    'zh-cn': '你的期望是什么？你希望在这十次聚会中有什么收获？'
  },

  // Study-specific session 1 questions
  'What does &ldquo;hope&rdquo; mean to you right now, in this season of your life?': {
    'zh-hk': '喺你人生目前呢個階段，「盼望」對你嚟講意味著咩？',
    'ja': 'あなたの人生の今の時期において、「希望」とは何を意味していますか？',
    'zh-cn': '在你人生目前的阶段，“盼望”对你来说意味着什么？'
  },
  'Why do you want to get to know God better? What have you already experienced with God?': {
    'zh-hk': '點解你想更深入認識上帝？喺過去你對上帝有過咩經歷？',
    'ja': 'なぜ神をもっとよく知りたいと思いますか？これまでに神についてどのような体験をしてきましたか？',
    'zh-cn': '为什么你想更深入地认识神？在过去你对神有过怎样的经历？'
  },
  'What&rsquo;s one thing you already believe, or wonder, about who Jesus is?': {
    'zh-hk': '關於「耶穌係邊個」，有邊一點係你已經相信、或者感到好奇想探討嘅？',
    'ja': '「イエスとはどのような方か」について、あなたがすでに信じていること、あるいは疑問や興味を持っていることは何ですか？',
    'zh-cn': '关于“耶稣是谁”，有什么是你已经相信、或是感到好奇想要探究的？'
  },
  'What&rsquo;s something you&rsquo;re genuinely afraid of, big or small?': {
    'zh-hk': '無論事大事細，有咩事係你真正感到害怕嘅？',
    'ja': '大きなことでも小さなことでも、あなたが心から恐れていることは何ですか？',
    'zh-cn': '无论大事小事，有什么事是你内心真正感到害怕的？'
  },
  'Have you ever had to start over somewhere unfamiliar? What was that like?': {
    'zh-hk': '你有冇試過喺一個陌生嘅地方重新開始？當時嘅經歷係點樣嘅？',
    'ja': '見知らぬ場所でゼロからやり直さなければならなかった経験はありますか？それはどのような体験でしたか？',
    'zh-cn': '你有没有经历过在一个陌生的地方重新开始？那是一种怎样的体验？'
  },
  'What&rsquo;s one thing about following Jesus you feel confident about, and one thing you feel unsure of?': {
    'zh-hk': '關於跟隨耶穌，有邊一點係你覺得好有把握嘅，又有邊一點係你感到唔太確定嘅？',
    'ja': 'イエスに従うことについて、自信を持っていることと、よくわからない（不安に感じる）ことを1つずつ教えてください。',
    'zh-cn': '关于跟随耶稣，有什么是你觉得很有把握的，又有什么是你感到不确定或困惑的？'
  },
  'What&rsquo;s one thing Jesus has said that you find easy to admire but hard to actually do?': {
    'zh-hk': '耶穌講過嘅說話當中，有邊一句係你覺得好值得敬佩、但實際做起上嚟卻好困難嘅？',
    'ja': 'イエスの言葉の中で、称賛するのは簡単だけれど、実際に実行するのは難しいと感じるものは何ですか？',
    'zh-cn': '耶稣所说的话中，有什么是你觉得很令人赞赏、但实际去做却很难的？'
  },
  'How did you find the pre-reading, Jesus growing up, John preparing the way, his baptism and temptation?': {
    'zh-hk': '你讀完課前預備閱讀（耶穌成長、約翰預備道路、耶穌受洗與受試探）之後，有咩感受同體會？',
    'ja': '事前読書（イエスの成長、道を備えるヨハネ、バプテスマと荒野の誘惑）を読んでみて、どのように感じましたか？',
    'zh-cn': '读完会前阅读（耶稣成长、约翰预备道路、耶稣受洗与受试探）后，你有什么感受和体会？'
  },
  'What&rsquo;s a barrier, social, cultural, or personal, you&rsquo;ve noticed yourself keeping up around certain people?': {
    'zh-hk': '你有冇留意到自己喺面對某啲人嗰陣，會築起某種隔閡（無論係社交、文化定係個人層面嘅藩籬）？',
    'ja': '社会的、文化的、あるいは個人的なものなど、特定の人に対して自分が作ってしまっている「壁」や「隔たり」に気づいたことはありますか？',
    'zh-cn': '你有没有注意到自己在面对某些人时，会筑起某种隔阂（无论是社交、文化还是个人层面的藩篱）？'
  },
  'What&rsquo;s a promise, from anyone, that&rsquo;s actually held firm for you?': {
    'zh-hk': '有冇邊個人俾你嘅承諾，係至今仍然堅定不移、切實守住嘅？',
    'ja': '誰からのものであれ、あなたにとって「確かに守られた、頼りになった約束」はありますか？',
    'zh-cn': '有没有谁给过你一个承诺，是至今依然坚定不移、切实兑现了的？'
  },
  'What does your own prayer life actually look like at the moment?': {
    'zh-hk': '你目前自己嘅禱告生活，實際上係點樣嘅？',
    'ja': 'あなた自身の現在の祈りの生活は、実際にはどのようなものですか？',
    'zh-cn': '你目前自己的祷告生活，实际上是怎样的？'
  },
  'What comes to mind when you hear the phrase &ldquo;the kingdom of God&rdquo;?': {
    'zh-hk': '當你聽到「上帝的國」呢個詞嗰陣，你第一時間聯想到咩？',
    'ja': '「神の国」という言葉を聞いたとき、最初にどんなことが思い浮かびますか？',
    'zh-cn': '当你听到“神的国”这个词时，你脑海中首先浮现出什么？'
  },

  // lookBackDefaults in overcoming-fear & stories-of-hope
  'What&rsquo;s a challenge you&rsquo;re facing right now?': {
    'zh-hk': '你而家面對緊咩挑戰或難處？',
    'ja': '今、直面している課題や困難は何ですか？',
    'zh-cn': '你现在正面临什么挑战或难处？'
  },
  'How did we go applying the insights from last time?': {
    'zh-hk': '上次實踐嘅心得，進行成點？',
    'ja': '前回気づいたことを、どのように実践できましたか？',
    'zh-cn': '上次聚会的应用实践得怎么样？'
  },
  'How did we go sharing our insights from last time?': {
    'zh-hk': '上次同人分享嘅心得，進行成點？',
    'ja': '前回気づいたことを、誰かと分かち合えましたか？',
    'zh-cn': '上次的心得和他人分享得怎么样？'
  },

  // the-basics session 7 discoveryQuestions & linkText
  'What has impressed you about what Jesus has said or done?': {
    'zh-hk': '耶穌所說的話或所做的事中，有咩令你印象深刻？',
    'ja': 'イエスが語られたことや行われたことの中で、何が印象に残りましたか？',
    'zh-cn': '耶稣所说的话或所做的事中，有什么让你印象深刻？'
  },
  'How does Jesus describe his own mission or purpose?': {
    'zh-hk': '耶穌點樣描述祂自己嘅使命或目的？',
    'ja': 'イエスはご自身の使命や目的をどのように説明していますか？',
    'zh-cn': '耶稣怎样描述祂自己的使命或目的？'
  },
  'What does Jesus say will happen to him?': {
    'zh-hk': '耶穌話自己將會遭遇咩事？',
    'ja': 'イエスはご自身に何が起こると語っていますか？',
    'zh-cn': '耶稣说自己将会遭遇什么事？'
  },
  'What is Pilate&rsquo;s attitude toward Jesus, and why does he have him punished anyway?': {
    'zh-hk': '彼拉多對耶穌持咩態度？點解佢最終仍然決定懲罰耶穌？',
    'ja': 'ピラトはイエスに対してどのような態度をとっていましたか？それにもかかわらず、なぜイエスを処罰させたのでしょうか？',
    'zh-cn': '彼拉多对耶稣持什么态度？为什么他最终依然决定惩罚耶稣？'
  },
  'What does it mean to you that Jesus suffered so much for you?': {
    'zh-hk': '耶穌為你受咗咁多苦，對你嚟講意味著咩？',
    'ja': 'イエスがあなたのためにこれほどの苦しみを受けられたことは、あなたにとって何を意味しますか？',
    'zh-cn': '耶稣为你受了那么多苦，对你来说意味着什么？'
  },
  'watch the JESUS film': {
    'zh-hk': '觀看《耶穌傳》電影',
    'ja': '映画『JESUS（イエス）』を見る',
    'zh-cn': '观看《耶稣传》电影'
  },

  // noBibleNote
  'No Bible yet? Use the free YouVersion app this week, and we&rsquo;ll get you a copy of your own.': {
    'zh-hk': '仲未有聖經？呢個星期可以用免費嘅 YouVersion 聖經 App，我哋稍後亦會送一本實體聖經俾你。',
    'ja': 'まだ聖書をお持ちでないですか？今週は無料のYouVersionアプリをご利用ください。あなた専用の聖書もご用意します。',
    'zh-cn': '还没有圣经？这周可以使用免费的 YouVersion 圣经 App，我们稍后也会为你准备一本属于你自己的圣经。'
  },

  // lookUpPrayer
  'Never prayed aloud before? One sentence is plenty. Thank God for one thing that came up just now, then ask the Holy Spirit to help you see Jesus clearly as you read.': {
    'zh-hk': '從來未試過出聲禱告？一句起、兩句止就已經好足夠。為頭先交流中提到嘅一件事感謝上帝，然後求聖靈幫助你哋喺讀經時清晰看見耶穌。',
    'ja': '声に出して祈ったことがなくても大丈夫です。一言だけで十分です。先ほど出た感謝なことを1つ神に感謝し、聖書を読む中でイエスの姿がはっきりと見えるよう聖霊に助けを求めましょう。',
    'zh-cn': '从来没有出声祷告过？一句话就足够了。为刚才交流中提到的一件事感谢神，然后求圣灵帮助大家在读经时清晰地看见耶稣。'
  },
  'Never prayed aloud before? One sentence is plenty. Thank God for one thing that came up just now, then ask the Holy Spirit to help you see him clearly as you read.': {
    'zh-hk': '從來未試過出聲禱告？一句起、兩句止就已經好足夠。為頭先交流中提到嘅一件事感謝上帝，然後求聖靈幫助你哋喺讀經時清晰認識祂。',
    'ja': '声に出して祈ったことがなくても大丈夫です。一言だけで十分です。先ほど出た感謝なことを1つ神に感謝し、聖書を読む中で神をはっきりと知ることができるよう聖霊に助けを求めましょう。',
    'zh-cn': '从来没有出声祷告过？一句话就足够了。为刚才交流中提到的一件事感谢神，然后求圣灵帮助大家在读经时清晰地认识祂。'
  },
  'Never prayed aloud before? One sentence is plenty. Thank God for one thing that came up just now, then ask the Holy Spirit to help you see this story clearly.': {
    'zh-hk': '從來未試過出聲禱告？一句起、兩句止就已經好足夠。為頭先交流中提到嘅一件事感謝上帝，然後求聖靈幫助你哋喺讀經時清晰明白這個故事。',
    'ja': '声に出して祈ったことがなくても大丈夫です。一言だけで十分です。先ほど出た感謝なことを1つ神に感謝し、聖書を読む中でこの物語を深く理解できるよう聖霊に助けを求めましょう。',
    'zh-cn': '从来没有出声祷告过？一句话就足够了。为刚才交流中提到的一件事感谢神，然后求圣灵帮助大家在读经时清晰地理解这个故事。'
  },
  'Never prayed aloud before? One sentence is plenty. Thank God for one thing that came up just now, then ask the Holy Spirit to help you see this sign clearly.': {
    'zh-hk': '從來未試過出聲禱告？一句起、兩句止就已經好足夠。為頭先交流中提到嘅一件事感謝上帝，然後求聖靈幫助你哋喺讀經時清晰明白這個神蹟。',
    'ja': '声に出して祈ったことがなくても大丈夫です。一言だけで十分です。先ほど出た感謝なことを1つ神に感謝し、聖書を読む中でこのしるしを深く理解できるよう聖霊に助けを求めましょう。',
    'zh-cn': '从来没有出声祷告过？一句话就足够了。为刚才交流中提到的一件事感谢神，然后求圣灵帮助大家在读经时清晰地理解这个神迹。'
  },
  'Never prayed aloud before? One sentence is plenty. Thank God for one thing that came up just now, then ask the Holy Spirit to help you see this passage clearly.': {
    'zh-hk': '從來未試過出聲禱告？一句起、兩句止就已經好足夠。為頭先交流中提到嘅一件事感謝上帝，然後求聖靈幫助你哋喺讀經時清晰領會這段經文。',
    'ja': '声に出して祈ったことがなくても大丈夫です。一言だけで十分です。先ほど出た感謝なことを1つ神に感謝し、聖書を読む中でこの聖書箇所を深く味わえるよう聖霊に助けを求めましょう。',
    'zh-cn': '从来没有出声祷告过？一句话就足够了。为刚才交流中提到的一件事感谢神，然后求圣灵帮助大家在读经时清晰地领会这段经文。'
  },
  'Never prayed aloud before? One sentence is plenty. Thank God for one thing that came up just now, then ask the Holy Spirit to help you see this command clearly.': {
    'zh-hk': '從來未試過出聲禱告？一句起、兩句止就已經好足夠。為頭先交流中提到嘅一件事感謝上帝，然後求聖靈幫助你哋喺讀經時清晰領會這條命令。',
    'ja': '声に出して祈ったことがなくても大丈夫です。一言だけで十分です。先ほど出た感謝なことを1つ神に感謝し、聖書を読む中でこの命令を深く心に留められるよう聖霊に助けを求めましょう。',
    'zh-cn': '从来没有出声祷告过？一句话就足够了。为刚才交流中提到的一件事感谢神，然后求圣灵帮助大家在读经时清晰地领会这条命令。'
  }
};

// Book name replacements for refs
const BOOK_NAMES = {
  'zh-hk': [
    [/Luke /g, '路加福音 '],
    [/Mark /g, '馬可福音 '],
    [/Matthew /g, '馬太福音 '],
    [/John /g, '約翰福音 '],
    [/Acts /g, '使徒行傳 '],
    [/1 Samuel /g, '撒母耳記上 '],
    [/1 Kings /g, '列王紀上 '],
    [/Ruth /g, '路得記 '],
    [/Daniel /g, '但以理書 ']
  ],
  'ja': [
    [/Luke /g, 'ルカの福音書 '],
    [/Mark /g, 'マルコの福音書 '],
    [/Matthew /g, 'マタイの福音書 '],
    [/John /g, 'ヨハネの福音書 '],
    [/Acts /g, '使徒の働き '],
    [/1 Samuel /g, 'サムエル記 第一 '],
    [/1 Kings /g, '列王記 第一 '],
    [/Ruth /g, 'ルツ記 '],
    [/Daniel /g, 'ダニエル書 ']
  ],
  'zh-cn': [
    [/Luke /g, '路加福音 '],
    [/Mark /g, '马可福音 '],
    [/Matthew /g, '马太福音 '],
    [/John /g, '约翰福音 '],
    [/Acts /g, '使徒行传 '],
    [/1 Samuel /g, '撒母耳记上 '],
    [/1 Kings /g, '列王纪上 '],
    [/Ruth /g, '路得记 '],
    [/Daniel /g, '但以理书 ']
  ]
};

function translateRef(refStr, lang) {
  if (!refStr || typeof refStr !== 'string') return refStr;
  let out = refStr;
  for (const [pat, rep] of BOOK_NAMES[lang]) {
    out = out.replace(pat, rep);
  }
  return out;
}

const STUDY_IDS = [
  'who-is-this', 'the-basics', 'stories-of-hope', 'signs-of-john', 'overcoming-fear',
  'philippians', 'ruth', 'learn-to-follow-jesus', 'commands-of-jesus', 'multiplying-disciples',
  'crossing-barriers', 'promises-of-comfort', 'prayer', 'kingdom-of-god', 'sermon-on-the-mount'
];

let totalReplacements = 0;

for (const lang of ['zh-hk', 'ja', 'zh-cn']) {
  for (const sid of STUDY_IDS) {
    const fpath = path.join(ROOT_DIR, `${lang}/studies/${sid}/data.js`);
    const raw = fs.readFileSync(fpath, 'utf8');
    const window = {};
    eval(raw);
    const study = window.STUDY;

    // 1. Check methodCopy.lookBackDefaults
    if (study.methodCopy && Array.isArray(study.methodCopy.lookBackDefaults)) {
      study.methodCopy.lookBackDefaults = study.methodCopy.lookBackDefaults.map(q => {
        if (DICT[q] && DICT[q][lang]) {
          totalReplacements++;
          return DICT[q][lang];
        }
        return q;
      });
    }

    // 2. Iterate sessions
    if (Array.isArray(study.sessions)) {
      for (const s of study.sessions) {
        // lookBack
        if (s.lookBack) {
          if (s.lookBack.note && DICT[s.lookBack.note] && DICT[s.lookBack.note][lang]) {
            s.lookBack.note = DICT[s.lookBack.note][lang];
            totalReplacements++;
          }
          if (Array.isArray(s.lookBack.questions)) {
            s.lookBack.questions = s.lookBack.questions.map(q => {
              if (DICT[q] && DICT[q][lang]) {
                totalReplacements++;
                return DICT[q][lang];
              }
              return q;
            });
          }
        }

        // noBibleNote
        if (s.noBibleNote && DICT[s.noBibleNote] && DICT[s.noBibleNote][lang]) {
          s.noBibleNote = DICT[s.noBibleNote][lang];
          totalReplacements++;
        }

        // lookUpPrayer
        if (s.lookUpPrayer && DICT[s.lookUpPrayer] && DICT[s.lookUpPrayer][lang]) {
          s.lookUpPrayer = DICT[s.lookUpPrayer][lang];
          totalReplacements++;
        }

        // discoveryQuestions (e.g. the-basics s7)
        if (Array.isArray(s.discoveryQuestions)) {
          s.discoveryQuestions = s.discoveryQuestions.map(q => {
            if (DICT[q] && DICT[q][lang]) {
              totalReplacements++;
              return DICT[q][lang];
            }
            return q;
          });
        }

        // video linkText
        if (s.video && s.video.linkText && DICT[s.video.linkText] && DICT[s.video.linkText][lang]) {
          s.video.linkText = DICT[s.video.linkText][lang];
          totalReplacements++;
        }

        // story.refs (commands-of-jesus)
        if (s.story && Array.isArray(s.story.refs)) {
          s.story.refs = s.story.refs.map(r => translateRef(r, lang));
        }

        // betweenSessions.ref
        if (s.betweenSessions && s.betweenSessions.ref) {
          s.betweenSessions.ref = translateRef(s.betweenSessions.ref, lang);
        }
      }
    }

    const newCode = '/* Auto-generated localized study data */\nwindow.STUDY = ' + JSON.stringify(study, null, 2) + ';\n';
    fs.writeFileSync(fpath, newCode, 'utf8');
    console.log(`Updated ${fpath}`);
  }
}

console.log(`Done! Total dictionary replacements: ${totalReplacements}`);
