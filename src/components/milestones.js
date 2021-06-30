import Milestone from '@/components/milestone'

export default function Milestones({
  milestones,
}) {
  return (
    <div className="grid gap-20 grid-cols-1">
      {milestones.map((milestone, i) => (
        <div className="relative" key={`milestone-${milestone.slug}`}>
          <Milestone milestone={milestone} />

          {((i + 1) < milestones.length) && (
            <div className="absolute bg-gray-200 -bottom-16 left-6 -m-px rounded-full top-16 w-0.5 dark:bg-gray-700" />
          )}
        </div>
      ))}
    </div>
  )
}
