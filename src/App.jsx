import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import AuthPanel from './components/AuthPanel'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <main>
        <Hero />
        <div id="features"><Features /></div>
        <AuthPanel />
      </main>
      <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 py-10">
        <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} SecureSaaS. All rights reserved.</p>
          <div className="text-sm">Backend URL: {import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'}</div>
        </div>
      </footer>
    </div>
  )
}

export default App
