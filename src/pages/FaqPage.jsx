import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import Section from '../components/Section'
import Reveal from '../components/Reveal'
import { GlassCard, PrimaryButton } from '../components/Ui'
import { faqs } from '../data/site'

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <>
      <Section className="pt-16 sm:pt-20 lg:pt-28" eyebrow="FAQ" title="Frequently asked questions" />
      <Section className="pt-0 pb-20 lg:pb-28">
        <div className="space-y-4">
          {faqs.map((item, index) => {
            const open = openIndex === index
            return (
              <Reveal key={item.q} delay={0.04 * index}>
                <GlassCard className="shine-card overflow-hidden p-0">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(open ? -1 : index)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left sm:px-8 sm:py-6"
                  >
                    <span className="text-lg font-medium text-white sm:text-xl">{item.q}</span>
                    <ChevronDown className={`shrink-0 transition-transform ${open ? 'rotate-180' : ''}`} size={18} />
                  </button>
                  {open && <div className="border-t border-white/10 px-6 py-5 text-sm leading-7 text-white/66 sm:px-8 sm:text-base">{item.a}</div>}
                </GlassCard>
              </Reveal>
            )
          })}
        </div>
        <div className="mt-10 flex justify-start">
          <PrimaryButton to="/contact">Request a Project</PrimaryButton>
        </div>
      </Section>
    </>
  )
}
