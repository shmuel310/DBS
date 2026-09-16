/* =========================================================================
   STUDY DATA: 10 Promises of Comfort
   A ten-session topical study, adapted from the "10 Promises of Comfort"
   scripture list at dbsgroups.com/scripture-lists/10-promises-of-comfort.
   Each promise there pairs a short "read" verse (the schema's promiseVerse
   field, also used as the memoryVerse) with a fuller "discover" passage
   that shows what the promise looks like lived out.
   Four of the ten original "discover" passages were swapped out because
   they'd already been used as full sessions elsewhere in the library:
   Provision (was Matthew 6:25&ndash;34, already a full session in both
   Overcoming Fear and Commands of Jesus) swapped for John 6:1&ndash;13.
   Guidance (was Psalm 23, already a full session in Overcoming Fear)
   swapped for Luke 24:13&ndash;35 (a minor, already-precedented reuse: it
   also appears as a secondary "story" pairing, not a main session, in
   Commands of Jesus). Prayer (was Luke 18:1&ndash;8, already a full
   session in the Teach Us to Pray study) swapped for James 5:13&ndash;18.
   Strength (was Philippians 4, already a full or near-full session in
   Teach Us to Pray, Overcoming Fear, and New Life, Real Joy) swapped for
   2 Corinthians 12:7&ndash;10. All four "read" promise verses are kept
   exactly as the source list has them.
   ========================================================================= */

window.STUDY = {
  id: "promises-of-comfort",
  title: "10 Promises of Comfort",
  sessionNoun: "session",
  sessionsLabel: "Ten Promises",
  stepTimes: { lookback: "20&ndash;30 min", lookup: "20&ndash;30 min", lookforward: "20&ndash;30 min" },
  lookForwardTemplate: "I will trust this promise by ______________________________.",

  welcomeCopy: {
    tagline: "read a promise, discover the story behind it",
    titleHtml: "he<br>keeps<br>his<br>word",
    lead: "Ten promises God makes throughout Scripture, each one anchored to a short verse worth memorising, then explored through a fuller passage that shows exactly what it looks like lived out. Read a little each session, discover the story behind the promise, and learn to lean on it together, as a small group or one-on-one."
  },

  methodCopy: {
    lead: 'Every session follows the same <strong style="color:var(--ink-900);font-weight:600;">3 steps</strong>, in the same order, whether it&rsquo;s just the two of you or a small group. Altogether, expect it to take <strong style="color:var(--ink-900);font-weight:600;">around 90 minutes</strong>, though it&rsquo;s only ever a rough guide, a quicker 60 minutes works fine too.',
    lookBackBlurb: "A time to reconnect: how you&rsquo;ve experienced God this week, what you&rsquo;re thankful for, what&rsquo;s been hard, and how what you learned last time actually landed.",
    lookUpBlurb: "Read the passage aloud, retell it in your own words, and check you got the whole story. Then let a few questions do the real work, and look out for the promise verse paired with it.",
    lookForwardBlurb: "Turn what you&rsquo;ve discovered into an &lsquo;I will&rsquo; statement, something specific you&rsquo;ll actually do this week. Decide who you&rsquo;ll share it with, then pray for each other before you finish."
  },

  finishCopy: {
    heading: "promises kept",
    body: "Ten promises, ten stories that show exactly what each one looks like lived out: peace inside a locked cell, more than enough from a few loaves, forgiveness that lifts a hidden weight, a road where Jesus was walking all along. You&rsquo;ve looked back, looked up, and looked forward together the whole way. That&rsquo;s no small thing, and it&rsquo;s not really an ending.",
    leadSomeoneElse: "This course was built to need no training, which means you&rsquo;re already qualified to lead someone else through it. You&rsquo;ve spent these sessions sharing each passage with someone, they&rsquo;re your obvious first invitation. When you&rsquo;re ready, reset your progress and start again with them.",
    nextStudy: "Without necessarily realising it, you&rsquo;ve been practising Discovery Bible Study, a simple, repeatable way of reading the Bible with someone: look back, look up, look forward. Keep using that same rhythm on your own, with any passage or book, there&rsquo;s a whole library of other studies here worth exploring too."
  },

  sessions: [
    {
      id: "1", title: "Singing at Midnight", refs: ["Acts 16:16&ndash;34"],
      summary: "Paul and Silas are stripped, beaten, and thrown into the innermost cell of a Philippian prison, yet at midnight they&rsquo;re praying and singing hymns. An earthquake breaks every chain, and by morning the terrified jailer is baptised with his whole household.",
      lookBack: {
        note: "There&rsquo;s no &ldquo;last time&rdquo; yet, so start here instead.",
        questions: [
          "What&rsquo;s your name, and one thing about you the group might not know?",
          "What&rsquo;s a promise, from anyone, that&rsquo;s actually held firm for you?",
          "What are you hoping to get out of these ten sessions together?",
          "How can we pray for you as we start this course?"
        ]
      },
      lookUpPrayer: "Never prayed aloud before? One sentence is plenty. Thank God for one thing that came up just now, then ask the Holy Spirit to help you see this story clearly.",
      leaderNote: "The peace on display here isn&rsquo;t the absence of danger, they&rsquo;re still in chains, in the dark, in pain, when they start singing. It&rsquo;s that response, not the earthquake, which the other prisoners notice first, and it&rsquo;s ultimately what saves the jailer&rsquo;s life and his household&rsquo;s.",
      lookForwardIdea: "a promise to trust is that God&rsquo;s peace can hold inside a locked, painful situation, not just after it&rsquo;s over. Where do you need that kind of peace right now, in the middle of something rather than after it?",
      promiseVerse: { ref: "John 14:27", text: "Peace I leave with you; my peace I give you. I do not give to you as the world gives. Do not let your hearts be troubled and do not be afraid." },
      memoryVerse: { ref: "John 14:27", text: "Peace I leave with you; my peace I give you. I do not give to you as the world gives. Do not let your hearts be troubled and do not be afraid." }
    },
    {
      id: "2", title: "Never Out of Reach", refs: ["Psalm 139:1&ndash;18"],
      summary: "David marvels that God knows every thought before he thinks it, formed him before he was born, and is present everywhere, even the furthest, darkest places he could imagine going.",
      lookUpPrayer: "Pray about what came up in Look Back, then ask the Holy Spirit to help you understand what you&rsquo;re about to read.",
      leaderNote: "The psalm moves from God knowing David&rsquo;s thoughts (v1&ndash;6), to God being inescapably present everywhere (v7&ndash;12), to God personally forming him in the womb (v13&ndash;16). Each section deepens the same claim: there&rsquo;s nowhere, and no version of you, that God doesn&rsquo;t already know and stay present to.",
      lookForwardIdea: "a promise to trust is that God has never once left you, even in the places or seasons that felt most alone. Where have you quietly assumed God wasn&rsquo;t present?",
      promiseVerse: { ref: "Hebrews 13:5", text: "&hellip;because God has said, &ldquo;Never will I leave you; never will I forsake you.&rdquo;" },
      memoryVerse: { ref: "Hebrews 13:5", text: "&hellip;because God has said, &ldquo;Never will I leave you; never will I forsake you.&rdquo;" }
    },
    {
      id: "3", title: "More Than Enough", refs: ["John 6:1&ndash;13"],
      summary: "Jesus takes a boy&rsquo;s small lunch, five loaves and two small fish, and feeds a crowd of thousands, with twelve baskets of leftovers collected afterward.",
      lookUpPrayer: "Bring what you just shared to God, then ask the Holy Spirit to reveal something in this passage you might otherwise miss.",
      leaderNote: "John notes this happens near the Passover, deliberately echoing the manna God provided Israel in the wilderness. The leftovers matter, this isn&rsquo;t just enough, it&rsquo;s abundantly more than enough, from an offering that looked laughably small to start with.",
      lookForwardIdea: "a promise to trust is that God can take what little you have and make it more than enough. What&rsquo;s the need right now that feels too small, or too big, for God to bother with?",
      promiseVerse: { ref: "Philippians 4:19", text: "And my God will meet all your needs according to the riches of his glory in Christ Jesus." },
      memoryVerse: { ref: "Philippians 4:19", text: "And my God will meet all your needs according to the riches of his glory in Christ Jesus." }
    },
    {
      id: "4", title: "The Weight Lifted", refs: ["Psalm 32:1&ndash;11"],
      summary: "David describes the physical toll of hiding his guilt, and the relief that came the moment he stopped pretending and simply confessed it to God.",
      lookUpPrayer: "Pray for each other about whatever came up in Look Back, then invite the Holy Spirit to open your eyes as you read.",
      leaderNote: "David likely wrote this after his affair with Bathsheba and everything that followed. Verses 3&ndash;4 describe real physical symptoms of unconfessed guilt, this isn&rsquo;t abstract theology, it&rsquo;s lived experience.",
      lookForwardIdea: "a behaviour to change is bringing something you&rsquo;ve been hiding into the open with God, instead of carrying it silently. Is there something specific you need to actually confess this week rather than keep managing alone?",
      promiseVerse: { ref: "1 John 1:9", text: "If we confess our sins, he is faithful and just and will forgive us our sins and purify us from all unrighteousness." },
      memoryVerse: { ref: "1 John 1:9", text: "If we confess our sins, he is faithful and just and will forgive us our sins and purify us from all unrighteousness." }
    },
    {
      id: "5", title: "Eyes Opened on the Road", refs: ["Luke 24:13&ndash;35"],
      summary: "Two grieving disciples walk for miles with the risen Jesus without recognising him, until he breaks bread with them at the table, and suddenly they see exactly who&rsquo;s been walking beside them the whole way.",
      lookUpPrayer: "Pray about what&rsquo;s come up so far, then ask the Holy Spirit to help you see this passage clearly.",
      leaderNote: "Jesus doesn&rsquo;t announce who he is first, he walks alongside them, asks questions, and opens up Scripture, before revealing himself. Guidance here looks less like an instant answer and more like a patient companion who was there the entire time.",
      lookForwardIdea: "an example to follow is recognising, in hindsight, where God was guiding you all along even when it wasn&rsquo;t obvious in the moment. Where might God have been present in a season you assumed you were walking through alone?",
      promiseVerse: { ref: "Proverbs 3:5&ndash;6", text: "Trust in the LORD with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight." },
      memoryVerse: { ref: "Proverbs 3:5&ndash;6", text: "Trust in the LORD with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight." }
    },
    {
      id: "6", title: "Powerful and Effective", refs: ["James 5:13&ndash;18"],
      summary: "James gives practical instructions for prayer in hard times, sickness, and sin, then points to Elijah, an ordinary man like us, whose prayer stopped and started the rain.",
      lookUpPrayer: "Pray about what came up in Look Back, then ask the Holy Spirit to help you understand what you&rsquo;re about to read.",
      leaderNote: "James deliberately says Elijah &ldquo;was a human being, even as we are&rdquo; (v17), the point isn&rsquo;t that Elijah was a spiritual superhero, it&rsquo;s that ordinary, earnest prayer genuinely moves things.",
      lookForwardIdea: "a promise to trust is that the prayer of someone made right with God is powerful and effective, not just a nice ritual. What&rsquo;s something you&rsquo;ve stopped bringing to God in prayer because it felt too small, or too big?",
      promiseVerse: { ref: "John 15:7", text: "If you remain in me and my words remain in you, ask whatever you wish, and it will be done for you." },
      memoryVerse: { ref: "John 15:7", text: "If you remain in me and my words remain in you, ask whatever you wish, and it will be done for you." }
    },
    {
      id: "7", title: "A Place Prepared", refs: ["John 14:1&ndash;8"],
      summary: "Hours before his death, Jesus comforts his troubled disciples with a promise: he&rsquo;s going ahead of them to prepare a place, and he himself is the way there.",
      lookUpPrayer: "Bring what you just shared to God, then ask the Holy Spirit to reveal something in this passage you might otherwise miss.",
      leaderNote: "This is spoken directly into the disciples&rsquo; fear right before the crucifixion, Jesus doesn&rsquo;t remove the hard road ahead, he gives them somewhere solid to fix their eyes on beyond it. Thomas&rsquo; honest confusion (v5) is what draws out one of Jesus&rsquo; clearest self-descriptions in the Gospels.",
      lookForwardIdea: "a promise to trust is that Jesus has genuinely gone ahead to prepare a place for you, this isn&rsquo;t wishful thinking. What difference would it make this week to hold today&rsquo;s troubles alongside that promise, rather than instead of it?",
      promiseVerse: { ref: "John 3:16", text: "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life." },
      memoryVerse: { ref: "John 3:16", text: "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life." }
    },
    {
      id: "8", title: "Power in Weakness", refs: ["2 Corinthians 12:7&ndash;10"],
      summary: "Paul pleads three times for God to remove a painful &ldquo;thorn in the flesh,&rdquo; and receives a different answer instead: God&rsquo;s grace is enough, and his power works best through Paul&rsquo;s weakness, not around it.",
      lookUpPrayer: "Pray for each other about whatever came up in Look Back, then invite the Holy Spirit to open your eyes as you read.",
      leaderNote: "Paul never specifies what the &ldquo;thorn&rdquo; actually was, which is probably why this passage has comforted so many people with completely different struggles. The turn in verse 9 is the whole point: strength here isn&rsquo;t the removal of weakness, it&rsquo;s power showing up inside it.",
      lookForwardIdea: "a promise to trust is that God&rsquo;s grace is sufficient, even for the thing you&rsquo;ve asked him to remove and he hasn&rsquo;t. What&rsquo;s the &ldquo;thorn&rdquo; you&rsquo;re still praying God will simply take away?",
      promiseVerse: { ref: "Philippians 4:13", text: "I can do all this through him who gives me strength." },
      memoryVerse: { ref: "Philippians 4:13", text: "I can do all this through him who gives me strength." }
    },
    {
      id: "9", title: "Crowned with Glory", refs: ["Psalm 8:1&ndash;9"],
      summary: "David looks up at the vast night sky and is struck by how small humanity seems by comparison, yet marvels that God has crowned people with glory and honour and entrusted them with real responsibility over creation.",
      lookUpPrayer: "Pray about everything this course has stirred up in you, then ask the Holy Spirit to help you see where he&rsquo;s been quietly at work in your own story too.",
      leaderNote: "The question in verse 4, &ldquo;what is mankind that you are mindful of them?&rdquo;, is genuine astonishment, not false modesty. The psalm&rsquo;s answer is that human smallness and human purpose aren&rsquo;t in tension, God&rsquo;s attention to something vast doesn&rsquo;t cancel out his attention to you.",
      lookForwardIdea: "a promise to trust is that God works all things together for good for those who love him, even the things that feel small or purposeless right now. Where do you need reminding that your life carries real, God-given purpose?",
      promiseVerse: { ref: "Romans 8:28", text: "And we know that in all things God works for the good of those who love him, who have been called according to his purpose." },
      memoryVerse: { ref: "Romans 8:28", text: "And we know that in all things God works for the good of those who love him, who have been called according to his purpose." }
    },
    {
      id: "10", title: "Joy That Doesn&rsquo;t Wait for Ease", refs: ["Romans 5:1&ndash;11"],
      summary: "Paul says believers can actually rejoice in sufferings, not despite them but through them, because suffering produces perseverance, character, and a hope that never disappoints.",
      lookUpPrayer: "Pray about everything this course has stirred up in you, then ask the Holy Spirit to help you see where he&rsquo;s been quietly at work in your own story too.",
      leaderNote: "This isn&rsquo;t Paul romanticising pain, verses 6&ndash;8 ground the whole passage in something concrete: Christ died for us while we were still sinners, proof of God&rsquo;s love that doesn&rsquo;t depend on our circumstances improving first.",
      lookForwardIdea: "a promise to trust is that hope in God does not put us to shame, whatever the current circumstance looks like. What would it look like to actually ask God for joy this week, by name, rather than waiting for easier circumstances first?",
      prayerNote: "Pray for what came up in Look Back, for each person&rsquo;s Look Forward response, and for the person they&rsquo;ll share this passage with. This is your last session together, so take extra time.",
      promiseVerse: { ref: "John 16:24", text: "Until now you have not asked for anything in my name. Ask and you will receive, and your joy will be complete." },
      memoryVerse: { ref: "John 16:24", text: "Until now you have not asked for anything in my name. Ask and you will receive, and your joy will be complete." }
    }
  ]
};
