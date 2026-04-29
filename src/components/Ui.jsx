import { ArrowRight, Check, Play } from 'lucide-react'
import { Link } from 'react-router-dom'

export function PrimaryButton({ to = '/contact', children, className = '' }) {
  return (
    <Link to={to} className={`btn-primary inline-flex items-center gap-2 ${className}`}>
      <span>{children}</span>
      <ArrowRight size={16} className="btn-icon" />
    </Link>
  )
}

export function SecondaryButton({ to = '/', children, className = '' }) {
  return (
    <Link to={to} className={`btn-secondary inline-flex items-center gap-2 ${className}`}>
      <Play size={14} className="btn-icon" />
      <span>{children}</span>
    </Link>
  )
}

export function GlassCard({ children, className = '' }) {
  return <div className={`glass-card ${className}`}>{children}</div>
}

export function Bullet({ children }) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/10 text-white/85">
        <Check size={12} />
      </span>
      <span className="text-sm leading-7 text-white/68 sm:text-base">{children}</span>
    </div>
  )
}
