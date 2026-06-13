import { constructMetadata } from '@/app/utils/seo';

export const metadata = constructMetadata({
  title: 'Audio Drivers - DriverWise Guides',
  description: 'Clear, plain-English guides and troubleshooting steps for audio drivers on Windows and other operating systems.',
});

import React from 'react'
import {
    Volume2,
    Zap,
    Sliders,
} from 'lucide-react'

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
            icon: <Volume2 className="mt-0.5 h-5 w-5 text-blue-600" />,
            title: "Sample-Accurate Routing",
            description:
                "Moves digital audio samples in both directions — microphone in, speakers out — keeping everything in perfect sync.",
        },
        {
            icon: <Sliders className="mt-0.5 h-5 w-5 text-blue-600" />,
            title: "Mixing & Device Selection",
            description:
                "Manages multiple audio sources, routes to the correct output, and selects the right default device.",
        },
        {
            icon: <Zap className="mt-0.5 h-5 w-5 text-blue-600" />,
            title: "Latency & Buffering",
            description:
                "Controls timing and buffer sizes to prevent crackling, lag, and sync issues on calls.",
        },
    ]

    const topics = [
        'No Sound',
        'Quiet Microphone',
        'Crackling Audio',
        'Wrong Device',
    ]


    const audioFaqs = [
        {
            question: "There's no sound — where do I start?",
            answer:
                "Start by checking the selected output device. Your computer may be sending audio to headphones, a monitor, or another device that is no longer connected. If the correct output device is selected and there's still no sound, reinstalling the audio driver is usually the next troubleshooting step.",
        },
        {
            question: "Why is my microphone so quiet on calls?",
            answer:
                "In most cases, this is caused by microphone settings rather than faulty hardware. Make sure the correct microphone is set as the default input device, check its volume level, and verify that communication apps haven't automatically reduced its gain. A fresh audio driver can help if the microphone isn't being detected correctly.",
        },
        {
            question: "Crackling during calls — is my sound card dying?",
            answer:
                "Almost never. Audio crackling is typically caused by buffering issues, background applications competing for system resources, or driver conflicts. Updating or reinstalling the audio driver and closing resource-heavy applications during calls resolves most cases.",
        },
    ]


    const audioRepairSteps = [
        {
            title: 'Check the default device',
            description:
                'Open your sound settings and confirm the output and input devices you expect are actually selected as the defaults.',
        },
        {
            title: 'Test with a second app',
            description:
                'If one application is silent but another plays audio normally, the problem is likely an app setting rather than the driver.',
        },
        {
            title: 'Reinstall the audio driver',
            description:
                "Uninstall the audio device in Device Manager, restart the computer, then install the manufacturer's latest audio package.",
        },
        {
            title: 'Check enhancements and levels',
            description:
                'Disable audio enhancements and confirm that nothing is muted or turned down in the volume mixer.',
        },
        {
            title: 'Restart and verify',
            description:
                'Reboot the computer, play a test sound, and record a short microphone clip to confirm both playback and recording work correctly.',
        },
    ]


   const soundProblemsData = {
  heading: 'Common Sound Problems',

  description1:
    'No sound at all, sound from the wrong device, crackling during calls, or a microphone nobody can hear — almost all of these trace back to the driver or to which device is selected as the default.',

  description2:
    'Reinstalling the audio driver from your laptop or motherboard maker, then confirming the right playback and recording devices are set as default, clears up the great majority of everyday audio issues.',

  image: '/network-fix.svg',
  imageAlt: 'Audio driver troubleshooting illustration',
}
    const audioRepairNote =
        "If anything here feels out of your depth, that's a normal feeling. A local technician can run this exact routine in minutes, and nothing on this page requires special tools."
        
    const audioExplanation = {
        title: "What an Audio Driver Does",
        paragraphs: [
            "An audio driver moves streams of digital samples between your applications and the sound hardware, keeping everything in time. It manages sample rates, mixes multiple sources, routes audio to the right output, and applies any hardware effects your device supports.",
            "Get it right and sound is effortless. Get it slightly wrong and you hear crackling, lag, or a microphone that everybody says is too quiet."
        ],
        points: [
            { text: "Carries digital audio samples in both directions" },
            { text: "Mixes and routes multiple sound sources" },
            { text: "Manages sample rate, latency, and buffering" },
            { text: "Selects the correct input and output device" }
        ]
    }
    
    return (
        <main>
            <DriverDetailHero
                title="The Software Behind Every Sound You Hear"
                breadcrumbs={['Audio Drivers']}
                intro="When music plays, a video call connects, or a notification chimes, an audio driver is doing precise, sample-accurate work in the background to make it happen."
                image="/assets/images/audio-what.svg"
                features={features}
                topics={topics}
            />
            <DriverExplanation {...audioExplanation} />
            <DriverFeatureShowcase {...soundProblemsData} />

            <DriverRepairSteps
                title="Fix it in five careful steps"
                steps={audioRepairSteps}
                note={audioRepairNote}
            />
            <DeviceCodeTable />

            <DriverFAQ
                faqs={audioFaqs}
                badge="Audio Help"
                title="Frequently Asked Questions"
                subtitle="The questions readers ask most about audio drivers, microphones, speakers, and sound problems."
            />
            <WantUs />
        </main>
    )
}