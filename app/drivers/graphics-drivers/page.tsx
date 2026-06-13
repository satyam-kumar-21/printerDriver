import { constructMetadata } from '@/app/utils/seo';

export const metadata = constructMetadata({
  title: 'Graphics Drivers - DriverWise Guides',
  description: 'Clear, plain-English guides and troubleshooting steps for graphics drivers on Windows and other operating systems.',
});

import React from 'react'
import Link from 'next/link'
import { Monitor, RefreshCw, Zap } from 'lucide-react'
import DriverDetailHero from '../../components/drivers/DriverDetailHero'
import WantUs from '@/app/components/home/WantUs'
import DriverFAQ from '@/app/components/drivers/DriverFAQ'
import DeviceCodeTable from '@/app/components/drivers/DeviceCodeTable'
import DriverRepairSteps from '@/app/components/drivers/DriverRepairSteps'
import DriverFeatureShowcase from '@/app/components/drivers/DriverFeatureShowcase'
import DriverExplanation from '../../components/drivers/DriverExplanation'

export default function Page() {
  const features = [
    {
      icon: <Monitor className="mt-0.5 h-5 w-5 text-blue-600" />,
      title: "GPU Command Translation",
      description: "Converts rendering instructions into commands your specific GPU understands."
    },
    {
      icon: <RefreshCw className="mt-0.5 h-5 w-5 text-blue-600" />,
      title: "Frame Scheduling",
      description: "Manages video memory, coordinates rendering work, and pushes frames to the display on time."
    },
    {
      icon: <Zap className="mt-0.5 h-5 w-5 text-blue-600" />,
      title: "Multi-Monitor & Advanced Features",
      description: "Handles multi-display layouts, scaling, refresh rates, and hardware video decoding."
    }
  ]

  const topics = ["Screen Flicker", "Black Screen", "Wrong Resolution", "Stutter in Games"]

  const graphicsFaqs = [
    {
      question: "Why does my screen flicker after a driver update?",
      answer:
        "Screen flicker after an update usually means the new graphics driver is conflicting with leftover components from the previous installation, or the display refresh rate has changed. Perform a clean driver reinstall and verify that your monitor is running at its native refresh rate.",
    },
    {
      question: "My second monitor isn't detected — is that the driver?",
      answer:
        "Often, yes. The graphics driver is responsible for detecting, configuring, and arranging connected displays. Updating or reinstalling the graphics driver, checking the display cable, and confirming the correct input source on the monitor resolves most multi-monitor detection issues.",
    },
    {
      question: "Should I update my graphics driver even if nothing is wrong?",
      answer:
        "If your system is stable and you're not experiencing problems, there's no need to update immediately. Casual users can update every few months or when a specific fix is released. Gamers benefit most from staying current because new game releases often include day-one performance improvements and bug fixes in updated drivers.",
    },
  ]




  const graphicsRepairSteps = [
    {
      title: 'Note your exact GPU model',
      description:
        'Open Device Manager → Display adapters (or your system information tool) and write down the complete graphics card model name.',
    },
    {
      title: 'Download the right driver',
      description:
        "Get the latest driver from the GPU manufacturer's official website, or for laptops, use the laptop maker's support page since those drivers are often tuned for the display panel and power limits.",
    },
    {
      title: 'Uninstall the current driver',
      description:
        'In Device Manager, uninstall the display adapter and select "Delete the driver software for this device" if that option is available.',
    },
    {
      title: 'Restart, then install',
      description:
        'Restart the computer, run the driver installer you downloaded earlier, and choose the clean or custom installation option when available.',
    },
    {
      title: 'Restart and verify',
      description:
        "Reboot once more, then confirm that the screen resolution and refresh rate have returned to the display's native values.",
    },
  ]

  const displayFrustrationsData = {
  heading: 'Common Display Frustrations',

  description1:
    "Flickering, a screen that goes black after waking, stutter in games, or a resolution that won't stick — these are the classic graphics-driver complaints, and they're usually among the most fixable.",

  description2:
    "A clean reinstall of the latest driver from your graphics card maker resolves the large majority of these issues, because it removes leftovers from previous versions that can quietly conflict. For laptops, your computer maker's site is often the better source, since their build is tuned for your exact panel and power settings.",

  image: '/network-fix.svg',
  imageAlt: 'Display driver troubleshooting illustration',
}

  const graphicsRepairNote =
    "If anything here feels out of your depth, that's a normal feeling. A local technician can run this exact routine in minutes, and nothing on this page requires special tools."
    
  const graphicsExplanation = {
    title: "What a Graphics Driver Does",
    paragraphs: [
      "A graphics driver receives drawing instructions from the operating system and your applications, then translates them into the exact commands your specific GPU understands. It manages memory on the card, schedules rendering work, and pushes finished frames to the display at the right moment.",
      "It also exposes advanced features — hardware video decoding, multiple-monitor layouts, and game-ready optimisations — that applications can ask for without knowing the details of your card."
    ],
    points: [
      { text: "Translates rendering calls into GPU-specific commands" },
      { text: "Manages video memory and the frame buffer" },
      { text: "Handles multi-monitor layout, scaling, and refresh" },
      { text: "Enables hardware video decode and acceleration" }
    ]
  }
  return (
    <main>
      <DriverDetailHero
        title="Where Your GPU Meets the Real World"
        breadcrumbs={["Graphics Drivers"]}
        intro={
          "Every frame on your screen is the result of a quiet conversation between the operating system, the graphics card, and a remarkable piece of software called the graphics driver."
        }
        image="/assets/images/graphics-what.svg"
        features={features}
        topics={topics}
      />

      <DriverExplanation {...graphicsExplanation} />

      <DriverFeatureShowcase {...displayFrustrationsData} />

      <DriverRepairSteps
        title="Fix it in five careful steps"
        steps={graphicsRepairSteps}
        note={graphicsRepairNote}
      />
      <DeviceCodeTable />
      <DriverFAQ
        faqs={graphicsFaqs}
        badge="Graphics Help"
        title="Frequently Asked Questions"
        subtitle="The questions readers ask most about graphics drivers, displays, and monitor issues."
      />
      <WantUs />
    </main>
  )
}
