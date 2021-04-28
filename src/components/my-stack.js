import Logo from '@/components/logo'

const STACK = [
  'JavaScript',
  'React.js',
  'Next.js',
  'Gatsby',
  'Tailwind CSS',
  'git',
  'GitHub',
  'Sketch',
  'Figma',
  'Airtable',
  'Contentful',
  'Jest',
  'Netlify',
  'Vercel',
  'DigitalOcean',
  'ConvertKit',
  'Gumroad',
  'Notion'
]

export default function MyStack() {
  return (
    <div className="flex flex-wrap justify-center">
      {STACK.map(tool => (
        <Logo className="h-9 m-2 w-9" key={`tool-${tool}`} name={tool} />
      ))}
    </div>
  )
}
