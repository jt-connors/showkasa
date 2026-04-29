import Section from '../components/Section'
import Reveal from '../components/Reveal'
import { GlassCard, PrimaryButton } from '../components/Ui'
import { pricing } from '../data/site'

export default function PricingPage() {
  return (
    <>
      <Section
        className="pt-16 sm:pt-20 lg:pt-28"
        eyebrow="Pricing"
        title="Flexible packages for different showcase needs"
        body="Whether you need one polished video or an ongoing flow of content, Showkasa offers options designed for brands that care about presentation."
      />

      <Section className="pt-0">
        <div className="grid gap-6 xl:grid-cols-3">
          {pricing.map((tier, index) => (
            <Reveal key={tier.tier} delay={0.08 * index}>
              <GlassCard
                className={`relative h-full p-8 sm:p-10 ${tier.featured ? 'border-white/22 bg-white/10 shadow-[0_30px_80px_rgba(100,90,255,0.18)]' : 'shine-card'}`}
              >
                {tier.featured && (
                  <div className="absolute right-6 top-6 rounded-full border border-white/12 bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-white/70">
                    Recommended
                  </div>
                )}
                <p className="text-xs font-semibold uppercase tracking-[0.34em] text-white/40">{tier.tier}</p>
                <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-white">{tier.tier}</h2>
                <p className="mt-4 text-base leading-8 text-white/64">{tier.subtitle}</p>
                <div className="mt-8 space-y-4">
                  {tier.features.map((feature) => (
                    <div key={feature} className="rounded-2xl border border-white/8 bg-white/5 px-4 py-3 text-sm text-white/72">
                      {feature}
                    </div>
                  ))}
                </div>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="pt-0 pb-20 lg:pb-28">
        <Reveal>
          <GlassCard className="flex flex-col gap-6 p-8 sm:p-10 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-white/45">Pricing note</p>
              <p className="mt-4 max-w-3xl text-base leading-8 text-white/66 sm:text-lg">
                Each project varies depending on image quality, number of assets, desired style, and delivery scope. Contact us for a tailored quote.
              </p>
            </div>
            <PrimaryButton to="/contact">Request Pricing</PrimaryButton>
          </GlassCard>
        </Reveal>
      </Section>
    </>
  )
}
