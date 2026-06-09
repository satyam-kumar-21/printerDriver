import React from 'react'
import Link from 'next/link'
import { Wifi, Zap, Power } from 'lucide-react'
import DriverDetailHero from '../../components/drivers/DriverDetailHero'
import WantUs from '@/app/components/home/WantUs'
import DriverFAQ from '@/app/components/drivers/DriverFAQ'
import DeviceCodeTable from '@/app/components/drivers/DeviceCodeTable'
import DriverRepairSteps from '@/app/components/drivers/DriverRepairSteps'
import DriverFeatureShowcase from '@/app/components/drivers/DriverFeatureShowcase'

export default function Page() {
  const features = [
    {
      icon: <Wifi className="mt-0.5 h-5 w-5 text-blue-600" />,
      title: "Packet Transport",
      description: "Moves packets between your OS and the network chip — and manages Wi-Fi association and roaming."
    },
    {
      icon: <Power className="mt-0.5 h-5 w-5 text-blue-600" />,
      title: "Power Management",
      description: "The OS can aggressively power down the adapter after sleep — often causing drops unless you disable it."
    },
    {
      icon: <Zap className="mt-0.5 h-5 w-5 text-blue-600" />,
      title: "Performance Features",
      description: "Implements checksum offload, packet queuing, and reports link speed and signal strength."
    }
  ]

  const topics = ["Wi-Fi Drops", "Slow Connection", "Won't Connect", "Disconnects After Sleep"]


  const wifiFaqs = [
    {
      question: "Why is my Wi-Fi slower on my laptop than my phone?",
      answer:
        "This is often caused by the laptop's wireless adapter running in an aggressive power-saving mode or using an outdated driver. Updating the Wi-Fi driver and disabling unnecessary power-management settings for the network adapter can significantly improve performance and bring speeds closer to what you see on other devices.",
    },
    {
      question: "My Wi-Fi disconnects when the laptop sleeps. Is that normal?",
      answer:
        "It's a common issue, but it can usually be fixed. During sleep, the operating system powers down the wireless adapter to save battery life, and some drivers don't restore the connection properly when the device wakes up. Installing the latest driver and disabling 'Allow the computer to turn off this device to save power' often resolves the problem.",
    },
    {
      question: "Ethernet works but Wi-Fi doesn't — what does that tell me?",
      answer:
        "Because Ethernet and Wi-Fi use different hardware and drivers, a working Ethernet connection usually means your internet service and operating system are functioning correctly. The issue is more likely related to the wireless adapter's driver, settings, or hardware rather than the network itself.",
    },
  ]

  const networkRepairSteps = [
    {
      title: 'Identify the adapter',
      description:
        'Open Device Manager → Network adapters and note the exact name of your Wi-Fi or Ethernet adapter.',
    },
    {
      title: 'Download the current driver first',
      description:
        "For laptops, download the driver from the laptop manufacturer's support page. For desktop adapters, use the network chip manufacturer's site. Do this before uninstalling anything so you still have internet access.",
    },
    {
      title: 'Uninstall the old driver',
      description:
        'In Device Manager, remove the network adapter and select the option to delete the driver software if it is available.',
    },
    {
      title: 'Restart and install',
      description:
        'Restart the computer, run the installer you downloaded earlier, and reconnect to your Wi-Fi or Ethernet network.',
    },
    {
      title: 'Tame power management',
      description:
        'Open the adapter properties and untick "Allow the computer to turn off this device to save power" — one of the most effective fixes for random disconnects and sleep-related network issues.',
    },
  ]

  const networkRepairNote =
    "If anything here feels out of your depth, that's a normal feeling. A local technician can run this exact routine in minutes, and nothing on this page requires special tools."
  return (
    <main>
      <DriverDetailHero
        title="The Bridge Between Your PC and the Internet"
        breadcrumbs={["Network Drivers"]}
        intro={
          "Every page you load, every video you stream, and every call you join passes through a network driver before it ever reaches your screen."
        }
        image="/assets/images/network-what.svg"
        features={features}
        topics={topics}
      />

      <DriverFeatureShowcase image="/network-fix.svg"/>

      <DriverRepairSteps
        title="Fix it in five careful steps"
        steps={networkRepairSteps}
        note={networkRepairNote}
      />
      <DeviceCodeTable />
      <DriverFAQ
        faqs={wifiFaqs}
        badge="Network Help"
        title="Frequently Asked Questions"
        subtitle="The questions readers ask most about Wi-Fi, Ethernet, and network driver issues."
      />
      <WantUs />
    </main>
  )
}
