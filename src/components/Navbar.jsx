import { useState } from 'react'
import { Menu, ShieldCheck, LogIn } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-slate-950/70 backdrop-blur border-b border-slate-800">
      <nav className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 text-white font-semibold">
          <ShieldCheck className="h-5 w-5 text-emerald-400" /> SecureSaaS
        </a>
        <div className="hidden md:flex items-center gap-6 text-slate-300">
          <a href="#features" className="hover:text-white">Features</a>
          <a href="#docs" className="hover:text-white">Docs</a>
          <a href="#signup" className="hover:text-white">Get started</a>
          <a href="#signup" className="rounded-lg bg-emerald-500 px-4 py-2 font-semibold text-slate-950 hover:bg-emerald-400 flex items-center gap-2"><LogIn className="h-4 w-4"/> Sign in</a>
        </div>
        <button className="md:hidden text-white" onClick={()=>setOpen(!open)}>
          <Menu className="h-6 w-6" />
        </button>
      </nav>
      {open && (
        <div className="md:hidden border-t border-slate-800 bg-slate-950">
          <div className="px-6 py-3 space-y-2 text-slate-300">
            <a href="#features" className="block">Features</a>
            <a href="#docs" className="block">Docs</a>
            <a href="#signup" className="block">Get started</a>
          </div>
        </div>
      )}
    </header>
  )
}
