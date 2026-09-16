/* =========================================================================
   STUDY DATA: The Commands of Jesus
   A fourteen-session topical study working through specific imperatives
   Jesus gave his followers, drawn from across the Gospels. Session 3 (Be
   Baptised) and Session 14 (Go and Make Disciples) both cite Matthew 28:19,
   since that verse contains both commands at once (go, baptise, teach) -
   that's intentional, not a typo. Each command is paired with a longer
   "story" passage (not always about Jesus) that illustrates it in action,
   modelled on the Commands of Christ DBS set in Darren's reading-plan
   collection.
   ========================================================================= */

window.STUDY = {
  id: "commands-of-jesus",
  title: "The Commands of Jesus",
  sessionNoun: "session",
  sessionsLabel: "Fourteen Commands",
  stepTimes: { lookback: "20&ndash;30 min", lookup: "20&ndash;30 min", lookforward: "20&ndash;30 min" },
  defaultReadNote: "the command aloud, then the story that goes with it.",

  welcomeCopy: {
    tagline: "what jesus actually asked of us",
    titleHtml: "obey<br>his<br>words",
    lead: "Fourteen times, in plain imperatives, Jesus tells us what to do. Look at one each session, discover what he&rsquo;s actually asking, and put it into practice together, as a small group or one-on-one."
  },

  methodCopy: {
    lead: 'Every session follows the same <strong style="color:var(--ink-900);font-weight:600;">3 steps</strong>, in the same order, whether it&rsquo;s just the two of you or a small group. Altogether, expect it to take <strong style="color:var(--ink-900);font-weight:600;">around 90 minutes</strong>, though it&rsquo;s only ever a rough guide, a quicker 60 minutes works fine too.',
    lookBackBlurb: "A time to reconnect: how you&rsquo;ve experienced God this week, what you&rsquo;re thankful for, what&rsquo;s been hard, and how what you learned last time actually landed.",
    lookUpBlurb: "Read the short command first, then a longer story that shows what obeying it, or ignoring it, actually looks like in a real life. Retell both in your own words, then let a few questions do the real work.",
    lookForwardBlurb: "Turn what you&rsquo;ve discovered into a lived response: a behaviour, a promise, an example, or above all, a command to actually obey. Decide who you&rsquo;ll share it with, then pray for each other before you finish."
  },

  finishCopy: {
    heading: "go",
    body: "Fourteen commands, one call running through all of them: not just believing the right things about Jesus, but doing what he actually said. You&rsquo;ve looked back, looked up, and looked forward together the whole way. That&rsquo;s no small thing, and like the very last command said, it&rsquo;s meant to send you out, not just wrap things up.",
    leadSomeoneElse: "This course was built to need no training, which means you&rsquo;re already qualified to lead someone else through it. You&rsquo;ve spent these sessions sharing each passage with someone, they&rsquo;re your obvious first invitation. When you&rsquo;re ready, reset your progress and start again with them.",
    nextStudy: "Without necessarily realising it, you&rsquo;ve been practising Discovery Bible Study, a simple, repeatable way of reading the Bible with someone: look back, look up, look forward. Keep using that same rhythm on your own, with any passage or book, Mark&rsquo;s Gospel or The Basics are both great next studies."
  },

  sessions: [
    {
      id: "1", title: "Repent and Believe", refs: ["Mark 1:15"],
      summary: "Jesus begins his public ministry with a simple, urgent summons: the kingdom of God has arrived, so turn around and put your trust in the good news. The story that goes with it shows what that actually looks like: a woman everyone else had written off, weeping at Jesus&rsquo; feet, forgiven and transformed.",
      lookBack: {
        note: "There&rsquo;s no &ldquo;last time&rdquo; yet, so start here instead.",
        questions: [
          "What&rsquo;s your name, and one thing about you the group might not know?",
          "What&rsquo;s one thing Jesus has said that you find easy to admire but hard to actually do?",
          "What are you hoping to get out of these fourteen sessions together?",
          "How can we pray for you as we start this course?"
        ]
      },
      lookUpPrayer: "Never prayed aloud before? One sentence is plenty. Thank God for one thing that came up just now, then ask the Holy Spirit to help you see this command clearly.",
      leaderNote: "This is Jesus&rsquo; first recorded public statement in Mark, a summary of his whole message before any of the specific teaching or miracles that follow. The story is set at a dinner party where a sinful woman crashes in to anoint Jesus&rsquo; feet, he contrasts her extravagant response with the host&rsquo;s cold politeness: the one forgiven much loves much.",
      lookForwardIdea: "a command to obey is turning around: is there an area of your life you know needs to change direction, not just believing but repenting?",
      story: { refs: ["Luke 7:36&ndash;50"], note: "A woman known for her sin is forgiven and responds with extravagant love, exactly what repenting and believing looks like in a real life, not just a theory." },
      memoryVerse: { ref: "Mark 1:15", text: "&ldquo;The time has come,&rdquo; he said. &ldquo;The kingdom of God has come near. Repent and believe the good news!&rdquo;" }
    },
    {
      id: "2", title: "Deny Yourself", refs: ["Matthew 16:24"],
      summary: "Jesus tells his disciples plainly what following him will cost: putting yourself aside and being willing to walk toward death, not just admiring him from a distance. The story that goes with it is a man who couldn&rsquo;t quite do it, a rich man who wanted eternal life but walked away sad when Jesus named the one thing he wouldn&rsquo;t give up.",
      lookUpPrayer: "Pray about what came up in Look Back, then ask the Holy Spirit to help you understand what you&rsquo;re about to read.",
      leaderNote: "This comes right after Peter recognises Jesus as the Messiah, and right after Jesus&rsquo; first prediction of his own death. Taking up a cross would have been instantly recognisable to Jesus&rsquo; first hearers as walking toward Roman execution, not a metaphor for minor inconvenience. The story shows the cost from the other side, someone who wasn&rsquo;t willing to pay it.",
      lookForwardIdea: "a command to obey is putting your own agenda down. What&rsquo;s one plan or comfort you&rsquo;re gripping tightly that following Jesus is asking you to let go of?",
      story: { refs: ["Mark 10:17&ndash;31"], note: "A rich man asks Jesus what he still lacks, then walks away sad when Jesus names the one thing he won&rsquo;t give up. It&rsquo;s a real-life picture of what refusing to deny yourself looks like." },
      memoryVerse: { ref: "Matthew 16:24", text: "Then Jesus said to his disciples, &ldquo;Whoever wants to be my disciple must deny themselves and take up their cross and follow me.&rdquo;" }
    },
    {
      id: "3", title: "Be Baptised", refs: ["Matthew 28:19"],
      summary: "The risen Jesus sends his disciples out with a clear pattern for making new disciples: baptising them and teaching them everything he&rsquo;s commanded. The story that goes with it is one of the first baptisms after Jesus&rsquo; ascension, an official baptised by the side of a desert road the moment he believes.",
      lookUpPrayer: "Bring what you just shared to God, then ask the Holy Spirit to reveal something in this passage you might otherwise miss.",
      leaderNote: "This command sits inside the Great Commission, given by the risen Jesus to his disciples on a mountain in Galilee. Baptism was already understood as the entry point into following Jesus, the same reference comes back in Session 14 from a different angle. The story shows how quickly and simply baptism happened once someone believed, no waiting, no committee.",
      lookForwardIdea: "a command to obey is this one, quite literally: if you haven&rsquo;t been baptised yet, what&rsquo;s stopping you? If you have, what would it look like to actually live like your old life is finished?",
      story: { refs: ["Acts 8:26&ndash;39"], note: "Philip explains the good news to an Ethiopian official from a passage of Isaiah, and the man asks the obvious question the moment he sees water: why shouldn&rsquo;t I be baptised?" },
      memoryVerse: { ref: "Matthew 28:19", text: "Therefore go and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit." }
    },
    {
      id: "4", title: "Love God and Neighbour", refs: ["Matthew 22:37&ndash;39"],
      summary: "Asked which command matters most, Jesus names two: love God with everything you have, and love your neighbour as yourself. Everything else, he says, hangs on these. The story that goes with it answers the follow-up question everyone actually wants to ask: who counts as my neighbour?",
      lookUpPrayer: "Pray for each other about whatever came up in Look Back, then invite the Holy Spirit to open your eyes as you read.",
      leaderNote: "This is Jesus&rsquo; answer when an expert in the law tries to test him. He quotes two existing commands from the Old Testament (Deuteronomy 6:5 and Leviticus 19:18) and says everything else hangs on these two. In Luke&rsquo;s Gospel, this exact exchange leads straight into the parable of the Good Samaritan, so the story here isn&rsquo;t just related, it&rsquo;s the direct continuation of the same conversation.",
      lookForwardIdea: "a command to obey is loving a specific person this week, not people in general. Who&rsquo;s one person you find hard to love, and what would loving them actually look like?",
      story: { refs: ["Luke 10:25&ndash;37"], note: "Asked to define &ldquo;neighbour,&rdquo; Jesus tells a story where the hero is the person everyone in his audience would have least expected." },
      memoryVerse: { ref: "Matthew 22:37&ndash;39", text: "Jesus replied: &ldquo;&lsquo;Love the Lord your God with all your heart and with all your soul and with all your mind.&rsquo; This is the first and greatest commandment. And the second is like it: &lsquo;Love your neighbour as yourself.&rsquo;&rdquo;" }
    },
    {
      id: "5", title: "Love One Another", refs: ["John 13:34"],
      summary: "At the Last Supper, Jesus gives his disciples a new command: love each other the way he has just loved them. The story that goes with it shows the earliest church actually living it out, sharing everything they had so that no one among them went without.",
      lookUpPrayer: "Try praying a full sentence or two this week: name what came up in Look Back, then ask the Holy Spirit to reveal something as you read.",
      leaderNote: "Jesus gives this command at the Last Supper, moments after washing his disciples&rsquo; feet, and just after telling them he&rsquo;s about to be betrayed. It&rsquo;s called a &ldquo;new&rdquo; command because of its standard, as he loved them. The story fast-forwards to the very early church putting exactly that into practice with their money and possessions.",
      lookForwardIdea: "a command to obey is loving other believers the way Jesus loved you, not the way you naturally would. Is there someone in this group, or your wider church family, you need to love better?",
      story: { refs: ["Acts 4:32&ndash;37"], note: "The believers hold everything loosely, selling property to make sure no one in the community goes without. Barnabas is named as one specific example." },
      memoryVerse: { ref: "John 13:34", text: "&ldquo;A new command I give you: Love one another. As I have loved you, so you must love one another.&rdquo;" }
    },
    {
      id: "6", title: "Do Not Judge", refs: ["Matthew 7:1"],
      summary: "Jesus warns against a judgmental spirit, pointing out how easy it is to spot a speck in someone else&rsquo;s eye while ignoring the plank in your own. The story that goes with it is a woman dragged in front of Jesus by people ready to condemn her, and the one line that stops every accuser in their tracks.",
      lookUpPrayer: "Pray honestly about what surfaced in Look Back, even the hard parts, then ask the Holy Spirit to help this passage land.",
      leaderNote: "This comes from the Sermon on the Mount. The very next verses use the picture of a plank in your own eye versus a speck in someone else&rsquo;s, deliberately exaggerated for effect. The story shows Jesus refusing to join a crowd of accusers, without ever pretending what she&rsquo;d done was fine.",
      lookForwardIdea: "a command to obey is checking your own plank before pointing at someone else&rsquo;s speck. Who have you been quick to judge lately, and what&rsquo;s your own equivalent fault?",
      story: { refs: ["John 8:1&ndash;11"], note: "&ldquo;Let any one of you who is without sin be the first to throw a stone.&rdquo; One by one, her accusers walk away." },
      memoryVerse: { ref: "Matthew 7:1", text: "&ldquo;Do not judge, or you too will be judged.&rdquo;" }
    },
    {
      id: "7", title: "The Golden Rule", refs: ["Matthew 7:12"],
      summary: "Jesus sums up how to treat other people in one sentence: do to them what you&rsquo;d want done to you. The story that goes with it happens centuries earlier: David gets the perfect chance to kill the man hunting him down, and does the opposite.",
      lookUpPrayer: "Try praying specifically for each other this week, about what was just shared, then ask the Holy Spirit to guide what you notice as you read.",
      leaderNote: "Also from the Sermon on the Mount. Jesus explicitly says this one sentence sums up &ldquo;the Law and the Prophets&rdquo;, everything the Old Testament teaches about how to treat people. This story, long before Jesus ever said these words, is a striking Old Testament example of exactly this instinct: treating an enemy better than he deserves.",
      lookForwardIdea: "a command to obey is flipping the question: instead of asking what you deserve from someone, ask what you&rsquo;d want if you were them.",
      story: { refs: ["1 Samuel 24:1&ndash;22"], note: "David finds Saul alone and unprotected in a cave, close enough to kill him, and spares his life instead." },
      memoryVerse: { ref: "Matthew 7:12", text: "&ldquo;So in everything, do to others what you would have them do to you, for this sums up the Law and the Prophets.&rdquo;" }
    },
    {
      id: "8", title: "Do Not Worry", refs: ["Matthew 6:25&ndash;33"],
      summary: "Jesus tells his followers not to be consumed by anxiety over food, clothes, or tomorrow, and instead to seek God&rsquo;s kingdom first, trusting he&rsquo;ll provide the rest. The story that goes with it is a widow down to her last handful of flour, asked to trust God for exactly that kind of provision.",
      lookUpPrayer: "Pray about what came up in Look Back, then ask the Holy Spirit to help this command feel possible, not just correct.",
      leaderNote: "This section follows straight after Jesus&rsquo; teaching on treasure and on serving two masters. The illustrations, birds, wildflowers, would have been visible to the crowd as he spoke. The story is centuries earlier, a foreign widow in the middle of a famine, with just enough for one last meal.",
      lookForwardIdea: "a command to obey is seeking God&rsquo;s kingdom first. What&rsquo;s the worry crowding that out for you this week, and what would it look like to hand it over instead?",
      story: { refs: ["1 Kings 17:8&ndash;16"], note: "A widow expecting to cook her last meal before she and her son starve is asked to feed the prophet Elijah first, and trust God for the rest. The flour and oil never run out." },
      memoryVerse: { ref: "Matthew 6:33", text: "&ldquo;But seek first his kingdom and his righteousness, and all these things will be given to you as well.&rdquo;" }
    },
    {
      id: "9", title: "Remain in Me", refs: ["John 15:4"],
      summary: "Using the picture of a vine and its branches, Jesus says staying closely connected to him isn&rsquo;t optional, it&rsquo;s the only way to actually bear fruit. The story that goes with it is one of the most famous declarations of loyalty in the whole Bible, a young widow choosing to stay attached to someone rather than walk away.",
      lookUpPrayer: "Pray honestly about how connected to Jesus you actually feel right now, then ask the Holy Spirit to help this passage speak into that.",
      leaderNote: "Part of Jesus&rsquo; final long conversation with his disciples before his arrest, using the image of a vine and its branches. In this culture, vineyards were a familiar, everyday picture. The story is centuries earlier, a Moabite widow given every reason to leave, choosing to remain instead.",
      lookForwardIdea: "a command to obey is staying connected, not just trying harder. What&rsquo;s one practical way you can stay close to Jesus this week rather than relying on your own effort?",
      story: { refs: ["Ruth 1:6&ndash;18"], note: "Naomi urges Ruth to go back to her own people. Ruth refuses: &ldquo;Where you go I will go, and where you stay I will stay.&rdquo;" },
      memoryVerse: { ref: "John 15:4", text: "&ldquo;Remain in me, as I also remain in you. No branch can bear fruit by itself; it must remain in the vine. Neither can you bear fruit unless you remain in me.&rdquo;" }
    },
    {
      id: "10", title: "Pray", refs: ["Matthew 6:9", "Matthew 26:41"], refDisplay: "Matthew 6:9; 26:41",
      summary: "Jesus teaches his disciples how to pray, then later, in his own darkest hour, urges them to stay awake and pray so they won&rsquo;t fall into temptation. The story that goes with it is a woman pouring out years of heartbreak in prayer, and the answer that follows.",
      lookUpPrayer: "This session is literally about prayer, so take your time here: pray about what came up in Look Back, and let it run longer than usual.",
      leaderNote: "Two very different moments: the first is Jesus teaching the disciples how to pray in the Sermon on the Mount (the Lord&rsquo;s Prayer follows), the second is Jesus himself praying in agony in Gethsemane the night before his death, telling his exhausted disciples to stay awake and pray. The story is centuries earlier, Hannah praying so intensely a priest assumes she&rsquo;s drunk.",
      lookForwardIdea: "a command to obey is actually praying, not just meaning to. When could you build a specific, unhurried time to pray this week?",
      story: { refs: ["1 Samuel 1:9&ndash;20"], note: "Hannah pours out her grief and longing to God in prayer, so fervently that Eli the priest mistakes her for drunk. Her prayer is answered." },
      memoryVerse: { ref: "Matthew 6:9", text: "&ldquo;This, then, is how you should pray: &lsquo;Our Father in heaven, hallowed be your name.&rsquo;&rdquo;" }
    },
    {
      id: "11", title: "Wash One Another&rsquo;s Feet", refs: ["John 13:14"],
      summary: "Jesus washes his disciples&rsquo; feet, a task usually left to the lowest servant, and tells them to do the same for each other. The fuller story around it shows exactly why: knowing he was about to die, and knowing Judas was about to betray him, Jesus still knelt down and served them all.",
      lookUpPrayer: "Pray for each other about whatever came up in Look Back, then ask the Holy Spirit to show you who needs serving as you read.",
      leaderNote: "Foot washing was a task for the lowest servant in a household. Jesus does it himself for his disciples, including Judas, who was about to betray him. This session&rsquo;s &ldquo;story&rdquo; is simply the fuller scene the command sits inside, worth reading the whole thing, not just the one verse.",
      lookForwardIdea: "a command to obey is serving someone in a way that&rsquo;s a little beneath you. Who could you serve this week that you wouldn&rsquo;t normally think to?",
      story: { refs: ["John 13:1&ndash;17"], note: "The full scene: Jesus, knowing exactly what&rsquo;s about to happen to him, kneels to wash the feet of the very disciples who will abandon him within hours." },
      memoryVerse: { ref: "John 13:14", text: "&ldquo;Now that I, your Lord and Teacher, have washed your feet, you also should wash one another&rsquo;s feet.&rdquo;" }
    },
    {
      id: "12", title: "Let Your Light Shine", refs: ["Matthew 5:16"],
      summary: "Jesus tells his followers their good deeds aren&rsquo;t meant to be hidden, they&rsquo;re meant to be seen, so that people give glory to God. The story that goes with it is centuries earlier, a man who kept living visibly faithful even when it was made illegal to do so.",
      lookUpPrayer: "Pray about what came up in Look Back, then ask the Holy Spirit to help you see where you&rsquo;ve been hiding rather than shining.",
      leaderNote: "This comes right after the Beatitudes and the &ldquo;salt and light&rdquo; teaching in the Sermon on the Mount. The point isn&rsquo;t showing off, it&rsquo;s that good works are meant to be visible enough to point people to God. The story shows what that costs when the culture actively pushes back against it.",
      lookForwardIdea: "a command to obey is letting your good works be seen, not hidden out of fear or false humility. Where have you been keeping your faith too quiet?",
      story: { refs: ["Daniel 6:1&ndash;23"], note: "Daniel keeps praying openly, visible through his window, even after it&rsquo;s made illegal and he knows exactly what it will cost him." },
      memoryVerse: { ref: "Matthew 5:16", text: "&ldquo;In the same way, let your light shine before others, that they may see your good deeds and glorify your Father in heaven.&rdquo;" }
    },
    {
      id: "13", title: "Do This in Remembrance", refs: ["Luke 22:19"],
      summary: "At the Last Supper, Jesus takes the bread and wine and tells his disciples to keep doing this, remembering him, from now on. The story that goes with it happens days later: two disciples finally recognising the risen Jesus in the exact moment he breaks bread with them.",
      lookUpPrayer: "Pray honestly about whatever came up in Look Back, then ask the Holy Spirit to make this passage feel weighty, not just familiar.",
      leaderNote: "Spoken at the Last Supper, reinterpreting the Passover meal, an annual remembrance of being rescued from Egypt, around Jesus&rsquo; own body and blood. The story shows the command already starting to do its work, bread being broken opens their eyes to who&rsquo;s really at the table.",
      lookForwardIdea: "a command to obey is remembering, deliberately, not just going through the motions. Next time you take communion, what will you actually stop to remember?",
      story: { refs: ["Luke 24:13&ndash;35"], note: "Two disciples walk for miles with the risen Jesus without recognising him, until he breaks the bread, and suddenly they see exactly who he is." },
      memoryVerse: { ref: "Luke 22:19", text: "And he took bread, gave thanks and broke it, and gave it to them, saying, &ldquo;This is my body given for you; do this in remembrance of me.&rdquo;" }
    },
    {
      id: "14", title: "Go and Make Disciples", refs: ["Matthew 28:19"],
      summary: "Before his ascension, the risen Jesus commissions his disciples to go to all nations, baptising and teaching them everything he&rsquo;s commanded, promising to be with them always. The story that goes with it is one ordinary, overlooked woman who becomes an evangelist to her entire town after one conversation with Jesus.",
      lookUpPrayer: "Pray about everything this course has stirred up in you, then ask the Holy Spirit to make this passage feel like a real sending, not just an ending.",
      leaderNote: "The Great Commission, Jesus&rsquo; final instruction to his disciples before his ascension, given on a mountain in Galilee. Some of them worshipped him there, Matthew notes, and some still doubted. The story shows the Great Commission already happening in miniature, long before it was ever officially given.",
      lookForwardIdea: "a command to obey is this whole course, really: who is God asking you to go to, and teach what you&rsquo;ve learned? Is there a specific person or place you&rsquo;re being sent?",
      prayerNote: "Pray for what came up in Look Back, for each person&rsquo;s Look Forward response, and for the person they&rsquo;ll share this passage with. This is your last session together, so take extra time.",
      story: { refs: ["John 4:4&ndash;42"], note: "A Samaritan woman with a complicated history meets Jesus at a well, then goes and tells her whole town, many of whom come to believe because of what she said." },
      memoryVerse: { ref: "Matthew 28:19", text: "&ldquo;Therefore go and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit.&rdquo;" }
    }
  ]
};
