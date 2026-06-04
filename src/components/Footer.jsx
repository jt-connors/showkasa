import { Link } from 'react-router-dom'
import { navItems, site } from '../data/site'
import showkasaMarkClean from '../assets/showkasa-mark-clean.jpg'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-12 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.4fr_1fr_auto] lg:items-end">
        <div>
          <div className="text-sm font-semibold tracking-[0.25em] text-white">{site.brand.toUpperCase()}</div>
          <p className="mt-4 max-w-xl text-sm leading-7 text-white/60">{site.footerLine}</p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm text-white/60">
          {navItems.map((item) => (
            <Link key={item.to} to={item.to} className="transition hover:text-white">
              {item.label}
            </Link>
          ))}
        </div>
        <Link to="/contact" className="flex flex-col items-center gap-3 text-center text-sm font-medium text-white/80 transition hover:text-white">
          <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-white/12 bg-[#f7f4ee] shadow-[0_12px_40px_rgba(0,0,0,0.28)]">
            <img src={showkasaMarkClean} alt="Showkasa" className="h-[94%] w-[94%] translate-x-[3%] object-contain" />
          </div>
          <span>{site.tagline}</span>
        </Link>
      </div>
    </footer>
  )
}
