/* =========================================================================
   STUDY DATA: Overcoming Fear
   A twelve-session topical study, adapted from the "Overcoming Fear" DBS set
   in Darren's reading-plan collection. Each passage is paired with its own
   "promise" verse (the schema's promiseVerse field), used for the first time
   here, and that promise verse also doubles as the session's memory verse.
   ========================================================================= */

window.STUDY = {
  id: "overcoming-fear",
  title: "Overcoming Fear",
  sessionNoun: "session",
  sessionsLabel: "Twelve Stories",
  stepTimes: { lookback: "20&ndash;30 min", lookup: "20&ndash;30 min", lookforward: "20&ndash;30 min" },
  defaultReadNote: "the passage aloud, then look for the promise verse within it.",
  lookForwardTemplate: "I will ______________________________.",

  welcomeCopy: {
    tagline: "the most repeated command in the bible",
    titleHtml: "fear<br>not",
    lead: "&ldquo;Do not be afraid&rdquo; is said so often throughout the Bible that it&rsquo;s often called the most repeated command of all, some count it close to 365 times, one for every day of the year. Look at one story each session, discover the promise inside it, and learn to trust it together, as a small group or one-on-one."
  },

  methodCopy: {
    lead: 'Every session follows the same <strong style="color:var(--ink-900);font-weight:600;">3 steps</strong>, in the same order, whether it&rsquo;s just the two of you or a small group. Altogether, expect it to take <strong style="color:var(--ink-900);font-weight:600;">around 90 minutes</strong>, though it&rsquo;s only ever a rough guide, a quicker 60 minutes works fine too.',
    lookBackBlurb: "A time to reconnect: what you&rsquo;re thankful for, what&rsquo;s been a challenge, and how your &lsquo;I will&rsquo; statement from last time actually went.",
    lookUpBlurb: "Read the passage aloud, retell it in your own words, and check you got the whole story. Then let a few questions do the real work, and take special notice of the promise verse paired with this passage.",
    lookForwardBlurb: "Turn what you&rsquo;ve discovered into an &lsquo;I will&rsquo; statement, something specific you&rsquo;ll actually do this week. Decide who you&rsquo;ll tell about it, then pray for each other before you finish.",
    lookBackDefaults: [
      "What are you thankful for this week?",
      "What&rsquo;s a challenge you&rsquo;re facing right now?",
      "How did we go applying the insights from last time?",
      "How did we go sharing our insights from last time?"
    ]
  },

  finishCopy: {
    heading: "fear not",
    body: "Twelve stories, one promise repeated again and again: do not be afraid. You&rsquo;ve looked back, looked up, and looked forward together the whole way, watching God meet fear with his presence, every single time. That&rsquo;s no small thing, and it&rsquo;s not really an ending, fear has a way of returning, but so does this promise.",
    leadSomeoneElse: "This course was built to need no training, which means you&rsquo;re already qualified to lead someone else through it. You&rsquo;ve spent these sessions sharing each passage with someone, they&rsquo;re your obvious first invitation. When you&rsquo;re ready, reset your progress and start again with them.",
    nextStudy: "Without necessarily realising it, you&rsquo;ve been practising Discovery Bible Study, a simple, repeatable way of reading the Bible with someone: look back, look up, look forward. Keep using that same rhythm on your own, with any passage or book, Mark&rsquo;s Gospel, The Basics, and The Commands of Jesus are all great next studies."
  },

  sessions: [
    {
      id: "1", title: "Through the Sea", refs: ["Exodus 14"],
      summary: "Israel is trapped between Pharaoh&rsquo;s army and the Red Sea, terrified, and Moses tells them to stand firm and watch God fight for them. Then the sea splits and they cross on dry ground.",
      lookBack: {
        note: "There&rsquo;s no &ldquo;last time&rdquo; yet, so start here instead.",
        questions: [
          "What&rsquo;s your name, and one thing about you the group might not know?",
          "What&rsquo;s something you&rsquo;re genuinely afraid of, big or small?",
          "What are you hoping to get out of these twelve sessions together?",
          "How can we pray for you as we start this course?"
        ]
      },
      lookUpPrayer: "Never prayed aloud before? One sentence is plenty. Thank God for one thing that came up just now, then ask the Holy Spirit to help you see this story clearly.",
      leaderNote: "This is Israel&rsquo;s first major test of faith after leaving Egypt, trapped with a mountain range on one side, the sea on the other, and the most powerful army of their time closing in behind them. Notice the people&rsquo;s fear isn&rsquo;t treated as weakness, God moves in response to it, not in spite of them expressing it.",
      lookForwardIdea: "a promise to trust is that God fights for you when you can&rsquo;t fight for yourself. What&rsquo;s the situation this week where you feel trapped, with no way forward?",
      promiseVerse: { ref: "Exodus 14:13", text: "Moses answered the people, &ldquo;Do not be afraid. Stand firm, and you will see the deliverance the LORD will bring you today.&rdquo;" },
      memoryVerse: { ref: "Exodus 14:13", text: "Moses answered the people, &ldquo;Do not be afraid. Stand firm, and you will see the deliverance the LORD will bring you today.&rdquo;" }
    },
    {
      id: "2", title: "The Giant", refs: ["1 Samuel 17"],
      summary: "A giant terrifies Israel&rsquo;s whole army for forty days, and a shepherd boy nobody expected steps up, refusing to fight Goliath on Goliath&rsquo;s terms.",
      lookUpPrayer: "Pray about what came up in Look Back, then ask the Holy Spirit to help you understand what you&rsquo;re about to read.",
      leaderNote: "Goliath was roughly nine feet tall by the description given, and had issued his taunting challenge every day for forty days while the entire Israelite army, including trained soldiers, stayed frozen in fear. David is the only one who reframes the fight as God&rsquo;s battle, not his own.",
      lookForwardIdea: "an example to follow is David refusing to fight on the giant&rsquo;s terms. What&rsquo;s the &ldquo;giant&rdquo; in your life you&rsquo;ve been sizing up by the wrong measure, your own strength instead of God&rsquo;s?",
      promiseVerse: { ref: "1 Samuel 17:45", text: "David said to the Philistine, &ldquo;You come against me with sword and spear and javelin, but I come against you in the name of the LORD Almighty, the God of the armies of Israel, whom you have defied.&rdquo;" },
      memoryVerse: { ref: "1 Samuel 17:45", text: "David said to the Philistine, &ldquo;You come against me with sword and spear and javelin, but I come against you in the name of the LORD Almighty, the God of the armies of Israel, whom you have defied.&rdquo;" }
    },
    {
      id: "3", title: "The Shepherd", refs: ["Psalm 23"],
      summary: "David pictures God as a shepherd who leads, provides, and stays present even walking through the darkest valley.",
      lookUpPrayer: "Bring what you just shared to God, then ask the Holy Spirit to reveal something in this passage you might otherwise miss.",
      leaderNote: "This is likely the most memorised psalm in the Bible. The image of a shepherd would have been immediately familiar to David&rsquo;s first readers, a shepherd doesn&rsquo;t just feed the sheep, he physically protects them from real danger.",
      lookForwardIdea: "a promise to trust is that goodness and love will follow you all the days of your life. Where do you need reminding that God&rsquo;s presence with you doesn&rsquo;t depend on how the day is going?",
      promiseVerse: { ref: "Psalm 23:6", text: "Surely your goodness and love will follow me all the days of my life, and I will dwell in the house of the LORD forever." },
      memoryVerse: { ref: "Psalm 23:6", text: "Surely your goodness and love will follow me all the days of my life, and I will dwell in the house of the LORD forever." }
    },
    {
      id: "4", title: "In the Shelter", refs: ["Psalm 91"],
      summary: "The psalmist describes the safety of living close to God, using pictures of shelter, shadow, and protection from unseen dangers.",
      lookUpPrayer: "Pray for each other about whatever came up in Look Back, then invite the Holy Spirit to open your eyes as you read.",
      leaderNote: "This psalm doesn&rsquo;t promise a life without danger, it promises a particular kind of security within it, dwelling &ldquo;in the shelter of the Most High&rdquo; (v1) is the condition the rest of the psalm builds on.",
      lookForwardIdea: "a promise to trust is that no harm will overtake you where God has placed his angels in charge of you. What&rsquo;s the specific fear this promise speaks directly into for you this week?",
      promiseVerse: { ref: "Psalm 91:10&ndash;11", text: "no harm will overtake you, no disaster will come near your tent. For he will command his angels concerning you to guard you in all your ways." },
      memoryVerse: { ref: "Psalm 91:10&ndash;11", text: "no harm will overtake you, no disaster will come near your tent. For he will command his angels concerning you to guard you in all your ways." }
    },
    {
      id: "5", title: "Do Not Worry", refs: ["Matthew 6:25&ndash;34"],
      summary: "Jesus tells his followers not to worry about food, clothes, or tomorrow, pointing to how God cares for birds and wildflowers as reason to trust him with much bigger things, like your own life.",
      lookUpPrayer: "Try praying a full sentence or two this week: name what came up in Look Back, then ask the Holy Spirit to reveal something as you read.",
      leaderNote: "This is part of the Sermon on the Mount. &ldquo;Do not worry&rdquo; appears three times in this short passage, worry here isn&rsquo;t scolded as a character flaw so much as diagnosed as a trust problem: who do you actually believe is in charge of tomorrow?",
      lookForwardIdea: "a command to obey is seeking God&rsquo;s kingdom first. What&rsquo;s the specific worry crowding that out for you this week?",
      promiseVerse: { ref: "Matthew 6:33", text: "But seek first his kingdom and his righteousness, and all these things will be given to you as well." },
      memoryVerse: { ref: "Matthew 6:33", text: "But seek first his kingdom and his righteousness, and all these things will be given to you as well." }
    },
    {
      id: "6", title: "The Storm", refs: ["Mark 4:35&ndash;41"],
      summary: "A sudden, violent storm terrifies experienced fishermen while Jesus sleeps in the boat. He wakes and calms it with a word, then asks his disciples a pointed question about their fear.",
      lookUpPrayer: "Pray honestly about what surfaced in Look Back, even the hard parts, then ask the Holy Spirit to help this passage land.",
      leaderNote: "These were professional fishermen who knew this lake&rsquo;s sudden storms well, their terror wasn&rsquo;t an overreaction. Jesus&rsquo; question afterward, why are you so afraid, do you still have no faith, links their fear directly to what they believed about him.",
      lookForwardIdea: "a command to obey is Jesus&rsquo; own question turned back on you: why are you so afraid? What would it look like to bring him into the storm instead of panicking alone?",
      promiseVerse: { ref: "Mark 4:39&ndash;40", text: "He got up, rebuked the wind and said to the waves, &ldquo;Quiet! Be still!&rdquo; Then the wind died down and it was completely calm. He said to his disciples, &ldquo;Why are you so afraid? Do you still have no faith?&rdquo;" },
      memoryVerse: { ref: "Mark 4:39&ndash;40", text: "He got up, rebuked the wind and said to the waves, &ldquo;Quiet! Be still!&rdquo; Then the wind died down and it was completely calm. He said to his disciples, &ldquo;Why are you so afraid? Do you still have no faith?&rdquo;" }
    },
    {
      id: "7", title: "Take Courage", refs: ["Mark 6:45&ndash;52"],
      summary: "The disciples are straining against a storm in the middle of the night when they see Jesus walking toward them on the water and are terrified, thinking he&rsquo;s a ghost.",
      lookUpPrayer: "Try praying specifically for each other this week, about what was just shared, then ask the Holy Spirit to guide what you notice as you read.",
      leaderNote: "This happens right after Jesus feeds the five thousand, and Mark notes the disciples&rsquo; hearts were hardened, they hadn&rsquo;t yet understood what the feeding meant about who Jesus is. Fear here comes from misreading what they&rsquo;re actually seeing.",
      lookForwardIdea: "a promise to trust is Jesus&rsquo; own words the moment he appears: take courage, it is I, don&rsquo;t be afraid. What in your life needs that exact reassurance right now?",
      promiseVerse: { ref: "Mark 6:50", text: "because they all saw him and were terrified. Immediately he spoke to them and said, &ldquo;Take courage! It is I. Don&rsquo;t be afraid.&rdquo;" },
      memoryVerse: { ref: "Mark 6:50", text: "because they all saw him and were terrified. Immediately he spoke to them and said, &ldquo;Take courage! It is I. Don&rsquo;t be afraid.&rdquo;" }
    },
    {
      id: "8", title: "Behind Locked Doors", refs: ["John 20"],
      summary: "On the evening of the resurrection, Jesus&rsquo; followers are hiding behind locked doors out of fear, and the risen Jesus appears in the middle of the room with a greeting of peace.",
      lookUpPrayer: "Pray about what came up in Look Back, then ask the Holy Spirit to help you love God and others better because of what you&rsquo;re about to read.",
      leaderNote: "The locked doors are mentioned specifically, this was real fear for their lives, the same authorities who crucified Jesus were still out there. Jesus doesn&rsquo;t rebuke their fear, he simply stands among them and speaks peace.",
      lookForwardIdea: "a promise to trust is that Jesus meets you exactly where fear has you locked away, not waiting for you to come out first. Where do you need him to bring his peace into a locked room in your life?",
      promiseVerse: { ref: "John 20:19", text: "On the evening of that first day of the week, when the disciples were together, with the doors locked for fear of the Jewish leaders, Jesus came and stood among them and said, &ldquo;Peace be with you!&rdquo;" },
      memoryVerse: { ref: "John 20:19", text: "On the evening of that first day of the week, when the disciples were together, with the doors locked for fear of the Jewish leaders, Jesus came and stood among them and said, &ldquo;Peace be with you!&rdquo;" }
    },
    {
      id: "9", title: "More Than Conquerors", refs: ["Romans 8"],
      summary: "Paul builds a case that nothing, not hardship, not danger, not death itself, can separate believers from the love of God, and that God is working every circumstance toward good for those who love him.",
      lookUpPrayer: "Pray honestly about what surfaced in Look Back, then ask the Holy Spirit to help this passage land, especially the hard parts.",
      leaderNote: "This chapter includes some of the most quoted reassurances in the New Testament. Paul isn&rsquo;t promising an easy life, the chapter itself lists trouble, persecution, and danger, he&rsquo;s promising that none of it has the power to separate you from God&rsquo;s love.",
      lookForwardIdea: "a promise to trust is that nothing, nothing, can separate you from the love of God. What&rsquo;s the fear that&rsquo;s quietly convinced you otherwise?",
      promiseVerse: { ref: "Romans 8:38&ndash;39", text: "For I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord." },
      memoryVerse: { ref: "Romans 8:38&ndash;39", text: "For I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord." }
    },
    {
      id: "10", title: "Peace That Guards", refs: ["Philippians 4"],
      summary: "Paul, writing from prison, tells a worried church not to be anxious about anything, but to bring everything to God in prayer, and describes the peace that follows as beyond understanding.",
      lookUpPrayer: "This session is close to the heart of the whole course, take your time here: pray about what came up in Look Back, and let it run longer than usual.",
      leaderNote: "Paul wrote this letter under house arrest, awaiting trial, he&rsquo;s not offering theory from a comfortable distance. The peace he describes doesn&rsquo;t depend on the anxiety-producing situation being resolved first, it guards the heart in the middle of it.",
      lookForwardIdea: "a command to obey is bringing your specific anxiety to God in prayer, by name, instead of carrying it alone. What&rsquo;s the one thing you need to actually say out loud to him this week?",
      promiseVerse: { ref: "Philippians 4:6&ndash;7", text: "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus." },
      memoryVerse: { ref: "Philippians 4:6&ndash;7", text: "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus." }
    },
    {
      id: "11", title: "Faith Without Seeing", refs: ["Hebrews 11"],
      summary: "A long list of ordinary people who trusted God without seeing the full outcome, defined as the essence of faith itself: being sure of what we hope for and certain of what we can&rsquo;t yet see.",
      lookUpPrayer: "Pray about what came up in Look Back, then ask the Holy Spirit to help you take a step of faith even without every answer.",
      leaderNote: "This chapter surveys hundreds of years of Israel&rsquo;s history through the lens of one quality: faith. Many of the people named didn&rsquo;t receive what was promised in their lifetime, verse 13 says they saw it &ldquo;from a distance.&rdquo; Faith here isn&rsquo;t the absence of fear, it&rsquo;s trusting God despite not having every answer yet.",
      lookForwardIdea: "a command to obey is this: without faith it&rsquo;s impossible to please God. What&rsquo;s the step you keep waiting to take until your fear is gone, instead of taking it in faith right now?",
      promiseVerse: { ref: "Hebrews 11:6", text: "And without faith it is impossible to please God, because anyone who comes to him must believe that he exists and that he rewards those who earnestly seek him." },
      memoryVerse: { ref: "Hebrews 11:6", text: "And without faith it is impossible to please God, because anyone who comes to him must believe that he exists and that he rewards those who earnestly seek him." }
    },
    {
      id: "12", title: "The End of Fear", refs: ["Revelation 22"],
      summary: "The Bible&rsquo;s last chapter pictures a renewed creation where the curse is finally gone and God&rsquo;s people see him face to face, the fear-inducing story of Genesis 3 fully resolved.",
      lookUpPrayer: "Pray about everything this course has stirred up in you, then ask the Holy Spirit to make this passage feel like a real promise, not just a nice ending.",
      leaderNote: "This closing vision deliberately echoes and reverses the Garden of Eden, the tree of life reappears, the curse from Genesis 3 is undone, and God&rsquo;s presence is no longer something people hide from. It&rsquo;s a fitting final promise for a course about fear: the story ends with fear itself gone for good.",
      lookForwardIdea: "a promise to trust is that the curse itself will be no more. What fear are you carrying that this final promise says won&rsquo;t have the last word?",
      prayerNote: "Pray for what came up in Look Back, for each person&rsquo;s Look Forward response, and for the person they&rsquo;ll share this passage with. This is your last session together, so take extra time.",
      promiseVerse: { ref: "Revelation 22:3", text: "No longer will there be any curse. The throne of God and of the Lamb will be in the city, and his servants will serve him." },
      memoryVerse: { ref: "Revelation 22:3", text: "No longer will there be any curse. The throne of God and of the Lamb will be in the city, and his servants will serve him." }
    }
  ]
};
