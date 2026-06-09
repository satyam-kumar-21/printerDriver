import React from 'react'
import Link from 'next/link'
import { ScanLine, Link2, Wifi } from 'lucide-react'
import DriverDetailHero from '../../components/drivers/DriverDetailHero'
import WantUs from '@/app/components/home/WantUs'
import DriverFAQ from '@/app/components/drivers/DriverFAQ'
import DeviceCodeTable from '@/app/components/drivers/DeviceCodeTable'
import DriverRepairSteps from '@/app/components/drivers/DriverRepairSteps'

export default function Page() {
  const features = [
    {
      icon: <ScanLine className="mt-0.5 h-5 w-5 text-blue-600" />,
      title: "Standard Interfaces",
      description: "Implements the scanning APIs that all imaging apps expect — so any app can drive your scanner."
    },
    {
      icon: <Link2 className="mt-0.5 h-5 w-5 text-blue-600" />,
      title: "Multifunction Coordination",
      description: "Printing and scanning are separate drivers on multifunction devices — both must be installed."
    },
    {
      icon: <Wifi className="mt-0.5 h-5 w-5 text-blue-600" />,
      title: "Network Return Path",
      description: "Network scanning sends images back to your computer — firewalls can block this return journey."
    }
  ]

  const topics = ["Not Recognized", "Can't Scan", "Printer Works Not Scanner", "Network Scanning Issues"]

  const scannerFaqs = [
    {
      question: "My printer prints but won't scan. How is that possible?",
      answer:
        "On multifunction devices, printing and scanning use separate drivers. A quick or print-only installation often includes only the printing component. Download and install the full software package for your exact model to add the scanner driver and scanning utilities.",
    },
    {
      question: "Scanning works over USB but not over Wi-Fi. Why?",
      answer:
        "Scanning sends data from the device back to your computer, and firewalls can sometimes block that incoming connection. Allow the manufacturer's scanning software through your firewall and make sure both the scanner and computer are connected to the same network.",
    },
    {
      question: "Will my older scanner work with a new operating system?",
      answer:
        "Check the manufacturer's support page for a driver compatible with your operating system version. If official support has ended, the operating system's built-in scanning tools may still provide basic functionality, although advanced features might no longer be available.",
    },
  ]



  const scannerRepairSteps = [
    {
      title: "Test with the maker's own utility",
      description:
        "If the manufacturer's scan tool sees the device, the driver is fine and the problem is in the other application's settings.",
    },
    {
      title: 'Install the FULL package',
      description:
        'Download the complete software bundle for your exact model — the version that includes scanning support, not just the basic print driver.',
    },
    {
      title: 'Open the firewall for network scanning',
      description:
        "Allow the manufacturer's scanning utility through your firewall so scanned images can travel back to the computer.",
    },
    {
      title: 'For USB: go direct',
      description:
        'Connect the scanner directly to a USB port on the computer using a known-good cable and avoid hubs while troubleshooting.',
    },
    {
      title: 'Restart both ends',
      description:
        "Power-cycle the scanner and restart the computer, then run a test scan using the operating system's built-in scanning tool.",
    },
  ]

  const scannerRepairNote =
    "If anything here feels out of your depth, that's perfectly normal. A local technician can usually perform this entire routine in minutes, and nothing on this page requires specialist tools."
  return (
    <main>
      <DriverDetailHero
        title="How Your Scanner Talks to Every App You Own"
        breadcrumbs={["Scanner Drivers"]}
        intro={
          "Scan from the maker's utility, a photo editor, or your operating system's built-in tool — and somehow they all drive the same hardware. A scanner driver's job is making that universal access work."
        }
        image="/assets/images/scanner-what.svg"
        features={features}
        topics={topics}
      />

      <DriverRepairSteps
        title="Fix it in five careful steps"
        steps={scannerRepairSteps}
        note={scannerRepairNote}
      />
      <DeviceCodeTable />
      <DriverFAQ
        faqs={scannerFaqs}
        badge="Scanner Help"
        title="Frequently Asked Questions"
        subtitle="The questions readers ask most about scanner drivers and scanning problems."
      />
      <WantUs />
    </main>
  )
}
