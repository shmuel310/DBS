/* =========================================================================
   STUDY DATA: 10 Stories of Hope
   A ten-session study of personal encounters with Jesus, adapted from
   10_Stories_of_Hope.pdf in Darren's reading-plan collection (novo.org
   family, described there as "the most widely used Discovery Bible Study
   created and shared in the US"). Same H.O.P.E. format as Overcoming Fear
   and Crossing Barriers. Two passages (Luke 7:37-50 and John 4) overlap
   with earlier studies (Crossing Barriers and Commands of Jesus both use
   the Luke 7 story; Crossing Barriers also uses John 4), reused
   deliberately under this study's "hope" lens, not duplicates to fix.
   ========================================================================= */

window.STUDY = {
  id: "stories-of-hope",
  title: "10 Stories of Hope",
  sessionNoun: "session",
  sessionsLabel: "Ten Stories",
  stepTimes: { lookback: "20&ndash;30 min", lookup: "20&ndash;30 min", lookforward: "20&ndash;30 min" },
  lookForwardTemplate: "I will ______________________________.",

  welcomeCopy: {
    tagline: "ten encounters, one invitation",
    titleHtml: "hope<br>is here",
    lead: "Ten real encounters with Jesus, each one showing what hope actually looks like up close: forgiven, healed, welcomed, transformed. Look at one story each session, discover the hope inside it, and learn to share it, as a small group or one-on-one."
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
    heading: "found",
    body: "Ten encounters with Jesus, one message underneath all of them: there&rsquo;s hope for you too, no matter what your story looks like. You&rsquo;ve looked back, looked up, and looked forward together the whole way, watching hope reach people who felt too far gone for it. That&rsquo;s no small thing, and it&rsquo;s not really an ending.",
    leadSomeoneElse: "This course was built to need no training, which means you&rsquo;re already qualified to lead someone else through it. You&rsquo;ve spent these sessions sharing each passage with someone, they&rsquo;re your obvious first invitation. When you&rsquo;re ready, reset your progress and start again with them.",
    nextStudy: "Without necessarily realising it, you&rsquo;ve been practising Discovery Bible Study, a simple, repeatable way of reading the Bible with someone: look back, look up, look forward. Keep using that same rhythm on your own, with any passage or book, there&rsquo;s a whole library of other studies here worth exploring too."
  },

  sessions: [
    {
      id: "1", title: "Party at Levi&rsquo;s", refs: ["Mark 2:1&ndash;17"],
      summary: "Jesus forgives and heals a paralysed man lowered through a roof by his friends, then calls a despised tax collector, Levi, to follow him, and celebrates with a whole houseful of &ldquo;sinners&rdquo; at Levi&rsquo;s table.",
      lookBack: {
        note: "There&rsquo;s no &ldquo;last time&rdquo; yet, so start here instead.",
        questions: [
          "What&rsquo;s your name, and one thing about you the group might not know?",
          "What does &ldquo;hope&rdquo; mean to you right now, in this season of your life?",
          "What are you hoping to get out of these ten sessions together?",
          "How can we pray for you as we start this course?"
        ]
      },
      lookUpPrayer: "Never prayed aloud before? One sentence is plenty. Thank God for one thing that came up just now, then ask the Holy Spirit to help you see this story clearly.",
      leaderNote: "Tax collectors were considered traitors, working for Rome and often skimming extra for themselves. Jesus doesn&rsquo;t wait for Levi to clean up his life first, he simply says &ldquo;follow me,&rdquo; and Levi throws a party.",
      lookForwardIdea: "a promise to trust is that Jesus came for the sick, not the healthy, for sinners, not the righteous. Is there a part of you that&rsquo;s been keeping distance from Jesus because you don&rsquo;t feel &ldquo;good enough&rdquo; to come to the table?",
      memoryVerse: { ref: "Mark 2:17", text: "On hearing this, Jesus said to them, &ldquo;It is not the healthy who need a doctor, but the sick. I have not come to call the righteous, but sinners.&rdquo;" }
    },
    {
      id: "2", title: "Jesus Teaches Nicodemus", refs: ["John 3:1&ndash;17"],
      summary: "A respected religious leader comes to Jesus at night with questions, and Jesus tells him that entering God&rsquo;s kingdom means being born again, a fresh start only God can give.",
      lookUpPrayer: "Pray about what came up in Look Back, then ask the Holy Spirit to help you understand what you&rsquo;re about to read.",
      leaderNote: "Nicodemus was a Pharisee and a member of the ruling council, someone with status and religious credentials to protect, which is likely why he comes at night. Jesus doesn&rsquo;t question his sincerity, he goes straight to what Nicodemus actually needs.",
      lookForwardIdea: "a promise to trust is that God so loved the world that he gave his Son, so that whoever believes would not perish but have eternal life. Is there a part of your own religious background or credentials you&rsquo;ve been quietly relying on instead of this?",
      memoryVerse: { ref: "John 3:16", text: "&ldquo;For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.&rdquo;" }
    },
    {
      id: "3", title: "A Transformed Life", refs: ["Mark 5:1&ndash;20"],
      summary: "A man possessed by a legion of demons, living among the tombs, cutting himself, and too dangerous to be bound, is completely set free by Jesus and found afterward calm, clothed, and in his right mind.",
      lookUpPrayer: "Bring what you just shared to God, then ask the Holy Spirit to reveal something in this passage you might otherwise miss.",
      leaderNote: "Mark goes out of his way to describe how far gone this man was, living among tombs, breaking chains, no one able to control him. The change afterward is described in simple, physical terms: sitting, clothed, in his right mind.",
      lookForwardIdea: "an example to follow is the man going home to tell people who already know him what Jesus did, instead of leaving with Jesus. Who in your own life has seen who you used to be, and could see this change too?",
      memoryVerse: { ref: "Mark 5:15", text: "When they came to Jesus, they saw the man who had been possessed by the legion of demons, sitting there, dressed and in his right mind; and they were afraid." }
    },
    {
      id: "4", title: "A Memorable Act", refs: ["Luke 7:37&ndash;50"],
      summary: "A woman known for her sin crashes a respectable dinner party to anoint Jesus&rsquo; feet with tears and perfume, and Jesus publicly honours her extravagant love over his host&rsquo;s cold politeness.",
      lookUpPrayer: "Pray for each other about whatever came up in Look Back, then invite the Holy Spirit to open your eyes as you read.",
      leaderNote: "Simon the Pharisee would never have let this woman near him in public. Jesus doesn&rsquo;t just tolerate her presence, he holds her up as the example of what real love and forgiveness look like, the one forgiven much loves much.",
      lookForwardIdea: "a promise to trust is that your sins, however many, can be forgiven, and that forgiveness produces real love in return. Where do you need to actually receive that, rather than just believe it in theory?",
      memoryVerse: { ref: "Luke 7:47", text: "&ldquo;Therefore, I tell you, her many sins have been forgiven, for she loved much. But whoever has been forgiven little loves little.&rdquo;" }
    },
    {
      id: "5", title: "The Lost Son Returns", refs: ["Luke 15:11&ndash;32"],
      summary: "A younger son demands his inheritance early, wastes it, and comes home starving and ashamed, only to find his father running to meet him, before he can even finish his apology.",
      lookUpPrayer: "Try praying a full sentence or two this week: name what came up in Look Back, then ask the Holy Spirit to reveal something as you read.",
      leaderNote: "A father running in this culture would have been considered undignified, fathers waited to be approached. This father can&rsquo;t wait, he sees his son &ldquo;while he was still a long way off.&rdquo; The older brother&rsquo;s resentment at the end is worth noticing too, hope isn&rsquo;t only for the obviously lost.",
      lookForwardIdea: "a promise to trust is that the Father is watching for you and runs to meet you, no matter how far you&rsquo;ve gone or how the story ends up looking. Is there a part of your own story you assume is too far gone for that kind of welcome?",
      memoryVerse: { ref: "Luke 15:20", text: "But while he was still a long way off, his father saw him and was filled with compassion for him; he ran to his son, threw his arms around him and kissed him." }
    },
    {
      id: "6", title: "Thank You", refs: ["Luke 17:11&ndash;19"],
      summary: "Ten men with leprosy call out to Jesus for mercy and are healed as they go, but only one, a Samaritan, comes back to thank him.",
      lookUpPrayer: "Pray honestly about what surfaced in Look Back, even the hard parts, then ask the Holy Spirit to help this passage land.",
      leaderNote: "Leprosy meant total exclusion from community and worship. All ten are healed, obedience is rewarded before anyone even reaches the priests, but Jesus specifically notices the one who returns, and that he&rsquo;s a Samaritan, an outsider by every measure.",
      lookForwardIdea: "a behaviour to change is actually returning to say thank you, not just receiving and moving on. What&rsquo;s something God has done for you that you&rsquo;ve never properly stopped to thank him for?",
      memoryVerse: { ref: "Luke 17:19", text: "Then he said to him, &ldquo;Rise and go; your faith has made you well.&rdquo;" }
    },
    {
      id: "7", title: "What God Sees", refs: ["Luke 18:9&ndash;14"],
      summary: "Jesus tells a story about two men praying in the temple, a Pharisee listing his own righteousness, and a tax collector who won&rsquo;t even lift his eyes, and says it&rsquo;s the tax collector who goes home justified.",
      lookUpPrayer: "Try praying specifically for each other this week, about what was just shared, then ask the Holy Spirit to help you see yourself honestly as you read.",
      leaderNote: "Jesus tells this parable specifically to people &ldquo;who were confident of their own righteousness and looked down on everyone else.&rdquo; The tax collector&rsquo;s prayer is just a handful of words in the original: God, have mercy on me, a sinner.",
      lookForwardIdea: "a promise to trust is that God exalts the humble, not the self-righteous. Where have you been quietly comparing yourself favourably to someone else instead of being honest with God?",
      memoryVerse: { ref: "Luke 18:13&ndash;14", text: "But the tax collector stood at a distance. He would not even look up to heaven, but beat his breast and said, &ldquo;God, have mercy on me, a sinner.&rdquo; I tell you that this man, rather than the other, went home justified before God." }
    },
    {
      id: "8", title: "Coming to Your House", refs: ["Luke 19:1&ndash;10"],
      summary: "Zacchaeus, a wealthy, despised chief tax collector, climbs a tree just to see Jesus, and is stunned when Jesus invites himself to stay at his house, sparking a complete change of heart and life.",
      lookUpPrayer: "Pray about what came up in Look Back, then ask the Holy Spirit to help you love God and others better because of what you&rsquo;re about to read.",
      leaderNote: "Zacchaeus wasn&rsquo;t just any tax collector, he was a chief tax collector, likely one of the most hated men in Jericho. Jesus doesn&rsquo;t wait for him to change first, the invitation comes before any repentance, and the repentance follows.",
      lookForwardIdea: "a promise to trust is that Jesus came to seek and save the lost, and that includes actively inviting himself into your life, not waiting for an invitation. What would it look like to respond the way Zacchaeus did, immediately and concretely?",
      memoryVerse: { ref: "Luke 19:9&ndash;10", text: "Jesus said to him, &ldquo;Today salvation has come to this house... For the Son of Man came to seek and to save the lost.&rdquo;" }
    },
    {
      id: "9", title: "Hungry for God", refs: ["John 4:1&ndash;42"],
      summary: "Jesus, tired from travelling, stops at a well and asks a Samaritan woman, an outsider on every count, for a drink, then offers her water that will satisfy her thirst forever, and she runs to tell her whole town.",
      lookUpPrayer: "Pray honestly about whatever came up in Look Back, then ask the Holy Spirit to help you receive what Jesus is offering, not just admire it.",
      leaderNote: "This woman has had five husbands and is currently living with a man who isn&rsquo;t her husband, likely why she&rsquo;s drawing water alone at noon, avoiding the crowds. Jesus doesn&rsquo;t lead with her history, he leads with an offer.",
      lookForwardIdea: "a promise to trust is that whoever drinks the water Jesus gives will never thirst again. What have you been trying to fill a God-shaped thirst with instead of going to him directly?",
      memoryVerse: { ref: "John 4:13&ndash;14", text: "Jesus answered, &ldquo;Everyone who drinks this water will be thirsty again, but whoever drinks the water I give them will never thirst. Indeed, the water I give them will become in them a spring of water welling up to eternal life.&rdquo;" }
    },
    {
      id: "10", title: "Hearing God", refs: ["Mark 4:1&ndash;20"],
      summary: "Jesus tells a story about a farmer scattering seed on four different kinds of ground, then explains it privately: the seed is the message about the kingdom, and the soils are different ways people actually receive it.",
      lookUpPrayer: "Pray about everything this course has stirred up in you, then ask the Holy Spirit to help this parable examine your own heart honestly, not just inform you.",
      leaderNote: "Jesus explains this parable to his disciples in private, it&rsquo;s meant to be understood, not a puzzle to guess. The real question isn&rsquo;t which soil sounds best, it&rsquo;s honestly noticing which soil describes you right now.",
      lookForwardIdea: "a command to obey is examining your own soil honestly. What&rsquo;s crowding out or shallowing your own response to what you&rsquo;re hearing from God right now?",
      prayerNote: "Pray for what came up in Look Back, for each person&rsquo;s Look Forward response, and for the person they&rsquo;ll share this passage with. This is your last session together, so take extra time.",
      memoryVerse: { ref: "Mark 4:20", text: "Others, like seed sown on good soil, hear the word, accept it, and produce a crop, some thirty, some sixty, some a hundred times what was sown." }
    }
  ]
};
