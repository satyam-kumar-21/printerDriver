'use client'

interface RepairStep {
  title: string
  description: string
}

interface DriverRepairStepsProps {
  title?: string
  note?: string
  steps?: RepairStep[]
}

const defaultSteps: RepairStep[] = [
  {
    title: "Test with the maker's own utility",
    description:
      "If the manufacturer's scan tool sees the device, the driver is fine and the problem is in the other app's settings.",
  },
  {
    title: 'Install the FULL package',
    description:
      'Download the complete software bundle for your exact model — the one that lists scanning — not the basic print driver.',
  },
  {
    title: 'Open the firewall for network scanning',
    description:
      "Allow the maker's scanning utility through your firewall so the scanned image can travel back to the computer.",
  },
  {
    title: 'For USB: go direct',
    description:
      'Connect to a port on the computer itself with a known-good cable — skip hubs while troubleshooting.',
  },
  {
    title: 'Restart both ends',
    description:
      "Power-cycle the scanner and reboot the computer, then run a test scan from the OS's built-in tool.",
  },
]

export default function DriverRepairSteps({
  title = 'Fix it in five careful steps',
  note = "If anything here feels out of your depth, that's a normal feeling — a local technician can run this exact routine in minutes. Nothing on this page requires special tools.",
  steps = defaultSteps,
}: DriverRepairStepsProps) {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-16 sm:py-20">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-200/20 blur-[140px]" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-sky-200/20 blur-[140px]" />

        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(to right, white 1px, transparent 1px),
              linear-gradient(to bottom, white 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          {title}
        </h2>

        <ol className="mt-10 space-y-6">
          {steps.map((step, index) => (
            <li
              key={index}
              className="flex gap-4"
            >
              <span className="mt-1 text-lg font-semibold text-slate-500">
                {index + 1}.
              </span>

              <p className="text-lg leading-9 text-slate-600">
                <span className="font-semibold text-slate-900">
                  {step.title}
                </span>{' '}
                — {step.description}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-10 overflow-hidden rounded-2xl border border-blue-100 bg-gradient-to-r from-blue-50 to-sky-50">
          <div className="flex">
            <div className="w-1.5 bg-blue-600" />

            <div className="p-6">
              <p className="leading-8 text-slate-700">
                {note}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}