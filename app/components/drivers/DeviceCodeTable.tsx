'use client'

interface DeviceCode {
  code: string
  meaning: string
  fix: string
}

interface DeviceCodeTableProps {
  badge?: string
  title?: string
  subtitle?: string
  codes?: DeviceCode[]
}

const defaultCodes: DeviceCode[] = [
  {
    code: 'Code 28',
    meaning: 'No driver is installed for the device.',
    fix: 'Install the correct driver from the manufacturer.',
  },
  {
    code: 'Code 10',
    meaning: 'The device cannot start.',
    fix: 'Reinstall the driver and restart the computer.',
  },
  {
    code: 'Code 45',
    meaning: "The device isn't currently connected.",
    fix: 'Reconnect the device and check cables or power.',
  },
  {
    code: 'Code 19',
    meaning: "The device's configuration information is damaged.",
    fix: 'Uninstall the device and let Windows reinstall it.',
  },
]

export default function DeviceCodeTable({
  badge = 'Decode the Jargon',
  title = 'Common Device Manager codes',
  subtitle = 'These are the most common Device Manager errors and what they usually mean.',
  codes = defaultCodes,
}: DeviceCodeTableProps) {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-20 sm:py-24">
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

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header */}
        <div className="mx-auto mb-14 max-w-4xl text-center">
          <span className="inline-flex rounded-full border border-sky-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-blue-600 shadow-sm">
            {badge}
          </span>

          <h2 className="mt-6 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
            {title}
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
            {subtitle}
          </p>
        </div>
        <br />

        {/* Table */}
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-200/50">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead style={{ display: 'table-header-group' }}>
                <tr style={{ backgroundColor: '#1e293b', display: 'table-row' }}>
                  <th style={{
                    padding: '1.25rem 1.5rem',
                    textAlign: 'left',
                    fontSize: '0.75rem',
                    fontWeight: '900',
                    textTransform: 'uppercase',
                    letterSpacing: '0.15em',
                    color: '#ffffff',
                    display: 'table-cell',
                    visibility: 'visible'
                  }}>
                    Code
                  </th>

                  <th style={{
                    padding: '1.25rem 1.5rem',
                    textAlign: 'left',
                    fontSize: '0.75rem',
                    fontWeight: '900',
                    textTransform: 'uppercase',
                    letterSpacing: '0.15em',
                    color: '#ffffff',
                    display: 'table-cell',
                    visibility: 'visible'
                  }}>
                    What It Means In Plain English
                  </th>

                  <th style={{
                    padding: '1.25rem 1.5rem',
                    textAlign: 'left',
                    fontSize: '0.75rem',
                    fontWeight: '900',
                    textTransform: 'uppercase',
                    letterSpacing: '0.15em',
                    color: '#ffffff',
                    display: 'table-cell',
                    visibility: 'visible'
                  }}>
                    The Usual Fix
                  </th>
                </tr>
              </thead>

              <tbody>
                {codes.map((item, index) => (
                  <tr
                    key={item.code}
                    className={`border-t border-slate-200 ${
                      index % 2 === 0
                        ? 'bg-white'
                        : 'bg-slate-50'
                    }`}
                  >
                    <td className="px-6 py-5">
                      <span className="inline-flex rounded-xl bg-blue-50 px-3 py-2 text-sm font-semibold text-blue-700">
                        {item.code}
                      </span>
                    </td>

                    <td className="px-6 py-5 text-slate-700">
                      {item.meaning}
                    </td>

                    <td className="px-6 py-5 text-slate-700">
                      {item.fix}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}