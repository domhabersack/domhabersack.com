import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'

import { getTagByTitle } from '@/lib/api/firetip-tags'
import getMDXSource from '@/lib/get-mdx-source'

const FIRETIPS_DIRECTORY_PATH = path.join(process.cwd(), '_firetips')

export async function getAllFiretips() {
  const files = fs.readdirSync(FIRETIPS_DIRECTORY_PATH).filter(filename => !filename.startsWith('.'))

  return (await Promise.all(files.map(async filename => {
    const [, date, slug] = filename.match(/^(\d+-\d+-\d+)-(.*).md$/)

    const file = fs.readFileSync(path.join(FIRETIPS_DIRECTORY_PATH, filename), 'utf-8')

    const {
      content,
      data,
    } = matter(file)

    const mdxSource = await getMDXSource(content)

    const tags = await Promise.all(data.tags?.map(async title => await getTagByTitle(title)))

    return {
      ...data,
      date,
      mdxSource,
      permalink: `/firetips/${slug}`,
      slug,
      tags,
    }
  }))).sort((a, b) => new Date(b.date) - new Date(a.date))
}

export async function getFiretipBySlug(slug) {
  const allFiretips = await getAllFiretips()

  return allFiretips.find(firetip => firetip.slug === slug)
}
