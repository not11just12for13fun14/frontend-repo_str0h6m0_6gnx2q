import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/DtQLjBkD1UpownGS/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/50 to-slate-950 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-24 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-emerald-300 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-400 mr-2"></span>
            End-to-end secure SaaS platform
          </div>
          <h1 className="mt-6 text-5xl md:text-6xl font-extrabold tracking-tight">
            Build, launch, and scale with security at the core
          </h1>
          <p className="mt-6 text-lg text-slate-300">
            Authentication, roles, audit trails, and a clean developer API — all wrapped in a beautiful, modern experience.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#signup" className="rounded-lg bg-emerald-500 px-5 py-3 font-semibold text-slate-950 hover:bg-emerald-400 transition">Get Started</a>
            <a href="#docs" className="rounded-lg border border-slate-700 px-5 py-3 font-semibold hover:bg-slate-900 transition">Read the Docs</a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
