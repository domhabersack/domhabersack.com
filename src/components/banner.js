import Icon from '@/components/icon'

export default function Banner() {
  return (
    <div className="relative">
      <div className="absolute bg-yellow-400 bottom-0 top-0 left-0 w-1/2" />
      <div className="absolute bg-pink-500 bottom-0 top-0 right-0 w-1/2" />

      <div className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 flex flex-wrap font-medium items-center justify-center max-w-5xl mx-auto px-4 py-2.5 relative space-x-1.5 text-gray-50 text-sm sm:px-8">
        <Icon className="flex-shrink-0 h-6 w-6" type="yieldui-logo" />

        <span>
          Free Tailwind CSS components: <a className="text-white underline visited:text-white" href="https://yieldui.com">yieldui.com</a>
        </span>
      </div>
    </div>
  )
}
