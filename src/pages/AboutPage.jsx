import Section from '../components/Section'
import Reveal from '../components/Reveal'
import { GlassCard, PrimaryButton } from '../components/Ui'
import { imagery } from '../data/site'

export default function AboutPage() {
  return (
    <>
      <Section className="pt-16 sm:pt-20 lg:pt-28">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <div>
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.38em] text-white/45">About Showkasa</p>
              <h1 className="text-5xl font-semibold tracking-[-0.06em] text-white sm:text-6xl">A modern way to showcase physical spaces</h1>
              <p className="mt-7 max-w-3xl text-lg leading-8 text-white/68 sm:text-xl">
                Showkasa was built for businesses that need stronger visual presentation without the cost and complexity of traditional production. We use creative direction and AI-powered workflows to turn static images into cinematic digital content that feels polished, modern, and built for today’s platforms.
              </p>
              <div className="mt-8">
                <PrimaryButton to="/contact">Request a Project</PrimaryButton>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <GlassCard className="overflow-hidden p-3">
              <img src={imagery.business} alt="Modern branded interior" className="h-[30rem] w-full rounded-[1.5rem] object-cover" />
            </GlassCard>
          </Reveal>
        </div>
      </Section>

      <Section eyebrow="Why we exist" title="Why we exist">
        <Reveal>
          <GlassCard className="shine-card p-8 sm:p-10">
            <p className="text-base leading-8 text-white/68 sm:text-lg">
              Most businesses already have photos. What they often do not have is the motion, pacing, and visual energy needed to make those images work harder online.
            </p>
            <p className="mt-6 text-base leading-8 text-white/68 sm:text-lg">Showkasa exists to bridge that gap.</p>
            <p className="mt-6 text-base leading-8 text-white/68 sm:text-lg">
              We help properties, hospitality brands, and local businesses turn existing imagery into content that feels more alive, more premium, and more effective across websites, listings, and social media.
            </p>
          </GlassCard>
        </Reveal>
      </Section>

      <Section eyebrow="Our approach" title="Our approach">
        <Reveal>
          <GlassCard className="shine-card p-8 sm:p-10">
            <p className="text-base leading-8 text-white/68 sm:text-lg">
              We combine visual storytelling, brand sensitivity, and emerging creative tools to produce content that feels elevated rather than automated.
            </p>
            <p className="mt-6 text-base leading-8 text-white/68 sm:text-lg">The goal is not just motion. The goal is presentation.</p>
            <p className="mt-6 text-base leading-8 text-white/68 sm:text-lg">
              That means every video is designed around the feeling your space should create, whether that is luxury, warmth, energy, sophistication, or curiosity.
            </p>
          </GlassCard>
        </Reveal>
      </Section>

      <Section eyebrow="Modern browsing" title="Built for the way people browse now" className="pb-20 lg:pb-28">
        <Reveal>
          <GlassCard className="shine-card p-8 sm:p-10">
            <p className="text-base leading-8 text-white/68 sm:text-lg">
              Attention is fast. First impressions happen instantly. Static photo galleries are no longer enough in many categories. Showkasa helps businesses adapt by creating visual content that feels natural for modern websites, real estate platforms, and social media environments where motion performs better than stills alone.
            </p>
          </GlassCard>
        </Reveal>
      </Section>
    </>
  )
}
