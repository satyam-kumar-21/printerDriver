export interface ArticleSection {
  heading: string;
  body: string;
}

export interface Article {
  slug: string;
  category: string;
  readTime: string;
  published: string;
  title: string;
  excerpt: string;
  content: ArticleSection[];
}

export const articles: Article[] = [
  {
    slug: "inside-a-graphics-driver-update",
    category: "Graphics",
    readTime: "9 min read",
    published: "May 21, 2026",
    title: "Inside a Graphics Driver Update: What Actually Changes",
    excerpt:
      "A 'minor' update can deliver double-digit performance gains in a brand-new game. Here's what GPU makers quietly change between versions — and how to update without drama.",

    content: [
      {
        heading: "It's a compiler in disguise",
        body: `Modern games don't ship with instructions your GPU can run directly. They ship shaders — small programs describing how surfaces, light, and effects should look — and the graphics driver compiles those programs into the native language of your exact GPU.`,
      },
      {
        heading: "Game-specific profiles",
        body: `Drivers also carry a database of per-application profiles. A profile can adjust how the driver schedules work, manages memory, or handles specific techniques used by a game.`,
      },
      {
        heading: "Bug fixes and the long tail",
        body: `Beyond performance, every update fixes interactions: a flicker with one monitor, a crash in one application, or a stutter caused by a rare combination of settings.`,
      },
      {
        heading: "Should you always update immediately?",
        body: `If you play new releases, yes. Day-one drivers genuinely matter. For stable work machines, updating every couple of months is usually enough.`,
      },
      {
        heading: "The clean-install habit",
        body: `When possible, use the clean install option. It removes leftovers from previous versions and avoids many post-update issues.`,
      },
    ],
  },

  {
    slug: "hidden-world-of-audio-drivers",
    category: "Audio",
    readTime: "7 min read",
    published: "May 21, 2026",
    title:
      "The Hidden World of Audio Drivers: Why Sound Quality Is Mostly Software",

    excerpt:
      "Two laptops with identical speakers can sound completely different. The reason is rarely the hardware — it's the audio driver and its processing chain.",

    content: [
      {
        heading: "The driver's day job",
        body: `Digital audio is a stream of samples. The audio driver's job is moving those samples from applications to the sound hardware on time.`,
      },
      {
        heading: "The mixer nobody sees",
        body: `Your operating system combines sound from music, notifications and video calls. The driver stack handles that mixing.`,
      },
      {
        heading: "Why identical speakers sound different",
        body: `Manufacturers often ship custom tuning profiles, equalizers and enhancement layers that dramatically affect sound quality.`,
      },
      {
        heading: "Enhancements: helpful until they aren't",
        body: `Virtual surround, bass boost and noise reduction can improve sound—or create new problems.`,
      },
      {
        heading: "Microphones live here too",
        body: `Recording devices use the same driver stack. Many microphone issues are configuration problems rather than hardware failures.`,
      },
    ],
  },

  {
    slug: "why-your-wifi-is-slower",
    category: "Networking",
    readTime: "6 min read",
    published: "May 21, 2026",
    title:
      "Why Your Wi-Fi Is Slower Than Your Roommate's on the Same Router",

    excerpt:
      "You're on the same router, in the same room. So why is your Wi-Fi slower? The answer is often hidden inside the network driver.",

    content: [
      {
        heading: "Not all adapters behave the same",
        body: `Different network adapters support different Wi-Fi standards and capabilities.`,
      },
      {
        heading: "Drivers decide how radios behave",
        body: `The driver controls power saving, roaming, channel selection and many other wireless behaviors.`,
      },
      {
        heading: "Updates matter",
        body: `Network driver updates frequently improve stability and compatibility with modern routers.`,
      },
    ],
  },
];