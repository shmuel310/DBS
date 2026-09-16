/* =========================================================================
   ENGINE DEFAULTS
   Generic fallback content used whenever a study's data.js doesn't supply
   its own version of something. A study overrides by setting the matching
   field on window.STUDY (see an existing study's data.js for examples);
   anything it leaves out falls back to what's here.
   ========================================================================= */

const ENGINE_DEFAULTS = {

  // Used in the Look Up step's "discover" block and on the Method screen,
  // unless a study sets STUDY.methodCopy.discoveryQuestions.
  // Questions developed by Peter Roennfeldt (following-jesus.com).
  discoveryQuestions: [
    "What is new to you, or what stands out?",
    "What surprises you?",
    "What don&rsquo;t you understand?",
    "What will you obey or apply?",
    "What will you share with someone this week?"
  ],

  // Used in Look Back when a session has no lookBack.questions of its own,
  // unless a study sets STUDY.methodCopy.lookBackDefaults.
  lookBackQuestions: [
    "What have you noticed God doing this week?",
    "How did we go applying the insights from last time?",
    "How did we go sharing our insights from last time?",
    "What are you thankful for?",
    "What has been hard?",
    "How can we pray for you?"
  ],

  // Used in Look Forward, unless a study sets STUDY.methodCopy.respondItems.
  respondItems: [
    "A behaviour to change?",
    "A promise to trust?",
    "An example to follow?",
    "A command to obey?"
  ],

  defaultReadNote: "the passage aloud (twice).",
  defaultPrayerNote: "Pray for what came up in Look Back, for each person&rsquo;s Look Forward response, and for the person they&rsquo;ll share this passage with.",
  defaultLookUpPrayer: "Pray about what came up in Look Back, then ask the Holy Spirit to reveal something in this passage as you read.",

  welcomeCopy: {
    tagline: "a discovery bible study",
    lead: "Read a little each session, discover what this passage means, and put it into practice together, as a small group or one-on-one."
  },

  methodCopy: {
    lead: 'Every session follows the same <strong style="color:var(--ink-900);font-weight:600;">3 steps</strong>, in the same order, whether it&rsquo;s just the two of you or a small group.',
    lookBackBlurb: "A quick, honest check-in before you open the Bible: how last time went, what you tried, how you can pray for each other.",
    lookUpBlurb: "Pray, then read the passage aloud, retell it in your own words, and check you got the whole story. Then let a few questions do the real work.",
    lookForwardBlurb: "Turn what you&rsquo;ve discovered into a lived response: a behaviour, a promise, an example, or a command. Decide who you&rsquo;ll share it with this week, then pray for each other before you finish.",
    betweenBlurb: "Some sessions also include an optional reading for your own time. Nobody checks up on it, it&rsquo;s there for anyone who&rsquo;d like the fuller picture before the next session."
  },

  finishCopy: {
    heading: "well done",
    body: "You&rsquo;ve looked back, looked up, and looked forward together the whole way. That&rsquo;s no small thing, and it&rsquo;s not really an ending.",
    leadSomeoneElse: "This course was built to need no training, which means you&rsquo;re already qualified to lead someone else through it. When you&rsquo;re ready, reset your progress and start again with someone new.",
    nextStudy: "Without necessarily realising it, you&rsquo;ve been practising Discovery Bible Study, a simple, repeatable way of reading the Bible with someone: look back, look up, look forward. Keep using that same rhythm on your own, with any passage or book."
  }
};
