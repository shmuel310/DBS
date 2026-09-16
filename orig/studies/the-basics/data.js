/* =========================================================================
   STUDY DATA: The Basics: From Creation to the Gospel
   A ten-session walk through the story of the whole Bible, adapted from the
   Discovery Bible Study rhythm used at myfriends.network/basics, restructured
   to fit this library's shared schema. Session 7 was originally a
   video-watching session; it's replaced here with a Scripture passage
   covering the same ground (Jesus' trial before Pilate), since this app has
   no video playback.
   ========================================================================= */

window.STUDY = {
  id: "the-basics",
  title: "The Basics",
  sessionNoun: "session",
  sessionsLabel: "Ten Sessions",
  stepTimes: { lookback: "20&ndash;30 min", lookup: "20&ndash;30 min", lookforward: "20&ndash;30 min" },
  lookForwardTemplate: "By (specific time) I will (action) so that (result/application).",

  welcomeCopy: {
    tagline: "from genesis to the gospel",
    titleHtml: "the<br>basics",
    lead: "Ten sessions through the story of the Bible, from creation to the cross and beyond. Read a little each time, discover the story God has been telling all along, and respond together, as a small group or one-on-one."
  },

  methodCopy: {
    lead: 'Every session follows the same <strong style="color:var(--ink-900);font-weight:600;">3 steps</strong>, in the same order, whether it&rsquo;s just the two of you or a small group. Altogether, expect it to take <strong style="color:var(--ink-900);font-weight:600;">around 90 minutes</strong>, though it&rsquo;s only ever a rough guide, a quicker 60 minutes works fine too.',
    lookBackBlurb: "A time to reconnect: how you&rsquo;ve experienced God this week, what you&rsquo;re thankful for, what&rsquo;s been hard, and how what you learned last time actually landed.",
    lookUpBlurb: "Read the passage aloud, retell it in your own words, and check you got the whole story. Then let a few questions do the real work.",
    lookForwardBlurb: "Turn what you&rsquo;ve discovered into a lived response: a behaviour, a promise, an example, or a command. Then put it into a specific goal, by when, what you&rsquo;ll do, and why it matters, decide who you&rsquo;ll share it with, and pray for each other before you finish.",
    respondItems: [
      "A behaviour to change?",
      "A promise to claim?",
      "An example to follow?",
      "A command to obey?"
    ],
    lookBackDefaults: [
      "How have you experienced God this week?",
      "What are you thankful for?",
      "Is there anything which has been bothering you since we last met?",
      "How did we go applying the insights from last time?",
      "How did we go sharing our insights from last time?"
    ]
  },

  finishCopy: {
    heading: "new life",
    body: "Ten sessions, from the garden to the empty tomb, one story about who God is, what&rsquo;s gone wrong, and what he&rsquo;s done about it. You&rsquo;ve looked back, looked up, and looked forward together the whole way. That&rsquo;s no small thing, and like the last session said, it&rsquo;s meant to be a beginning, not just an ending.",
    leadSomeoneElse: "This course was built to need no training, which means you&rsquo;re already qualified to lead someone else through it. You&rsquo;ve spent these sessions sharing each passage with someone, they&rsquo;re your obvious first invitation. When you&rsquo;re ready, reset your progress and start again with them.",
    nextStudy: "Without necessarily realising it, you&rsquo;ve been practising Discovery Bible Study, a simple, repeatable way of reading the Bible with someone: look back, look up, look forward. Keep using that same rhythm on your own, with any passage or book, Mark&rsquo;s Gospel is a great next study."
  },

  sessions: [
    {
      id: "1", title: "The Garden", refs: ["Genesis 2:4&ndash;25"],
      summary: "God forms the first man from the dust, breathes life into him, plants a garden for him to tend, and creates the woman as his equal and companion. Everything is described as good, and the man and woman are naked and unashamed.",
      lookBack: {
        note: "There&rsquo;s no &ldquo;last time&rdquo; yet, so start here instead.",
        questions: [
          "What&rsquo;s your name, and one thing about you the group might not know?",
          "Why do you want to get to know God better? What have you already experienced with God?",
          "What are your expectations? What do you hope to get out of these ten sessions together?",
          "How can we pray for you as we start this course?"
        ]
      },
      lookUpPrayer: "Never prayed aloud before? One sentence is plenty. Thank God for one thing that came up just now, then ask the Holy Spirit to help you see him clearly as you read.",
      leaderNote: "Genesis 2 is a close-up on day six of creation: two intertwined trees (life, and the knowledge of good and evil), a garden to tend, and one command with real freedom attached. The word translated &ldquo;helper&rdquo; for the woman is the same word used elsewhere for God himself, it&rsquo;s a term of strength, not weakness.",
      lookForwardIdea: "a promise to claim is that you&rsquo;re not an accident, God made you and called it very good. Where do you need to believe that about yourself this week?",
      memoryVerse: { ref: "Genesis 2:7", text: "Then the LORD God formed a man from the dust of the ground and breathed into his nostrils the breath of life, and the man became a living being." }
    },
    {
      id: "2", title: "The Choice", refs: ["Genesis 3:1&ndash;24"],
      summary: "A serpent convinces Eve, then Adam, to distrust God and eat from the one tree they were told to leave alone. Shame, blame, and separation from God and each other follow almost immediately.",
      lookUpPrayer: "Pray about what came up in Look Back, then ask the Holy Spirit to help you understand what you&rsquo;re about to read.",
      leaderNote: "The serpent doesn&rsquo;t force anything, he simply gets Adam and Eve to doubt what God actually said. Notice the immediate results: they hide, they blame each other, and God comes looking for them anyway.",
      lookForwardIdea: "a behaviour to change is hiding from God when you&rsquo;ve done wrong, like Adam and Eve did. Is there something you&rsquo;re avoiding bringing into the light with him?",
      memoryVerse: { ref: "Genesis 3:15", text: "And I will put enmity between you and the woman, and between your offspring and hers; he will crush your head, and you will strike his heel." }
    },
    {
      id: "3", title: "A Flood", refs: ["Genesis 6:5&ndash;7:24"],
      summary: "Human evil has spread so far that God grieves ever making humanity, and decides to flood the earth. Noah alone is found righteous, and builds an ark to preserve his family and the animals.",
      lookUpPrayer: "Bring what you just shared to God, then ask the Holy Spirit to reveal something in this passage you might otherwise miss.",
      leaderNote: "This passage runs right up to the flood itself and stops mid-story, the ark floating, the waters still rising. The resolution, the flood receding and God&rsquo;s rainbow promise, comes in the following chapters, worth reading on your own sometime.",
      lookForwardIdea: "an example to follow is Noah, who kept obeying even when it made no sense to anyone else. What&rsquo;s God asking you to keep doing even though it&rsquo;s hard to explain?",
      memoryVerse: { ref: "Genesis 6:8", text: "But Noah found favour in the eyes of the LORD." }
    },
    {
      id: "4", title: "Ten Things", refs: ["Deuteronomy 5:6&ndash;22"],
      summary: "God gives Israel ten commandments at Sinai, covering their relationship with him and with each other. They&rsquo;re framed not as a list to earn God&rsquo;s favour, but as a response to a rescue that&rsquo;s already happened.",
      lookUpPrayer: "Pray for each other about whatever came up in Look Back, then invite the Holy Spirit to open your eyes as you read.",
      leaderNote: "By this point in the story, God has already rescued Israel out of slavery in Egypt. Notice these commands open with that rescue (&ldquo;I am the Lord your God, who brought you out of Egypt&rdquo;), not with a threat, the law follows grace, it doesn&rsquo;t earn it.",
      lookForwardIdea: "a command to obey is one of these ten. Which one is hardest for you to keep right now, and why?",
      memoryVerse: { ref: "Deuteronomy 5:6", text: "I am the LORD your God, who brought you out of Egypt, out of the land of slavery." }
    },
    {
      id: "5", title: "A New Agreement", refs: ["Jeremiah 31:31&ndash;34", "Isaiah 59:1&ndash;2"], refDisplay: "Jeremiah 31:31&ndash;34; Isaiah 59:1&ndash;2",
      summary: "The prophet Jeremiah promises a coming day when God will make a new covenant, writing his law on hearts instead of stone tablets. Isaiah names the real barrier to that closeness: sin has separated people from God.",
      lookUpPrayer: "Try praying a full sentence or two this week: name what came up in Look Back, then ask the Holy Spirit to reveal something as you read.",
      leaderNote: "Centuries after the law was given, the prophets start pointing to a problem the law itself couldn&rsquo;t fix, and a promise of something new: God&rsquo;s ways written on hearts, not stone.",
      lookForwardIdea: "a promise to claim is that God will write his ways on your heart, not just hand you more rules. Where do you need his help from the inside out?",
      memoryVerse: { ref: "Jeremiah 31:33", text: "&ldquo;I will put my law in their minds and write it on their hearts. I will be their God, and they will be my people.&rdquo;" }
    },
    {
      id: "6", title: "The Servant", refs: ["Isaiah 52:13&ndash;53:12", "John 1:29&ndash;34"], refDisplay: "Isaiah 52:13&ndash;53:12; John 1:29&ndash;34",
      summary: "Isaiah describes a suffering servant, despised and rejected, who is pierced and crushed for other people&rsquo;s sin. Centuries later, John the Baptist looks at Jesus and calls him &ldquo;the Lamb of God, who takes away the sin of the world.&rdquo;",
      lookUpPrayer: "Pray honestly about what surfaced in Look Back, even the hard parts, then ask the Holy Spirit to help this passage land.",
      leaderNote: "Isaiah wrote this seven hundred years before Jesus, a suffering figure who bears punishment that isn&rsquo;t his own. John the Baptist is the first person in the Gospels to explicitly connect this Servant to Jesus.",
      lookForwardIdea: "a promise to claim is that Jesus took what you deserved so you wouldn&rsquo;t have to. Is there guilt you&rsquo;re still carrying that this passage says he already carried for you?",
      memoryVerse: { ref: "John 1:29", text: "The next day John saw Jesus coming toward him and said, &ldquo;Look, the Lamb of God, who takes away the sin of the world!&rdquo;" }
    },
    {
      id: "7", title: "A Video", refs: ["The Story of Jesus"],
      summary: "This session steps back from reading to watching: a film retelling Jesus&rsquo; life, teaching, and passion, then reflecting on what it means that he suffered for you.",
      lookUpPrayer: "Try praying specifically for each other this week, about what was just shared, then ask the Holy Spirit to guide what you notice as you watch.",
      video: {
        desc: "Watch a film telling the story of Jesus together, from his mission and teaching through to his trial and death. The JESUS Film runs about two hours, if you&rsquo;re short on time, starting from around the one-hour mark still covers his trial and death well.",
        url: "https://www.jesusfilm.org/watch/jesus.html/english.html",
        linkText: "watch the JESUS film"
      },
      discoveryQuestions: [
        "What has impressed you about what Jesus has said or done?",
        "How does Jesus describe his own mission or purpose?",
        "What does Jesus say will happen to him?",
        "What is Pilate&rsquo;s attitude toward Jesus, and why does he have him punished anyway?",
        "What does it mean to you that Jesus suffered so much for you?"
      ],
      leaderNote: "Watching together as a group, rather than everyone separately beforehand, makes for a much richer discussion. Other options besides the JESUS Film: Life of Jesus (the Gospel of John, word for word), Son of God, The Messiah (Bible Project), or The Passion of the Christ if your group is ready for its intensity.",
      lookForwardIdea: "a command to obey is Jesus&rsquo; call to trust him. Do you want to place your trust in Jesus today? If so, tell someone this week, or use the &lsquo;take your next step&rsquo; link at the end of this course.",
      memoryVerse: { ref: "John 1:14", text: "The Word became flesh and made his dwelling among us. We have seen his glory, the glory of the one and only Son, who came from the Father, full of grace and truth." }
    },
    {
      id: "8", title: "Talking with God", refs: ["Matthew 6:9&ndash;15"],
      summary: "Jesus teaches his followers how to pray, giving them the words that became known as the Lord&rsquo;s Prayer. He singles out one line afterward for extra explanation: forgiveness given and forgiveness received are tied together.",
      lookUpPrayer: "Pray about what came up in Look Back, then ask the Holy Spirit to help you pray honestly as you read Jesus&rsquo; own words on prayer.",
      leaderNote: "This prayer comes in the middle of the Sermon on the Mount. Jesus adds an explanation only to the line about forgiveness, straight after the prayer, that&rsquo;s not an accident.",
      lookForwardIdea: "a command to obey is forgiving someone the way you&rsquo;ve been forgiven. Is there anyone you&rsquo;re still holding something against?",
      memoryVerse: { ref: "Matthew 6:14", text: "&ldquo;For if you forgive other people when they sin against you, your heavenly Father will also forgive you.&rdquo;" }
    },
    {
      id: "9", title: "Wise or Foolish?", refs: ["Matthew 7:24&ndash;29", "James 1:22"], refDisplay: "Matthew 7:24&ndash;29; James 1:22",
      summary: "Jesus ends the Sermon on the Mount with a story about two builders, one wise, one foolish, who hear the same words and build on different foundations. James later puts it plainly: don&rsquo;t just listen, do something about what you&rsquo;ve heard.",
      lookUpPrayer: "Pray honestly about whether you&rsquo;ve been hearing without doing, then ask the Holy Spirit to help this passage change something, not just inform you.",
      leaderNote: "This is the closing image of the Sermon on the Mount, the whole sermon comes down to one question: did you just hear this, or did you build your life on it? If anyone raises a specific forgiveness situation left over from last session, that can take real time and confidentiality, it&rsquo;s fine to keep working on it beyond this one meeting.",
      lookForwardIdea: "a command to obey is actually doing what you&rsquo;ve heard, not just agreeing with it. What&rsquo;s one thing from this course you&rsquo;ve agreed with but haven&rsquo;t acted on?",
      memoryVerse: { ref: "James 1:22", text: "Do not merely listen to the word, and so deceive yourselves. Do what it says." }
    },
    {
      id: "10", title: "New Life", refs: ["Romans 6:3&ndash;14"],
      summary: "Paul explains what baptism actually means: going under the water pictures dying with Christ, and coming back up pictures rising to a genuinely new life. Sin no longer gets to be the master.",
      lookUpPrayer: "Pray about everything this course has stirred up in you, then ask the Holy Spirit to make this passage feel real as you read it together for the last time.",
      leaderNote: "Paul is answering an objection: if grace covers everything, why not just keep sinning? His answer isn&rsquo;t a new rule, it&rsquo;s a new identity, baptism pictures dying with Christ and rising to a life sin no longer owns.",
      lookForwardIdea: "a promise to claim is that your old life is genuinely finished and a new one has begun. Baptism pictures it, is there a next step you need to take to live like it&rsquo;s true?",
      prayerNote: "Pray for what came up in Look Back, for each person&rsquo;s Look Forward response, and for the person they&rsquo;ll share this passage with. This is your last session together, so take extra time.",
      memoryVerse: { ref: "Romans 6:4", text: "We were therefore buried with him through baptism into death in order that, just as Christ was raised from the dead through the glory of the Father, we too may live a new life." }
    }
  ]
};
