import { constructMetadata } from '@/app/utils/seo';

export const metadata = constructMetadata({
  title: 'Storage Drivers - DriverWise Guides',
  description: 'Clear, plain-English guides and troubleshooting steps for storage drivers on Windows and other operating systems.',
});

import React from 'react'
import { HardDrive, Database, Zap } from 'lucide-react'
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
            icon: <HardDrive className="mt-0.5 h-5 w-5 text-blue-600" />,
            title: "Fast Data Transfer",
            description: "Optimizes read/write speeds for SSDs, HDDs, and external storage devices."
        },
        {
            icon: <Database className="mt-0.5 h-5 w-5 text-blue-600" />,
            title: "Reliability Features",
            description: "Enables error correction, SMART monitoring, and power-loss protection."
        },
        {
            icon: <Zap className="mt-0.5 h-5 w-5 text-blue-600" />,
            title: "Advanced Technologies",
            description: "Supports NVMe, RAID, TRIM, and other modern storage features."
        }
    ]

    const topics = ["Slow Performance", "Drive Not Detected", "Data Corruption", "External Drive Issues"]

    const storageShowcaseData = {
        heading: 'Storage Drivers: Speed and Reliability Combined',
        description1:
            'Storage drivers are what make your files open quickly and your system boot fast. They handle the communication between your operating system and your SSD, HDD, or external drive, ensuring data moves safely and efficiently.',
        description2:
            'When a drive feels slower than it should, or isn’t being detected properly, updating or reinstalling the storage driver is often the solution. For NVMe SSDs, the right driver can unlock noticeable speed improvements.',
        image: '/network-fix.svg',
        imageAlt: 'Storage driver illustration',
    }

    const storageFaqs = [
        {
            question: "Why is my SSD running slower than advertised?",
            answer:
                "Make sure you're using the latest storage driver for your drive and motherboard. Also verify that your SSD is connected to the correct port (M.2 or SATA) and that TRIM is enabled for optimal performance.",
        },
        {
            question: "My external drive isn't showing up — what do I do?",
            answer:
                "Try a different USB port or cable first. If that doesn't work, check Disk Management (Windows) or Disk Utility (Mac) to see if the drive is detected but not formatted, and reinstall the storage driver if needed.",
        },
        {
            question: "Should I use the driver from the drive maker or motherboard maker?",
            answer:
                "For built-in storage, use the driver from your motherboard or laptop manufacturer. For external drives, use the driver from the drive manufacturer if they provide one.",
        },
    ]

    const storageRepairSteps = [
        {
            title: 'Check physical connections',
            description:
                'For internal drives, ensure power and data cables are securely connected. For external drives, try a different cable or USB port.',
        },
        {
            title: 'Update storage drivers',
            description:
                'Download and install the latest storage drivers from your motherboard, laptop, or drive manufacturer’s support site.',
        },
        {
            title: 'Verify drive health',
            description:
                'Use built-in tools or manufacturer software to check your drive’s SMART status and overall health.',
        },
        {
            title: "Enable performance features",
            description:
                "Make sure TRIM is enabled for SSDs and that your drive is using the correct interface (AHCI for SATA, NVMe for M.2).",
        },
        {
            title: 'Test with another system',
            description:
                "If possible, test the drive on another computer to rule out hardware failure vs. driver/configuration issues.",
        },
    ]

    const storageRepairNote =
        "If anything here feels out of your depth, that's a normal feeling. A local technician can run this exact routine in minutes, and nothing on this page requires special tools."
        
    const storageExplanation = {
        title: "What a Storage Driver Does",
        paragraphs: [
            "Storage drivers manage communication between the operating system and data storage devices, including hard disk drives (HDDs), solid-state drives (SSDs), NVMe devices, optical drives, and network-attached storage controllers. These drivers are responsible for translating file system read and write requests into the specific command sets understood by the storage hardware.",
            "For traditional storage devices, drivers implement the Advanced Host Controller Interface protocol, which defines how software communicates with storage controllers. Non-Volatile Memory Express devices use a newer, purpose-built protocol designed for the low-latency, high-parallelism nature of flash storage. These drivers support thousands of simultaneous input and output queues, compared to the single queue model of legacy disk interfaces, allowing modern solid-state drives to approach their theoretical maximum performance."
        ],
        points: [
            { text: "Translates file system requests into the storage hardware's command set" },
            { text: "Enables NVMe and AHCI interfaces for maximum performance" },
            { text: "Implements reliability features like error correction and SMART monitoring" },
            { text: "Supports RAID, TRIM, and other advanced storage technologies" }
        ]
    }
    
    return (
        <main>
            <DriverDetailHero
                title="The Software That Keeps Your Data Safe and Fast"
                breadcrumbs={["Storage Drivers"]}
                intro={
                    "From booting your system to loading your files, storage drivers work behind the scenes to ensure your data is accessible quickly and reliably."
                }
                image="/network-fix.svg"
                features={features}
                topics={topics}
            />
            <DriverExplanation {...storageExplanation} />
            <DriverFeatureShowcase {...storageShowcaseData} />

            <DriverRepairSteps
                title="Keep your storage running smoothly in five steps"
                steps={storageRepairSteps}
                note={storageRepairNote}
            />

            <DeviceCodeTable />
            <DriverFAQ
                faqs={storageFaqs}
                badge="Storage Help"
                title="Frequently Asked Questions"
                subtitle="The questions readers ask most about storage drivers, SSDs, HDDs, and data safety."
            />
            <WantUs />
        </main>
    )
}
