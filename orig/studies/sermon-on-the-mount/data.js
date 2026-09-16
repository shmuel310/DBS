/* =========================================================================
   STUDY DATA: The Sermon on the Mount
   An eight-session study through Matthew 5&ndash;7, subdivided more finely
   than a typical chapter-per-session study since the teaching itself is
   dense. Uses the engine's standard discovery questions and respond items,
   no per-study overrides needed.
   ========================================================================= */

window.STUDY = {
  id: "sermon-on-the-mount",
  title: "The Sermon on the Mount",
  book: "Matthew",
  sessionNoun: "session",
  sessionsLabel: "Eight Sessions",

  welcomeCopy: {
    tagline: "the ethics of the kingdom of heaven",
    titleHtml: "blessed<br>are<br>you",
    lead: "Three chapters, and maybe the most famous sermon ever given: how to live as citizens of God&rsquo;s kingdom, not by chasing rules but through a changed heart. Read a little each session, discover what real righteousness looks like, and put it into practice together, as a small group or one-on-one."
  },

  methodCopy: {
    lead: 'Every session follows the same <strong style="color:var(--ink-900);font-weight:600;">3 steps</strong>, in the same order, whether it&rsquo;s just the two of you or a small group. Altogether, expect it to take <strong style="color:var(--ink-900);font-weight:600;">around 75&ndash;90 minutes</strong>, though it&rsquo;s only ever a rough guide, this is some of the densest teaching in the Bible.',
    lookBackBlurb: "A quick, honest check-in before you open the Bible: how last time went, what you noticed since, and how you can pray for each other.",
    lookUpBlurb: "Read the passage aloud, retell it in your own words, and check you got the whole teaching. Then let a few questions do the real work.",
    lookForwardBlurb: "Turn what you&rsquo;ve discovered into a lived response: a behaviour, a promise, an example, or a command. Decide who you&rsquo;ll share it with this week, then pray for each other before you finish."
  },

  finishCopy: {
    heading: "built on the rock",
    body: "Eight sessions through maybe the most famous sermon ever preached, and Jesus&rsquo; own closing image is the whole point: hearing these words isn&rsquo;t the goal, building your life on them is. You&rsquo;ve looked back, looked up, and looked forward together the whole way. That&rsquo;s no small thing, and it&rsquo;s not really an ending.",
    leadSomeoneElse: "This course was built to need no training, which means you&rsquo;re already qualified to lead someone else through it. You&rsquo;ve spent these sessions sharing each passage with someone, they&rsquo;re your obvious first invitation. When you&rsquo;re ready, reset your progress and start again with them.",
    nextStudy: "Without necessarily realising it, you&rsquo;ve been practising Discovery Bible Study, a simple, repeatable way of reading the Bible with someone. Keep using that same rhythm on your own, with any passage or book, there&rsquo;s a whole library of other studies here worth exploring too."
  },

  sessions: [
    {
      id: "1", title: "Blessed", refs: ["Matthew 5:1&ndash;12"],
      summary: "Jesus goes up a mountainside and begins teaching his disciples with a list of blessings that turn the world&rsquo;s values upside down: the poor in spirit, those who mourn, the meek, are the ones he calls blessed.",
      lookBack: {
        note: "There&rsquo;s no &ldquo;last time&rdquo; yet, so start here instead.",
        questions: [
          "What&rsquo;s your name, and one thing about you the group might not know?",
          "What led you to start following Jesus, or to want to learn more?",
          "What are you hoping to get out of these eight sessions together?",
          "What are you thankful for this week?",
          "How can we pray for you as we start this course?"
        ]
      },
      leaderNote: "The Sermon on the Mount is delivered on a Galilean hillside, echoing Moses receiving the law on a mountain, but here Jesus teaches with his own authority, &ldquo;but I say to you.&rdquo; The Beatitudes aren&rsquo;t requirements to earn blessing, they&rsquo;re a description of what kingdom life already looks like.",
      lookForwardIdea: "an example to follow is what the Beatitudes actually describe: people who mourn, who hunger for righteousness, who show mercy (v3&ndash;9). Which of these already describes something happening in you this week?",
      memoryVerse: { ref: "Matthew 5:8", text: "&ldquo;Blessed are the pure in heart, for they will see God.&rdquo;" }
    },
    {
      id: "2", title: "Salt, Light, and the Law", refs: ["Matthew 5:13&ndash;20"],
      summary: "Jesus tells his followers they are salt and light in the world, then makes clear he hasn&rsquo;t come to abolish the law and the prophets but to fulfil them completely.",
      leaderNote: "Salt preserved and flavoured food in the ancient world, light made life and work possible after dark. Jesus isn&rsquo;t offering two nice metaphors, he&rsquo;s describing what his followers actually are. &ldquo;Fulfil&rdquo; (v17) means Jesus completes and reveals the true intent behind the law, not that it stops mattering.",
      lookForwardIdea: "a command to obey is to let your light shine before others (v16). Where&rsquo;s one place this week your everyday life could visibly point to God?",
      memoryVerse: { ref: "Matthew 5:16", text: "&ldquo;let your light shine before others, that they may see your good deeds and glorify your Father in heaven.&rdquo;" }
    },
    {
      id: "3", title: "A Greater Righteousness", refs: ["Matthew 5:21&ndash;48"],
      summary: "Jesus takes six familiar commands, murder, adultery, divorce, oaths, revenge, loving your neighbour, and shows that God&rsquo;s law was always aimed at the heart, not just outward behaviour.",
      leaderNote: "Six times Jesus says &ldquo;you have heard that it was said&hellip;but I say to you,&rdquo; each time raising the bar from the outward act to the attitude behind it. This isn&rsquo;t Jesus adding new rules, it&rsquo;s Jesus revealing what the law was always meant to produce.",
      lookForwardIdea: "a behaviour to change might be anger, lust, or a grudge you&rsquo;re carrying (v21&ndash;26, 27&ndash;30, 38&ndash;42). Which of these six is God putting his finger on for you this week?",
      memoryVerse: { ref: "Matthew 5:44", text: "&ldquo;But I tell you, love your enemies and pray for those who persecute you.&rdquo;" }
    },
    {
      id: "4", title: "Practising Your Faith in Secret", refs: ["Matthew 6:1&ndash;18"],
      summary: "Jesus warns against showing off generosity, prayer, and fasting for an audience, then teaches his disciples how to pray, the Lord&rsquo;s Prayer.",
      leaderNote: "Three ordinary religious practices, giving, praying, fasting, get the same treatment: do them for God, not for applause. The Lord&rsquo;s Prayer sitting in the middle isn&rsquo;t a formula to recite so much as a pattern: God&rsquo;s name, God&rsquo;s kingdom, our needs, our forgiveness, our protection.",
      lookForwardIdea: "a promise to trust is that your Father, who sees what&rsquo;s done in secret, will reward you (v4, v6, v18). Is there a way you serve or pray that only God needs to see this week?",
      memoryVerse: { ref: "Matthew 6:9&ndash;10", text: "&ldquo;This, then, is how you should pray: &lsquo;Our Father in heaven, hallowed be your name, your kingdom come, your will be done, on earth as it is in heaven.&rsquo;&rdquo;" }
    },
    {
      id: "5", title: "Treasure and Trust", refs: ["Matthew 6:19&ndash;34"],
      summary: "Jesus contrasts storing up treasure on earth with storing up treasure in heaven, then tells his anxious disciples not to worry about food or clothes, but to seek God&rsquo;s kingdom first.",
      leaderNote: "&ldquo;You cannot serve both God and money&rdquo; (v24) is the hinge of this whole section, everything about worry and treasure flows from who or what you actually trust. Verse 33, &ldquo;seek first,&rdquo; is one of the most quoted lines in the sermon for a reason.",
      lookForwardIdea: "a promise to trust is that God will provide what you need if you seek his kingdom first (v33). What&rsquo;s the worry you could specifically hand over this week?",
      memoryVerse: { ref: "Matthew 6:33", text: "&ldquo;But seek first his kingdom and his righteousness, and all these things will be given to you as well.&rdquo;" }
    },
    {
      id: "6", title: "Judging and the Golden Rule", refs: ["Matthew 7:1&ndash;12"],
      summary: "Jesus warns against judging others while ignoring your own faults, encourages persistent asking, seeking, and knocking in prayer, and sums up the law and the prophets in a single sentence.",
      leaderNote: "The &ldquo;speck and plank&rdquo; image (v3&ndash;5) is deliberately comic, exaggerated to make the point land: deal with your own faults before picking apart someone else&rsquo;s. The Golden Rule (v12) isn&rsquo;t a throwaway ethic, Jesus calls it a summary of the entire Old Testament.",
      lookForwardIdea: "a command to obey is the Golden Rule itself (v12): do to others what you&rsquo;d want done to you. Where could you apply that literally this week?",
      memoryVerse: { ref: "Matthew 7:12", text: "&ldquo;So in everything, do to others what you would have them do to you, for this sums up the Law and the Prophets.&rdquo;" }
    },
    {
      id: "7", title: "The Narrow Road", refs: ["Matthew 7:13&ndash;23"],
      summary: "Jesus warns that the road to life is narrow and few find it, that false prophets can be recognised by their fruit, and that not everyone who calls him &ldquo;Lord&rdquo; actually knows him.",
      leaderNote: "This is the sermon&rsquo;s most sobering turn: Jesus has just described kingdom life beautifully, now he warns that not everyone who looks or sounds religious is actually on the narrow road. &ldquo;By their fruit you will recognise them&rdquo; (v16) is the test, not words or even miracles, but the actual shape of a life.",
      lookForwardIdea: "an example to follow is bearing good fruit, not just saying the right things (v16&ndash;20). What&rsquo;s one place where your actions and your words don&rsquo;t quite match up yet?",
      memoryVerse: { ref: "Matthew 7:14", text: "&ldquo;small is the gate and narrow the road that leads to life, and only a few find it.&rdquo;" }
    },
    {
      id: "8", title: "Building on the Rock", refs: ["Matthew 7:24&ndash;29"],
      summary: "Jesus closes the sermon with a story: two builders hear the same words, but only the one who puts them into practice survives the storm. The crowds are amazed, because Jesus teaches with real authority.",
      leaderNote: "This isn&rsquo;t a parable about two kinds of belief, both builders &ldquo;hear&rdquo; the same words, the only difference is one puts them into practice. Matthew notes the crowds were astonished at Jesus&rsquo; authority, not just his wisdom, unlike their teachers of the law.",
      lookForwardIdea: "a command to obey is simply this: don&rsquo;t just hear these eight sessions, put them into practice (v24&ndash;27). Of everything you&rsquo;ve heard, what&rsquo;s the one thing you most need to actually do?",
      prayerNote: "Pray for what came up in Look Back, for each person&rsquo;s Look Forward response, and for the person they&rsquo;ll share this passage with. This is your last session together, so take extra time.",
      memoryVerse: { ref: "Matthew 7:24", text: "&ldquo;Therefore everyone who hears these words of mine and puts them into practice is like a wise man who built his house on the rock.&rdquo;" }
    }
  ]
};
