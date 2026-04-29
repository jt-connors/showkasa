import { Link } from 'react-router-dom'
import { navItems, site } from '../data/site'

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
        <Link to="/contact" className="text-sm font-medium text-white/80 transition hover:text-white">
          {site.tagline}
        </Link>
      </div>
    </footer>
  )
}
