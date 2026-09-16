/* =========================================================================
   STUDY DATA: New Life, Real Joy (Philippians)
   A six-week course through Philippians, adapted from Darren's existing
   "Philippians New Believers Study". Scripture is quoted from the World
   English Bible (public domain) for memory verses, matching the source, so
   STUDY.translation overrides the engine's default "(NIV)" label.
   ========================================================================= */

window.STUDY = {
  id: "philippians",
  title: "New Life, Real Joy",
  book: "Philippians",
  sessionNoun: "week",
  sessionsLabel: "Six Weeks",
  translation: "WEB",
  copyrightNote: "Scripture quotations: World English Bible (public domain).",
  stepTimes: { lookback: "10&ndash;15 min", lookup: "25&ndash;35 min", lookforward: "15&ndash;20 min" },

  welcomeCopy: {
    tagline: "a course for new believers",
    titleHtml: "new<br>life,<br>real<br>joy",
    lead: "A short, warm letter Paul wrote to friends he loved, covering everything a new believer needs: who Jesus is, what grace means, how to pray, and how to face hard times without losing joy. Read a little each week, discover it together, and practise a rhythm you can keep using for the rest of your life, as a small group or one-on-one."
  },

  methodCopy: {
    lead: 'Every week follows the same <strong style="color:var(--ink-900);font-weight:600;">3 steps</strong>, in the same order, whether it&rsquo;s just the two of you or a small group. Altogether, expect it to take <strong style="color:var(--ink-900);font-weight:600;">around 60&ndash;70 minutes</strong>, though it&rsquo;s only ever a rough guide.',
    lookBackBlurb: "A quick, honest check-in before you open the Bible: how last week went, what you noticed since, and how you can pray for each other.",
    lookUpBlurb: "Read the passage aloud, retell it in your own words, and check you got the whole story. Then let a few questions do the real work.",
    lookForwardBlurb: "Turn what you&rsquo;ve discovered into a lived response: a behaviour, a promise, an example, or a command. Decide who you&rsquo;ll share it with this week, then pray for each other before you finish.",
    respondItems: ["A behaviour to change?", "A promise to claim?", "An example to follow?", "A command to obey?"]
  },

  finishCopy: {
    heading: "keep the rhythm",
    body: "Six weeks in one of the warmest letters in the New Testament, and just as importantly, six weeks practising a rhythm you can keep using for the rest of your life: look back, look up, look forward. You&rsquo;ve looked back, looked up, and looked forward together the whole way. That&rsquo;s no small thing, and it&rsquo;s not really an ending.",
    leadSomeoneElse: "This course was built to need no training, which means you&rsquo;re already qualified to lead someone else through it. You&rsquo;ve spent these weeks sharing each passage with someone, they&rsquo;re your obvious first invitation. When you&rsquo;re ready, reset your progress and start again with them.",
    nextStudy: "Keep meeting as a group, and pick another short book of the Bible to read together using the same look back, look up, look forward rhythm. Or try it on your own: a few minutes a day, reading a short passage and asking the same five questions."
  },

  sessions: [
    {
      id: "1", title: "You Belong", refs: ["Philippians 1:1&ndash;11"],
      summary: "Paul opens with warmth, not obligation: he thanks God for these friends every time he thinks of them, and promises that the good work God has started in them, he will finish.",
      lookBack: {
        note: "There&rsquo;s no &ldquo;last week&rdquo; yet, so start here instead.",
        questions: [
          "What&rsquo;s your name, and one thing about you the group might not know?",
          "What led you to start following Jesus, or to want to learn more?",
          "What are you hoping to get out of these six weeks together?",
          "What are you thankful for this week?",
          "How can we pray for you as we start this course?"
        ]
      },
      leaderNote: "Paul wrote this letter from prison to a church he loved, the Christians in the city of Philippi. He wasn&rsquo;t writing as a distant leader, he was writing as a close friend. Verse 6 is a promise, not a task list: the growth God has started in someone isn&rsquo;t a test they might fail, it&rsquo;s a project he&rsquo;s already guaranteed to finish.",
      lookForwardIdea: "a promise to claim is Paul&rsquo;s confidence that God finishes what he starts (v6). Where do you need that confidence this week?",
      memoryVerse: { ref: "Philippians 1:6", text: "&ldquo;being confident of this very thing, that he who began a good work in you will complete it until the day of Jesus Christ.&rdquo;" }
    },
    {
      id: "2", title: "Good News in Hard Times", refs: ["Philippians 1:12&ndash;30"],
      summary: "Writing from prison, Paul explains that his hardship has actually helped spread the message about Jesus, and encourages the Philippians to stand firm together whatever they face.",
      leaderNote: "Paul is under house arrest, likely chained to a Roman guard, when he writes this. Yet he says his imprisonment has actually helped spread the message about Jesus, becoming a new believer was never a promise of an easy life, it&rsquo;s a promise of a present God.",
      lookForwardIdea: "a promise to claim is that God can use hard things for good (v12). Is there a hard thing in your week you could hand to him?",
      memoryVerse: { ref: "Philippians 1:21", text: "&ldquo;For to me to live is Christ, and to die is gain.&rdquo;" }
    },
    {
      id: "3", title: "The Heart of the Gospel", refs: ["Philippians 2:1&ndash;11"],
      summary: "Paul calls the Philippians to humility and unity, then grounds it in the ultimate example: Jesus, who was God, emptied himself and became a servant, and was exalted above every name.",
      leaderNote: "Verses 6&ndash;11 were likely an early Christian hymn or poem, one of the clearest, earliest descriptions of Jesus in the whole New Testament: he existed as God, emptied himself to the point of death on a cross, and was exalted above every name.",
      lookForwardIdea: "an example to follow is Jesus&rsquo; humility (v3&ndash;8). Is there one relationship this week where you could put someone else first?",
      memoryVerse: { ref: "Philippians 2:9&ndash;11", text: "&ldquo;Therefore God also highly exalted him, and gave to him the name which is above every name, that at the name of Jesus every knee should bow&hellip;and that every tongue should confess that Jesus Christ is Lord, to the glory of God the Father.&rdquo;" }
    },
    {
      id: "4", title: "Living It Out", refs: ["Philippians 2:12&ndash;30"],
      summary: "Paul calls the Philippians to work out the salvation God is already working in them, then holds up Timothy and Epaphroditus, two ordinary, faithful people, as examples.",
      leaderNote: "Paul moves from the big truth about Jesus (2:1&ndash;11) to what it looks like in daily life, and introduces two ordinary people, Timothy and Epaphroditus, as examples: not perfection, just faithful availability.",
      lookForwardIdea: "a behaviour to change might be complaining (v14). Is there a specific complaint you could let go of this week?",
      memoryVerse: { ref: "Philippians 2:13", text: "&ldquo;For it is God who works in you both to will and to work, for his good pleasure.&rdquo;" }
    },
    {
      id: "5", title: "Good Enough", refs: ["Philippians 3:1&ndash;21"],
      summary: "Paul lists his own impressive religious resume, then counts it all as loss compared to knowing Christ, urging the Philippians to press on toward what&rsquo;s ahead rather than what&rsquo;s behind.",
      leaderNote: "Paul lists his own impressive religious resume, then says it all counts for nothing compared to knowing Jesus. This is one of the clearest passages in the Bible on the difference between earning God&rsquo;s approval and simply receiving it.",
      lookForwardIdea: "a behaviour to change might be relying on your own performance to feel accepted. What would it look like to rest in grace instead this week?",
      memoryVerse: { ref: "Philippians 3:9", text: "&ldquo;and be found in him, not having a righteousness of my own, that which is of the law, but that which is through faith in Christ, the righteousness which is from God by faith.&rdquo;" }
    },
    {
      id: "6", title: "Peace That Doesn&rsquo;t Make Sense", refs: ["Philippians 4:1&ndash;23"],
      summary: "Paul closes with practical wisdom: rejoice always, bring every anxiety to God in prayer, think on what&rsquo;s good, and trust the secret of contentment whatever your circumstances.",
      leaderNote: "This is Paul&rsquo;s closing chapter, full of practical, down-to-earth wisdom. He&rsquo;s still writing from prison, so when he talks about peace and contentment, he isn&rsquo;t speaking from an easy life.",
      lookForwardIdea: "a command to obey is v6, bringing your anxiety to God instead of carrying it alone. What&rsquo;s one worry you&rsquo;ll specifically bring to him this week?",
      prayerNote: "Pray for what came up in Look Back, for each person&rsquo;s Look Forward response, and for the person they&rsquo;ll share this passage with. This is your last week together, so take extra time.",
      memoryVerse: { ref: "Philippians 4:6&ndash;7", text: "&ldquo;In nothing be anxious, but in everything, by prayer and petition with thanksgiving, let your requests be made known to God. And the peace of God, which surpasses all understanding, will guard your hearts and your thoughts in Christ Jesus.&rdquo;" }
    }
  ]
};
