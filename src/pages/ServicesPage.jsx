import Section from '../components/Section'
import Reveal from '../components/Reveal'
import { GlassCard, PrimaryButton } from '../components/Ui'
import { imagery, services } from '../data/site'

export default function ServicesPage() {
  return (
    <>
      <Section className="pt-16 sm:pt-20 lg:pt-28">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <div>
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.38em] text-white/45">Services</p>
              <h1 className="text-5xl font-semibold tracking-[-0.06em] text-white sm:text-6xl">Premium visual content for spaces, listings, and brands</h1>
              <p className="mt-7 max-w-3xl text-lg leading-8 text-white/68 sm:text-xl">
                We turn your existing images into cinematic short-form videos that help your property or business stand out online.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <GlassCard className="overflow-hidden p-3">
              <img src={imagery.hospitality} alt="Boutique hospitality space" className="h-[30rem] w-full rounded-[1.5rem] object-cover" />
            </GlassCard>
          </Reveal>
        </div>
      </Section>

      <Section>
        <div className="grid gap-6 lg:grid-cols-2">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={0.06 * index}>
              <GlassCard className="shine-card h-full p-8 sm:p-10">
                <div className="text-xs font-semibold uppercase tracking-[0.34em] text-white/40">Service 0{index + 1}</div>
                <h2 className="mt-4 text-2xl font-medium text-white sm:text-3xl">{service.title}</h2>
                <p className="mt-5 text-sm leading-7 text-white/64 sm:text-base">{service.body}</p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section eyebrow="Use cases" title="Made for more than one industry" body="Showkasa is flexible by design. The same visual transformation that elevates a condo listing can also elevate a restaurant, a hotel, or a retail brand.">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {[
            {
              title: 'Real Estate Listings',
              body: 'Make apartments, condos, homes, and developments feel more alive on listing platforms.',
            },
            {
              title: 'Short-Term Rentals',
              body: 'Help Airbnb and vacation rental properties stand out with better visual storytelling.',
            },
            {
              title: 'Restaurants and Hospitality',
              body: 'Turn interiors, ambiance, and design details into promotional content that draws people in.',
            },
            {
              title: 'Retail and Local Business',
              body: 'Upgrade your website and social presence with video content built from your existing imagery.',
            },
            {
              title: 'Launches and Promotions',
              body: 'Use showcase videos for new openings, featured spaces, seasonal promotions, or paid campaigns.',
            },
          ].map((item, index) => (
            <Reveal key={item.title} delay={0.06 * index}>
              <GlassCard className="shine-card h-full p-6">
                <h3 className="text-xl font-medium text-white">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/62">{item.body}</p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="pb-20 lg:pb-28">
        <Reveal>
          <GlassCard className="flex flex-col items-start justify-between gap-6 p-8 sm:flex-row sm:items-center sm:p-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-white/45">Next step</p>
              <p className="mt-3 max-w-2xl text-base leading-8 text-white/66 sm:text-lg">
                Tell us what kind of space you want to showcase, where the content needs to live, and we’ll shape the right visual direction around it.
              </p>
            </div>
            <PrimaryButton to="/contact">Request a Project</PrimaryButton>
          </GlassCard>
        </Reveal>
      </Section>
    </>
  )
}
