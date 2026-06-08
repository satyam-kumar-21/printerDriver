export interface ArticleSection {
  heading: string;
  body: string;
}

export interface Article {
  slug: string;
  title: string;
  category: string;
  published: string;
  readTime: string;
  excerpt: string;
  content: ArticleSection[];
}

export const articles: Article[] = [
  {
    slug: "printer-driver-basics",
    title: "Understanding Printer Driver Basics",
    category: "Printer Drivers",
    published: "June 1, 2024",
    readTime: "5 min read",
    excerpt:
      "Learn the fundamentals of printer drivers and how they work to connect your computer with printing devices.",
    content: [
      {
        heading: "What is a Printer Driver?",
        body: "A printer driver is software that acts as a translator between your operating system and your printer. It converts the instructions from your applications into commands that your printer can understand and execute.",
      },
      {
        heading: "Why Drivers Matter",
        body: "Without a proper driver, your printer cannot communicate with your computer. Drivers ensure that documents are formatted correctly and sent in a way your printer can process, resulting in accurate and efficient printing.",
      },
      {
        heading: "Getting Started",
        body: "To get your printer working, you need to install the correct driver for your specific printer model and operating system. Most manufacturers provide drivers on their support websites, or you can use your operating system's built-in driver search feature.",
      },
    ],
  },
  {
    slug: "driver-installation-guide",
    title: "Step-by-Step Driver Installation Guide",
    category: "Installation",
    published: "May 28, 2024",
    readTime: "8 min read",
    excerpt:
      "A comprehensive walkthrough on how to properly install and configure printer drivers on Windows and Mac systems.",
    content: [
      {
        heading: "Finding Your Driver",
        body: "Start by identifying your printer model and visiting the manufacturer's official support page. Look for the Downloads or Drivers section and select your operating system version.",
      },
      {
        heading: "Windows Installation",
        body: "Download the driver file, double-click to run the installer, and follow the on-screen prompts. Connect your printer via USB or network, and the system will automatically detect and configure it.",
      },
      {
        heading: "Mac Installation",
        body: "Mac systems often include drivers for many common printers. Go to System Preferences > Printers & Scanners, click the plus button, and select your printer. If needed, download the latest driver from the manufacturer.",
      },
    ],
  },
  {
    slug: "troubleshooting-common-issues",
    title: "Common Printer Issues and Solutions",
    category: "Troubleshooting",
    published: "May 20, 2024",
    readTime: "6 min read",
    excerpt:
      "Discover quick fixes for the most common printer problems and when you need to update your drivers.",
    content: [
      {
        heading: "Printer Not Detected",
        body: "If your system cannot find your printer, first check the USB or network connection. Try reinstalling the driver and restarting both your computer and printer. Update your operating system to ensure compatibility.",
      },
      {
        heading: "Print Quality Issues",
        body: "Poor print quality often indicates outdated drivers or hardware problems. Update to the latest driver version, clean the printer's print heads, and check your paper quality settings.",
      },
      {
        heading: "Slow Printing",
        body: "Slow printing can result from driver conflicts or excessive background processes. Update your drivers, clear the print queue, and close unnecessary applications to improve performance.",
      },
    ],
  },
];
