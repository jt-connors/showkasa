import Section from '../components/Section'
import Reveal from '../components/Reveal'
import { GlassCard } from '../components/Ui'

const fields = [
  'Name',
  'Email',
  'Business name',
  'Type of space or business',
  'Where the content will be used',
]

export default function ContactPage() {
  return (
    <>
      <Section className="pt-16 sm:pt-20 lg:pt-28">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div>
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.38em] text-white/45">Contact</p>
              <h1 className="text-5xl font-semibold tracking-[-0.06em] text-white sm:text-6xl">
                Let’s create something your audience actually notices
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/68 sm:text-xl">
                Tell us about your space, your brand, and where you want to use the content. We’ll follow up with the best next step for your project.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <GlassCard className="shine-card p-6 sm:p-8 lg:p-10">
              <form className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  {fields.map((field) => (
                    <label key={field} className={`block ${field === 'Where the content will be used' ? 'sm:col-span-2' : ''}`}>
                      <span className="mb-2 block text-sm text-white/62">{field}</span>
                      <input
                        type={field === 'Email' ? 'email' : 'text'}
                        placeholder={field}
                        className="w-full rounded-2xl border border-white/12 bg-white/6 px-4 py-3 text-white outline-none transition placeholder:text-white/25 focus:border-white/30 focus:bg-white/8"
                      />
                    </label>
                  ))}
                </div>

                <label className="block">
                  <span className="mb-2 block text-sm text-white/62">Project details</span>
                  <textarea
                    rows="5"
                    placeholder="Project details"
                    className="w-full rounded-3xl border border-white/12 bg-white/6 px-4 py-4 text-white outline-none transition placeholder:text-white/25 focus:border-white/30 focus:bg-white/8"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm text-white/62">Upload or link to images</span>
                  <input
                    type="text"
                    placeholder="Upload or link to images"
                    className="w-full rounded-2xl border border-dashed border-white/16 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-white/25 focus:border-white/30 focus:bg-white/8"
                  />
                </label>

                <button type="submit" className="btn-primary w-full justify-center sm:w-auto">
                  Request a Project
                </button>
              </form>
            </GlassCard>
          </Reveal>
        </div>
      </Section>
    </>
  )
}
