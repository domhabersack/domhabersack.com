import React from "react"

export default function Metrics({
  label,
  metrics,
}) {
  return (
    <React.Fragment>
      <h3 className="m-0 mb-1 font-bold text-sm uppercase">
        {label}
      </h3>

      <div className="gap-6 grid xs:gap-4 xs:grid-cols-2 lg:grid-cols-3">
        {metrics.map(({
          change,
          label,
          value,
        }) => {
          const trend = change ? Number.parseFloat(value / (value - change) * 100 - 100).toFixed(0) : 0

          return (
            <React.Fragment key={label}>
              <div className="flex flex-col">
                <div className="flex items-center space-x-2.5">
                  <p className="font-bold m-0 text-3xl text-gray-900 dark:text-gray-100">
                    {value}
                  </p>

                  <span
                    className={`
                      ${trend > 0 ? 'bg-green-200 dark:bg-green-600' : 'bg-red-200 dark:bg-red-600'}
                      font-medium
                      inline-block
                      px-2
                      py-0.5
                      rounded-full
                      ${trend > 0 ? 'text-green-700 dark:text-gray-50' : 'text-red-700 dark:text-gray-50'}
                      text-xs
                    `}
                  >
                    {trend >= 0 && '+'}{trend}%
                  </span>
                </div>

                <h4 className="font-medium m-0 text-gray-600 text-sm dark:text-gray-300">
                  {label}
                </h4>
              </div>
            </React.Fragment>
          )
        })}
      </div>
    </React.Fragment>
  )
}
