import Icon from '@/components/icon'

export default function Banner() {
  return (
    <div className="relative">
      <div className="absolute bg-yellow-100 bottom-0 top-0 left-0 w-1/2" />
      <div className="absolute bg-yellow-300 bottom-0 top-0 right-0 w-1/2" />

      <div className="bg-gradient-to-r from-yellow-100 via-yellow-200 to-yellow-300 flex flex-wrap font-medium items-center justify-center max-w-5xl mx-auto px-4 py-2.5 relative space-x-1.5 text-gray-800 text-sm sm:px-8">
        <Icon className="flex-shrink-0 h-6 w-6" type="pencil" />

        <span>
          Read my first <a className="underline" href="https://www.smashingmagazine.com/2021/06/creating-multi-author-blog-nextjs/">article on Smashing Magazine</a>.
        </span>
      </div>
    </div>
  )
}
