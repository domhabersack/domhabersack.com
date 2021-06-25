import Icon from '@/components/icon'

export default function Lessons({
  currentLessonId = -Infinity,
  lessons,
}) {
  return (
    <div className="space-y-20">
      {lessons.map((lesson, i) => (
        <div className="relative" key={lesson.slug}>
          <div className="flex space-x-2.5">
            {lesson.id === currentLessonId ? (
              <div className="bg-blue-500 flex flex-shrink-0 h-8 items-center justify-center rounded-full text-white w-8">
                <Icon className="h-4 w-4" type="arrow-right" />
              </div>
            ) : (
              <div className="bg-gray-200 flex flex-shrink-0 font-bold h-8 items-center justify-center rounded-full text-gray-400 text-xs w-8 dark:bg-gray-600 dark:text-gray-300">
                {lesson.id}
              </div>
            )}

            <div className="space-y-2">
              <h3 className="font-medium text-gray-900 text-lg dark:text-gray-50">
                {lesson.id === currentLessonId ? lesson.title : (
                  <a href={lesson.permalink}>
                    {lesson.title}
                  </a>
                )}
              </h3>

              <p className="text-base text-gray-500 dark:text-gray-400">
                {lesson.excerpt}
              </p>

              <a className="inline-block font-medium text-blue-600 dark:text-blue-500" href={lesson.permalink}>
                Read full lesson
              </a>
            </div>
          </div>

          {(i < lessons.length - 1) && (
            <div className="absolute bg-gray-200 -bottom-16 left-4 -m-px rounded-full top-12 w-0.5 dark:bg-gray-700" />
          )}
        </div>
      ))}
    </div>
  )
}
