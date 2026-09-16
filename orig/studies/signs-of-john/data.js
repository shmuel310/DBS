/* =========================================================================
   STUDY DATA: Signs of John
   An eight-session study through the miraculous "signs" in John's Gospel,
   adapted from signs-of-john.pdf in Darren's reading-plan collection: John's
   own seven signs plus the resurrection itself, which the source treats as
   an eighth. Second study in the Gospels category, alongside Who Is This?
   ========================================================================= */

window.STUDY = {
  id: "signs-of-john",
  title: "Signs of John",
  sessionNoun: "session",
  sessionsLabel: "Eight Signs",
  stepTimes: { lookback: "20&ndash;30 min", lookup: "20&ndash;30 min", lookforward: "20&ndash;30 min" },
  lookForwardTemplate: "I will ______________________________.",

  welcomeCopy: {
    tagline: "seven signs and an empty tomb",
    titleHtml: "signs<br>of<br>john",
    lead: "John handpicked seven miraculous signs, plus the resurrection itself, to show exactly who Jesus is. Look at one each session, discover what it reveals, and put it into practice together, as a small group or one-on-one."
  },

  methodCopy: {
    lead: 'Every session follows the same <strong style="color:var(--ink-900);font-weight:600;">3 steps</strong>, in the same order, whether it&rsquo;s just the two of you or a small group. Altogether, expect it to take <strong style="color:var(--ink-900);font-weight:600;">around 90 minutes</strong>, though it&rsquo;s only ever a rough guide, a quicker 60 minutes works fine too.',
    lookBackBlurb: "A time to reconnect: how you&rsquo;ve experienced God this week, what you&rsquo;re thankful for, what&rsquo;s been hard, and how what you learned last time actually landed.",
    lookUpBlurb: "Read the passage aloud, retell it in your own words, and check you got the whole story. Then let a few questions do the real work.",
    lookForwardBlurb: "Turn what you&rsquo;ve discovered into an &lsquo;I will&rsquo; statement, something specific you&rsquo;ll actually do this week. Decide who you&rsquo;ll tell about it, then pray for each other before you finish."
  },

  finishCopy: {
    heading: "believe",
    body: "Eight signs, one purpose stated plainly at the very end: these are written so that you may believe Jesus is the Messiah, the Son of God, and by believing have life in his name. You&rsquo;ve looked back, looked up, and looked forward together the whole way, watching sign after sign point to exactly who Jesus is. That&rsquo;s no small thing, and it&rsquo;s not really an ending.",
    leadSomeoneElse: "This course was built to need no training, which means you&rsquo;re already qualified to lead someone else through it. You&rsquo;ve spent these sessions sharing each passage with someone, they&rsquo;re your obvious first invitation. When you&rsquo;re ready, reset your progress and start again with them.",
    nextStudy: "Without necessarily realising it, you&rsquo;ve been practising Discovery Bible Study, a simple, repeatable way of reading the Bible with someone: look back, look up, look forward. Keep using that same rhythm on your own, with any passage or book, Mark&rsquo;s Gospel, The Basics, The Commands of Jesus, and Overcoming Fear are all great next studies."
  },

  sessions: [
    {
      id: "1", title: "Water into Wine", refs: ["John 2:1&ndash;11"],
      summary: "At a wedding in Cana, the wine runs out, an embarrassing social crisis. Jesus turns six huge stone jars of water into the best wine anyone has tasted, quietly, with only the servants aware of what happened.",
      lookBack: {
        note: "There&rsquo;s no &ldquo;last time&rdquo; yet, so start here instead.",
        questions: [
          "What&rsquo;s your name, and one thing about you the group might not know?",
          "What&rsquo;s one thing you already believe, or wonder, about who Jesus is?",
          "What are you hoping to get out of these eight sessions together?",
          "How can we pray for you as we start this course?"
        ]
      },
      lookUpPrayer: "Never prayed aloud before? One sentence is plenty. Thank God for one thing that came up just now, then ask the Holy Spirit to help you see this sign clearly.",
      leaderNote: "This is the first of John&rsquo;s seven signs, and the chapter says explicitly that it revealed Jesus&rsquo; glory and led his disciples to believe in him, that&rsquo;s the whole point of a &ldquo;sign&rdquo; in John&rsquo;s Gospel: not just a miracle, but a pointer to who Jesus is. The stone jars held twenty to thirty gallons each, Jesus doesn&rsquo;t just top up the wine, he provides an overwhelming abundance.",
      lookForwardIdea: "an example to follow is Jesus meeting an ordinary, unglamorous need generously and without fanfare. Where is God asking you to trust him with something that feels too small or embarrassing to bring to him?",
      memoryVerse: { ref: "John 2:11", text: "What Jesus did here in Cana of Galilee was the first of the signs through which he revealed his glory; and his disciples believed in him." }
    },
    {
      id: "2", title: "The Official&rsquo;s Son", refs: ["John 4:46&ndash;54"],
      summary: "A desperate father begs Jesus to come and heal his dying son. Jesus simply says the boy will live, and the father believes him and goes home, without Jesus ever visiting the boy in person.",
      lookUpPrayer: "Pray about what came up in Look Back, then ask the Holy Spirit to help you understand what you&rsquo;re about to read.",
      leaderNote: "This official likely worked for Herod, a man of status pleading for his own child. Jesus deliberately tests and stretches his faith first, &ldquo;unless you see signs and wonders you won&rsquo;t believe&rdquo;, before healing at a distance, with just a word.",
      lookForwardIdea: "a promise to trust is that Jesus doesn&rsquo;t need to be physically present to act. What&rsquo;s the situation you&rsquo;re waiting to physically see fixed before you&rsquo;ll actually trust God with it?",
      memoryVerse: { ref: "John 4:50", text: "Jesus replied, &ldquo;You may go. Your son will live.&rdquo; The man took Jesus at his word and departed." }
    },
    {
      id: "3", title: "The Paralytic", refs: ["John 5:1&ndash;15"],
      summary: "A man who has been sick for thirty-eight years, with nobody to help him into the healing pool, is healed by Jesus with a simple command: get up, pick up your mat, and walk.",
      lookUpPrayer: "Bring what you just shared to God, then ask the Holy Spirit to reveal something in this passage you might otherwise miss.",
      leaderNote: "Thirty-eight years is an extraordinarily long time to be stuck in the same condition, worth pausing on to feel the weight of it. This healing happens on the Sabbath, which is exactly why the religious leaders start opposing Jesus straight afterward.",
      lookForwardIdea: "a command to obey is Jesus&rsquo; instruction: get up. What&rsquo;s the thing you&rsquo;ve been stuck in for so long that you&rsquo;ve stopped expecting it to change?",
      memoryVerse: { ref: "John 5:8&ndash;9", text: "Then Jesus said to him, &ldquo;Get up! Pick up your mat and walk.&rdquo; At once the man was cured; he picked up his mat and walked." }
    },
    {
      id: "4", title: "Feeding the Five Thousand", refs: ["John 6:5&ndash;14"],
      summary: "Faced with a hungry crowd of thousands and only a boy&rsquo;s small lunch, Jesus multiplies five loaves and two fish into more than enough, with twelve baskets left over.",
      lookUpPrayer: "Pray for each other about whatever came up in Look Back, then invite the Holy Spirit to open your eyes as you read.",
      leaderNote: "Jesus deliberately asks Philip the impossible question first, knowing exactly what he&rsquo;s about to do, testing what Philip believes is possible. Afterward, in the rest of John 6, Jesus uses this sign to explain a much bigger truth: he himself is the bread of life.",
      lookForwardIdea: "a promise to trust is that Jesus turns what looks like nowhere near enough into more than enough. Where do you feel like all you have to offer is a boy&rsquo;s lunch?",
      memoryVerse: { ref: "John 6:35", text: "Then Jesus declared, &ldquo;I am the bread of life. Whoever comes to me will never go hungry, and whoever believes in me will never be thirsty.&rdquo;" }
    },
    {
      id: "5", title: "Walking on Water", refs: ["John 6:16&ndash;24"],
      summary: "In the middle of the night, with a storm making the sea rough, the disciples see Jesus walking toward their boat on the water and are terrified, until he tells them not to be afraid.",
      lookUpPrayer: "Try praying a full sentence or two this week: name what came up in Look Back, then ask the Holy Spirit to reveal something as you read.",
      leaderNote: "This happens the same evening as the feeding of the five thousand, straight after the crowd tries to make Jesus king by force, Jesus withdraws instead, then comes to his disciples in an unexpected way, in the middle of their fear.",
      lookForwardIdea: "a command to obey is Jesus&rsquo; own words the moment he appears: it is I, don&rsquo;t be afraid. What&rsquo;s the situation this week where you need him to speak that directly into your fear?",
      memoryVerse: { ref: "John 6:20", text: "But he said to them, &ldquo;It is I; don&rsquo;t be afraid.&rdquo;" }
    },
    {
      id: "6", title: "The Man Born Blind", refs: ["John 9:1&ndash;7"],
      summary: "Jesus rejects the disciples&rsquo; assumption that this man&rsquo;s blindness must be someone&rsquo;s punishment for sin, and instead heals him using mud made from his own saliva, sending him to wash it off.",
      lookUpPrayer: "Pray honestly about what surfaced in Look Back, even the hard parts, then ask the Holy Spirit to help this passage land.",
      leaderNote: "The disciples&rsquo; question reflects a common assumption of the time, that suffering was always a direct punishment for specific sin. Jesus refuses that framework entirely and turns the conversation toward what God wants to do, not whose fault it is.",
      lookForwardIdea: "a command to obey is going and washing, doing the ordinary thing Jesus asks even before you fully understand why. What&rsquo;s the simple next step you&rsquo;ve been overthinking instead of just doing?",
      memoryVerse: { ref: "John 9:5", text: "&ldquo;While I am in the world, I am the light of the world.&rdquo;" }
    },
    {
      id: "7", title: "Raising Lazarus", refs: ["John 11:1&ndash;45"],
      summary: "Jesus deliberately delays going to his sick friend Lazarus, arrives after he has died, and then calls him out of the tomb, four days dead, alive again.",
      lookUpPrayer: "Try praying specifically for each other this week, about what was just shared, then ask the Holy Spirit to guide what you notice as you read.",
      leaderNote: "Jesus&rsquo; delay is deliberate, the text says so plainly, and costs Mary and Martha real grief in the meantime. This is the last and greatest of John&rsquo;s seven signs, and it directly provokes the religious leaders&rsquo; final decision to have Jesus killed.",
      lookForwardIdea: "a promise to trust is &ldquo;I am the resurrection and the life.&rdquo; What&rsquo;s the situation that feels too dead, too far gone, for you to expect God to do anything with it?",
      memoryVerse: { ref: "John 11:25&ndash;26", text: "Jesus said to her, &ldquo;I am the resurrection and the life. The one who believes in me will live, even though they die; and whoever lives by believing in me will never die. Do you believe this?&rdquo;" }
    },
    {
      id: "8", title: "The Resurrection", refs: ["John 20:1&ndash;31"],
      summary: "Mary Magdalene finds the tomb empty, then meets the risen Jesus in the garden. He appears to his frightened disciples behind locked doors, and later convinces a doubting Thomas by showing him his wounds.",
      lookUpPrayer: "Pray about everything this course has stirred up in you, then ask the Holy Spirit to make this passage feel like a real declaration of faith, not just an ending.",
      leaderNote: "John tells us exactly why he wrote all of this down, right at the end of this chapter: not to prove a theory, but so that readers who never got to see Jesus in person would still believe and find life in his name. That includes you and me.",
      lookForwardIdea: "a command to obey is Thomas&rsquo; own confession once he actually saw: my Lord and my God. What would it look like for you to say that with your whole life, not just your words, this week?",
      prayerNote: "Pray for what came up in Look Back, for each person&rsquo;s Look Forward response, and for the person they&rsquo;ll share this passage with. This is your last session together, so take extra time.",
      memoryVerse: { ref: "John 20:31", text: "But these are written that you may believe that Jesus is the Messiah, the Son of God, and that by believing you may have life in his name." }
    }
  ]
};
