/* =========================================================================
   STUDY DATA: Who Is This? A discipleship journey through Mark's Gospel.
   Content unchanged from the original who-is-this-v2 app, restructured to
   fit the shared library schema (see _engine/engine.js and defaults.js).
   ========================================================================= */

window.STUDY = {
  id: "who-is-this",
  title: "Who Is This?",
  book: "Mark",
  sessionNoun: "week",
  sessionsLabel: "Ten Weeks",

  welcomeCopy: {
    tagline: "a journey through mark",
    titleHtml: "who<br>is<br>this?",
    lead: "Ten weeks in Mark&rsquo;s Gospel. Read a little each week, discover who Jesus is, and follow him together, as a small group or one-on-one."
  },

  methodCopy: {
    lead: 'Every week follows the same <strong style="color:var(--ink-900);font-weight:600;">3 steps</strong>, in the same order, whether it&rsquo;s just the two of you or a small group. Altogether, expect it to take <strong style="color:var(--ink-900);font-weight:600;">60&ndash;90 minutes</strong>, though it&rsquo;s only ever a rough guide.',
    lookBackBlurb: "A quick, honest check-in before you open the Bible: how last week went, what you tried, how you can pray for each other.",
    lookUpBlurb: "Pray, then read the passage aloud, retell it in your own words, and check you got the whole story. Then let five questions do the real work.",
    lookForwardBlurb: "Turn what you&rsquo;ve discovered into a lived response: a behaviour, a promise, an example, or a command. Decide who you&rsquo;ll share it with this week, then pray for each other before you finish. That person becomes part of next week&rsquo;s Look Back.",
    betweenBlurb: "Most weeks also include an optional reading for your own time, covering the parts of Mark&rsquo;s story we skip over together. Nobody checks up on it, it&rsquo;s there for anyone who&rsquo;d like the fuller picture before the next session."
  },

  finishCopy: {
    heading: "well done",
    body: "Ten weeks, ten passages, one question running through all of them: who is this? You&rsquo;ve looked back, looked up, and looked forward together the whole way. That&rsquo;s no small thing, and it&rsquo;s not really an ending.",
    leadSomeoneElse: "This course was built to need no training, which means you&rsquo;re already qualified to lead someone else through it. You&rsquo;ve spent ten weeks sharing each passage with someone, they&rsquo;re your obvious first invitation. When you&rsquo;re ready, reset your progress and start again with them.",
    nextStudy: "Without necessarily realising it, you&rsquo;ve been practising Discovery Bible Study, a simple, repeatable way of reading the Bible with someone: look back, look up, look forward. Keep using that same rhythm on your own, with any passage or book, The Basics and New Life, Real Joy are both great next studies."
  },

  sessions: [
    {
      id: "1", title: "Follow Me", refs: ["Mark 1:1&ndash;20"],
      summary: "Jesus is baptised, tested in the wilderness, and begins preaching that the kingdom of God has come near. He calls his first disciples, ordinary fishermen, and they leave everything, immediately, to follow him.",
      noBibleNote: "No Bible yet? Use the free YouVersion app this week, and we&rsquo;ll get you a copy of your own.",
      lookBack: {
        note: "There&rsquo;s no &ldquo;last week&rdquo; yet, so start here instead.",
        questions: [
          "What&rsquo;s your name, and one thing about you the group might not know?",
          "What led you to start following Jesus, or to want to learn more?",
          "What are you hoping to get out of these ten weeks together?",
          "What are you thankful for this week?",
          "How can we pray for you as we start this course?"
        ]
      },
      lookUpPrayer: "Never prayed aloud before? One sentence is plenty. Thank God for one thing that came up just now, then ask the Holy Spirit to help you see Jesus clearly as you read.",
      leaderNote: "Mark opens with no birth story, straight into John the Baptist, Jesus&rsquo; baptism, and his first followers. Notice how often Mark uses the word &ldquo;immediately,&rdquo; this Gospel moves fast. At that baptism, the Spirit comes down on Jesus, and it&rsquo;s that same Spirit you&rsquo;re relying on to help you read, discuss, and pray well together for the next ten weeks.",
      lookForwardIdea: "the first disciples dropped everything immediately. Is there something you&rsquo;re delaying that following Jesus is asking of you now?",
      betweenSessions: {
        ref: "Mark 1:21&ndash;45",
        desc: "Jesus casts out a demon in the Capernaum synagogue, heals Peter&rsquo;s mother-in-law and many others at evening, prays alone before dawn, then heals a man with leprosy.",
        note: "Try reading it alone using the same rhythm: read it, retell it to yourself or someone else, then ask what stands out, what&rsquo;s tricky, what it shows about God, and what it shows about people."
      },
      memoryVerse: { ref: "Mark 1:17", text: "&ldquo;Come, follow me,&rdquo; Jesus said, &ldquo;and I will send you out to fish for people.&rdquo;" }
    },
    {
      id: "2", title: "Who Can Forgive Sins?", refs: ["Mark 2:1&ndash;12"],
      summary: "Four friends dig through a roof to lower a paralysed man in front of Jesus. Jesus forgives his sins before he heals his legs, a claim only God has the right to make.",
      lookUpPrayer: "Pray about what came up in Look Back, then ask the Holy Spirit to help you understand what you&rsquo;re about to read.",
      leaderNote: "Houses in this period had flat roofs, reachable by an outside staircase, made of packed earth and branches over wooden beams, that&rsquo;s what the friends dug through.",
      lookForwardIdea: "Jesus forgives completely, the first time he speaks. Is there something you need to receive forgiveness for this week?",
      betweenSessions: {
        ref: "Mark 2:13&ndash;4:34",
        desc: "Levi the tax collector is called, Jesus eats with &ldquo;sinners,&rdquo; questions about fasting and the Sabbath, more healing on the Sabbath, the religious leaders plot against him, he appoints the Twelve, is accused of casting out demons by the devil&rsquo;s power, and teaches in parables about the Kingdom, including the sower and the mustard seed.",
        note: "This is a bigger stretch, about two and a half chapters, worth spreading across a few sittings. It includes Bonus Sessions B1 (Called to Be With Him, Mark 3:13&ndash;19) and B2 (The Four Soils, Mark 4:1&ndash;20) at the back of this app. Try reading it using the same rhythm: read, retell, then ask what stands out, what&rsquo;s tricky, what it shows about God, and what it shows about people."
      },
      memoryVerse: { ref: "Mark 2:10", text: "&ldquo;But I want you to know that the Son of Man has authority on earth to forgive sins.&rdquo;" }
    },
    {
      id: "3", title: "Who Is This?", refs: ["Mark 4:35&ndash;41"],
      summary: "A sudden storm terrifies experienced fishermen on the Sea of Galilee. Jesus calms it with a word, and the disciples are left asking the question that gives this course its name.",
      lookUpPrayer: "Bring what you just shared to God, then ask the Holy Spirit to reveal something in this passage you might otherwise miss.",
      leaderNote: "Several of the disciples were experienced fishermen who knew the Sea of Galilee well, its sudden violent storms were dangerous even to them.",
      lookForwardIdea: "a command to obey is &ldquo;why are you so afraid?&rdquo; What&rsquo;s the storm in your life this week where you need to trust him?",
      betweenSessions: {
        ref: "Mark 5:1&ndash;20",
        desc: "The man freed from a legion of demons.",
        note: "This is Bonus Session B3 (Set Free) at the back of this app. Read it alone this week using the rhythm, read, retell, then ask what stands out, what&rsquo;s tricky, what it shows about God, and what it shows about people, or do it together as a full extra session if your group would rather."
      },
      memoryVerse: { ref: "Mark 4:41", text: "They were terrified and asked each other, &ldquo;Who is this? Even the wind and the waves obey him!&rdquo;" }
    },
    {
      id: "4", title: "Two Desperate People", refs: ["Mark 5:21&ndash;43"],
      summary: "A synagogue leader begs Jesus to save his dying daughter, and on the way a woman who&rsquo;s suffered for twelve years reaches out to him in secret. Mark weaves their two stories together, and both find more than they hoped for.",
      lookUpPrayer: "Pray for each other about whatever came up in Look Back, then invite the Holy Spirit to open your eyes as you read.",
      leaderNote: "The woman&rsquo;s bleeding made her ceremonially unclean, cut off from worship and touch for twelve years. Jairus was a respected synagogue leader. Mark deliberately sandwiches their stories together.",
      lookForwardIdea: "an example to follow is the woman&rsquo;s simple reach for Jesus in faith. What&rsquo;s one step of faith, however small, you could take this week?",
      betweenSessions: {
        ref: "Mark 6:1&ndash;8:26",
        desc: "Jesus is rejected in his hometown, sends out the Twelve, John the Baptist is executed, Jesus feeds five thousand and walks on water, teaches about what really makes someone unclean, heals a Gentile woman&rsquo;s daughter and a deaf man, feeds four thousand more, and heals a blind man in two stages.",
        note: "This is the biggest single stretch in the course, about two and a half chapters, so pace it across the week. Try the same rhythm on each section: read, retell, then ask what stands out, what&rsquo;s tricky, what it shows about God, and what it shows about people."
      },
      memoryVerse: { ref: "Mark 5:36", text: "Overhearing what they said, Jesus told him, &ldquo;Don&rsquo;t be afraid; just believe.&rdquo;" }
    },
    {
      id: "5", title: "Who Do You Say I Am?", refs: ["Mark 8:27&ndash;38"],
      summary: "At the hinge point of Mark&rsquo;s Gospel, Jesus asks his disciples directly who they think he is. Peter gets the answer right, and Jesus immediately turns the conversation to the cross, and to what it will cost to follow him there.",
      lookUpPrayer: "Try praying a full sentence or two this week: name what came up in Look Back, then ask the Holy Spirit to reveal something as you read.",
      leaderNote: "This moment is the hinge of Mark&rsquo;s whole Gospel, roughly the halfway point, where the story turns from &ldquo;who is Jesus&rdquo; toward the road to the cross.",
      lookForwardIdea: "a command to obey is &ldquo;deny yourself, take up your cross.&rdquo; What&rsquo;s one place you&rsquo;re resisting following Jesus fully?",
      betweenSessions: {
        ref: "Mark 9:1&ndash;10:16",
        desc: "The Transfiguration, healing a boy with an unclean spirit (&ldquo;I believe, help my unbelief&rdquo;), a second prediction of his death, the disciples arguing about who&rsquo;s the greatest, a warning about causing others to stumble, teaching on divorce, and blessing the children.",
        note: "This includes Bonus Session B4 (The Mountain and the Voice, Mark 9:2&ndash;13) and Bonus Session B5 (Help My Unbelief, Mark 9:14&ndash;29) at the back of this app. Try the rhythm on your own: read, retell, then ask what stands out, what&rsquo;s tricky, what it shows about God, and what it shows about people."
      },
      memoryVerse: { ref: "Mark 8:29", text: "&ldquo;But what about you?&rdquo; he asked. &ldquo;Who do you say I am?&rdquo; Peter answered, &ldquo;You are the Messiah.&rdquo;" }
    },
    {
      id: "6", title: "The Rich Man Who Walked Away", refs: ["Mark 10:17&ndash;31"],
      summary: "A man who has kept every commandment asks Jesus what he still lacks. When Jesus names the one thing he won&rsquo;t give up, he walks away sad, and the disciples are stunned by what Jesus says about wealth.",
      lookUpPrayer: "Pray honestly about what surfaced in Look Back, even the hard parts, then ask the Holy Spirit to help this passage land.",
      leaderNote: "In this culture, wealth was widely assumed to be a sign of God&rsquo;s blessing, which is why the disciples are so shocked by what Jesus says next.",
      lookForwardIdea: "a behaviour to change is naming the one thing, big or small, you&rsquo;d hesitate to hand over if Jesus asked.",
      betweenSessions: {
        ref: null,
        desc: "No reading needed, next week&rsquo;s passage picks up in the very next verse (Mark 10:32).",
        note: null
      },
      memoryVerse: { ref: "Mark 10:27", text: "Jesus looked at them and said, &ldquo;With man this is impossible, but not with God; all things are possible with God.&rdquo;" }
    },
    {
      id: "7", title: "Not to Be Served, But to Serve", refs: ["Mark 10:32&ndash;45"],
      summary: "For the third time, Jesus predicts his own death, and for the third time his disciples respond by arguing about who&rsquo;s the greatest. Jesus resets the whole idea of greatness around serving, not being served.",
      lookUpPrayer: "Try praying specifically for each other this week, about what was just shared, then ask the Holy Spirit to guide what you notice as you read.",
      leaderNote: "This is the third time in Mark that Jesus predicts his death, and each time the disciples respond by arguing about status instead. Verse 45 is one of the most important single verses in the whole Gospel.",
      lookForwardIdea: "a behaviour to change is seeking status. Is there a way to serve someone this week without needing credit for it?",
      betweenSessions: {
        ref: "Mark 10:46&ndash;12:27",
        desc: "Blind Bartimaeus healed, the Triumphal Entry into Jerusalem and the clearing of the temple, the cursed fig tree and a teaching on faith, a challenge to Jesus&rsquo; authority, the parable of the wicked tenants, and the question about paying taxes to Caesar.",
        note: "This includes Bonus Session B6 (What Do You Want?, Mark 10:46&ndash;52) and Bonus Session B7 (The King Arrives, Mark 11:1&ndash;11, 15&ndash;19) at the back of this app. Try the rhythm on your own: read, retell, then ask what stands out, what&rsquo;s tricky, what it shows about God, and what it shows about people."
      },
      memoryVerse: { ref: "Mark 10:45", text: "&ldquo;For even the Son of Man did not come to be served, but to serve, and to give his life as a ransom for many.&rdquo;" }
    },
    {
      id: "8", title: "Love God, Love Your Neighbour", refs: ["Mark 12:28&ndash;34"],
      summary: "Amid a string of hostile questions meant to trap him, one scribe asks Jesus a genuine one: what matters most? Jesus&rsquo; answer, to love God fully and love your neighbour as yourself, is so good it&rsquo;s the last question anyone dares ask him.",
      lookUpPrayer: "Pray about what came up in Look Back, then ask the Holy Spirit to help you love God and others better because of what you&rsquo;re about to read.",
      leaderNote: "This comes during a string of hostile questions from religious leaders trying to trap Jesus. This scribe&rsquo;s question is genuine, and it&rsquo;s the last question anyone dares ask him.",
      lookForwardIdea: "an example to follow is picking one specific person this week and asking what loving them, the way Jesus describes, would actually look like.",
      betweenSessions: {
        ref: "Mark 12:35&ndash;14:21",
        desc: "A question about David&rsquo;s son, a warning about religious show, the widow&rsquo;s offering, Jesus&rsquo; teaching about the future (all of Mark 13), the plot to kill him, a woman anointing him at Bethany, and Judas arranging the betrayal.",
        note: "This includes all of Mark 13, the longest single teaching block in the book, so take your time. Try the rhythm on your own: read, retell, then ask what stands out, what&rsquo;s tricky, what it shows about God, and what it shows about people."
      },
      memoryVerse: { ref: "Mark 12:30&ndash;31", text: "&ldquo;Love the Lord your God with all your heart and with all your soul and with all your mind and with all your strength.&rdquo; &hellip; &ldquo;Love your neighbour as yourself.&rdquo; There is no commandment greater than these." }
    },
    {
      id: "9", title: "The Supper and the Garden", refs: ["Mark 14:22&ndash;42"],
      summary: "At the Passover table, Jesus reinterprets the bread and wine around his own coming death. Hours later in Gethsemane, he prays honestly, painfully, for another way, before choosing his Father&rsquo;s will.",
      lookUpPrayer: "Try a fuller prayer this week: something to thank God for, something honest, and something to ask him for, then invite the Holy Spirit into your reading.",
      leaderNote: "This meal was the Passover, the annual Jewish remembrance of being rescued from slavery in Egypt. Jesus reinterprets its bread and wine around his own coming death.",
      lookForwardIdea: "an example to follow is Jesus&rsquo; honest prayer in Gethsemane. Is there something hard you need to bring honestly to God instead of pretending it&rsquo;s fine?",
      betweenSessions: {
        ref: "Mark 14:43&ndash;15:20",
        desc: "Jesus&rsquo; arrest, his trial before the religious council, Peter&rsquo;s three denials, and his trial before Pilate.",
        note: "This includes Bonus Session B8 (Silence and Denial, Mark 14:53&ndash;72) at the back of this app. Try the rhythm on your own: read, retell, then ask what stands out, what&rsquo;s tricky, what it shows about God, and what it shows about people."
      },
      memoryVerse: { ref: "Mark 14:36", text: "&ldquo;Abba, Father,&rdquo; he said, &ldquo;everything is possible for you. Take this cup from me. Yet not what I will, but what you will.&rdquo;" }
    },
    {
      id: "10", title: "The Cross and the Empty Tomb", refs: ["Mark 15:21&ndash;47", "Mark 16:1&ndash;8"], refDisplay: "Mark 15:21&ndash;47; 16:1&ndash;8",
      summary: "Jesus is crucified, dies, and is buried in a borrowed tomb. Three days later the women find it empty, and hear the news that changes everything: he has risen.",
      retellIntro: "This is a longer, more important reading than usual, give it extra time.",
      readNote: "the passage aloud.",
      lookUpPrayer: "Pray about everything this course has stirred up in you, then ask the Holy Spirit to make this passage feel real as you read it together for the last time.",
      leaderNote: "Mark&rsquo;s earliest manuscripts end at 16:8, later endings were added afterward, which is why we stop there too. Their silence obviously didn&rsquo;t last, you&rsquo;re reading this because they eventually spoke, and the risen Jesus really did go on to meet his followers. Read 1 Corinthians 15:3&ndash;8 or John 21 this week to see what happened next.",
      lookForwardIdea: "a promise to trust is &ldquo;he is risen.&rdquo; What difference does the resurrection make to something you&rsquo;re facing this week?",
      prayerNote: "Pray for what came up in Look Back, for each person&rsquo;s Look Forward response, and for the person they&rsquo;ll share this passage with. This is your last core session together, so take extra time.",
      betweenSessions: null,
      memoryVerse: { ref: "Mark 16:6", text: "&ldquo;Don&rsquo;t be alarmed,&rdquo; he said. &ldquo;You are looking for Jesus the Nazarene, who was crucified. He has risen! He is not here. See the place where they laid him.&rdquo;" }
    }
  ],

  bonusSessions: [
    {
      id: "B1", title: "Called to Be With Him", refs: ["Mark 3:13&ndash;19"], bonus: true, fitsAfter: "Fits after Session 2 (Who Can Forgive Sins?)",
      summary: "Jesus goes up a mountain and chooses twelve ordinary men to be his closest followers, for two reasons: to be with him, and to be sent out. It&rsquo;s a short passage, but it names exactly what following Jesus is for.",
      leaderNote: "The list includes fishermen, a tax collector, and a political zealot, an unlikely mix Jesus deliberately brings together. Notice the order: being with him comes before being sent by him.",
      lookForwardIdea: "an example to follow is the Twelve, called first to be with Jesus, then to go. Which of those two do you need more of this week, time with him, or courage to go?",
      memoryVerse: { ref: "Mark 3:14&ndash;15", text: "He appointed twelve that they might be with him and that he might send them out to preach and to have authority to drive out demons." }
    },
    {
      id: "B2", title: "The Four Soils", refs: ["Mark 4:1&ndash;20"], bonus: true, fitsAfter: "Fits after Session 2 (Who Can Forgive Sins?)",
      summary: "Jesus tells a story about a farmer scattering seed on four different kinds of ground, then explains it privately: the seed is the word, and the soils are different ways people receive it. It&rsquo;s a parable about exactly what this course is asking you to do.",
      leaderNote: "Jesus explains this parable to his disciples in private, it&rsquo;s meant to be understood, not a puzzle to guess. The real question isn&rsquo;t which soil is right, everyone starts somewhere, but which soil you&rsquo;re becoming.",
      lookForwardIdea: "a behaviour to change is how you&rsquo;re receiving what you read each week. What would good soil look like for you this week: less distraction, less shallow, more roots?",
      memoryVerse: { ref: "Mark 4:20", text: "Others, like seed sown on good soil, hear the word, accept it, and produce a crop, some thirty, some sixty, some a hundred times what was sown." }
    },
    {
      id: "B3", title: "Set Free", refs: ["Mark 5:1&ndash;20"], bonus: true, fitsAfter: "Fits after Session 3 (Who Is This?)",
      summary: "A man possessed by a legion of demons, living among the tombs, is set completely free by Jesus. Instead of asking to leave with him, Jesus sends him home to tell his own people what God has done.",
      leaderNote: "This was a mostly Gentile region, which is why there was a herd of pigs (pigs were unclean to Jews). This is one of the most vivid, unsettling stories in Mark, let the discomfort sit.",
      lookForwardIdea: "an example to follow is the man going home to tell people who already know him. Who in your own life could you tell what Jesus has done?",
      memoryVerse: { ref: "Mark 5:19", text: "Jesus did not let him, but said, &ldquo;Go home to your own people and tell them how much the Lord has done for you, and how he has had mercy on you.&rdquo;" }
    },
    {
      id: "B4", title: "The Mountain and the Voice", refs: ["Mark 9:2&ndash;13"], bonus: true, fitsAfter: "Fits after Session 5 (Who Do You Say I Am?)",
      summary: "Jesus is transfigured before three disciples, his appearance changed, Moses and Elijah appearing beside him. A voice from heaven settles the question of who he is: listen to him.",
      leaderNote: "This happens six days after Peter&rsquo;s confession. Moses represents the Law, Elijah the Prophets, both appear talking with Jesus, as if the whole Old Testament story is pointing to him.",
      lookForwardIdea: "a command to obey is &ldquo;listen to him.&rdquo; Is there something Jesus has said that you&rsquo;ve been avoiding rather than listening to?",
      memoryVerse: { ref: "Mark 9:7", text: "Then a cloud appeared and covered them, and a voice came from the cloud: &ldquo;This is my Son, whom I love. Listen to him!&rdquo;" }
    },
    {
      id: "B5", title: "Help My Unbelief", refs: ["Mark 9:14&ndash;29"], bonus: true, fitsAfter: "Fits after Session 5 (Who Do You Say I Am?)",
      summary: "A father brings his suffering son to the disciples, who can&rsquo;t heal him, then to Jesus. When Jesus questions his faith, the father gives one of the most honest prayers in the Bible: he believes, and he doesn&rsquo;t, both at once.",
      leaderNote: "This comes straight after the Transfiguration (Bonus B4), a jarring comedown from the mountain to a crowd, an argument, and a father&rsquo;s desperation. The disciples&rsquo; failure to heal becomes part of the lesson.",
      lookForwardIdea: "a promise to trust is that honest doubt, brought to Jesus, isn&rsquo;t the opposite of faith. Where are you believing and struggling to believe at the same time this week?",
      memoryVerse: { ref: "Mark 9:24", text: "Immediately the boy&rsquo;s father exclaimed, &ldquo;I do believe; help me overcome my unbelief!&rdquo;" }
    },
    {
      id: "B6", title: "What Do You Want?", refs: ["Mark 10:46&ndash;52"], bonus: true, fitsAfter: "Fits after Session 7 (Not to Be Served, But to Serve)",
      summary: "Blind Bartimaeus refuses to be silenced, calling out to Jesus from the roadside. Jesus stops and asks him one of the most important questions in the whole Gospel, then Bartimaeus doesn&rsquo;t just get his sight back, he follows.",
      leaderNote: "This happens on the road up to Jerusalem, right before Jesus enters the city to die. Unlike the disciples, who keep missing the point, a blind beggar sees exactly who Jesus is and what he needs from him.",
      lookForwardIdea: "a command to obey is what Jesus asks Bartimaeus: &ldquo;What do you want me to do for you?&rdquo; What&rsquo;s your honest answer to that question this week?",
      memoryVerse: { ref: "Mark 10:52", text: "&ldquo;Go,&rdquo; said Jesus, &ldquo;your faith has healed you.&rdquo; Immediately he received his sight and followed Jesus along the road." }
    },
    {
      id: "B7", title: "The King Arrives", refs: ["Mark 11:1&ndash;11", "Mark 11:15&ndash;19"], refDisplay: "Mark 11:1&ndash;11, 15&ndash;19", bonus: true, fitsAfter: "Fits after Session 7 (Not to Be Served, But to Serve)",
      summary: "Jesus rides into Jerusalem on a young donkey as crowds shout &ldquo;Hosanna,&rdquo; then walks straight into the temple and drives out those turning it into a marketplace. It&rsquo;s a king&rsquo;s arrival, but not the kind anyone expected.",
      leaderNote: "Riding a young donkey deliberately fulfilled an old picture of a humble king from the prophets. Verses 12&ndash;14, Jesus cursing a fig tree, are skipped for focus. &ldquo;Hosanna&rdquo; means &ldquo;save now.&rdquo;",
      lookForwardIdea: "a command to obey is welcoming Jesus as King, not just Saviour. What would that look like in one area of your life this week?",
      memoryVerse: { ref: "Mark 11:9", text: "Those who went ahead and those who followed shouted, &ldquo;Hosanna!&rdquo; &ldquo;Blessed is he who comes in the name of the Lord!&rdquo;" }
    },
    {
      id: "B8", title: "Silence and Denial", refs: ["Mark 14:53&ndash;72"], bonus: true, fitsAfter: "Fits after Session 9 (The Supper and the Garden)",
      summary: "Jesus stands silent before the council while, just outside, Peter denies knowing him three times. Mark tells both trials side by side, one faithful under pressure, one not.",
      leaderNote: "Mark deliberately interweaves two trials, Jesus inside facing the council, Peter outside facing a servant girl by the fire. Notice the contrast as you read.",
      lookForwardIdea: "a promise to trust is that Peter&rsquo;s failure wasn&rsquo;t final. Is there a specific failure you need to bring to God rather than hide from?",
      memoryVerse: { ref: "Mark 14:62", text: "&ldquo;I am,&rdquo; said Jesus. &ldquo;And you will see the Son of Man sitting at the right hand of the Mighty One and coming on the clouds of heaven.&rdquo;" }
    }
  ]
};
