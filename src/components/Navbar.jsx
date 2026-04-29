import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { navItems, site } from '../data/site'

const navLinkClass = ({ isActive }) =>
  `relative transition-all duration-500 ${isActive ? 'text-white' : 'text-white/60 hover:text-white'}`

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8 lg:px-12">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/12 bg-white/8 shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_20px_60px_rgba(6,10,24,0.45)]">
            <span className="text-sm font-semibold tracking-[0.3em] text-white">S</span>
          </div>
          <div>
            <div className="text-sm font-semibold tracking-[0.2em] text-white">{site.brand.toUpperCase()}</div>
            <div className="text-xs text-white/45">{site.tagline}</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 text-sm lg:flex">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={navLinkClass}>
              {({ isActive }) => (
                <span className="group inline-flex flex-col gap-1">
                  <span>{item.label}</span>
                  <span className={`h-px origin-left bg-white/70 transition-transform duration-500 ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
                </span>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link to="/contact" className="btn-primary">
            Request a Project
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/6 text-white lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-slate-950/95 px-6 py-5 lg:hidden">
          <div className="flex flex-col gap-4 text-sm">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} className={navLinkClass} onClick={() => setOpen(false)}>
                {item.label}
              </NavLink>
            ))}
            <Link to="/contact" className="btn-primary mt-2 text-center" onClick={() => setOpen(false)}>
              Request a Project
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
