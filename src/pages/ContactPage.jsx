import { useMemo, useState } from 'react'
import Section from '../components/Section'
import Reveal from '../components/Reveal'
import { GlassCard } from '../components/Ui'

const fields = [
  { label: 'Name', name: 'name', type: 'text' },
  { label: 'Email', name: 'email', type: 'email' },
  { label: 'Business name', name: 'businessName', type: 'text' },
  { label: 'Type of space or business', name: 'spaceType', type: 'text' },
  { label: 'Where the content will be used', name: 'usageContext', type: 'text', fullWidth: true },
]

const initialForm = {
  name: '',
  email: '',
  businessName: '',
  spaceType: '',
  usageContext: '',
  projectDetails: '',
  imageLinks: '',
  company: '',
}

export default function ContactPage() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState({ type: 'idle', message: '' })
  const [submitting, setSubmitting] = useState(false)

  const endpoint = useMemo(() => (import.meta.env.VITE_FORMSPREE_ENDPOINT || '').trim(), [])

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (form.company.trim()) {
      setStatus({ type: 'success', message: 'Thanks, your request has been received.' })
      return
    }

    if (!endpoint) {
      setStatus({
        type: 'error',
        message: 'Form endpoint is not configured yet. Add VITE_FORMSPREE_ENDPOINT before going live.',
      })
      return
    }

    setSubmitting(true)
    setStatus({ type: 'idle', message: '' })

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          business_name: form.businessName,
          type_of_space_or_business: form.spaceType,
          where_content_will_be_used: form.usageContext,
          project_details: form.projectDetails,
          upload_or_link_to_images: form.imageLinks,
          _subject: `Showkasa inquiry from ${form.name || 'Website visitor'}`,
          _replyto: form.email,
          _to: 'contact@showkasa.com',
        }),
      })

      const data = await response.json().catch(() => ({}))
      if (!response.ok) {
        const errorMessage = Array.isArray(data?.errors) && data.errors.length
          ? data.errors.map((item) => item.message).join(' ')
          : 'Something went wrong sending your request. Please try again.'
        throw new Error(errorMessage)
      }

      setForm(initialForm)
      setStatus({
        type: 'success',
        message: 'Thanks, your request is on the way. We’ll follow up soon at contact@showkasa.com.',
      })
    } catch (error) {
      setStatus({
        type: 'error',
        message: error instanceof Error ? error.message : 'Unable to send your request right now.',
      })
    } finally {
      setSubmitting(false)
    }
  }

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
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="hidden">
                  <label htmlFor="company">Company</label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    tabIndex="-1"
                    autoComplete="off"
                    value={form.company}
                    onChange={handleChange}
                  />
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  {fields.map((field) => (
                    <label key={field.name} className={`block ${field.fullWidth ? 'sm:col-span-2' : ''}`}>
                      <span className="mb-2 block text-sm text-white/62">{field.label}</span>
                      <input
                        name={field.name}
                        type={field.type}
                        placeholder={field.label}
                        required={field.name === 'name' || field.name === 'email'}
                        value={form[field.name]}
                        onChange={handleChange}
                        className="w-full rounded-2xl border border-white/12 bg-white/6 px-4 py-3 text-white outline-none transition placeholder:text-white/25 focus:border-white/30 focus:bg-white/8"
                      />
                    </label>
                  ))}
                </div>

                <label className="block">
                  <span className="mb-2 block text-sm text-white/62">Project details</span>
                  <textarea
                    name="projectDetails"
                    rows="5"
                    placeholder="Project details"
                    required
                    value={form.projectDetails}
                    onChange={handleChange}
                    className="w-full rounded-3xl border border-white/12 bg-white/6 px-4 py-4 text-white outline-none transition placeholder:text-white/25 focus:border-white/30 focus:bg-white/8"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm text-white/62">Upload or link to images</span>
                  <input
                    name="imageLinks"
                    type="text"
                    placeholder="Upload or link to images"
                    value={form.imageLinks}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-dashed border-white/16 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-white/25 focus:border-white/30 focus:bg-white/8"
                  />
                </label>

                {status.message ? (
                  <div className={`rounded-2xl border px-4 py-3 text-sm ${status.type === 'success' ? 'border-emerald-400/25 bg-emerald-400/10 text-emerald-100' : 'border-rose-400/25 bg-rose-400/10 text-rose-100'}`}>
                    {status.message}
                  </div>
                ) : null}

                <button type="submit" disabled={submitting} className="btn-primary w-full justify-center disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto">
                  {submitting ? 'Sending…' : 'Request a Project'}
                </button>
              </form>
            </GlassCard>
          </Reveal>
        </div>
      </Section>
    </>
  )
}
