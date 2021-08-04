import { getAllFiles, getFileBySlug } from '@/lib/api-helpers'

const transform = () => ({})

export async function getAllServices() {
  return await getAllFiles('services', transform)
}

export async function getServiceBySlug(slug) {
  return await getFileBySlug('services', slug, transform)
}
