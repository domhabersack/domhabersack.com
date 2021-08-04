import Icon from '@/components/icon'

export default function Banner() {
  return (
    <div className="relative">
      <div className="absolute bg-blue-100 bottom-0 top-0 left-0 w-1/2" />
      <div className="absolute bg-blue-300 bottom-0 top-0 right-0 w-1/2" />

      <div className="bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300 flex flex-wrap font-medium items-center justify-center max-w-5xl mx-auto px-4 py-2.5 relative space-x-1.5 text-gray-800 text-sm sm:px-8">
        <Icon className="flex-shrink-0 h-6 w-6" type="cloud" />

        <span>
          Watch me <a className="underline" href="https://www.youtube.com/watch?v=A-sx3v5i4WE">recreate this cloud icon on stream</a>.
        </span>
      </div>
    </div>
  )
}
