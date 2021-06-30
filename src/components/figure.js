import Image from 'next/image'

export default function Figure({
  alt,
  caption,
  height = '810',
  src,
  width = '1440',
  ...props
}) {
  return (
    <figure {...props}>
      <Image
        alt={alt}
        height={height}
        layout="responsive"
        src={src}
        width={width}
      />

      {caption != null ? (
        <figcaption className="italic mt-1.5 text-center text-gray-500 text-xs dark:text-gray-400">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  )
}
