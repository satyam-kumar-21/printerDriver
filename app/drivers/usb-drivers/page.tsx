import { constructMetadata } from '@/app/utils/seo';

export const metadata = constructMetadata({
  title: 'Usb Drivers - DriverWise Guides',
  description: 'Clear, plain-English guides and troubleshooting steps for usb drivers on Windows and other operating systems.',
});

import React from 'react'
import Link from 'next/link'
import { Usb, Zap, AlertCircle } from 'lucide-react'
import DriverDetailHero from '../../components/drivers/DriverDetailHero'
import WantUs from '@/app/components/home/WantUs'
import DriverFAQ from '@/app/components/drivers/DriverFAQ'
import DeviceCodeTable from '@/app/components/drivers/DeviceCodeTable'
import DriverRepairSteps from '@/app/components/drivers/DriverRepairSteps'
import DriverFeatureShowcase from '@/app/components/drivers/DriverFeatureShowcase'

export default function Page() {
  const features = [
    {
      icon: <Usb className="mt-0.5 h-5 w-5 text-blue-600" />,
      title: "Device Enumeration",
      description: "Detects newly connected devices, identifies what they are, and loads the right driver on the fly."
    },
    {
      icon: <Zap className="mt-0.5 h-5 w-5 text-blue-600" />,
      title: "Power & Resource Allocation",
      description: "Manages power delivery, port resources, hubs, daisy-chaining, and hot-plugging without conflicts."
    },
    {
      icon: <AlertCircle className="mt-0.5 h-5 w-5 text-blue-600" />,
      title: "Cable & Port Troubleshooting",
      description: "Cables and ports fail far more often than drivers — but a reinstall clears software issues."
    }
  ]

  const topics = ["Unknown Device", "Slow Transfer", "Keeps Disconnecting", "Won't Charge"]


  const usbFaqs = [
    {
      question: "My USB device shows as 'Unknown'. What does that mean?",
      answer:
        "The computer sees something connected but can't load a matching driver. Try a different port and cable first, then install the device's own driver from the manufacturer.",
    },
    {
      question: 'Why does my external drive keep disconnecting?',
      answer:
        "Usually USB power management putting the port to sleep, or a marginal cable. A current driver plus disabling USB selective suspend for that controller resolves most repeat disconnects.",
    },
    {
      question: "Do I need to 'safely remove' USB drives?",
      answer:
        "For storage devices it's still good practice: it flushes pending writes so files aren't corrupted mid-save. For mice, keyboards, and similar devices, just unplug.",
    },
  ]


  const usbRepairSteps = [
    {
      title: 'Swap the cable',
      description:
        'Cables fail far more often than ports or drivers. Always test with a known-good cable before investigating anything more complicated.',
    },
    {
      title: 'Try a different port',
      description:
        'Move the device from a hub or front-panel connector to a USB port directly on the computer. This helps rule out port and hub issues.',
    },
    {
      title: 'Reinstall the device driver',
      description:
        'Uninstall the device in Device Manager, disconnect it, restart the computer, and then reconnect it so the operating system can detect it again.',
    },
    {
      title: 'Update the controller driver',
      description:
        "Install the latest chipset or USB controller package from your computer manufacturer's support page. These drivers control how every USB port communicates with connected devices.",
    },
    {
      title: 'Disable selective suspend',
      description:
        'If the device disconnects after sitting idle, turn off USB Selective Suspend in your power settings to prevent Windows from putting the port to sleep.',
    },
  ]


  const usbDeviceIssuesData = {
  heading: "When a Device Isn't Recognised",

  description1:
    "An unknown-device error, a drive that mounts then vanishes, or a port that charges but won't transfer data — these point to the USB stack rather than the gadget itself.",

  description2:
    "Trying another port, reseating the cable, and reinstalling the device-specific driver from its maker clears up most cases. A surprising number are simply a tired cable or a port stuck in a low-power state after sleep.",

  image: '/network-fix.svg',
  imageAlt: 'USB device troubleshooting illustration',
}

  const usbRepairNote =
    "If anything here feels out of your depth, that's a normal feeling. A local technician can run this exact routine in minutes, and nothing on this page requires special tools."

  return (
    <main>
      <DriverDetailHero
        title="The Universal Translator for Plug-and-Play Devices"
        breadcrumbs={["USB & Devices"]}
        intro={
          "Plug something in, and within a second your computer knows what it is and how to talk to it. That little feat of engineering is the USB driver stack at work."
        }
        image="/assets/images/usb-what.svg"
        features={features}
        topics={topics}
      />

        <DriverFeatureShowcase {...usbDeviceIssuesData} />

      <DriverRepairSteps
        title="Fix it in five careful steps"
        steps={usbRepairSteps}
        note={usbRepairNote}
      />
      <DeviceCodeTable />
      <DriverFAQ
        faqs={usbFaqs}
        badge="USB Help"
        title="Frequently Asked Questions"
        subtitle="The questions readers ask most about USB devices and drivers."
      />
      <WantUs />
    </main>
  )
}
