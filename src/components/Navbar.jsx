import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { navItems } from '../data/site'
import showkasaMarkClean from '../assets/showkasa-mark-clean.jpg'

const navLinkClass = ({ isActive }) =>
  `relative transition-all duration-500 ${isActive ? 'text-white' : 'text-white/60 hover:text-white'}`

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8 lg:px-12">
        <Link
          to="/"
          className="group flex items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <div className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-white/12 bg-[#f7f4ee] shadow-[0_12px_40px_rgba(0,0,0,0.28)] transition-all duration-300 group-hover:border-[#cbb28b]/40 group-hover:shadow-[0_0_0_1px_rgba(203,178,139,0.12),0_0_18px_rgba(203,178,139,0.10),0_12px_40px_rgba(0,0,0,0.28)] sm:h-12 sm:w-12">
            <img src={showkasaMarkClean} alt="Showkasa" className="h-[94%] w-[94%] translate-x-[3%] object-contain" />
          </div>
          <div className="leading-none transition-all duration-300 group-hover:drop-shadow-[0_0_10px_rgba(203,178,139,0.10)]">
            <div className="text-[0.72rem] font-semibold tracking-[0.14em] text-white/96 transition-colors duration-300 group-hover:text-white sm:text-[0.88rem] sm:tracking-[0.18em]">SHOWKASA</div>
            <div className="mt-1 text-[0.58rem] font-medium text-white/40 transition-colors duration-300 group-hover:text-white/50 sm:text-[0.72rem] sm:text-white/42 sm:group-hover:text-white/52">Bring your space to life.</div>
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
