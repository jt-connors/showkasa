import { Sparkles, Layers3 } from 'lucide-react'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import Section from '../components/Section'
import Reveal from '../components/Reveal'
import { Bullet, GlassCard, PrimaryButton, SecondaryButton } from '../components/Ui'
import heroVideo from '../assets/propertyvideo.mp4'
import heroVideoPoster from '../assets/propertyvideo-poster.jpg'
import {
  heroStats,
  howItWorks,
  imagery,
  useCases,
  whatWeDoCards,
  whoItsFor,
  whyShowkasa,
  whyShowkasaBodies,
} from '../data/site'

export default function HomePage() {
  const { scrollY } = useScroll()
  const smoothY = useSpring(scrollY, {
    stiffness: 70,
    damping: 24,
    mass: 0.9,
  })
  const heroParallaxY = useTransform(smoothY, [0, 800], [0, -18])
  const heroParallaxScale = useTransform(smoothY, [0, 800], [1.015, 1.04])

  return (
    <>
      <Section className="pt-8 sm:pt-20 lg:pt-28">
        <div className="lg:hidden">
          <div className="relative">
            <div className="pointer-events-none absolute -inset-6 rounded-[2.2rem] bg-gradient-to-br from-white/10 via-fuchsia-400/6 to-transparent blur-3xl" />
            <div className="hero-image-shell relative overflow-hidden rounded-[2rem] border border-white/12 bg-white/[0.045] p-2.5 shadow-[0_35px_100px_rgba(0,0,0,0.52)] backdrop-blur-xl">
              <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#070b14]">
                <video
                  src={heroVideo}
                  poster={heroVideoPoster}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  className="hero-image h-[32rem] w-full object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,16,0.18)_0%,rgba(2,6,16,0.2)_28%,rgba(2,6,16,0.64)_100%)]" />
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.14),transparent_32%)] mix-blend-screen opacity-50" />
                <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
                  <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/12 bg-slate-950/35 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-white/72 backdrop-blur-xl">
                    <Sparkles size={12} className="text-white/72" />
                    Showkasa visual presentation
                  </div>
                  <h1 className="max-w-[11ch] text-[2.3rem] font-semibold leading-[0.96] tracking-[-0.07em] text-white">
                    Bring your space to life with cinematic visuals
                  </h1>
                </div>
              </div>
            </div>
            <div className="mt-6 px-1">
              <p className="max-w-xl text-base leading-7 text-white/70">
                Showkasa transforms photos of properties, restaurants, hotels, and businesses into premium short-form videos designed for websites, listings, and social media.
              </p>
              <div className="mt-6 flex flex-col gap-3">
                <PrimaryButton to="/contact">Get Started</PrimaryButton>
                <SecondaryButton to="/services">See Examples</SecondaryButton>
              </div>
              <p className="mt-5 max-w-xl text-sm leading-7 text-white/50">
                No full production crew. No complicated shoot days. Just elevated visual content built from the images you already have.
              </p>
            </div>
          </div>
        </div>

        <div className="hidden items-center gap-14 lg:grid lg:grid-cols-[1.02fr_0.98fr]">
          <Reveal>
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.055] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.34em] text-white/62 backdrop-blur-xl">
                <Sparkles size={14} className="text-white/72" />
                Luxury visual presentation
              </div>
              <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.07em] text-white sm:text-6xl lg:text-7xl lg:leading-[0.96]">
                Bring your space to life with cinematic AI visuals
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/72 sm:text-xl">
                Showkasa transforms photos of properties, restaurants, hotels, and businesses into premium short-form videos designed for websites, listings, and social media.
              </p>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <PrimaryButton to="/contact">Get Started</PrimaryButton>
                <SecondaryButton to="/services">See Examples</SecondaryButton>
              </div>
              <p className="mt-6 max-w-2xl text-sm leading-7 text-white/54 sm:text-base">
                No full production crew. No complicated shoot days. Just elevated visual content built from the images you already have.
              </p>
              <div className="mt-10 grid gap-3 sm:grid-cols-3">
                {heroStats.map((item, index) => (
                  <Reveal key={item} delay={0.08 * index}>
                    <GlassCard className="shine-card h-full p-4">
                      <p className="text-sm leading-6 text-white/72">{item}</p>
                    </GlassCard>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="relative">
              <div className="pointer-events-none absolute -inset-8 rounded-[2.5rem] bg-gradient-to-br from-white/12 via-fuchsia-400/8 to-transparent blur-3xl" />
              <div className="hero-image-shell relative overflow-hidden rounded-[2.2rem] border border-white/12 bg-white/[0.045] p-3 shadow-[0_35px_100px_rgba(0,0,0,0.52)] backdrop-blur-xl">
                <div className="relative overflow-hidden rounded-[1.6rem] border border-white/10">
                  <motion.video
                    src={heroVideo}
                    poster={heroVideoPoster}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className="hero-image h-[30rem] w-full object-cover sm:h-[38rem]"
                    style={{ y: heroParallaxY, scale: heroParallaxScale }}
                  />
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,16,0.12)_0%,rgba(2,6,16,0.18)_28%,rgba(2,6,16,0.62)_100%)]" />
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.16),transparent_30%)] mix-blend-screen opacity-60" />
                  <div className="pointer-events-none absolute inset-x-6 bottom-6">
                    <p className="text-xs uppercase tracking-[0.34em] text-white/52">Showkasa preview</p>
                    <p className="mt-2 text-lg font-medium tracking-[-0.03em] text-white sm:text-xl">Cinematic AI visuals for spaces worth noticing.</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section
        eyebrow="The problem"
        title="Static photos do not tell the full story"
        body="Most businesses and listings rely on flat images that fail to create emotion, attention, or momentum. In a crowded market, that means missed clicks, lower engagement, and weaker first impressions."
      >
        <Reveal>
          <GlassCard className="grid gap-6 p-8 lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
            <p className="text-base leading-8 text-white/74 sm:text-lg">
              Showkasa turns existing images into polished, cinematic content that helps your space feel more modern, more immersive, and more valuable the moment someone sees it.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <img src={imagery.hospitality} alt="Hospitality interior" className="h-40 w-full rounded-3xl object-cover" />
              <img src={imagery.business} alt="Modern business interior" className="h-40 w-full rounded-3xl object-cover sm:mt-10" />
            </div>
          </GlassCard>
        </Reveal>
      </Section>

      <Section
        eyebrow="What we do"
        title="AI-powered showcase videos for modern brands and spaces"
        body="We create short-form visual content using your photos, creative direction, and advanced AI tools to transform still images into dynamic showcase videos."
      >
        <Reveal>
          <p className="mb-8 max-w-3xl text-base leading-8 text-white/68 sm:text-lg">
            Whether you are promoting a property listing, an Airbnb, a restaurant interior, a boutique hotel, or a local business, Showkasa helps you present your space in a way that feels premium and current.
          </p>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {whatWeDoCards.map((card, index) => (
            <Reveal key={card.title} delay={0.06 * index}>
              <GlassCard className="shine-card group h-full p-6">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/12 bg-white/8 text-sm font-semibold text-white/85">
                  0{index + 1}
                </div>
                <h3 className="text-xl font-medium text-white">{card.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/62">{card.body}</p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Who it’s for"
        title="Built for businesses that depend on presentation"
        body="If your business wins attention through how it looks, feels, and is experienced, Showkasa helps you present it better online."
      >
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {whoItsFor.map((item, index) => (
            <Reveal key={item} delay={0.03 * index}>
              <GlassCard className="shine-card p-5">
                <p className="text-sm leading-7 text-white/72 sm:text-base">{item}</p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section eyebrow="How it works" title="A simple process, designed to move fast">
        <div className="grid gap-6 lg:grid-cols-2">
          {howItWorks.map((item, index) => (
            <Reveal key={item.step} delay={0.08 * index}>
              <GlassCard className="shine-card h-full p-7 sm:p-8">
                <div className="text-xs font-semibold uppercase tracking-[0.34em] text-white/40">Step {item.step}</div>
                <h3 className="mt-4 text-2xl font-medium text-white">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/66 sm:text-base">{item.body}</p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section eyebrow="Why Showkasa" title="Premium visual impact without the traditional production overhead">
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <Reveal>
            <GlassCard className="shine-card p-8 sm:p-10">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/6 px-4 py-2 text-[11px] uppercase tracking-[0.3em] text-white/45">
                <Layers3 size={14} />
                Visual advantage
              </div>
              <div className="space-y-5">
                {whyShowkasa.map((title, index) => (
                  <Bullet key={title}>{`${title} — ${whyShowkasaBodies[index]}`}</Bullet>
                ))}
              </div>
            </GlassCard>
          </Reveal>
          <Reveal delay={0.12}>
            <GlassCard className="overflow-hidden p-3">
              <img src={imagery.property} alt="Premium listing detail" className="h-full min-h-[22rem] w-full rounded-[1.4rem] object-cover" />
            </GlassCard>
          </Reveal>
        </div>
      </Section>

      <Section
        eyebrow="Use cases"
        title="Made for more than one industry"
        body="Showkasa is flexible by design. The same visual transformation that elevates a condo listing can also elevate a restaurant, a hotel, or a retail brand."
      >
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {useCases.map((item, index) => (
            <Reveal key={item.title} delay={0.06 * index}>
              <GlassCard className="shine-card h-full p-6">
                <h3 className="text-xl font-medium text-white">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/62">{item.body}</p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Showcase statement"
        title="Static images show what a space looks like. Showkasa helps people feel it."
        body="The difference between being seen and being remembered often comes down to presentation. Showkasa helps transform ordinary image galleries into visual experiences that create more interest, more curiosity, and more perceived value."
      />

      <Section className="pb-20 lg:pb-28">
        <Reveal>
          <GlassCard className="cta-glow overflow-hidden p-8 sm:p-10 lg:p-12">
            <div className="grid items-center gap-8 lg:grid-cols-[1.2fr_0.8fr]">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.34em] text-white/45">CTA</p>
                <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl lg:text-5xl">
                  Ready to showcase your space at a higher level?
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-white/66 sm:text-lg">
                  Let’s create premium visual content for your listings, website, and social channels using the assets you already have.
                </p>
              </div>
              <div className="flex justify-start lg:justify-end">
                <PrimaryButton to="/contact" className="w-full justify-center sm:w-auto">
                  Request a Project
                </PrimaryButton>
              </div>
            </div>
          </GlassCard>
        </Reveal>
      </Section>
    </>
  )
}
