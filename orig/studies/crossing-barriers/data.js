/* =========================================================================
   STUDY DATA: Crossing Barriers
   A ten-session topical study on reconciliation, adapted from
   Crossing+Barriers.pdf in Darren's reading-plan collection (novo.org
   family, same H.O.P.E. format as Overcoming Fear). Two passages (Luke
   7:36-50 and John 7:53-8:11) also appear as story pairings in Commands of
   Jesus; reused deliberately here under a different lens (reconciliation,
   not command-and-story), not a duplicate to fix.
   ========================================================================= */

window.STUDY = {
  id: "crossing-barriers",
  title: "Crossing Barriers",
  sessionNoun: "session",
  sessionsLabel: "Ten Sessions",
  stepTimes: { lookback: "20&ndash;30 min", lookup: "20&ndash;30 min", lookforward: "20&ndash;30 min" },
  lookForwardTemplate: "I will ______________________________.",

  welcomeCopy: {
    tagline: "reconciled to god, and to each other",
    titleHtml: "no more<br>walls",
    lead: "The Bible is full of people God reconciled to himself, and to each other, regardless of status, ethnicity, or history. Look at one story each session, discover the barrier being crossed, and learn to cross a few of your own, as a small group or one-on-one."
  },

  methodCopy: {
    lead: 'Every session follows the same <strong style="color:var(--ink-900);font-weight:600;">3 steps</strong>, in the same order, whether it&rsquo;s just the two of you or a small group. Altogether, expect it to take <strong style="color:var(--ink-900);font-weight:600;">around 90 minutes</strong>, though it&rsquo;s only ever a rough guide, a quicker 60 minutes works fine too.',
    lookBackBlurb: "A time to reconnect: what you&rsquo;re thankful for, what&rsquo;s been a challenge, and how your &lsquo;I will&rsquo; statement from last time actually went.",
    lookUpBlurb: "Read the passage aloud, retell it in your own words, and check you got the whole story. Then let a few questions do the real work.",
    lookForwardBlurb: "Turn what you&rsquo;ve discovered into an &lsquo;I will&rsquo; statement, something specific you&rsquo;ll actually do this week. Decide who you&rsquo;ll tell about it, then pray for each other before you finish.",
    lookBackDefaults: [
      "What are you thankful for this week?",
      "What&rsquo;s a challenge you&rsquo;re facing right now?",
      "How did we go applying the insights from last time?",
      "How did we go sharing our insights from last time?"
    ]
  },

  finishCopy: {
    heading: "one new humanity",
    body: "Ten passages, one long story of God crossing every barrier to reach us, and calling us to cross a few of our own. You&rsquo;ve looked back, looked up, and looked forward together the whole way, watching wall after wall come down. That&rsquo;s no small thing, and it&rsquo;s not really an ending.",
    leadSomeoneElse: "This course was built to need no training, which means you&rsquo;re already qualified to lead someone else through it. You&rsquo;ve spent these sessions sharing each passage with someone, they&rsquo;re your obvious first invitation. When you&rsquo;re ready, reset your progress and start again with them.",
    nextStudy: "Without necessarily realising it, you&rsquo;ve been practising Discovery Bible Study, a simple, repeatable way of reading the Bible with someone: look back, look up, look forward. Keep using that same rhythm on your own, with any passage or book, there&rsquo;s a whole library of other studies here worth exploring too."
  },

  sessions: [
    {
      id: "1", title: "The Woman at the Well", refs: ["John 4:1&ndash;26"],
      summary: "Jesus, a Jewish rabbi, deliberately speaks with a Samaritan woman at a well, crossing barriers of ethnicity, religion, gender, and personal reputation all at once, and offers her living water.",
      lookBack: {
        note: "There&rsquo;s no &ldquo;last time&rdquo; yet, so start here instead.",
        questions: [
          "What&rsquo;s your name, and one thing about you the group might not know?",
          "What&rsquo;s a barrier, social, cultural, or personal, you&rsquo;ve noticed yourself keeping up around certain people?",
          "What are you hoping to get out of these ten sessions together?",
          "How can we pray for you as we start this course?"
        ]
      },
      lookUpPrayer: "Never prayed aloud before? One sentence is plenty. Thank God for one thing that came up just now, then ask the Holy Spirit to help you see this story clearly.",
      leaderNote: "Jews and Samaritans normally avoided each other entirely, and a rabbi speaking alone with a woman in public was itself unusual. John notes Jesus &ldquo;had to go through Samaria&rdquo;, the shortest route, but also a deliberate choice most Jews avoided.",
      lookForwardIdea: "an example to follow is Jesus choosing the person and the place everyone else avoided. Who&rsquo;s the person or group you&rsquo;d normally steer around, and what would crossing that barrier actually look like?",
      memoryVerse: { ref: "John 4:9", text: "The Samaritan woman said to him, &ldquo;You are a Jew and I am a Samaritan woman. How can you ask me for a drink?&rdquo; (For Jews do not associate with Samaritans.)" }
    },
    {
      id: "2", title: "Ambassadors of Reconciliation", refs: ["2 Corinthians 5:16&ndash;21"],
      summary: "Paul explains that anyone in Christ is a new creation, and that God has given believers the message and ministry of reconciliation, being Christ&rsquo;s ambassadors to a divided world.",
      lookUpPrayer: "Pray about what came up in Look Back, then ask the Holy Spirit to help you understand what you&rsquo;re about to read.",
      leaderNote: "Paul says he no longer regards anyone &ldquo;from a worldly point of view&rdquo;, the categories people usually use to divide from each other stop being the final word once you&rsquo;re in Christ.",
      lookForwardIdea: "a command to obey is being an ambassador of reconciliation. Where is there a relationship or divide in your own life that needs your active effort to reconcile, not just wait out?",
      memoryVerse: { ref: "2 Corinthians 5:18", text: "All this is from God, who reconciled us to himself through Christ and gave us the ministry of reconciliation." }
    },
    {
      id: "3", title: "Forgiven Much, Loves Much", refs: ["Luke 7:36&ndash;50"],
      summary: "A woman known for her sin crashes a respectable dinner party to anoint Jesus&rsquo; feet with tears and perfume, and Jesus publicly honours her extravagant love over his host&rsquo;s cold politeness.",
      lookUpPrayer: "Bring what you just shared to God, then ask the Holy Spirit to reveal something in this passage you might otherwise miss.",
      leaderNote: "Simon the Pharisee would never have let this woman near him in public. Jesus doesn&rsquo;t just tolerate her presence, he holds her up as the example of what real love and forgiveness look like.",
      lookForwardIdea: "a promise to trust is that whoever has been forgiven much, loves much. Is there a barrier of shame or reputation, yours or someone else&rsquo;s, keeping you from receiving or extending that kind of welcome?",
      memoryVerse: { ref: "Luke 7:47", text: "&ldquo;Therefore, I tell you, her many sins have been forgiven, for she loved much. But whoever has been forgiven little loves little.&rdquo;" }
    },
    {
      id: "4", title: "The Dividing Wall", refs: ["Ephesians 2:11&ndash;22"],
      summary: "Paul reminds Gentile believers they were once excluded and far off, but Christ has broken down the dividing wall of hostility between Jew and Gentile, making one new humanity out of two.",
      lookUpPrayer: "Pray for each other about whatever came up in Look Back, then invite the Holy Spirit to open your eyes as you read.",
      leaderNote: "The &ldquo;dividing wall&rdquo; likely refers to an actual barrier in the Jerusalem temple that separated Gentiles from the inner courts, non-Jews faced execution for crossing it. Paul says Christ has literally destroyed that wall.",
      lookForwardIdea: "a promise to trust is that Christ himself is our peace, who has made the two groups one. What&rsquo;s the specific &ldquo;wall&rdquo; between you and someone else that Christ&rsquo;s peace could actually dismantle?",
      memoryVerse: { ref: "Ephesians 2:14", text: "For he himself is our peace, who has made the two groups one and has destroyed the barrier, the dividing wall of hostility." }
    },
    {
      id: "5", title: "Neither Do I Condemn You", refs: ["John 7:53&ndash;8:11"],
      summary: "Religious leaders drag a woman caught in adultery in front of Jesus, ready to stone her, and Jesus quietly turns the accusation back on her accusers, then extends mercy without excusing what she did.",
      lookUpPrayer: "Try praying a full sentence or two this week: name what came up in Look Back, then ask the Holy Spirit to reveal something as you read.",
      leaderNote: "The law required both parties in adultery to be brought, the woman alone standing there is itself telling. Jesus refuses the trap set for him and refuses to join the crowd of accusers, without pretending nothing happened.",
      lookForwardIdea: "a command to obey is Jesus&rsquo; final words to her: go now and leave your life of sin. Where do you need to offer, or receive, mercy without either excusing the wrong or crushing the person?",
      memoryVerse: { ref: "John 8:11", text: "&ldquo;Then neither do I condemn you,&rdquo; Jesus declared. &ldquo;Go now and leave your life of sin.&rdquo;" }
    },
    {
      id: "6", title: "A Dear Brother", refs: ["Philemon 1:1&ndash;25"],
      summary: "Paul writes a deeply personal letter urging Philemon to welcome back his runaway slave Onesimus, not as property any longer but as a beloved brother in Christ.",
      lookUpPrayer: "Pray honestly about what surfaced in Look Back, even the hard parts, then ask the Holy Spirit to help this passage land.",
      leaderNote: "This is Paul&rsquo;s shortest, most personal letter, addressing one specific, costly relational barrier: master and slave, now asked to relate as equal brothers. Paul offers to personally cover any debt Onesimus owes.",
      lookForwardIdea: "an example to follow is Paul putting his own reputation and resources on the line to reconcile two specific people. Is there a relationship you could actively invest in repairing, rather than leaving to sort itself out?",
      memoryVerse: { ref: "Philemon 1:16", text: "no longer as a slave, but better than a slave, as a dear brother. He is very dear to me but even dearer to you, both as a fellow man and as a brother in the Lord." }
    },
    {
      id: "7", title: "No Favouritism", refs: ["James 2:1&ndash;13"],
      summary: "James warns believers against showing favouritism to the rich over the poor within the church, insisting that real faith treats every person, regardless of status, with equal honour.",
      lookUpPrayer: "Try praying specifically for each other this week, about what was just shared, then ask the Holy Spirit to guide what you notice as you read.",
      leaderNote: "James paints a vivid, specific scene, a rich man in fine clothes gets the good seat, a poor man is told to stand or sit on the floor, exposing exactly how favouritism actually plays out in a room.",
      lookForwardIdea: "a command to obey is loving your neighbour as yourself, without favouritism. Is there a group of people you unconsciously treat as more or less worth your attention, based on status, wealth, or appearance?",
      memoryVerse: { ref: "James 2:8&ndash;9", text: "If you really keep the royal law found in Scripture, &ldquo;Love your neighbour as yourself,&rdquo; you are doing right. But if you show favouritism, you sin and are convicted by the law as lawbreakers." }
    },
    {
      id: "8", title: "Perfect Love Drives Out Fear", refs: ["1 John 4:7&ndash;21"],
      summary: "John explains that love comes from God and is proof of knowing him, and that perfect love drives out fear, love for God and love for other people are inseparable.",
      lookUpPrayer: "Pray about what came up in Look Back, then ask the Holy Spirit to help you love God and others better because of what you&rsquo;re about to read.",
      leaderNote: "John makes a blunt logical point: anyone who claims to love God while hating a fellow believer is a liar, since you can&rsquo;t actually see God but you can see the person in front of you.",
      lookForwardIdea: "a command to obey is this: whoever loves God must also love their brother and sister. Is there anyone you&rsquo;ve been avoiding loving because it&rsquo;s easier to keep them at a distance?",
      memoryVerse: { ref: "1 John 4:18", text: "There is no fear in love. But perfect love drives out fear, because fear has to do with punishment. The one who fears is not made perfect in love." }
    },
    {
      id: "9", title: "Love the Foreigner", refs: ["Deuteronomy 10:12&ndash;22"],
      summary: "Moses reminds Israel that God defends the cause of the fatherless and the widow, and loves the foreigner living among them, and calls Israel to do the same, because they themselves were once foreigners in Egypt.",
      lookUpPrayer: "Pray honestly about whatever came up in Look Back, then ask the Holy Spirit to make this passage feel personal, not just historical.",
      leaderNote: "Israel is told to love the foreigner specifically by remembering their own history, they know what it felt like to be the outsider in someone else&rsquo;s land. Memory of your own vulnerability is meant to produce compassion, not superiority.",
      lookForwardIdea: "a command to obey is loving the foreigner as God does. Who&rsquo;s the outsider in your own community, culturally, linguistically, or otherwise, that this calls you to actually welcome?",
      memoryVerse: { ref: "Deuteronomy 10:19", text: "And you are to love those who are foreigners, for you yourselves were foreigners in Egypt." }
    },
    {
      id: "10", title: "Every Nation, Tribe, and Tongue", refs: ["Revelation 7:9&ndash;12"],
      summary: "John sees a vision of a vast multitude from every nation, tribe, people, and language, standing together before God&rsquo;s throne, worshipping with one voice.",
      lookUpPrayer: "Pray about everything this course has stirred up in you, then ask the Holy Spirit to make this passage feel like a real promise, not just a nice ending.",
      leaderNote: "This is a deliberate, dramatic reversal of every barrier explored in this course, not a diminished, uniform crowd, but every distinct nation, tribe, people, and language still visibly present, united in worship.",
      lookForwardIdea: "a promise to trust is that this is where the story is heading, every barrier eventually gone, everyone still fully themselves. What would it look like to live now in light of where this is all going?",
      prayerNote: "Pray for what came up in Look Back, for each person&rsquo;s Look Forward response, and for the person they&rsquo;ll share this passage with. This is your last session together, so take extra time.",
      memoryVerse: { ref: "Revelation 7:9", text: "After this I looked, and there before me was a great multitude that no one could count, from every nation, tribe, people and language, standing before the throne and before the Lamb." }
    }
  ]
};
