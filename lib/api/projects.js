import matter from 'gray-matter'

import getMDXSource from '@/lib/get-mdx-source'
import { getSubDirectories } from '../api-helpers'

export async function getAllProjects() {
  const directories = getSubDirectories('_projects')

  return (await Promise.all(directories.map(async ({
    name,
  }) => {
    const file = readFile(`_projects/${name}/index.mdx`)

    const [, date, slug] = name.match(/^(\d+-\d+-\d+)-(.*)$/)

    const {
      content,
      data,
    } = matter(file)

    const figures = data.figures?.reduce((obj, figure) => {
      const [, figureName] = figure.match(/(.*)\..*$/)

      return ({
        ...obj,
        [figureName]: `/api/projects/${name}/images/${figure}`,
      })
    }, {}) ?? null

    const mdxSource = await getMDXSource(content, {
      figures,
    })

    return {
      ...data,
      date,
      figures,
      hero: `/api/projects/${name}/images/hero.png`,
      mdxSource,
      permalink: `/projects/${slug}`,
      slug,
    }
  }))).sort((a, b) => new Date(b.date) - new Date(a.date))
}

export async function getFeaturedProject() {
  const project = await getProjectBySlug('lovelicons')

  return project
}

export async function getProjectBySlug(slug) {
  const allProjects = await getAllProjects()

  return allProjects.find(project => project.slug === slug)
}
