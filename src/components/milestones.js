import Milestone from '@/components/milestone'

export default function Milestones({
  milestones,
}) {
  return (
    <div className="grid gap-6 grid-cols-1">
      {milestones.map((milestone, i) => (
        <div className="relative" key={`milestone-${milestone.slug}`}>
          <Milestone milestone={milestone} />

          {((i + 1) < milestones.length) && (
            <div className="absolute bg-gray-200 -bottom-3 left-5 -m-px rounded-full top-12 w-0.5 dark:bg-gray-700">
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
