import Airtable from '@/logos/airtable.svg'
import ContentfulDark from '@/logos/contentful--dark.svg'
import ContentfulLight from '@/logos/contentful--light.svg'
import ConvertKit from '@/logos/convertkit.svg'
import DigitalOcean from '@/logos/digitalocean.svg'
import Figma from '@/logos/figma.svg'
import GatsbyDark from '@/logos/gatsby--dark.svg'
import GatsbyLight from '@/logos/gatsby--light.svg'
import GitDark from '@/logos/git--dark.svg'
import GitLight from '@/logos/git--light.svg'
import GitHubDark from '@/logos/github--dark.svg'
import GitHubLight from '@/logos/github--light.svg'
import Gumroad from '@/logos/gumroad.svg'
import JavaScript from '@/logos/javascript.svg'
import Jest from '@/logos/jest.svg'
import Netlify from '@/logos/netlify.svg'
import NextDark from '@/logos/next--dark.svg'
import NextLight from '@/logos/next--light.svg'
import NotionDark from '@/logos/notion--dark.svg'
import NotionLight from '@/logos/notion--light.svg'
import React from '@/logos/react.svg'
import Sketch from '@/logos/sketch.svg'
import Tailwind from '@/logos/tailwind-css.svg'
import VercelDark from '@/logos/vercel--dark.svg'
import VercelLight from '@/logos/vercel--light.svg'

const LOGOS = {
  'Airtable': {
    Regular: Airtable,
  },
  'Contentful': {
    Dark: ContentfulDark,
    Light: ContentfulLight,
  },
  'ConvertKit': {
    Regular: ConvertKit,
  },
  'DigitalOcean': {
    Regular: DigitalOcean,
  },
  'Figma': {
    Regular: Figma,
  },
  'Gatsby': {
    Dark: GatsbyDark,
    Light: GatsbyLight,
  },
  'git': {
    Dark: GitDark,
    Light: GitLight,
  },
  'GitHub': {
    Dark: GitHubDark,
    Light: GitHubLight,
  },
  'Gumroad': {
    Regular: Gumroad,
  },
  'JavaScript': {
    Regular: JavaScript,
  },
  'Jest': {
    Regular: Jest,
  },
  'Netlify': {
    Regular: Netlify,
  },
  'Next.js': {
    Dark: NextDark,
    Light: NextLight,
  },
  'Notion': {
    Dark: NotionDark,
    Light: NotionLight,
  },
  'React.js': {
    Regular: React,
  },
  'Sketch': {
    Regular: Sketch,
  },
  'Tailwind CSS': {
    Regular: Tailwind,
  },
  'Vercel': {
    Dark: VercelDark,
    Light: VercelLight,
  },
}

export default function getLogo(name) {
  return LOGOS[name]
}
