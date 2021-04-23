export default function BreakpointDebug() {
  return (
    <div className="bottom-0 rounded-tl-md bg-pink-500 fixed py-1.5 px-2.5 right-0 text-xs text-white">
      <span className="xs:hidden">
        no breakpoint
      </span>

      <span className="hidden xs:block sm:hidden">
        xs
      </span>

      <span className="hidden sm:block md:hidden">
        sm
      </span>

      <span className="hidden md:block lg:hidden">
        md
      </span>

      <span className="hidden lg:block xl:hidden">
        lg
      </span>

      <span className="hidden xl:block 2xl:hidden">
        xl
      </span>

      <span className="hidden 2xl:block">
        2xl
      </span>
    </div>
  )
}
