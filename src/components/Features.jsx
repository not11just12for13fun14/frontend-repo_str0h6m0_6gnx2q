import { motion } from 'framer-motion'
import { ShieldCheck, Lock, KeyRound, Api, Sparkles } from 'lucide-react'

const features = [
  {
    icon: ShieldCheck,
    title: 'Secure by default',
    desc: 'JWT auth, salted hashes, and strict CORS best practices out of the box.'
  },
  {
    icon: Lock,
    title: 'Role-based access',
    desc: 'Define roles and permissions to keep sensitive actions protected.'
  },
  {
    icon: KeyRound,
    title: 'Passwordless ready',
    desc: 'Plug in email magic-links or OAuth in minutes.'
  },
  {
    icon: Api,
    title: 'Clean REST API',
    desc: 'Simple endpoints with clear responses for every operation.'
  }
]

export default function Features() {
  return (
    <section className="relative bg-slate-950 text-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-center gap-2 text-emerald-400">
          <Sparkles className="h-5 w-5" />
          <p className="uppercase tracking-widest text-xs">Why choose us</p>
        </div>
        <h2 className="mt-4 text-3xl md:text-4xl font-bold">Beautiful, secure, and fast</h2>
        <p className="mt-3 text-slate-300 max-w-2xl">We focus on the details so you can ship your product with confidence.</p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-xl border border-slate-800 bg-slate-900/60 p-5 hover:border-emerald-500/30 transition"
            >
              <f.icon className="h-6 w-6 text-emerald-400" />
              <h3 className="mt-3 font-semibold text-lg">{f.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
