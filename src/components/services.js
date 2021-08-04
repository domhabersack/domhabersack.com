import Grid from '@/components/grid'
import Service from '@/components/service'

export default function Services({
  services,
}) {
  return (
    <div>
      {services.map(service => (
        <Service key={service.slug} service={service} />
      ))}
    </div>
  )
}
