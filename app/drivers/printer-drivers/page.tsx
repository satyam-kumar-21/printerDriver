import { constructMetadata } from '@/app/utils/seo';

export const metadata = constructMetadata({
  title: 'Printer Drivers - DriverWise Guides',
  description: 'Clear, plain-English guides and troubleshooting steps for printer drivers on Windows and other operating systems.',
});

import React from 'react'
import Link from 'next/link'
import { Printer, AlertCircle, Zap } from 'lucide-react'
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
            icon: <Printer className="mt-0.5 h-5 w-5 text-blue-600" />,
            title: "Queue Management",
            description: "The spooler coordinates print jobs and keeps your application responsive while printing happens."
        },
        {
            icon: <AlertCircle className="mt-0.5 h-5 w-5 text-blue-600" />,
            title: "Status Reporting",
            description: "Real-time feedback on paper, ink, jams, and offline state — so you know exactly what's happening."
        },
        {
            icon: <Zap className="mt-0.5 h-5 w-5 text-blue-600" />,
            title: "Device Communication",
            description: "Converts your document into the exact page-description language your specific printer understands."
        }
    ]

    const topics = ["Queue Stuck", "Printer Offline", "Gibberish Output", "Installation Issues"]


    const printerOfflineShowcaseData = {
  heading: 'Why Printers Go “Offline” (and Other Classics)',
  description1:
    'A printer that shows “offline” while sitting right there, a queue that won’t move, pages of gibberish symbols, or blank sheets — these are the printing classics, and nearly all of them live in software, not in the machine.',

  description2:
    '“Offline” simply means the computer can’t reach the printer at that moment — a Wi-Fi hiccup, a sleeping device, or a stuck job blocking the queue. Gibberish output usually means the job was rendered with the wrong driver, often a near-match model. The reliable fix is to clear the queue, then reinstall the full driver package for your exact model from the manufacturer’s support page.',

  image: '/driver/printerdrivers.webp',
  imageAlt: 'Printer offline troubleshooting illustration',
}
    const printerFaqs = [
        {
            question: "My printer shows 'offline' but it's switched on. What now?",
            answer:
                "Offline means the computer can't reach the printer right now. Make sure the printer and computer are connected to the same network, restart the printer, clear any stuck jobs from the print queue, and verify it's selected as the default printer. In stubborn cases, rerun the manufacturer's setup utility to rediscover the device.",
        },
        {
            question: "Why does my printer print gibberish or strange symbols?",
            answer:
                "This usually happens when the document is being processed by the wrong driver, often one intended for a similar model. Install the driver for your exact printer model, remove duplicate or lookalike printer entries, clear the print queue, and send the document again.",
        },
        {
            question: "Is the generic driver built into my OS good enough?",
            answer:
                "For basic printing, yes. Built-in drivers are quick to install and work well for simple tasks. Install the manufacturer's full driver package if you need scanning support, ink-level monitoring, duplex printing defaults, maintenance tools, or specialty paper settings.",
        },
    ]



    const printerRepairSteps = [
        {
            title: 'Clear the print queue',
            description:
                'Open the print queue and cancel every document. If a job refuses to disappear, restart both the computer and the printer — the queue often clears during startup.',
        },
        {
            title: 'Check the connection',
            description:
                'For USB printers, disconnect and reconnect the cable. For Wi-Fi printers, confirm both the printer and computer are on the same network. Most printers can print a network status page from their control panel.',
        },
        {
            title: 'Set the right default',
            description:
                'Make sure the real printer is set as the default device, not "Save as PDF" or a duplicate printer entry such as "Copy 1".',
        },
        {
            title: "Reinstall the maker's driver",
            description:
                "Download the full driver package for your exact printer model and operating-system version from the manufacturer's support page, remove the old printer entry, and install the new package cleanly.",
        },
        {
            title: 'Print a test page',
            description:
                "Use the driver's built-in test page feature. If the test page prints successfully but your document does not, the issue is likely within the application's print settings.",
        },
    ]

    const printerRepairNote =
        "If anything here feels out of your depth, that's a normal feeling. A local technician can run this exact routine in minutes, and nothing on this page requires special tools."
        
    const printerExplanation = {
        title: "What a Printer Driver Does",
        paragraphs: [
            "A printer driver takes the page your application has laid out and converts it into the page-description language your specific printer understands — where every line, image, and character should land on the paper. It also presents the printer's abilities to you: paper sizes, print quality, double-sided printing, colour or draft mode.",
            "Between the click and the paper sits the print queue (the spooler), which the driver feeds. Jobs wait their turn there, your application gets to move on instantly, and status — ink levels, paper jams, that blinking light — flows back the other way so you know what's happening."
        ],
        points: [
            { text: "Converts your document into the printer's page language" },
            { text: "Exposes paper size, quality, and double-sided options" },
            { text: "Queues jobs through the spooler so apps don't wait" },
            { text: "Reports ink, paper, and error status back to you" }
        ]
    }
    return (
        <main>
            <DriverDetailHero
                title="The Translator Between Your Document and the Printed Page"
                breadcrumbs={["Printer Drivers"]}
                intro={
                    "You click Print, and a small chain of software springs into action — formatting the page, queueing the job, and speaking your printer's exact language. Here's how it works, and how to un-jam it when it doesn't."
                }
                image="/driver/printerandoutputdriver.webp"
                features={features}
                topics={topics}
            />

            <DriverExplanation {...printerExplanation} />

           <DriverFeatureShowcase {...printerOfflineShowcaseData} />

            <DriverRepairSteps
                title="Fix it in five careful steps"
                steps={printerRepairSteps}
                note={printerRepairNote}
            />

            <DeviceCodeTable />
            <DriverFAQ
                faqs={printerFaqs}
                badge="Printer Help"
                title="Frequently Asked Questions"
                subtitle="The questions readers ask most about printer drivers and troubleshooting."
            />
            <WantUs />
        </main>
    )
}
