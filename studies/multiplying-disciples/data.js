/* =========================================================================
   STUDY DATA: Connect, Win, Build, Train, Send
   A seventeen-week chronological study through the life of Jesus, tracing
   how he connected with, won, built, trained, and sent his disciples,
   curated directly from Darren's own Gospel Harmony chronology (Cox &
   Easley's Harmony of the Gospels, harmony.darrenrowse.com), not adapted
   from any external source PDF.

   Sessions are ordered by when these events actually happened, not grouped
   by stage. That's deliberate: Jesus sends the Twelve out (session 8) before
   Peter's confession, the Transfiguration, or either Build session, he didn't
   run this as a five-stage checklist completed once in order. Sessions 8 and
   14, both sendings, are tagged Train rather than Send at Darren's request:
   they are practice runs he calls them back from, not the final commission.
   That leaves two Send sessions, 16 and 17: the restoration of Peter, where
   Jesus recommissions him, and the Great Commission itself. See
   each session's `stage` field (connect / win / build / train / send),
   rendered as a small tag on the cover and journey screens.

   Two sessions (15 and 16) were added after the initial 15-session plan,
   at Darren's request, since foot washing and the restoration of Peter
   both deserved a full session rather than just reading: John 13:1-17 and
   John 21:1-19. Adding them split what was one impossibly large final
   reading gap into two big-but-manageable ones (see sessions 14 and 15's
   betweenSessions, both five days instead of the usual two or three).

   `betweenSessions` here uses a `days` array (a small, additive engine
   change) rather than the single ref/desc/note shape older studies use,
   since Darren specifically wanted 2-3 days of homework per week, not one
   lump reading block. `sessionNoun` is set to "week" throughout, matching
   how this course is actually being run with his ministry team.
   ========================================================================= */

window.STUDY = {
  id: "multiplying-disciples",
  title: "Connect, Win, Build, Train, Send",
  sessionNoun: "week",
  sessionsLabel: "Seventeen Weeks",
  footerAttribution: "The Connect, Win, Build, Train, Send framework used throughout this course comes from the <a href=\"https://powertochange.org.au/church-movements/shift/\" target=\"_blank\" rel=\"noopener noreferrer\" style=\"color:inherit;\">ShiftM2M</a> course.",

  welcomeCopy: {
    tagline: "connect &middot; win &middot; build &middot; train &middot; send",
    titleHtml: "connect<br>win<br>build<br>train<br>send",
    lead: "Seventeen weeks, followed in chronological order, tracing how Jesus made disciples who made disciples: connecting with them, winning them, building and training them, then sending them out to do the same. Read a little between each week, then work through one passage together, as a small group or one-on-one."
  },

  methodCopy: {
    lead: 'Every week follows the same <strong style="color:var(--ink-900);font-weight:600;">3 steps</strong>, in the same order, whether it&rsquo;s just the two of you or a small group. Altogether, expect it to take <strong style="color:var(--ink-900);font-weight:600;">60 to 75 minutes</strong>.',
    lookBackBlurb: "A time to reconnect: how you&rsquo;ve experienced God this week, what you&rsquo;re thankful for, what&rsquo;s been hard, and how what you learned last time, including anything from the in-between reading, actually landed.",
    lookUpBlurb: "Read the passage aloud, retell it in your own words, and check you got the whole story. Then let a few questions do the real work.",
    lookForwardBlurb: "Turn what you&rsquo;ve discovered into a lived response: a behaviour, a promise, an example, or a command. Decide who you&rsquo;ll share it with this week, then pray for each other before you finish.",
    betweenBlurb: "Most weeks also include optional reading between sessions, filling in the chronology of Jesus&rsquo; life and ministry between one week&rsquo;s passage and the next. A couple of weeks carry more than usual, named plainly rather than hidden, and a couple have none at all, when the two passages sit right next to each other in the story."
  },

  finishCopy: {
    heading: "make disciples who make disciples",
    body: "Seventeen weeks, followed in chronological order: Jesus connecting, winning, building, training, and sending, again and again, not once in a straight line but in a pattern that kept repeating and multiplying, even sending people out before they were &ldquo;finished.&rdquo; You&rsquo;ve looked back, looked up, and looked forward together the whole way, and read a great deal of the story in between. That&rsquo;s no small thing, and it&rsquo;s not really an ending.",
    leadSomeoneElse: "This course was built to need no training, which means you&rsquo;re already qualified to lead someone else through it. You&rsquo;ve spent these weeks sharing each passage with someone, they&rsquo;re your obvious first invitation. When you&rsquo;re ready, reset your progress and start again with them.",
    nextStudy: "Without necessarily realising it, you&rsquo;ve been practising Discovery Bible Study, a simple, repeatable way of reading the Bible with someone: look back, look up, look forward. Keep using that same rhythm on your own, with any passage or book, there&rsquo;s a whole library of other studies here worth exploring too."
  },

  // An extra row at the top of the journey list, above Before You Begin. Optional, per study:
  // any study without a `timeline` block renders the journey exactly as before.
  timeline: {
    href: "timeline.html",
    title: "The Timeline",
    meta: "Where these seventeen weeks fall across three and a half years"
  },

  preReading: {
    intro: [
      "This study traces the life of Jesus chronologically, with a particular eye on how he made disciples, though even seventeen weeks can&rsquo;t cover it all. It starts when Jesus is thirty, right after his baptism and temptation, the beginning of his public ministry.",
      "This reading covers what comes before: his early years, and John preparing the way for him.",
      "Before Jesus called anyone to follow him, he himself was prepared, by the Father, for the ministry ahead, becoming what he would later call his own disciples to become. That&rsquo;s worth sitting with as you begin: he was formed before he formed anyone else."
    ],
    days: [
      { ref: "John 1:1&ndash;18", desc: "The prologue: &ldquo;In the beginning was the Word.&rdquo; Who Jesus is, before the story of what he does begins." },
      { ref: "Luke 2:22&ndash;39", desc: "Jesus presented in the temple as an infant. Simeon and Anna recognise him, the first witnesses to who he is." },
      { ref: "Luke 2:41&ndash;52", desc: "Jesus at twelve in the temple, growing in wisdom and stature. His own formation, before he forms anyone else." },
      { ref: "Matthew 3:1&ndash;12", desc: "John the Baptist prepares the way: his preaching, his call to repentance, his warning about the one coming after him." },
      { ref: "Matthew 3:13&ndash;4:11", desc: "Jesus&rsquo; own baptism and temptation. Affirmed as Son, then tested as Son, before he calls anyone." }
    ]
  },

  sessions: [
    {
      id: "1", title: "First Disciples", stage: "connect", refs: ["John 1:35&ndash;51"],
      summary: "Andrew and John leave John the Baptist to follow Jesus after hearing him called &ldquo;the Lamb of God.&rdquo; Andrew brings his brother Simon Peter, and Jesus gives him a new name on the spot. Philip and Nathanael follow within the same day.",
      lookBack: {
        note: "There&rsquo;s no &ldquo;last week&rdquo; yet, so start here instead.",
        questions: [
          "What&rsquo;s your name, and one thing about you the group might not know?",
          "How did you find the pre-reading, Jesus growing up, John preparing the way, his baptism and temptation?",
          "What are you hoping to get out of these seventeen weeks together?",
          "How can we pray for you as we start this course?"
        ]
      },
      lookUpPrayer: "Never prayed aloud before? One sentence is plenty. Thank God for one thing that came up just now, then ask the Holy Spirit to help you see this story clearly.",
      leaderNote: "These disciples don&rsquo;t come from nowhere, Andrew and John were already John the Baptist&rsquo;s own disciples, and it&rsquo;s John himself who points them toward Jesus. &ldquo;Come and you will see&rdquo; becomes the pattern the rest of the chapter repeats: Andrew tells Peter, Philip tells Nathanael.",
      lookForwardIdea: "an example to follow is Andrew and Philip, both of whom go straight and get someone else the moment they&rsquo;ve found Jesus themselves. Who&rsquo;s the first person you&rsquo;d want to say &ldquo;come and see&rdquo; to this week?",
      memoryVerse: { ref: "John 1:39", text: "&ldquo;Come,&rdquo; he replied, &ldquo;and you will see.&rdquo; So they went and saw where he was staying, and they spent that day with him." },
      betweenSessions: {
        days: [
          { ref: "John 2:1&ndash;12", desc: "Water to wine at Cana; on to Capernaum." },
          { ref: "John 2:13&ndash;22", desc: "Clearing the temple." }
        ]
      }
    },
    {
      id: "2", title: "Nicodemus by Night", stage: "connect", refs: ["John 3:1&ndash;21"],
      summary: "A respected Pharisee and member of the Jewish ruling council comes to Jesus after dark with genuine questions. Jesus tells him he must be &ldquo;born again,&rdquo; and explains that God sent his Son not to condemn the world, but to save it.",
      lookUpPrayer: "Pray about what came up in Look Back, then ask the Holy Spirit to help you understand what you&rsquo;re about to read.",
      leaderNote: "Nicodemus coming at night likely reflects caution rather than shame, a public leader visiting a controversial new rabbi. Jesus doesn&rsquo;t shame him for the timing, he engages his real question seriously, all the way to one of the most famous verses in the whole Bible.",
      lookForwardIdea: "a promise to trust is that God&rsquo;s aim was never condemnation but rescue. Is there someone you&rsquo;ve assumed God, or you, has already written off, who might actually be a Nicodemus, closer to an honest question than it looks?",
      memoryVerse: { ref: "John 3:16", text: "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life." },
      betweenSessions: {
        days: [
          { ref: "John 3:22&ndash;36", desc: "John the Baptist&rsquo;s testimony about Jesus." }
        ]
      }
    },
    {
      id: "3", title: "Samaritan Woman", stage: "connect", refs: ["John 4:1&ndash;42"],
      summary: "Jesus stops at a well at noon and asks a Samaritan woman, an outsider on every count, for a drink. Their conversation turns to living water and true worship, and she leaves her jar behind to tell her whole town, &ldquo;Come, see a man who told me everything I ever did.&rdquo;",
      lookUpPrayer: "Bring what you just shared to God, then ask the Holy Spirit to reveal something in this passage you might otherwise miss.",
      leaderNote: "Jews and Samaritans avoided each other, and a rabbi wouldn&rsquo;t normally speak to a woman alone in public, let alone one with her history. Jesus deliberately crosses both lines. Notice the parallel: John&rsquo;s first disciples said &ldquo;come and see&rdquo; in chapter 1, and now she says almost the exact same words.",
      lookForwardIdea: "an example to follow is a woman with a complicated past becoming the very first person in John&rsquo;s Gospel to actually go and connect a whole town to Jesus. What&rsquo;s stopping you from telling someone what Jesus has already shown you, some sense of not being qualified enough yet?",
      memoryVerse: { ref: "John 4:39", text: "Many of the Samaritans from that town believed in him because of the woman&rsquo;s testimony, &ldquo;He told me everything I ever did.&rdquo;" },
      betweenSessions: {
        days: [
          { ref: "John 4:43&ndash;54", desc: "Welcomed in Galilee; heals an official&rsquo;s son." },
          { ref: "Luke 4:16&ndash;31", desc: "Rejected at Nazareth." },
          { ref: "Matthew 4:12&ndash;17", desc: "Settles in Capernaum; ministry begins." }
        ]
      }
    },
    {
      id: "4", title: "Miraculous Catch", stage: "win", refs: ["Luke 5:1&ndash;11"],
      summary: "After a fruitless night of fishing, Jesus tells Simon Peter to try again, and the catch is so large the nets start to break. Peter falls at Jesus&rsquo; knees, overwhelmed, and he, James, and John leave everything to follow Jesus.",
      lookUpPrayer: "Pray for each other about whatever came up in Look Back, then invite the Holy Spirit to open your eyes as you read.",
      leaderNote: "By this point Peter and the others had already met Jesus (John 1) and seen him teach and heal around Capernaum, this isn&rsquo;t a first encounter, it&rsquo;s the moment following him stops being occasional and becomes total. Peter&rsquo;s reaction, &ldquo;Go away from me, Lord, I am a sinful man,&rdquo; is the real turning point of the story, not the fish.",
      lookForwardIdea: "a promise to trust is that Jesus meets your sense of unworthiness with an invitation rather than a rejection: &ldquo;don&rsquo;t be afraid, from now on you will fish for people.&rdquo; Where do you need to hear that this week?",
      memoryVerse: { ref: "Luke 5:10&ndash;11", text: "Then Jesus said to Simon, &ldquo;Don&rsquo;t be afraid; from now on you will fish for people.&rdquo; So they pulled their boats up on shore, left everything and followed him." },
      betweenSessions: {
        days: [
          { ref: "Mark 1:21&ndash;34", desc: "An unclean spirit; healings at Capernaum." },
          { ref: "Mark 1:35&ndash;45", desc: "A preaching tour of Galilee; cleansing a leper." },
          { ref: "Luke 5:17&ndash;26", desc: "The paralysed man lowered through the roof." }
        ]
      }
    },
    {
      id: "5", title: "Calling Levi", stage: "win", refs: ["Matthew 9:9&ndash;13"],
      summary: "Jesus calls Matthew (Levi), a tax collector despised by his own people for collaborating with Rome, with two words: &ldquo;Follow me.&rdquo; Matthew gets up immediately and throws a banquet, inviting his own circle of &ldquo;sinners and tax collectors&rdquo; to meet Jesus.",
      lookUpPrayer: "Pray about what came up in Look Back, then ask the Holy Spirit to help you understand what you&rsquo;re about to read.",
      leaderNote: "Tax collectors were considered traitors, they extorted their own people on Rome&rsquo;s behalf. When religious leaders object to Jesus eating with &ldquo;sinners,&rdquo; his answer reframes the whole mission: &ldquo;it is not the healthy who need a doctor, but the sick.&rdquo;",
      lookForwardIdea: "an example to follow is Matthew&rsquo;s first instinct after being won himself: throw a party and connect his own friends to Jesus. Who in your own circle would you invite, if following Jesus felt like this good a piece of news to share?",
      memoryVerse: { ref: "Matthew 9:13", text: "But go and learn what this means: &ldquo;I desire mercy, not sacrifice.&rdquo; For I have not come to call the righteous, but sinners." },
      betweenSessions: {
        days: [
          { ref: "John 5:1&ndash;47", desc: "Healing at the Pool of Bethesda." },
          { ref: "Mark 2:18&ndash;3:6", desc: "Fasting, the Sabbath, the man with the shrivelled hand." },
          { ref: "Matthew 12:15&ndash;21", desc: "The promised Servant." }
        ]
      }
    },
    {
      id: "6", title: "Twelve Appointed", stage: "train", refs: ["Mark 3:13&ndash;19"],
      summary: "From the larger crowd of followers, Jesus climbs a mountain and calls out twelve specific men by name, appointing them for two things: to be with him, and to be sent out to preach and to drive out demons.",
      lookUpPrayer: "Bring what you just shared to God, then ask the Holy Spirit to reveal something in this passage you might otherwise miss.",
      leaderNote: "The list itself is telling, a mix of fishermen, a former tax collector, and even a Zealot, Simon, alongside a man who will betray him. Jesus doesn&rsquo;t hand-pick an obviously impressive team, he trains an ordinary one. Verse 14&rsquo;s two purposes, &ldquo;that they might be with him&rdquo; and &ldquo;that he might send them out&rdquo;, are really the whole shape of this entire course.",
      lookForwardIdea: "a command to obey is Jesus&rsquo; own priority order: relationship before assignment, being with him before being sent by him. Is there an area of serving or leading where you&rsquo;ve reversed that order?",
      memoryVerse: { ref: "Mark 3:14", text: "He appointed twelve that they might be with him and that he might send them out to preach." }
    },
    {
      id: "7", title: "The Beatitudes", stage: "build", refs: ["Matthew 5:1&ndash;12"],
      summary: "Jesus sits down on a mountainside with his disciples and opens his most famous teaching with a list of unexpected blessings: on the poor in spirit, the mourning, the meek, the merciful, the persecuted.",
      lookUpPrayer: "Pray for each other about whatever came up in Look Back, then invite the Holy Spirit to open your eyes as you read.",
      leaderNote: "Each of these would have sounded backwards to the original hearers, blessed usually meant prosperous and comfortable, not poor, mourning, or persecuted. Jesus is describing the actual character of someone shaped by his kingdom, not a checklist to perform but a picture of what forming disciples increasingly looks like.",
      lookForwardIdea: "a promise to trust is that God&rsquo;s blessing rests on exactly the kind of person the world tends to overlook. Which of these eight descriptions feels furthest from true of you right now, and closest to something God might be growing in you?",
      memoryVerse: { ref: "Matthew 5:3", text: "Blessed are the poor in spirit, for theirs is the kingdom of heaven." },
      betweenSessions: {
        days: [
          { ref: "Matthew 5:13&ndash;7:29", desc: "Finishing the Sermon on the Mount." },
          { ref: "Matthew 8:5&ndash;13; Luke 7:11&ndash;17", desc: "The centurion&rsquo;s faith; the widow&rsquo;s son at Nain." },
          { ref: "Matthew 8:23&ndash;34", desc: "Calming the storm; the Gerasene demoniac." }
        ]
      }
    },
    {
      id: "8", title: "Sending the Twelve", stage: "train", refs: ["Matthew 9:35&ndash;11:1"],
      summary: "Jesus sends his twelve disciples out in pairs, giving them authority over impure spirits and the power to heal, with specific, practical instructions about what to take, who to stay with, and how to respond to rejection.",
      lookUpPrayer: "Pray about what came up in Look Back, then ask the Holy Spirit to help you understand what you&rsquo;re about to read.",
      leaderNote: "This happens before Peter&rsquo;s confession, before the Transfiguration, before the disciples had &ldquo;arrived&rdquo; in any obvious sense, they&rsquo;d had one round of connecting, one clear commitment, and a single mountain-top appointment. Jesus sends real ministry responsibility to unfinished people, which is itself the whole point of this course.",
      lookForwardIdea: "a command to obey is going, even without feeling fully ready or fully trained. What&rsquo;s something you&rsquo;ve been waiting to feel qualified enough to do, that Jesus might be asking you to simply go and do now?",
      memoryVerse: { ref: "Matthew 10:7&ndash;8", text: "As you go, proclaim this message: &ldquo;The kingdom of heaven has come near.&rdquo; Heal the sick, raise the dead, cleanse those who have leprosy, drive out demons. Freely you have received; freely give." },
      betweenSessions: {
        days: [
          { ref: "Matthew 14:13&ndash;33", desc: "Feeding the 5,000; walking on water." },
          { ref: "John 6:22&ndash;71", desc: "The Bread of Life; many disciples turn back." },
          { ref: "Matthew 15:21&ndash;39", desc: "A Gentile mother&rsquo;s faith; feeding the 4,000." }
        ]
      }
    },
    {
      id: "9", title: "Peter&rsquo;s Confession", stage: "win", refs: ["Matthew 16:13&ndash;20"],
      summary: "Jesus asks his disciples directly who people say he is, then who they say he is. Peter answers, &ldquo;You are the Messiah, the Son of the living God,&rdquo; and Jesus calls it a truth revealed by the Father himself, not figured out by flesh and blood.",
      lookUpPrayer: "Pray about what&rsquo;s come up so far, then ask the Holy Spirit to help you see this passage clearly.",
      leaderNote: "This sits at roughly the midpoint of the disciples&rsquo; time with Jesus. Peter&rsquo;s declaration is the moment following a teacher becomes something closer to worship, belief moves from admiration to conviction. Notice Jesus doesn&rsquo;t stop there, in the very next verses he immediately turns to what it will cost.",
      lookForwardIdea: "a command to obey is answering Jesus&rsquo; own question for yourself, not just repeating what you&rsquo;ve heard others say. If Jesus asked you directly, &ldquo;who do you say I am?&rdquo;, what would your honest answer actually be right now?",
      memoryVerse: { ref: "Matthew 16:16&ndash;17", text: "Simon Peter answered, &ldquo;You are the Messiah, the Son of the living God.&rdquo; Jesus replied, &ldquo;Blessed are you, Simon son of Jonah, for this was not revealed to you by flesh and blood, but by my Father in heaven.&rdquo;" },
      betweenSessions: {
        days: [
          { ref: "Matthew 16:21&ndash;28", desc: "The first death prediction; the cost of following." }
        ]
      }
    },
    {
      id: "10", title: "The Transfiguration", stage: "train", refs: ["Luke 9:28&ndash;36"],
      summary: "Jesus takes Peter, James, and John up a mountain to pray, and his appearance is transformed, dazzling white, talking with Moses and Elijah about his coming death in Jerusalem. A voice from a cloud says, &ldquo;This is my Son, whom I have chosen; listen to him.&rdquo;",
      lookUpPrayer: "Pray about what came up in Look Back, then ask the Holy Spirit to help you understand what you&rsquo;re about to read.",
      leaderNote: "Only the inner three are given this deeper glimpse, training isn&rsquo;t identical for every disciple, some moments go deeper with those who&rsquo;ll need it most. Peter&rsquo;s instinct to build shelters and stay misses the point entirely, this is a glimpse to strengthen them for what&rsquo;s coming, not a destination to camp at.",
      lookForwardIdea: "a command to obey is the voice from the cloud: &ldquo;listen to him.&rdquo; Not admire him, not merely believe facts about him, listen and actually do what he says. What&rsquo;s something Jesus has said that you&rsquo;ve been slow to actually listen to?",
      memoryVerse: { ref: "Luke 9:35", text: "A voice came from the cloud, saying, &ldquo;This is my Son, whom I have chosen; listen to him.&rdquo;" },
      betweenSessions: {
        days: [
          { ref: "Matthew 17:9&ndash;13", desc: "Coming down the mountain; questions about Elijah." }
        ]
      }
    },
    {
      id: "11", title: "Failed Exorcism", stage: "train", refs: ["Matthew 17:14&ndash;21"],
      summary: "While Jesus is up the mountain, a father brings his suffering son to the remaining disciples, who try and fail to drive out the demon. Jesus heals the boy immediately, then privately explains their failure: &ldquo;because you have so little faith.&rdquo;",
      lookUpPrayer: "Bring what you just shared to God, then ask the Holy Spirit to reveal something in this passage you might otherwise miss.",
      leaderNote: "This is genuinely uncomfortable, the Twelve had already been given authority to do exactly this, and had presumably done it successfully before. Failure here isn&rsquo;t the end of their training, it&rsquo;s part of it, Jesus corrects rather than replaces them.",
      lookForwardIdea: "a behaviour to change is bringing a specific failure honestly to Jesus for correction, rather than hiding it or giving up. Where have you failed at something you&rsquo;d already been trusted with, and avoided asking why?",
      memoryVerse: { ref: "Matthew 17:20", text: "He replied, &ldquo;Because you have so little faith. Truly I tell you, if you have faith as small as a mustard seed, you can say to this mountain, &lsquo;Move from here to there,&rsquo; and it will move. Nothing will be impossible for you.&rdquo;" },
      betweenSessions: {
        days: [
          { ref: "Matthew 17:22&ndash;27", desc: "The second death prediction; the temple tax." }
        ]
      }
    },
    {
      id: "12", title: "Who&rsquo;s the Greatest", stage: "build", refs: ["Matthew 18:1&ndash;5"],
      summary: "The disciples ask Jesus who&rsquo;s the greatest in the kingdom of heaven. He calls a small child over, stands the child among them, and says that unless they change and become like children, they won&rsquo;t even enter the kingdom, let alone lead in it.",
      lookUpPrayer: "Pray about what came up in Look Back, then ask the Holy Spirit to help you understand what you&rsquo;re about to read.",
      leaderNote: "Children had no social status in that culture, they weren&rsquo;t a sentimental symbol of innocence so much as an example of someone with no leverage or standing to claim. Jesus redefines greatness as low status willingly embraced, not influence accumulated.",
      lookForwardIdea: "an example to follow is a child Jesus deliberately puts in the middle of an argument about status. Where are you quietly competing for recognition instead of embracing the lower place?",
      memoryVerse: { ref: "Matthew 18:4", text: "Therefore, whoever takes the lowly position of this child is the greatest in the kingdom of heaven." },
      betweenSessions: {
        days: [
          { ref: "Matthew 18:6&ndash;20", desc: "Warnings against causing others to stumble; how to handle conflict." }
        ]
      }
    },
    {
      id: "13", title: "Unmerciful Servant", stage: "build", refs: ["Matthew 18:21&ndash;35"],
      summary: "Peter asks how many times he should forgive someone who sins against him, and Jesus answers with a parable: a servant forgiven an impossible debt refuses to forgive a much smaller one owed to him, and it costs him everything.",
      lookUpPrayer: "Pray for each other about whatever came up in Look Back, then invite the Holy Spirit to open your eyes as you read.",
      leaderNote: "The first debt, ten thousand bags of gold, is deliberately absurd, a sum no servant could ever repay, while the second, a hundred silver coins, is real but modest by comparison. The gap between them is the whole point, forgiven people who won&rsquo;t forgive have misunderstood what they were actually given.",
      lookForwardIdea: "a behaviour to change is forgiving someone specific the way you&rsquo;ve already been forgiven, not the way they&rsquo;ve earned. Who&rsquo;s the &ldquo;hundred silver coins&rdquo; you&rsquo;ve been holding onto, next to everything you&rsquo;ve already been let off?",
      memoryVerse: { ref: "Matthew 18:32&ndash;33", text: "&ldquo;You wicked servant,&rdquo; he said, &ldquo;I cancelled all that debt of yours because you begged me to. Shouldn&rsquo;t you have had mercy on your fellow servant just as I had on you?&rdquo;" },
      betweenSessions: {
        days: [
          { ref: "Luke 9:51&ndash;62", desc: "The journey to Jerusalem begins; the cost of following." },
          { ref: "John 8:1&ndash;20", desc: "The woman caught in adultery; &ldquo;I am the light of the world.&rdquo;" },
          { ref: "John 9:1&ndash;41", desc: "Healing the man born blind." }
        ]
      }
    },
    {
      id: "14", title: "Seventy-Two Sent", stage: "train", refs: ["Luke 10:1&ndash;24"],
      summary: "Jesus appoints seventy-two others and sends them ahead in pairs to every town he&rsquo;s about to visit, with instructions similar to the Twelve&rsquo;s earlier sending. They return overjoyed, even the demons submitted to them, and Jesus rejoices that ordinary people have understood what the wise and learned have missed.",
      lookUpPrayer: "Pray about what came up in Look Back, then ask the Holy Spirit to help you understand what you&rsquo;re about to read.",
      leaderNote: "This is a second, larger wave, multiplication is already visibly under way well before the disciples are &ldquo;finished&rdquo; being trained. Jesus&rsquo; own joy in verse 21 is worth noticing, this isn&rsquo;t a managerial update, it&rsquo;s a moment of real delight in what&rsquo;s happening through ordinary people.",
      lookForwardIdea: "a promise to trust is that the harvest is genuinely plentiful, and that Jesus sends ordinary people, not just experts, to bring it in. Who&rsquo;s someone you could send, or go with, rather than assuming this is only for more qualified people?",
      memoryVerse: { ref: "Luke 10:2", text: "He told them, &ldquo;The harvest is plentiful, but the workers are few. Ask the Lord of the harvest, therefore, to send out workers into his harvest field.&rdquo;" },
      betweenSessions: {
        days: [
          { ref: "Luke 10:25&ndash;37; 10:38&ndash;42", desc: "The Good Samaritan; Mary and Martha, both about how a disciple actually behaves." },
          { ref: "Luke 15:1&ndash;32", desc: "The lost sheep, the lost coin, and the Prodigal Son." },
          { ref: "John 11:1&ndash;44", desc: "Lazarus, raised." },
          { ref: "Luke 19:1&ndash;10; Matthew 19:16&ndash;30", desc: "Zacchaeus, who responded; the rich young ruler, who didn&rsquo;t." },
          { ref: "Matthew 22:34&ndash;40; Matthew 21:1&ndash;11", desc: "The Greatest Commandment; the Triumphal Entry." }
        ],
        note: "The richest stretch in the whole story, five days instead of the usual two or three. The Lord&rsquo;s Prayer (Luke 11:1&ndash;13) and the Olivet Discourse (Matthew 24&ndash;25) sit in here too, worth a look if there&rsquo;s time."
      }
    },
    {
      id: "15", title: "Foot Washing", stage: "train", refs: ["John 13:1&ndash;17"],
      summary: "At the Last Supper, Jesus gets up, wraps a towel around his waist, and washes his disciples&rsquo; feet, the job of the lowest servant in the household. When Peter objects, Jesus insists, then tells them plainly: &ldquo;I have set you an example, that you should do as I have done for you.&rdquo;",
      lookUpPrayer: "Pray about what&rsquo;s come up so far, then ask the Holy Spirit to help you see this passage clearly.",
      leaderNote: "Foot washing was such menial, dirty work that even Jewish servants weren&rsquo;t required to do it for their masters. Jesus doesn&rsquo;t just teach servant leadership here, he stages it, in front of the same disciples he&rsquo;s about to send out to lead.",
      lookForwardIdea: "a command to obey is Jesus&rsquo; own explicit instruction: do as I have done for you. What&rsquo;s the &ldquo;foot washing&rdquo;, the low, unglamorous task, that following him is asking of you this week?",
      memoryVerse: { ref: "John 13:14&ndash;15", text: "Now that I, your Lord and Teacher, have washed your feet, you also should wash one another&rsquo;s feet. I have set you an example that you should do as I have done for you." },
      betweenSessions: {
        days: [
          { ref: "John 14:1&ndash;31", desc: "The farewell discourse, part one." },
          { ref: "John 15:1&ndash;16:33", desc: "The vine and branches; &ldquo;I have called you friends.&rdquo;" },
          { ref: "John 17:1&ndash;26; Matthew 26:36&ndash;46", desc: "The high priestly prayer; Gethsemane." },
          { ref: "Matthew 26:47&ndash;27:56", desc: "Arrest, trial, crucifixion, and Jesus&rsquo; death." },
          { ref: "Luke 24:13&ndash;35; John 20:24&ndash;29", desc: "The road to Emmaus; Thomas." }
        ],
        note: "The second five-day week. Jesus&rsquo; last and longest teaching to his own disciples, then the cross itself, then Emmaus and Thomas&rsquo; doubt on the other side of it."
      }
    },
    {
      id: "16", title: "Breakfast by the Sea", stage: "send", refs: ["John 21:1&ndash;19"],
      summary: "After the resurrection, Peter goes back to fishing, and Jesus meets him on the shore with breakfast already cooking. Three times he asks, &ldquo;Do you love me?&rdquo;, undoing Peter&rsquo;s three denials one at a time, then commissions him again: &ldquo;Feed my sheep&hellip; Follow me.&rdquo;",
      lookUpPrayer: "Pray about what came up in Look Back, then ask the Holy Spirit to help you understand what you&rsquo;re about to read.",
      leaderNote: "This is the only post-resurrection scene that&rsquo;s really about a disciple rather than the resurrection itself. It closes Peter&rsquo;s arc precisely, called by a miraculous catch of fish in Luke 5, broken by his own denial in the courtyard, and remade here, over an ordinary breakfast, with the same call to follow he first heard.",
      lookForwardIdea: "a promise to trust is that failure, even denial, isn&rsquo;t the end of the story Jesus is writing with you. Is there a place you&rsquo;ve assumed you disqualified yourself, that Jesus might be quietly asking, &ldquo;do you love me?&rdquo;, about right now?",
      memoryVerse: { ref: "John 21:17", text: "The third time he said to him, &ldquo;Simon son of John, do you love me?&rdquo; &hellip; Jesus said, &ldquo;Feed my sheep.&rdquo;" }
    },
    {
      id: "17", title: "The Great Commission", stage: "send", refs: ["Matthew 28:16&ndash;20"],
      summary: "The eleven meet the risen Jesus on a mountain in Galilee. He tells them all authority has been given to him, then commissions them: go and make disciples of all nations, baptising them, and teaching them to obey everything he&rsquo;s commanded, promising to be with them always.",
      lookUpPrayer: "Pray about everything this course has stirred up in you, then ask the Holy Spirit to help you see where he&rsquo;s been quietly at work in your own story too.",
      leaderNote: "Matthew notes plainly that some worshipped while others doubted, even here, at the very end, faith and doubt sit side by side, and Jesus sends them anyway. The command itself is simple and total: make disciples, the exact thing this whole course has traced him doing, now handed to them.",
      lookForwardIdea: "a command to obey is the commission itself: go and make disciples. Having walked through connect, win, build, train, and send across these seventeen weeks, who is God asking you to walk through them with next?",
      prayerNote: "Pray for what came up in Look Back, for each person&rsquo;s Look Forward response, and for who they&rsquo;ll actually walk through this pattern with next. This is your last week together, so take extra time.",
      memoryVerse: { ref: "Matthew 28:19&ndash;20", text: "Therefore go and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit, and teaching them to obey everything I have commanded you. And surely I am with you always, to the very end of the age." }
    }
  ]
};
