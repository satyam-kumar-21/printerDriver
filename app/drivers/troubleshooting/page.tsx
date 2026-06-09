import React from 'react'
import Link from 'next/link'
import { Wrench, AlertCircle, Zap } from 'lucide-react'
import DriverDetailHero from '../../components/drivers/DriverDetailHero'
import WantUs from '@/app/components/home/WantUs'
import DriverFAQ from '@/app/components/drivers/DriverFAQ'
import DeviceCodeTable from '@/app/components/drivers/DeviceCodeTable'
import DriverRepairSteps from '@/app/components/drivers/DriverRepairSteps'

export default function Page() {
  const features = [
    {
      icon: <Wrench className="mt-0.5 h-5 w-5 text-blue-600" />,
      title: "Universal Fixes First",
      description: "Start with the most common solutions that work across all driver types before diving into specifics."
    },
    {
      icon: <AlertCircle className="mt-0.5 h-5 w-5 text-blue-600" />,
      title: "Symptom-Based Diagnosis",
      description: "Find your exact problem and follow a clear, step-by-step troubleshooting routine tailored to it."
    },
    {
      icon: <Zap className="mt-0.5 h-5 w-5 text-blue-600" />,
      title: "Safe, No-Risk Methods",
      description: "Learn proven techniques that fix driver issues without risking your system or losing your data."
    }
  ]

  const topics = ["Device Manager Codes", "Reinstall Steps", "Power Management", "Firewall Issues"]


  const troubleshootingFaqs = [
    {
      question: "I updated the driver and the problem is still there. What now?",
      answer:
        "Not every hardware problem is caused by a driver. Check cables, power, network connections, and device settings before assuming the update failed. If the issue started after a driver change, try rolling back to the previous version or performing a clean reinstall.",
    },
    {
      question: "How do I know if a driver is actually the problem?",
      answer:
        "Driver issues often appear after an operating system update, a hardware change, or a failed installation. Symptoms include devices disappearing, showing warning icons in Device Manager, losing functionality, or behaving inconsistently while the hardware itself appears healthy.",
    },
    {
      question: "Should I uninstall a driver before installing a new one?",
      answer:
        "For routine updates, installing the new version over the old one is usually fine. For persistent problems, however, a clean uninstall followed by a restart and fresh installation removes leftover files and settings that can cause conflicts.",
    },
    {
      question: "Can Windows Update install the correct driver automatically?",
      answer:
        "Often yes. Windows Update provides drivers for many common devices and is usually the safest starting point. For advanced features, better performance, or newly released hardware, the manufacturer's driver package is often the better choice.",
    },
    {
      question: "What does a yellow warning icon in Device Manager mean?",
      answer:
        "A yellow warning icon indicates that Windows detected a problem with the device. The hardware may have a missing driver, corrupted configuration, compatibility issue, or failed startup process. Opening the device properties will usually provide an error code to investigate.",
    },
    {
      question: "Is it safe to download drivers from third-party websites?",
      answer:
        "In most cases, no. The safest source is always the hardware manufacturer's support page or your operating system's update service. Third-party download sites may provide outdated, modified, or incorrect drivers.",
    },
  ]


  const troubleshootingRepairSteps = [
    {
      title: 'Start with the universal fixes',
      description:
        'Restart the computer, check cables and connections, reseat the device, and allow any pending operating-system updates to finish before changing drivers.',
    },
    {
      title: 'Identify the exact device',
      description:
        'Open Device Manager and note the precise device name and manufacturer. Installing the wrong driver often creates more problems than it solves.',
    },
    {
      title: 'Download the correct driver first',
      description:
        'Get the latest driver from the hardware manufacturer or computer maker before uninstalling anything. Keep the installer ready locally.',
    },
    {
      title: 'Perform a clean reinstall',
      description:
        'Uninstall the existing driver, restart the computer, install the freshly downloaded package, and restart again when the installation completes.',
    },
    {
      title: 'Test and isolate',
      description:
        'Verify whether the issue appears in multiple applications, user accounts, or devices. This helps determine whether the problem is the driver, hardware, or software settings.',
    },
  ]

  const troubleshootingRepairNote =
    "Most driver problems are solved by careful identification and a clean reinstall. If the issue remains after these steps, the hardware itself, a damaged operating-system component, or application-specific settings may be the real cause. Nothing here requires specialist tools, and a technician can usually complete this routine in a few minutes."
  return (
    <main>
      <DriverDetailHero
        title="Troubleshooting Hub for Common Driver Problems"
        breadcrumbs={["Troubleshooting"]}
        intro={
          "Take a calm, ordered approach. Start with universal fixes, then find your specific symptom and follow a practical routine without technical jargon getting in the way."
        }
        image="/assets/images/printer-what.svg"
        features={features}
        topics={topics}
      />

      <DriverRepairSteps
        title="Fix it in five careful steps"
        steps={troubleshootingRepairSteps}
        note={troubleshootingRepairNote}
      />
      <DeviceCodeTable />
      <DriverFAQ
        faqs={troubleshootingFaqs}
        badge="Troubleshooting Help"
        title="Frequently Asked Questions"
        subtitle="The questions readers ask most when diagnosing driver and device problems."
      />
      <WantUs />
    </main>
  )
}
