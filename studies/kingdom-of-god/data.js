/* =========================================================================
   STUDY DATA: The Kingdom of God
   A twelve-session study tracing the kingdom of God from Genesis to
   Revelation, curated from DISCOVERING-THE-KINGDOM-OF-GOD-final.pdf in
   Darren's reading-plan collection. The source lists 28 passages, more
   than any other study in this library; trimmed here to 12, keeping the
   strongest Old Testament anchors, two of Jesus' kingdom parables, and the
   clearest New Testament turning points, rather than using the full list.
   Deliberately skipped John 3 (Nicodemus) since it's already used in 10
   Stories of Hope, and the Sower parable since it's already used there too
   (as Mark 4's "Hearing God"), to avoid two direct duplicates in the same
   batch of new studies.
   ========================================================================= */

window.STUDY = {
  id: "kingdom-of-god",
  title: "The Kingdom of God",
  sessionNoun: "session",
  sessionsLabel: "Twelve Sessions",
  stepTimes: { lookback: "20&ndash;30 min", lookup: "20&ndash;30 min", lookforward: "20&ndash;30 min" },

  welcomeCopy: {
    tagline: "from genesis to revelation",
    titleHtml: "the<br>kingdom<br>of god",
    lead: "Every promise in the Bible points toward one thing: God&rsquo;s kingdom coming in full. Look at one passage each session, from Abraham to the parables to the very end of Revelation, and discover what it means to actually live under that king, as a small group or one-on-one."
  },

  methodCopy: {
    lead: 'Every session follows the same <strong style="color:var(--ink-900);font-weight:600;">3 steps</strong>, in the same order, whether it&rsquo;s just the two of you or a small group. Altogether, expect it to take <strong style="color:var(--ink-900);font-weight:600;">around 90 minutes</strong>, though it&rsquo;s only ever a rough guide, a quicker 60 minutes works fine too.',
    lookBackBlurb: "A time to reconnect: how you&rsquo;ve experienced God this week, what you&rsquo;re thankful for, what&rsquo;s been hard, and how what you learned last time actually landed.",
    lookUpBlurb: "Read the passage aloud, retell it in your own words, and check you got the whole story. Then let a few questions do the real work.",
    lookForwardBlurb: "Turn what you&rsquo;ve discovered into a lived response: a behaviour, a promise, an example, or a command. Decide who you&rsquo;ll share it with this week, then pray for each other before you finish."
  },

  finishCopy: {
    heading: "his kingdom come",
    body: "Twelve passages, one kingdom, promised to Abraham, glimpsed by the prophets, announced by Jesus, entered through new birth, and coming in full one day. You&rsquo;ve looked back, looked up, and looked forward together the whole way, tracing one story from Genesis to Revelation. That&rsquo;s no small thing, and it&rsquo;s not really an ending.",
    leadSomeoneElse: "This course was built to need no training, which means you&rsquo;re already qualified to lead someone else through it. You&rsquo;ve spent these sessions sharing each passage with someone, they&rsquo;re your obvious first invitation. When you&rsquo;re ready, reset your progress and start again with them.",
    nextStudy: "Without necessarily realising it, you&rsquo;ve been practising Discovery Bible Study, a simple, repeatable way of reading the Bible with someone: look back, look up, look forward. Keep using that same rhythm on your own, with any passage or book, there&rsquo;s a whole library of other studies here worth exploring too."
  },

  sessions: [
    {
      id: "1", title: "The Covenant with Abraham", refs: ["Genesis 17:1&ndash;8"],
      summary: "God appears to Abram, changes his name to Abraham, and promises to make him the father of many nations, with kings coming from his line, and an everlasting covenant to be their God.",
      lookBack: {
        note: "There&rsquo;s no &ldquo;last time&rdquo; yet, so start here instead.",
        questions: [
          "What&rsquo;s your name, and one thing about you the group might not know?",
          "What comes to mind when you hear the phrase &ldquo;the kingdom of God&rdquo;?",
          "What are you hoping to get out of these twelve sessions together?",
          "How can we pray for you as we start this course?"
        ]
      },
      lookUpPrayer: "Never prayed aloud before? One sentence is plenty. Thank God for one thing that came up just now, then ask the Holy Spirit to help you see this passage clearly.",
      leaderNote: "This is God committing himself to a specific family, and through them, eventually, a kingdom and a king. Everything that follows, Israel, David&rsquo;s throne, Jesus himself, traces back to this one covenant with one man.",
      lookForwardIdea: "a promise to trust is that God keeps covenants across centuries, even when it looks impossible from where you&rsquo;re standing. What promise of God do you need to keep trusting even though you can&rsquo;t yet see how it plays out?",
      memoryVerse: { ref: "Genesis 17:7", text: "&ldquo;I will establish my covenant as an everlasting covenant between me and you and your descendants after you for the generations to come, to be your God and the God of your descendants after you.&rdquo;" }
    },
    {
      id: "2", title: "A Kingdom of Priests", refs: ["Exodus 19:3&ndash;6"],
      summary: "God tells Moses to remind Israel what he&rsquo;s already done for them, carrying them on eagles&rsquo; wings, and calls them to be his treasured possession, a kingdom of priests and a holy nation.",
      lookUpPrayer: "Pray about what came up in Look Back, then ask the Holy Spirit to help you understand what you&rsquo;re about to read.",
      leaderNote: "This comes right before God gives the law at Sinai. The identity, treasured possession, kingdom of priests, is given before any commands are laid out, obedience is meant to flow from an identity already given, not earn it.",
      lookForwardIdea: "a promise to trust is that you already belong to God, a treasured possession, before you&rsquo;ve done anything to deserve it. Where have you been trying to earn a status God has already given you?",
      memoryVerse: { ref: "Exodus 19:5&ndash;6", text: "&ldquo;Now if you obey me fully and keep my covenant, then out of all nations you will be my treasured possession... you will be for me a kingdom of priests and a holy nation.&rdquo;" }
    },
    {
      id: "3", title: "The Rock Not Cut by Human Hands", refs: ["Daniel 2:31&ndash;45"],
      summary: "Daniel interprets the king&rsquo;s dream of a great statue made of different materials, each representing a kingdom, all eventually crushed by a rock not cut by human hands, a rock that becomes a mountain filling the whole earth.",
      lookUpPrayer: "Bring what you just shared to God, then ask the Holy Spirit to reveal something in this passage you might otherwise miss.",
      leaderNote: "Every empire in the statue, however powerful it looked, eventually crumbles. The rock &ldquo;not cut by human hands&rdquo; is God&rsquo;s kingdom, breaking into human history from outside it, not built up by human effort or politics.",
      lookForwardIdea: "a promise to trust is that every human kingdom, however impressive, eventually falls, but God&rsquo;s kingdom will never be destroyed. What&rsquo;s the powerful-looking thing in your own life you&rsquo;ve been trusting more than you should?",
      memoryVerse: { ref: "Daniel 2:44", text: "&ldquo;In the time of those kings, the God of heaven will set up a kingdom that will never be destroyed, nor will it be left to another people. It will crush all those kingdoms and bring them to an end, but it will itself endure forever.&rdquo;" }
    },
    {
      id: "4", title: "A Child Is Born", refs: ["Isaiah 9:2&ndash;7"],
      summary: "Isaiah promises light breaking into darkness, a child to be born who will carry the government on his shoulders, called Wonderful Counsellor, Mighty God, Everlasting Father, Prince of Peace, ruling on David&rsquo;s throne forever.",
      lookUpPrayer: "Pray for each other about whatever came up in Look Back, then invite the Holy Spirit to open your eyes as you read.",
      leaderNote: "This was written centuries before Jesus, to a people living under real darkness and oppression. Notice the titles given to this child, they claim far more than just a good king, they claim God himself coming to rule.",
      lookForwardIdea: "a promise to trust is that of the increase of his government and peace there will be no end. Where in your life or your world does it feel like the darkness is winning right now?",
      memoryVerse: { ref: "Isaiah 9:6", text: "For to us a child is born, to us a son is given, and the government will be on his shoulders. And he will be called Wonderful Counsellor, Mighty God, Everlasting Father, Prince of Peace." }
    },
    {
      id: "5", title: "The Kingdom Has Come Near", refs: ["Mark 1:14&ndash;15"],
      summary: "Jesus begins his public ministry with a simple, urgent announcement: the time has come, the kingdom of God has come near, so repent and believe the good news.",
      lookUpPrayer: "Try praying a full sentence or two this week: name what came up in Look Back, then ask the Holy Spirit to reveal something as you read.",
      leaderNote: "This is Jesus&rsquo; first recorded public statement in Mark, everything else he does and says unpacks this one announcement. The kingdom isn&rsquo;t just a future hope anymore, in Jesus, it has arrived.",
      lookForwardIdea: "a command to obey is repenting and believing, right now, not someday. What would it look like to actually live today as though God&rsquo;s kingdom has already arrived?",
      memoryVerse: { ref: "Mark 1:15", text: "&ldquo;The time has come,&rdquo; he said. &ldquo;The kingdom of God has come near. Repent and believe the good news!&rdquo;" }
    },
    {
      id: "6", title: "The Weeds", refs: ["Matthew 13:24&ndash;30, 36&ndash;43"],
      summary: "Jesus tells a story about a farmer&rsquo;s good wheat growing alongside weeds an enemy secretly planted, and explains it privately: the kingdom now includes both, until the harvest sorts it all out.",
      lookUpPrayer: "Pray honestly about what surfaced in Look Back, even the hard parts, then ask the Holy Spirit to help this passage land.",
      leaderNote: "This parable answers an honest question: if the kingdom has come, why is there still so much evil in the world? Jesus&rsquo; answer isn&rsquo;t &ldquo;there isn&rsquo;t,&rdquo; it&rsquo;s &ldquo;not yet, be patient, the harvest is coming.&rdquo;",
      lookForwardIdea: "a promise to trust is that God isn&rsquo;t finished sorting things out yet, and it&rsquo;s not your job to rip out every weed you see right now. Where have you been impatient for a judgment that isn&rsquo;t yours to make?",
      memoryVerse: { ref: "Matthew 13:43", text: "&ldquo;Then the righteous will shine like the sun in the kingdom of their Father. Whoever has ears, let them hear.&rdquo;" }
    },
    {
      id: "7", title: "Treasure, Pearl, and Net", refs: ["Matthew 13:44&ndash;52"],
      summary: "Jesus compares the kingdom of heaven to treasure hidden in a field and a pearl of great price, both worth selling everything to obtain, then to a net catching every kind of fish, good and bad, sorted at the end.",
      lookUpPrayer: "Try praying specifically for each other this week, about what was just shared, then ask the Holy Spirit to guide what you notice as you read.",
      leaderNote: "In both the treasure and pearl stories, the person doesn&rsquo;t just want the item, they sell everything they have, joyfully, to get it. The kingdom isn&rsquo;t one good thing among many, it&rsquo;s worth reordering your entire life around.",
      lookForwardIdea: "a behaviour to change is treating the kingdom as one priority among several instead of the treasure worth everything else. What would you actually need to let go of to hold onto this with both hands?",
      memoryVerse: { ref: "Matthew 13:44", text: "&ldquo;The kingdom of heaven is like treasure hidden in a field. When a man found it, he hid it again, and then in his joy went and sold all he had and bought that field.&rdquo;" }
    },
    {
      id: "8", title: "Peter&rsquo;s Confession", refs: ["Matthew 16:13&ndash;19"],
      summary: "Jesus asks his disciples who people say he is, then asks them directly, and Peter answers: you are the Messiah, the Son of the living God. Jesus responds by promising to build his church on this confession, giving Peter the keys of the kingdom.",
      lookUpPrayer: "Pray about what came up in Look Back, then ask the Holy Spirit to help you love God and others better because of what you&rsquo;re about to read.",
      leaderNote: "This happens at Caesarea Philippi, a region known for pagan worship, an unlikely backdrop for the clearest confession of Jesus&rsquo; identity in the Gospels so far. The &ldquo;keys of the kingdom&rdquo; language pictures authority to open and shut, to declare what&rsquo;s really true.",
      lookForwardIdea: "a command to obey is answering Jesus&rsquo; question yourself, not just repeating Peter&rsquo;s answer. Who do you say Jesus is, in your own words, based on your own life right now?",
      memoryVerse: { ref: "Matthew 16:16&ndash;17", text: "Simon Peter answered, &ldquo;You are the Messiah, the Son of the living God.&rdquo; Jesus replied, &ldquo;Blessed are you, Simon son of Jonah, for this was not revealed to you by flesh and blood, but by my Father in heaven.&rdquo;" }
    },
    {
      id: "9", title: "Not of This World", refs: ["John 18:33&ndash;37"],
      summary: "Standing trial before Pilate, Jesus is asked directly if he&rsquo;s a king, and answers that his kingdom is not of this world, and that he came to testify to the truth.",
      lookUpPrayer: "Pray honestly about whatever came up in Look Back, then ask the Holy Spirit to make this passage feel personal, not just historical.",
      leaderNote: "Pilate is thinking in political categories, a rival to Rome. Jesus redirects entirely, his kingdom doesn&rsquo;t operate by armies or force, &ldquo;if it were, my servants would fight.&rdquo; This is a kingdom that advances by truth, not conquest.",
      lookForwardIdea: "a command to obey is listening to the truth Jesus testifies to, the way anyone &ldquo;on the side of truth&rdquo; does. Where have you been trying to advance God&rsquo;s kingdom with the world&rsquo;s tools, force, status, or power, instead of truth?",
      memoryVerse: { ref: "John 18:36", text: "Jesus said, &ldquo;My kingdom is not of this world. If it were, my servants would fight to prevent my arrest by the Jewish leaders. But now my kingdom is from another place.&rdquo;" }
    },
    {
      id: "10", title: "Until He Comes Again", refs: ["Acts 1:1&ndash;8"],
      summary: "The risen Jesus spends forty days teaching his disciples about the kingdom of God, and when they ask if he&rsquo;s about to restore it right then, he redirects them to their actual mission: receiving power and being his witnesses to the ends of the earth.",
      lookUpPrayer: "Try praying a full sentence or two this week: name what came up in Look Back, then ask the Holy Spirit to reveal something as you read.",
      leaderNote: "The disciples are still thinking politically, when will Israel&rsquo;s kingdom be restored? Jesus doesn&rsquo;t answer the timing question at all, he gives them a job instead. The kingdom advances through witnesses, not through knowing the schedule.",
      lookForwardIdea: "a command to obey is being a witness where you actually are, rather than waiting for God to act on a timeline you&rsquo;re not given. What&rsquo;s kept you waiting instead of witnessing?",
      memoryVerse: { ref: "Acts 1:8", text: "&ldquo;But you will receive power when the Holy Spirit comes on you; and you will be my witnesses in Jerusalem, and in all Judea and Samaria, and to the ends of the earth.&rdquo;" }
    },
    {
      id: "11", title: "Rescued Into the Kingdom", refs: ["Colossians 1:13&ndash;18"],
      summary: "Paul describes what&rsquo;s already happened to every believer: rescued from the dominion of darkness and brought into the kingdom of God&rsquo;s Son, who holds first place over absolutely everything.",
      lookUpPrayer: "Pray honestly about what surfaced in Look Back, even the hard parts, then ask the Holy Spirit to help this passage land.",
      leaderNote: "The verb tense matters here, Paul doesn&rsquo;t say this will happen, he says God has rescued and has brought us in, already, not someday. The rest of the passage builds the highest possible claim about who this King actually is.",
      lookForwardIdea: "a promise to trust is that this transfer has already happened, you&rsquo;re not waiting to enter the kingdom, you&rsquo;re already in it. What would change if you actually lived like that were true today?",
      memoryVerse: { ref: "Colossians 1:13&ndash;14", text: "For he has rescued us from the dominion of darkness and brought us into the kingdom of the Son he loves, in whom we have redemption, the forgiveness of sins." }
    },
    {
      id: "12", title: "The Kingdom of the World Becomes His", refs: ["Revelation 11:15&ndash;17"],
      summary: "A loud voice in heaven announces that the kingdom of the world has become the kingdom of our Lord and of his Messiah, and he will reign forever and ever, and the twenty-four elders fall down and worship.",
      lookUpPrayer: "Pray about everything this course has stirred up in you, then ask the Holy Spirit to make this passage feel like a real promise, not just a nice ending.",
      leaderNote: "This is the moment every promise in this course has been pointing toward, Abraham&rsquo;s covenant, Daniel&rsquo;s rock, Isaiah&rsquo;s child, Jesus&rsquo; announcement, finally and fully realised. Notice the response isn&rsquo;t analysis, it&rsquo;s worship.",
      lookForwardIdea: "a promise to trust is that this is genuinely where the story ends, his kingdom, forever. What would it look like this week to live now like that ending is certain?",
      prayerNote: "Pray for what came up in Look Back, for each person&rsquo;s Look Forward response, and for the person they&rsquo;ll share this passage with. This is your last session together, so take extra time.",
      memoryVerse: { ref: "Revelation 11:15", text: "&ldquo;The kingdom of the world has become the kingdom of our Lord and of his Messiah, and he will reign for ever and ever.&rdquo;" }
    }
  ]
};
