/* =========================================================================
   STUDY DATA: Learn to Follow Jesus
   An eight-session discipleship-practices study adapted from
   learn_to_follow_jesus_-_5.1.2020.pdf in Darren's reading-plan collection.
   Each session pairs two passages with a hands-on "training" practice, the
   first study to use the schema's trainingAction field.
   ========================================================================= */

window.STUDY = {
  id: "learn-to-follow-jesus",
  title: "Learn to Follow Jesus",
  sessionNoun: "session",
  sessionsLabel: "Eight Lessons",
  stepTimes: { lookback: "20&ndash;30 min", lookup: "20&ndash;30 min", lookforward: "20&ndash;30 min" },

  welcomeCopy: {
    tagline: "for disciples who make disciples",
    titleHtml: "learn<br>to<br>follow",
    lead: "Eight practical lessons for learning to follow Jesus, and helping someone else do the same, from baptism and prayer to communion and unity. Read a little each session, practice what you learn together, and pass it on, as a small group or one-on-one."
  },

  methodCopy: {
    lead: 'Every session follows the same <strong style="color:var(--ink-900);font-weight:600;">3 steps</strong>, in the same order, whether it&rsquo;s just the two of you or a small group. Altogether, expect it to take <strong style="color:var(--ink-900);font-weight:600;">around 90 minutes</strong>, though it&rsquo;s only ever a rough guide, a quicker 60 minutes works fine too.',
    lookBackBlurb: "A time to reconnect: what you&rsquo;re thankful for, what&rsquo;s been a challenge, and how you went applying and practising what you learned last time, including who you told.",
    lookUpBlurb: "Read both passages aloud, retell them in your own words, and check you got the whole story. Then let a few questions do the real work.",
    lookForwardBlurb: "Turn what you&rsquo;ve discovered into something you&rsquo;ll actually do this week, then try the hands-on practice that goes with this session. Decide who you&rsquo;ll tell about it, then pray for each other before you finish.",
    lookBackDefaults: [
      "What are you thankful for this week?",
      "What are you struggling with or stressed by, in your family, friends, or neighbours?",
      "How did we go applying the insights from last time?",
      "How did we go sharing our insights from last time?"
    ]
  },

  finishCopy: {
    heading: "make disciples",
    body: "Eight lessons in following Jesus, and in helping someone else follow him too. You&rsquo;ve looked back, looked up, and looked forward together the whole way, practising, not just learning. That&rsquo;s no small thing, and it&rsquo;s not really an ending, you were trained to go train someone else.",
    leadSomeoneElse: "This course was built to need no training beyond what it already gave you, which means you&rsquo;re already qualified to lead someone else through it. You&rsquo;ve spent these sessions sharing each passage and practice with someone, they&rsquo;re your obvious first invitation. When you&rsquo;re ready, reset your progress and start again with them.",
    nextStudy: "Without necessarily realising it, you&rsquo;ve been practising Discovery Bible Study, a simple, repeatable way of reading the Bible with someone: look back, look up, look forward. Keep using that same rhythm on your own, with any passage or book, there&rsquo;s a whole library of other studies here worth exploring too."
  },

  sessions: [
    {
      id: "1", title: "Make Disciples", refs: ["2 Corinthians 5:17&ndash;21", "Acts 1:8"], refDisplay: "2 Corinthians 5:17&ndash;21; Acts 1:8",
      summary: "Paul describes what it means to be a new creation in Christ and Christ&rsquo;s ambassador of reconciliation, while Jesus tells his followers they&rsquo;ll be his witnesses, empowered by the Holy Spirit, starting right where they are and reaching to the ends of the earth.",
      lookBack: {
        note: "There&rsquo;s no &ldquo;last time&rdquo; yet, so start here instead.",
        questions: [
          "What&rsquo;s your name, and one thing about you the group might not know?",
          "What&rsquo;s one thing about following Jesus you feel confident about, and one thing you feel unsure of?",
          "What are you hoping to get out of these eight sessions together?",
          "How can we pray for you as we start this course?"
        ]
      },
      lookUpPrayer: "Never prayed aloud before? One sentence is plenty. Thank God for one thing that came up just now, then ask the Holy Spirit to help you see this passage clearly.",
      leaderNote: "These two passages work together: 2 Corinthians 5 explains why you&rsquo;d want to tell anyone anything, you&rsquo;ve been reconciled, and given a message of reconciliation to carry, and Acts 1:8 explains how it actually happens, not by your own effort, but by the Holy Spirit&rsquo;s power.",
      lookForwardIdea: "a command to obey is being Christ&rsquo;s ambassador wherever you already are. Who&rsquo;s the one person nearest to you, geographically or relationally, that you could actually tell this week?",
      trainingAction: "Practice a 15-second testimony: in one breath, tell someone briefly who you were before Jesus, what changed, and who you are now. Then try the &ldquo;3 Circles&rdquo; sketch (Design &rarr; Brokenness &rarr; Gospel &rarr; Life in Jesus) with each other before you try it with someone outside the group.",
      memoryVerse: { ref: "Acts 1:8", text: "&ldquo;But you will receive power when the Holy Spirit comes on you; and you will be my witnesses in Jerusalem, and in all Judea and Samaria, and to the ends of the earth.&rdquo;" }
    },
    {
      id: "2", title: "Baptism", refs: ["Acts 8:26&ndash;40", "Matthew 28:18&ndash;20"], refDisplay: "Acts 8:26&ndash;40; Matthew 28:18&ndash;20",
      summary: "Philip explains the good news to an Ethiopian official, who asks to be baptised the moment he sees water, while Jesus commissions his disciples to make disciples of all nations, baptising and teaching them everything he&rsquo;s commanded.",
      lookUpPrayer: "Pray about what came up in Look Back, then ask the Holy Spirit to help you understand what you&rsquo;re about to read.",
      leaderNote: "Notice how immediate the Ethiopian&rsquo;s response is, he doesn&rsquo;t wait, prepare, or overthink it, he simply asks &ldquo;why shouldn&rsquo;t I be baptised?&rdquo; the moment the opportunity is there.",
      lookForwardIdea: "a command to obey is this one directly. If you haven&rsquo;t been baptised, what&rsquo;s actually stopping you? If you have, who could you help take this same step?",
      trainingAction: "If you haven&rsquo;t been baptised, talk with your leader about planning it. If you have, practice explaining what baptism means and why you did it, in under a minute, as if explaining it to a friend who&rsquo;s never heard of it.",
      memoryVerse: { ref: "Matthew 28:19", text: "&ldquo;Therefore go and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit.&rdquo;" }
    },
    {
      id: "3", title: "Prayer", refs: ["Luke 11:1&ndash;13", "Ephesians 6:18"], refDisplay: "Luke 11:1&ndash;13; Ephesians 6:18",
      summary: "The disciples ask Jesus to teach them to pray, and he gives them the Lord&rsquo;s Prayer along with a story about a persistent friend at midnight, teaching them to keep asking. Paul later urges believers to pray in the Spirit on all occasions.",
      lookUpPrayer: "This session is literally about prayer, so take your time here: pray about what came up in Look Back, and let it run longer than usual.",
      leaderNote: "The disciples&rsquo; request, &ldquo;Lord, teach us to pray&rdquo;, is itself worth noticing, they&rsquo;d watched Jesus pray and wanted what he clearly had. The persistent friend parable isn&rsquo;t about God being reluctant, it&rsquo;s about not giving up.",
      lookForwardIdea: "a command to obey is Paul&rsquo;s instruction to pray on all occasions, not just in a crisis. What would a realistic, repeatable prayer rhythm actually look like in your week?",
      trainingAction: "Build your own simple, repeatable prayer guide, five or six short prompts (adoration, confession, thanksgiving, requests, for example) you can run through in five minutes, anywhere, any day.",
      memoryVerse: { ref: "Luke 11:9", text: "&ldquo;So I say to you: Ask and it will be given to you; seek and you will find; knock and the door will be opened to you.&rdquo;" }
    },
    {
      id: "4", title: "Abide in Christ", refs: ["John 15:1&ndash;27", "2 Timothy 3:16&ndash;17"], refDisplay: "John 15:1&ndash;27; 2 Timothy 3:16&ndash;17",
      summary: "Jesus describes himself as the vine and his followers as the branches, staying connected to him as the only way to bear real fruit. Paul later reminds Timothy that Scripture itself is how believers are equipped for every good work.",
      lookUpPrayer: "Pray for each other about whatever came up in Look Back, then invite the Holy Spirit to help you stay attached to Jesus as you read.",
      leaderNote: "This is part of Jesus&rsquo; final long conversation with his disciples before his arrest. Notice the warning isn&rsquo;t about working harder, it&rsquo;s about staying attached, a branch cut off from the vine can&rsquo;t will itself into bearing fruit.",
      lookForwardIdea: "a promise to trust is that apart from Jesus you can do nothing, but remaining in him, you&rsquo;ll bear much fruit. What&rsquo;s one practical rhythm that would help you stay attached to him this week?",
      trainingAction: "Learn S.O.A.P.S: read a short passage of Scripture, note one Observation, one Application, one Prayer, then Share it with someone else this week.",
      memoryVerse: { ref: "John 15:5", text: "&ldquo;I am the vine; you are the branches. If you remain in me and I in you, you will bear much fruit; apart from me you can do nothing.&rdquo;" }
    },
    {
      id: "5", title: "Love God and Neighbour", refs: ["Luke 10:25&ndash;37", "1 John 3:16&ndash;18"], refDisplay: "Luke 10:25&ndash;37; 1 John 3:16&ndash;18",
      summary: "Asked to define &ldquo;neighbour,&rdquo; Jesus tells the story of the Good Samaritan, the unexpected hero who actually helps. John later says real love isn&rsquo;t just words, it&rsquo;s laying down your life, in ordinary, practical ways, for people in need.",
      lookUpPrayer: "Try praying a full sentence or two this week: name what came up in Look Back, then ask the Holy Spirit to reveal something as you read.",
      leaderNote: "The expert in the law asks this question to justify himself, to find the edge of his responsibility. Jesus&rsquo; story refuses to give him one, love has no boundary line.",
      lookForwardIdea: "a command to obey is loving with actions and truth, not just words. Who&rsquo;s someone with a practical need you could actually meet this week, not just sympathise with?",
      trainingAction: "As a group, commit together to give some combination of Time, Talents, or Treasure to a specific person or need this week, then check back in on how it went.",
      memoryVerse: { ref: "1 John 3:18", text: "Dear children, let us not love with words or speech but with actions and in truth." }
    },
    {
      id: "6", title: "Perseverance", refs: ["Acts 5:12&ndash;42", "1 Peter 4:12&ndash;16"], refDisplay: "Acts 5:12&ndash;42; 1 Peter 4:12&ndash;16",
      summary: "The apostles are flogged and ordered to stop preaching about Jesus, and leave the council rejoicing that they were considered worthy to suffer for his name. Peter later tells suffering believers not to be surprised by trials, but to see them as sharing in Christ&rsquo;s sufferings.",
      lookUpPrayer: "Pray honestly about what surfaced in Look Back, even the hard parts, then ask the Holy Spirit to help this passage land.",
      leaderNote: "Notice the apostles&rsquo; response isn&rsquo;t grim endurance, it&rsquo;s joy, they&rsquo;re glad to suffer for a name they believe is worth it. That&rsquo;s a very different posture than simply gritting your teeth.",
      lookForwardIdea: "a command to obey is not being ashamed to suffer for being a Christian, but praising God instead. Where has following Jesus cost you something socially or personally, and how did you actually respond?",
      trainingAction: "Practice standing up for your faith in a low-stakes way this week: say something true about what you believe out loud to someone, even if it feels uncomfortable.",
      memoryVerse: { ref: "Acts 5:41", text: "The apostles left the Sanhedrin, rejoicing because they had been counted worthy of suffering disgrace for the Name." }
    },
    {
      id: "7", title: "Communion", refs: ["1 Corinthians 11:23&ndash;34", "Acts 2:42&ndash;47"], refDisplay: "1 Corinthians 11:23&ndash;34; Acts 2:42&ndash;47",
      summary: "Paul passes on what he received from the Lord about the meaning of communion, remembering Jesus&rsquo; body and blood, and warns against taking it carelessly. Acts describes the earliest church devoted to this meal together, alongside teaching, fellowship, and prayer.",
      lookUpPrayer: "Try praying specifically for each other this week, about what was just shared, then ask the Holy Spirit to prepare your hearts before you take communion.",
      leaderNote: "Paul is correcting a real problem in Corinth, some were taking communion selfishly while others went hungry, so he grounds the practice back in what it actually means: proclaiming the Lord&rsquo;s death until he comes.",
      lookForwardIdea: "a command to obey is Paul&rsquo;s instruction to examine yourself before taking part. What would it look like to take communion this week with real intention, not just habit?",
      trainingAction: "Take communion together as a group, using bread and juice or wine, and let someone unfamiliar with it lead the group through what it means and why you do it.",
      memoryVerse: { ref: "1 Corinthians 11:26", text: "For whenever you eat this bread and drink this cup, you proclaim the Lord&rsquo;s death until he comes." }
    },
    {
      id: "8", title: "Be One", refs: ["Acts 2:36&ndash;47", "John 17:20&ndash;21"], refDisplay: "Acts 2:36&ndash;47; John 17:20&ndash;21",
      summary: "The earliest church is described as devoted to each other, sharing everything, meeting daily, and growing. Jesus, praying the night before his death, asks the Father that all his followers would be one, so that the world would believe.",
      lookUpPrayer: "Pray about everything this course has stirred up in you, then ask the Holy Spirit to make this passage feel like a real prayer for unity, not just words.",
      leaderNote: "Jesus prays for unity specifically so that &ldquo;the world may believe,&rdquo; unity among believers isn&rsquo;t just nice to have, in Jesus&rsquo; own words it&rsquo;s part of how people come to trust the message at all.",
      lookForwardIdea: "a command to obey is Jesus&rsquo; own prayer for oneness. Is there a specific relationship in your church family that needs repair or attention for that prayer to be more true?",
      trainingAction: "Practice a &ldquo;church circle&rdquo;: sit together and each name one specific way you&rsquo;ll help keep this group, or your wider church family, unified this week.",
      prayerNote: "Pray for what came up in Look Back, for each person&rsquo;s Look Forward response, and for the person they&rsquo;ll share this passage with. This is your last session together, so take extra time.",
      memoryVerse: { ref: "John 17:21", text: "&ldquo;that all of them may be one, Father, just as you are in me and I am in you. May they also be in us so that the world may believe that you have sent me.&rdquo;" }
    }
  ]
};
