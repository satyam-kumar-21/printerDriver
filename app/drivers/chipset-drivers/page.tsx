import { constructMetadata } from '@/app/utils/seo';

export const metadata = constructMetadata({
  title: 'Chipset Drivers - DriverWise Guides',
  description: 'Clear, plain-English guides and troubleshooting steps for chipset drivers on Windows and other operating systems.',
});

import React from 'react'
import { Cpu, Layers, Zap } from 'lucide-react'
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
            icon: <Cpu className="mt-0.5 h-5 w-5 text-blue-600" />,
            title: "Hardware Communication Hub",
            description: "Manages the connection between your processor, storage, USB ports, and other components."
        },
        {
            icon: <Layers className="mt-0.5 h-5 w-5 text-blue-600" />,
            title: "Power Management",
            description: "Controls power states for efficient energy use and proper sleep/wake behavior."
        },
        {
            icon: <Zap className="mt-0.5 h-5 w-5 text-blue-600" />,
            title: "Performance Tuning",
            description: "Unlocks the full potential of your motherboard's features and capabilities."
        }
    ]

    const topics = ["Sleep Issues", "USB Problems", "Slow Performance", "Unknown Devices"]

    const chipsetShowcaseData = {
        heading: 'Why Chipset Drivers Matter More Than You Think',
        description1:
            'Chipset drivers don’t get much attention, but they’re the foundation of your system. They teach your operating system exactly how your motherboard is wired, which devices are connected, and how they should talk to each other.',
        description2:
            'When something feels “off” across multiple devices — like USB ports acting weird, sleep not working, or general slowness after an OS update — it’s often the chipset driver. Installing the latest package from your motherboard or laptop maker usually fixes it.',
        image: '/network-fix.svg',
        imageAlt: 'Chipset driver illustration',
    }

    const chipsetFaqs = [
        {
            question: "Do I really need to install chipset drivers?",
            answer:
                "For basic functionality, your OS has generic drivers, but they're not optimized. Installing the manufacturer's chipset package enables proper power management, full USB speed, and correct device identification.",
        },
        {
            question: "How often should I update chipset drivers?",
            answer:
                "Chipset drivers change infrequently. Update them when you notice issues, after a major OS upgrade, or when the manufacturer releases an update that fixes something you care about.",
        },
        {
            question: "Where do I get the right chipset driver?",
            answer:
                "Always get chipset drivers directly from your motherboard or laptop manufacturer's support page for your exact model — never from third-party sites.",
        },
    ]

    const chipsetRepairSteps = [
        {
            title: 'Identify your hardware',
            description:
                'Find your motherboard model (for desktops) or laptop model number. This is usually printed on the box, in the manual, or in system information.',
        },
        {
            title: 'Visit the manufacturer support site',
            description:
                'Go to the official support page for your exact model and download the latest chipset driver package for your operating system.',
        },
        {
            title: 'Install the package',
            description:
                'Run the downloaded installer and follow the prompts. Reboot your computer when finished to ensure all changes take effect.',
        },
        {
            title: "Check device manager",
            description:
                "Open Device Manager and verify there are no yellow exclamation marks indicating unknown or problematic devices.",
        },
        {
            title: 'Test functionality',
            description:
                "Test USB ports, sleep/wake behavior, and general system performance to confirm everything is working properly.",
        },
    ]

    const chipsetRepairNote =
        "If anything here feels out of your depth, that's a normal feeling. A local technician can run this exact routine in minutes, and nothing on this page requires special tools."
        
    const chipsetExplanation = {
        title: "What a Chipset Driver Does",
        paragraphs: [
            "Chipset drivers are foundational system software components that manage the motherboard's chipset — the collection of integrated circuits that coordinate communication between the CPU, RAM, storage controllers, and device buses. Unlike device-specific drivers, chipset drivers affect the entire system's performance and stability because they govern how all components talk to each other.",
            "A modern desktop or laptop motherboard's chipset controls the PCI Express lanes that connect graphics cards, NVMe SSDs, and USB controllers to the processor. The chipset driver configures power management states for these buses, manages the bus arbitration that prevents two devices from transmitting simultaneously, and enables advanced features like SR-IOV (Single Root I/O Virtualization) for virtual machine environments."
        ],
        points: [
            { text: "Manages communication between the CPU, RAM, and all other components" },
            { text: "Configures power states and bus arbitration to prevent conflicts" },
            { text: "Enables advanced features like virtualization support and PCIe lanes" },
            { text: "Installing or updating it is one of the most important maintenance tasks" }
        ]
    }
    
    return (
        <main>
            <DriverDetailHero
                title="The Foundation That Holds Your System Together"
                breadcrumbs={["Chipset Drivers"]}
                intro={
                    "Chipset drivers are the quiet heroes of your computer. They teach your operating system exactly how your motherboard is wired and how all the pieces should communicate."
                }
                image="/network-fix.svg"
                features={features}
                topics={topics}
            />
            <DriverExplanation {...chipsetExplanation} />
            <DriverFeatureShowcase {...chipsetShowcaseData} />

            <DriverRepairSteps
                title="Get your chipset drivers right in five steps"
                steps={chipsetRepairSteps}
                note={chipsetRepairNote}
            />

            <DeviceCodeTable />
            <DriverFAQ
                faqs={chipsetFaqs}
                badge="Chipset Help"
                title="Frequently Asked Questions"
                subtitle="The questions readers ask most about chipset drivers and system stability."
            />
            <WantUs />
        </main>
    )
}
