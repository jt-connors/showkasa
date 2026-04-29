import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:80px_80px] opacity-[0.08]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.09),transparent_26%),linear-gradient(180deg,#02040a_0%,#070b15_45%,#03060d_100%)]" />
        <div className="absolute left-1/2 top-[-12rem] h-[38rem] w-[38rem] -translate-x-1/2 rounded-full bg-fuchsia-500/18 blur-[150px]" />
        <div className="absolute bottom-[-8rem] left-[8%] h-[28rem] w-[28rem] rounded-full bg-cyan-500/12 blur-[130px]" />
        <div className="absolute right-[8%] top-[24%] h-[22rem] w-[22rem] rounded-full bg-amber-400/10 blur-[120px]" />
        <div className="noise-overlay absolute inset-0 opacity-[0.16]" />
      </div>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
