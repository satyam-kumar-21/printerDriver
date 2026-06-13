import { constructMetadata } from '@/app/utils/seo';

export const metadata = constructMetadata({
  title: 'Input Devices Drivers - DriverWise Guides',
  description: 'Clear, plain-English guides and troubleshooting steps for input device drivers on Windows and other operating systems.',
});

import React from 'react'
import { Keyboard, Gamepad2, Zap } from 'lucide-react'
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
            icon: <Keyboard className="mt-0.5 h-5 w-5 text-blue-600" />,
            title: "Precise Input",
            description: "Ensures every keystroke, mouse movement, and touchpad gesture is registered accurately."
        },
        {
            icon: <Gamepad2 className="mt-0.5 h-5 w-5 text-blue-600" />,
            title: "Gaming Features",
            description: "Enables programmable buttons, RGB lighting, and low-latency input for controllers and gaming mice."
        },
        {
            icon: <Zap className="mt-0.5 h-5 w-5 text-blue-600" />,
            title: "Device Customization",
            description: "Allows remapping keys, adjusting sensitivity, and creating profiles for different uses."
        }
    ]

    const topics = ["Unresponsive Keyboard", "Mouse Lag", "Touchpad Issues", "Controller Not Detected"]

    const inputShowcaseData = {
        heading: 'Input Drivers: Your Connection to the Machine',
        description1:
            'Every time you type, click, or move a controller, an input driver is translating that physical action into something your computer understands. When these drivers are outdated or misconfigured, your devices can feel unresponsive or behave unpredictably.',
        description2:
            'For basic keyboards and mice, generic drivers work fine, but installing the manufacturer’s driver unlocks special features like macro keys, RGB customization, and sensitivity adjustments. For gaming, this can make a real difference.',
        image: '/network-fix.svg',
        imageAlt: 'Input device driver illustration',
    }

    const inputFaqs = [
        {
            question: "My keyboard isn't typing — what's wrong?",
            answer:
                "First, try a different USB port or restart your computer. If it's a wireless keyboard, check the batteries or re-pair it. If it still doesn't work, reinstall the keyboard driver or try the keyboard on another computer to rule out hardware failure.",
        },
        {
            question: "Why is my mouse cursor lagging or jumping?",
            answer:
                "This is often caused by a dirty mouse sensor, a bad mouse pad, or outdated drivers. Clean the sensor, try a different surface, and install the latest mouse driver from the manufacturer.",
        },
        {
            question: "Do I need special drivers for my gaming mouse/keyboard?",
            answer:
                "Basic functionality works without special drivers, but you'll need the manufacturer's software to unlock advanced features like programmable buttons, RGB lighting, and custom profiles.",
        },
    ]

    const inputRepairSteps = [
        {
            title: 'Check physical connection',
            description:
                'For wired devices, unplug and replug the USB cable. For wireless devices, check batteries and re-pair if necessary.',
        },
        {
            title: 'Try a different port',
            description:
                'Test the device on a different USB port to rule out a faulty port or hub.',
        },
        {
            title: 'Reinstall the driver',
            description:
                'Uninstall the device in Device Manager, restart your computer, and let Windows reinstall the driver automatically or install the manufacturer’s latest driver.',
        },
        {
            title: "Test on another system",
            description:
                "Try the device on another computer to determine if the issue is with the device itself or your system.",
        },
        {
            title: 'Install manufacturer software',
            description:
                "For advanced features, download and install the official software from the device manufacturer's website.",
        },
    ]

    const inputRepairNote =
        "If anything here feels out of your depth, that's a normal feeling. A local technician can run this exact routine in minutes, and nothing on this page requires special tools."
        
    const inputExplanation = {
        title: "What an Input Device Driver Does",
        paragraphs: [
            "Input device drivers facilitate communication between the operating system and the wide variety of devices through which users interact with their computers. Keyboards, mice, touchpads, trackballs, graphics tablets, game controllers, and touchscreens all require drivers that translate their physical signals into standardized events that the OS and applications can consume.",
            "Many input devices use the USB Human Interface Device (HID) class protocol, a standardized USB specification that defines how keyboards, mice, and similar devices report their state to the host system. The HID protocol describes device capabilities through report descriptors — structured binary documents that explain the format of data packets the device will send. A keyboard's report descriptor specifies which bits represent which keys, and the HID class driver parses incoming reports using this descriptor to generate key press and release events."
        ],
        points: [
            { text: "Translates physical signals from keyboards, mice, and other devices into events the OS understands" },
            { text: "Uses the standard HID protocol for most basic input devices" },
            { text: "Handles advanced features like pressure sensitivity and multi-touch for specialized hardware" },
            { text: "Allows customization like key remapping and profile creation" }
        ]
    }
    
    return (
        <main>
            <DriverDetailHero
                title="The Drivers That Connect Your Hands to Your Computer"
                breadcrumbs={["Input Devices"]}
                intro={
                    "From typing an email to playing a game, input device drivers translate your physical actions into digital signals your computer can understand."
                }
                image="/network-fix.svg"
                features={features}
                topics={topics}
            />
            <DriverExplanation {...inputExplanation} />
            <DriverFeatureShowcase {...inputShowcaseData} />

            <DriverRepairSteps
                title="Get your input devices working in five steps"
                steps={inputRepairSteps}
                note={inputRepairNote}
            />

            <DeviceCodeTable />
            <DriverFAQ
                faqs={inputFaqs}
                badge="Input Help"
                title="Frequently Asked Questions"
                subtitle="The questions readers ask most about keyboard, mouse, touchpad, and controller drivers."
            />
            <WantUs />
        </main>
    )
}
