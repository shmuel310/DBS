/* =========================================================================
   STUDY DATA: Teach Us to Pray
   A ten-session topical study on prayer, curated directly from scripture
   (no source PDF, the reading-plan folder had no dedicated prayer study).
   Built from a short "In Prayer" list Darren found in one of the folder's
   reference decks (CleanShot 2026-07-16 at 12.48.59@2x.png, five refs:
   Acts 12:5-19, Philippians 4:4-9, Ephesians 3:14-21, Matthew 6:5-15, Luke
   11:5-13), rounded out to ten with Jesus' own prayer life, the Spirit's
   help, corporate prayer, an Old Testament model, and a closing charge.
   Luke 11:1-13 and Ephesians 6:18 were deliberately swapped out for Luke
   18:1-8 and Colossians 4:2-6, since Learn to Follow Jesus's own "Prayer"
   session already uses those two exact refs.
   ========================================================================= */

window.STUDY = {
  id: "prayer",
  title: "Teach Us to Pray",
  sessionNoun: "session",
  sessionsLabel: "Ten Sessions",
  stepTimes: { lookback: "20&ndash;30 min", lookup: "20&ndash;30 min", lookforward: "20&ndash;30 min" },

  welcomeCopy: {
    tagline: "lord, teach us to pray",
    titleHtml: "teach<br>us<br>to<br>pray",
    lead: "Even Jesus&rsquo; own disciples, who&rsquo;d prayed their whole lives, still asked him to teach them how. Ten sessions across the Bible on what prayer actually looks like: honest, persistent, sometimes desperate, and never really finished, as a small group or one-on-one."
  },

  methodCopy: {
    lead: 'Every session follows the same <strong style="color:var(--ink-900);font-weight:600;">3 steps</strong>, in the same order, whether it&rsquo;s just the two of you or a small group. Altogether, expect it to take <strong style="color:var(--ink-900);font-weight:600;">around 90 minutes</strong>, though it&rsquo;s only ever a rough guide, a quicker 60 minutes works fine too.',
    lookBackBlurb: "A time to reconnect: how you&rsquo;ve experienced God this week, what you&rsquo;re thankful for, what&rsquo;s been hard, and how what you learned last time actually landed.",
    lookUpBlurb: "Read the passage aloud, retell it in your own words, and check you got the whole story. Then let a few questions do the real work.",
    lookForwardBlurb: "Turn what you&rsquo;ve discovered into a lived response: a behaviour, a promise, an example, or a command. Decide who you&rsquo;ll share it with this week, then pray for each other before you finish."
  },

  finishCopy: {
    heading: "keep praying",
    body: "Ten passages, one long conversation: Jesus teaching his own words, a persistent widow, a church praying a friend out of prison, Paul on his knees for people he loved, Jesus himself in anguish, Hannah pouring out her grief, and a plain command to keep devoting yourself to it. You&rsquo;ve looked back, looked up, and looked forward together the whole way. That&rsquo;s no small thing, and it&rsquo;s not really an ending.",
    leadSomeoneElse: "This course was built to need no training, which means you&rsquo;re already qualified to lead someone else through it. You&rsquo;ve spent these sessions sharing each passage with someone, they&rsquo;re your obvious first invitation. When you&rsquo;re ready, reset your progress and start again with them.",
    nextStudy: "Without necessarily realising it, you&rsquo;ve been practising Discovery Bible Study, a simple, repeatable way of reading the Bible with someone: look back, look up, look forward. Keep using that same rhythm on your own, with any passage or book, there&rsquo;s a whole library of other studies here worth exploring too."
  },

  sessions: [
    {
      id: "1", title: "Jesus Teaches Us to Pray", refs: ["Matthew 6:5&ndash;15"],
      summary: "Jesus contrasts showy, repetitive prayer with quiet, honest prayer, then hands his disciples the actual words to pray: for God&rsquo;s name, God&rsquo;s kingdom, daily bread, forgiveness, and protection from evil.",
      lookBack: {
        note: "There&rsquo;s no &ldquo;last time&rdquo; yet, so start here instead.",
        questions: [
          "What&rsquo;s your name, and one thing about you the group might not know?",
          "What does your own prayer life actually look like at the moment?",
          "What are you hoping to get out of these ten sessions together?",
          "How can we pray for you as we start this course?"
        ]
      },
      lookUpPrayer: "Never prayed aloud before? One sentence is plenty. Thank God for one thing that came up just now, then ask the Holy Spirit to help you see this passage clearly.",
      leaderNote: "The &ldquo;hypocrites&rdquo; Jesus describes were praying to be seen, on street corners, in synagogues, in public view. His alternative isn&rsquo;t a longer or fancier prayer, it&rsquo;s a shorter, plainer one, prayed in private. The forgiveness line (v14&ndash;15) isn&rsquo;t a footnote, Jesus circles back to underline it specifically.",
      lookForwardIdea: "a command to obey is praying this prayer slowly, phrase by phrase, sometime this week rather than rushing past it. Which line in it actually cuts closest to home for you right now?",
      memoryVerse: { ref: "Matthew 6:9&ndash;13", text: "&ldquo;This, then, is how you should pray: &lsquo;Our Father in heaven, hallowed be your name, your kingdom come, your will be done, on earth as it is in heaven. Give us today our daily bread. And forgive us our debts, as we also have forgiven our debtors. And lead us not into temptation, but deliver us from the evil one.&rsquo;&rdquo;" }
    },
    {
      id: "2", title: "Keep Asking, Keep Believing", refs: ["Luke 18:1&ndash;8"],
      summary: "Jesus tells a parable about a widow with no power or standing, who wears down a reluctant, unjust judge simply by refusing to stop asking, &ldquo;to show them that they should always pray and not give up.&rdquo;",
      lookUpPrayer: "Pray about what came up in Look Back, then ask the Holy Spirit to help you understand what you&rsquo;re about to read.",
      leaderNote: "The judge is described bluntly as someone who neither fears God nor cares about people, Jesus&rsquo; point works precisely because he&rsquo;s a bad example: if sheer persistence moves someone that indifferent, how much more does it matter to a Father who already cares.",
      lookForwardIdea: "a promise to trust is that persistence in prayer isn&rsquo;t nagging God into a corner, it&rsquo;s staying in the conversation instead of giving up on it. What have you quietly stopped bringing to God because the answer was taking too long?",
      memoryVerse: { ref: "Luke 18:1", text: "Then Jesus told his disciples a parable to show them that they should always pray and not give up." }
    },
    {
      id: "3", title: "God Answers Prayer", refs: ["Acts 12:5&ndash;17"],
      summary: "Peter sits in prison awaiting execution while the church prays for him earnestly. An angel breaks him out overnight, and when he turns up at the door, the very people who&rsquo;d been praying can hardly believe it&rsquo;s really him.",
      lookUpPrayer: "Bring what you just shared to God, then ask the Holy Spirit to reveal something in this passage you might otherwise miss.",
      leaderNote: "There&rsquo;s real, gentle humour here: the church is praying for exactly this, and yet when it happens they assume Rhoda&rsquo;s seen a ghost and leave Peter knocking outside. It&rsquo;s an honest picture of prayer and faith, not a tidy one.",
      lookForwardIdea: "an example to follow is the church&rsquo;s stubborn, round-the-clock prayer for one person in real danger. Who&rsquo;s someone specific you could commit to praying for like that this week?",
      memoryVerse: { ref: "Acts 12:5", text: "So Peter was kept in prison, but the church was earnestly praying to God for him." }
    },
    {
      id: "4", title: "Prayer Instead of Anxiety", refs: ["Philippians 4:4&ndash;9"],
      summary: "Writing from prison himself, Paul tells a worried church not to be anxious about anything, but to bring everything to God in prayer, with thanksgiving, and let his peace stand guard over their hearts and minds.",
      lookUpPrayer: "Pray for each other about whatever came up in Look Back, then invite the Holy Spirit to open your eyes as you read.",
      leaderNote: "Paul isn&rsquo;t offering theory from a comfortable chair, he&rsquo;s writing this under real threat. &ldquo;Guard&rdquo; is a deliberate military image, God&rsquo;s peace standing sentry over an anxious heart and mind.",
      lookForwardIdea: "a behaviour to change is trading anxious thinking for specific, thankful prayer, actually naming the thing out loud to God instead of just carrying it. What&rsquo;s one worry you could name in prayer today instead of just carrying around?",
      memoryVerse: { ref: "Philippians 4:6&ndash;7", text: "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus." }
    },
    {
      id: "5", title: "Praying Big Prayers for Others", refs: ["Ephesians 3:14&ndash;21"],
      summary: "Paul kneels in prayer for the Ephesian church, and asks for something much bigger than their comfort or safety: that they&rsquo;d be strengthened, rooted in love, and able to grasp the sheer scale of Christ&rsquo;s love for them.",
      lookUpPrayer: "Pray about what&rsquo;s come up so far, then ask the Holy Spirit to help you see this passage clearly.",
      leaderNote: "Notice how ambitious this prayer is compared to an ordinary request list, Paul isn&rsquo;t praying for their circumstances, he&rsquo;s praying for their capacity to grasp something enormous. It ends in praise, prayer here flows straight into doxology.",
      lookForwardIdea: "an example to follow is praying a genuinely big, specific prayer for someone else&rsquo;s inner life, not just their circumstances. Who could you pray a prayer like this one for this week, out loud or in writing?",
      memoryVerse: { ref: "Ephesians 3:20&ndash;21", text: "Now to him who is able to do immeasurably more than all we ask or imagine, according to his power that is at work within us, to him be glory in the church and in Christ Jesus throughout all generations, for ever and ever! Amen." }
    },
    {
      id: "6", title: "Jesus at Prayer", refs: ["Matthew 26:36&ndash;46"],
      summary: "Hours before his arrest, Jesus takes his closest friends to Gethsemane and prays in real anguish, asking if there&rsquo;s another way, but surrendering to his Father&rsquo;s will anyway, while the disciples fall asleep beside him.",
      lookUpPrayer: "Pray about what came up in Look Back, then ask the Holy Spirit to help you understand what you&rsquo;re about to read.",
      leaderNote: "This is arguably the rawest prayer in the Gospels. Jesus models honesty before surrender, naming the distress out loud instead of skipping straight to acceptance. &ldquo;Not as I will, but as you will&rdquo; is trust, not just resignation.",
      lookForwardIdea: "a command to obey is Jesus&rsquo; own instruction to &ldquo;watch and pray,&rdquo; staying alert instead of drifting off when it matters most. Where do you need to stay awake in prayer this week rather than switching off?",
      memoryVerse: { ref: "Matthew 26:39", text: "Going a little farther, he fell with his face to the ground and prayed, &ldquo;My Father, if it is possible, may this cup be taken from me. Yet not as I will, but as you will.&rdquo;" }
    },
    {
      id: "7", title: "The Spirit Helps Us Pray", refs: ["Romans 8:26&ndash;27"],
      summary: "Paul says plainly that we don&rsquo;t always know what to pray for, but the Spirit himself intercedes for us, even through wordless groans, perfectly in line with God&rsquo;s will.",
      lookUpPrayer: "Bring what you just shared to God, then ask the Holy Spirit to reveal something in this passage you might otherwise miss.",
      leaderNote: "It&rsquo;s a short passage, but a real relief for anyone who&rsquo;s ever felt stuck or inarticulate in prayer. Prayer isn&rsquo;t a performance you have to get right alone, the Spirit is already doing part of the work.",
      lookForwardIdea: "a promise to trust is that the Spirit prays with and for you even when you have no idea what to say. When has &ldquo;I don&rsquo;t know what to pray&rdquo; felt true for you lately?",
      memoryVerse: { ref: "Romans 8:26", text: "In the same way, the Spirit helps us in our weakness. We do not know what we ought to pray for, but the Spirit himself intercedes for us through wordless groans." }
    },
    {
      id: "8", title: "Praying Together, Boldly", refs: ["Acts 4:23&ndash;31"],
      summary: "Released after being threatened by the religious authorities, Peter and John go straight back to the believers, who pray together, not for safety, but for boldness, and the place they&rsquo;re in is literally shaken.",
      lookUpPrayer: "Pray for each other about whatever came up in Look Back, then invite the Holy Spirit to open your eyes as you read.",
      leaderNote: "Notice what they don&rsquo;t pray for: relief, safety, the opposition backing off. What they do pray for is courage to keep speaking anyway. Corporate prayer here is unified, specific, and answered almost immediately.",
      lookForwardIdea: "a command to obey is praying for boldness rather than for the difficulty to simply go away. What situation could you pray for courage in, instead of just praying it disappears?",
      memoryVerse: { ref: "Acts 4:31", text: "After they prayed, the place where they were meeting was shaken. And they were all filled with the Holy Spirit and spoke the word of God boldly." }
    },
    {
      id: "9", title: "Hannah&rsquo;s Prayer", refs: ["1 Samuel 1:1&ndash;20"],
      summary: "Hannah, deeply distressed and unable to have children, pours out her raw grief to God at the temple, praying with such intensity that the priest Eli assumes she&rsquo;s drunk. God hears her, and she conceives Samuel.",
      lookUpPrayer: "Pray about what&rsquo;s come up so far, then ask the Holy Spirit to help you see this passage clearly.",
      leaderNote: "This story predates the whole New Testament pattern of prayer we&rsquo;ve been looking at, and models something just as important: prayer that&rsquo;s honest about pain instead of polished. Eli misreading her is a reminder that real prayer doesn&rsquo;t always look composed.",
      lookForwardIdea: "a promise to trust is that God hears prayer that&rsquo;s messy, desperate, and completely honest, not just the tidy kind. Is there a raw, ongoing pain you&rsquo;ve been tidying up before bringing it to God?",
      memoryVerse: { ref: "1 Samuel 1:27", text: "I prayed for this child, and the LORD has granted me what I asked of him." }
    },
    {
      id: "10", title: "A Life of Prayer", refs: ["Colossians 4:2&ndash;6"],
      summary: "Paul closes his letter with a simple charge: devote yourselves to prayer, stay watchful, be thankful, and pray for open doors for the gospel, then let that same grace fill how you talk with everyone else.",
      lookUpPrayer: "Pray about everything this course has stirred up in you, then ask the Holy Spirit to help you see where he&rsquo;s been quietly at work in your own prayer life too.",
      leaderNote: "&ldquo;Devote&rdquo; describes an ongoing discipline, not a one-off. Paul also ties prayer directly to gospel conversation here, it isn&rsquo;t only private, it fuels how you actually engage with the people around you.",
      lookForwardIdea: "a behaviour to change is treating prayer as a devoted practice, not an emergency measure. What would it look like to build one small, repeatable prayer habit into next week?",
      prayerNote: "Pray for what came up in Look Back, for each person&rsquo;s Look Forward response, and for the person they&rsquo;ll share this passage with. This is your last session together, so take extra time.",
      memoryVerse: { ref: "Colossians 4:2", text: "Devote yourselves to prayer, being watchful and thankful." }
    }
  ]
};
