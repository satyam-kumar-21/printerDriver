import React from 'react'
import Link from 'next/link'
import { Bluetooth, Link2, Zap } from 'lucide-react'
import DriverDetailHero from '../../components/drivers/DriverDetailHero'
import WantUs from '@/app/components/home/WantUs'
import DriverFAQ from '@/app/components/drivers/DriverFAQ'
import DeviceCodeTable from '@/app/components/drivers/DeviceCodeTable'
import DriverRepairSteps from '@/app/components/drivers/DriverRepairSteps'

export default function Page() {
  const features = [
    {
      icon: <Bluetooth className="mt-0.5 h-5 w-5 text-blue-600" />,
      title: "Discovery & Pairing",
      description: "Manages the scan for nearby devices, the trust handshake, and your persistent list of paired devices."
    },
    {
      icon: <Link2 className="mt-0.5 h-5 w-5 text-blue-600" />,
      title: "Profile Management",
      description: "Speaks the right dialect for each device — audio profiles, input profiles, file transfer — all over the same radio."
    },
    {
      icon: <Zap className="mt-0.5 h-5 w-5 text-blue-600" />,
      title: "Power & Latency",
      description: "Manages radio power-saving without losing connection, and keeps audio latency low for calls and music."
    }
  ]

  const topics = ["Won't Pair", "Connection Drops", "Audio Silent", "Disconnects After Sleep"]

  const bluetoothFaqs = [
    {
      question: "My headphones are paired, but sound still comes from the laptop. Why?",
      answer:
        "Pairing and audio routing are separate processes. Even after a successful Bluetooth connection, your computer may continue using its built-in speakers as the default output device. Open your sound settings and manually select the headphones as the active playback device.",
    },
    {
      question: "Why does my Bluetooth mouse stutter near my Wi-Fi router?",
      answer:
        "Bluetooth and many Wi-Fi networks operate on the crowded 2.4 GHz frequency band. USB 3 devices can also create interference in the same range. Moving the mouse, receiver, or computer farther from the router and other sources of interference often improves performance. In most cases, signal congestion is the cause rather than the Bluetooth driver itself.",
    },
    {
      question: "My headphones pair with my phone but not my computer. What's different?",
      answer:
        "Computers often keep outdated pairing records that can interfere with new connections. Remove any existing entry for the headphones from your Bluetooth settings, place the headphones back into pairing mode, and try again. Installing the latest Bluetooth driver from your laptop or motherboard manufacturer can also resolve compatibility issues.",
    },
  ]



  const bluetoothRepairSteps = [
    {
      title: 'Remove and re-pair',
      description:
        'Delete the device from your Bluetooth list first, put it back into pairing mode, and then pair it again from scratch. Stale pairing records are responsible for many connection failures.',
    },
    {
      title: 'Charge and close the distance',
      description:
        "Low batteries can make Bluetooth devices unreliable long before they completely stop working. Fully charge the device and perform pairing within a short distance of the computer.",
    },
    {
      title: 'Update the Bluetooth driver',
      description:
        "Download the latest Bluetooth driver from your laptop manufacturer's support page for your exact model. Bluetooth drivers are often customized for specific hardware combinations.",
    },
    {
      title: 'Turn off radio power-saving',
      description:
        'Open the Bluetooth adapter properties and disable the option that allows the computer to turn off the device to save power.',
    },
    {
      title: 'Clear the airwaves',
      description:
        'Move away from USB 3 hubs, wireless receivers, and crowded 2.4 GHz Wi-Fi networks. Wireless interference can create symptoms that look very similar to driver problems.',
    },
  ]

  const bluetoothRepairNote =
    "If anything here feels out of your depth, that's a normal feeling. A local technician can run this exact routine in minutes, and nothing on this page requires special tools."
  return (
    <main>
      <DriverDetailHero
        title="The Invisible Cable Between Your Devices"
        breadcrumbs={["Bluetooth Drivers"]}
        intro={
          "Headphones, mice, keyboards, phones — Bluetooth replaces a drawer full of cables with one short-range radio. The driver and its software stack are what make that radio feel effortless."
        }
        image="/assets/images/bluetooth-what.svg"
        features={features}
        topics={topics}
      />

      <DriverRepairSteps
        title="Fix it in five careful steps"
        steps={bluetoothRepairSteps}
        note={bluetoothRepairNote}
      />

      <DeviceCodeTable />
      <DriverFAQ
        faqs={bluetoothFaqs}
        badge="Bluetooth Help"
        title="Frequently Asked Questions"
        subtitle="The questions readers ask most about Bluetooth devices, pairing, and connectivity problems."
      />
      <WantUs />
    </main>
  )
}
