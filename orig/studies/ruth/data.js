/* =========================================================================
   STUDY DATA: Ruth
   A five-session study through the whole book of Ruth, one chapter per
   session (chapter 4 split into two: the redemption at the gate, and the
   birth and genealogy that close the book). The library's first Old
   Testament book study, and its first study centred on a woman. Curated
   directly from the biblical text, not adapted from a source PDF.
   ========================================================================= */

window.STUDY = {
  id: "ruth",
  title: "Ruth",
  sessionNoun: "session",
  sessionsLabel: "Five Sessions",
  stepTimes: { lookback: "20&ndash;30 min", lookup: "20&ndash;30 min", lookforward: "20&ndash;30 min" },

  welcomeCopy: {
    tagline: "where you go, i will go",
    titleHtml: "not<br>empty<br>anymore",
    lead: "A widow, a foreigner, and an empty-handed return home end up at the centre of the story that leads to King David, and to Jesus himself. Read one chapter each session, discover how God works through ordinary loyalty and hidden kindness, and find out where you belong, as a small group or one-on-one."
  },

  methodCopy: {
    lead: 'Every session follows the same <strong style="color:var(--ink-900);font-weight:600;">3 steps</strong>, in the same order, whether it&rsquo;s just the two of you or a small group. Altogether, expect it to take <strong style="color:var(--ink-900);font-weight:600;">around 90 minutes</strong>, though it&rsquo;s only ever a rough guide, a quicker 60 minutes works fine too.',
    lookBackBlurb: "A quick, honest check-in before you open the Bible: how last session went, what you noticed since, and how you can pray for each other.",
    lookUpBlurb: "Read the chapter aloud, retell it in your own words, and check you got the whole story. Then let a few questions do the real work.",
    lookForwardBlurb: "Turn what you&rsquo;ve discovered into a lived response: a behaviour, a promise, an example, or a command. Decide who you&rsquo;ll share it with this week, then pray for each other before you finish."
  },

  finishCopy: {
    heading: "redeemed",
    body: "Five sessions, one short book, and one long story underneath it: an empty, grieving woman and a foreign widow find belonging, provision, and redemption, and become part of the line that leads to King David, and to Jesus. You&rsquo;ve looked back, looked up, and looked forward together the whole way. That&rsquo;s no small thing, and it&rsquo;s not really an ending.",
    leadSomeoneElse: "This course was built to need no training, which means you&rsquo;re already qualified to lead someone else through it. You&rsquo;ve spent these sessions sharing each chapter with someone, they&rsquo;re your obvious first invitation. When you&rsquo;re ready, reset your progress and start again with them.",
    nextStudy: "Without necessarily realising it, you&rsquo;ve been practising Discovery Bible Study, a simple, repeatable way of reading the Bible with someone: look back, look up, look forward. Keep using that same rhythm on your own, with any passage or book, there&rsquo;s a whole library of other studies here worth exploring too."
  },

  sessions: [
    {
      id: "1", title: "Loss and Loyalty", refs: ["Ruth 1:1&ndash;22"],
      summary: "Famine drives Naomi&rsquo;s family to Moab, where her husband and both sons die, leaving her with two foreign daughters-in-law. When Naomi decides to return home empty-handed, Orpah says goodbye, but Ruth refuses to leave her side.",
      lookBack: {
        note: "There&rsquo;s no &ldquo;last time&rdquo; yet, so start here instead.",
        questions: [
          "What&rsquo;s your name, and one thing about you the group might not know?",
          "Have you ever had to start over somewhere unfamiliar? What was that like?",
          "What are you hoping to get out of these five sessions together?",
          "How can we pray for you as we start this course?"
        ]
      },
      lookUpPrayer: "Never prayed aloud before? One sentence is plenty. Thank God for one thing that came up just now, then ask the Holy Spirit to help you see this story clearly.",
      leaderNote: "Moab and Israel had a long, hostile history, Ruth is about as much of an outsider as the story could choose. Naomi&rsquo;s own words frame the chapter: she went away full, and comes back empty, which is exactly the emptiness the rest of the book will slowly fill.",
      lookForwardIdea: "an example to follow is Ruth&rsquo;s loyalty, choosing to stay when leaving would have been easier and safer. Is there a relationship right now where staying, rather than leaving, is the harder and more faithful choice?",
      memoryVerse: { ref: "Ruth 1:16", text: "But Ruth replied, &ldquo;Don&rsquo;t urge me to leave you or to turn back from you. Where you go I will go, and where you stay I will stay. Your people will be my people and your God my God.&rdquo;" }
    },
    {
      id: "2", title: "Gleaning in the Fields", refs: ["Ruth 2:1&ndash;23"],
      summary: "Ruth goes out to gather leftover grain to survive, and &ldquo;as it turned out&rdquo; ends up in a field belonging to Boaz, a relative of Naomi&rsquo;s late husband, who notices her, protects her, and provides for her generously.",
      lookUpPrayer: "Pray about what came up in Look Back, then ask the Holy Spirit to help you understand what you&rsquo;re about to read.",
      leaderNote: "Gleaning was a provision built into Israel&rsquo;s law for the poor, but it was still hard, risky work, especially for a foreign woman alone. The narrator&rsquo;s &ldquo;as it turned out&rdquo; is a wink to the reader, this wasn&rsquo;t luck.",
      lookForwardIdea: "a promise to trust is that God&rsquo;s provision often arrives through ordinary people noticing and acting kindly, not just dramatic intervention. Where do you need to trust God&rsquo;s provision this week, even if it comes through an unremarkable door?",
      memoryVerse: { ref: "Ruth 2:12", text: "&ldquo;May the LORD repay you for what you have done. May you be richly rewarded by the LORD, the God of Israel, under whose wings you have come to take refuge.&rdquo;" }
    },
    {
      id: "3", title: "The Threshing Floor", refs: ["Ruth 3:1&ndash;18"],
      summary: "Naomi devises a bold plan: Ruth is to approach Boaz privately at the threshing floor at night and ask him to fulfil his role as a kinsman-redeemer. Boaz responds with honour, not scandal, and promises to resolve it.",
      lookUpPrayer: "Bring what you just shared to God, then ask the Holy Spirit to reveal something in this passage you might otherwise miss.",
      leaderNote: "This scene clearly requires real courage from Ruth, but Boaz&rsquo;s response is protective and honourable throughout, praising her for not chasing a younger man for love, and treating her with complete respect.",
      lookForwardIdea: "a command to obey is Ruth&rsquo;s boldness in asking for what she genuinely needed instead of waiting passively. Is there something you need to actually ask for, directly, instead of hoping someone notices?",
      memoryVerse: { ref: "Ruth 3:9", text: "&ldquo;Who are you?&rdquo; he asked. &ldquo;I am your servant Ruth,&rdquo; she said. &ldquo;Spread the corner of your garment over me, since you are a guardian-redeemer of our family.&rdquo;" }
    },
    {
      id: "4", title: "Redeemed at the Gate", refs: ["Ruth 4:1&ndash;12"],
      summary: "Boaz goes to the town gate and publicly settles the matter with a closer relative who has first right to redeem Ruth and her family&rsquo;s land, but declines. Boaz steps in, and the whole town blesses the marriage.",
      lookUpPrayer: "Pray for each other about whatever came up in Look Back, then invite the Holy Spirit to open your eyes as you read.",
      leaderNote: "The town gate was where legal and business matters were formally settled, in front of witnesses. The unnamed relative is willing to buy land, but not to take on Ruth and the responsibility that comes with her, Boaz is willing to take both.",
      lookForwardIdea: "an example to follow is Boaz taking on the costly part of redemption, not just the convenient part. Where is there a cost you&rsquo;ve been avoiding that real love or faithfulness would actually require?",
      memoryVerse: { ref: "Ruth 4:10", text: "&ldquo;I have also acquired Ruth the Moabite, Mahlon&rsquo;s widow, as my wife, in order to maintain the name of the dead with his property, so that his name will not disappear from among his family or from his hometown.&rdquo;" }
    },
    {
      id: "5", title: "From Empty to a King&rsquo;s Line", refs: ["Ruth 4:13&ndash;22"],
      summary: "Boaz marries Ruth, and God gives them a son, Obed. The women of Bethlehem bless Naomi, whose emptiness has been completely reversed, and the book closes with a genealogy: Obed is the grandfather of David, Israel&rsquo;s greatest king.",
      lookUpPrayer: "Pray about everything this course has stirred up in you, then ask the Holy Spirit to help you see where he&rsquo;s been quietly at work in your own story too.",
      leaderNote: "Naomi named herself &ldquo;Mara&rdquo; (bitter) at the start of the book, here the women declare she has a family again through this child. The final genealogy is the real punchline, this ordinary, local story turns out to be the hidden beginning of Israel&rsquo;s royal line, and Matthew&rsquo;s Gospel later traces the same line all the way to Jesus.",
      lookForwardIdea: "a promise to trust is that God can be quietly writing something significant through your most ordinary, unnoticed seasons. What&rsquo;s a season you assumed was just survival that might actually be part of a bigger story?",
      prayerNote: "Pray for what came up in Look Back, for each person&rsquo;s Look Forward response, and for the person they&rsquo;ll share this passage with. This is your last session together, so take extra time.",
      memoryVerse: { ref: "Ruth 4:14&ndash;15", text: "The women said to Naomi: &ldquo;Praise be to the LORD, who this day has not left you without a guardian-redeemer... He will renew your life and sustain you in your old age.&rdquo;" }
    }
  ]
};
