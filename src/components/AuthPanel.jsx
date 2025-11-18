import { useState } from 'react'

export default function AuthPanel() {
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
  const [mode, setMode] = useState('login')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [token, setToken] = useState('')
  const [me, setMe] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const register = async () => {
    setLoading(true); setError('')
    try {
      const res = await fetch(`${baseUrl}/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, name })
      })
      if (!res.ok) throw new Error((await res.json()).detail || 'Failed to register')
      await login()
    } catch (e) {
      setError(e.message)
    } finally { setLoading(false) }
  }

  const login = async () => {
    setLoading(true); setError('')
    try {
      const body = new URLSearchParams({ username: email, password })
      const res = await fetch(`${baseUrl}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body
      })
      if (!res.ok) throw new Error((await res.json()).detail || 'Invalid credentials')
      const data = await res.json()
      setToken(data.access_token)
      await fetchMe(data.access_token)
    } catch (e) {
      setError(e.message)
    } finally { setLoading(false) }
  }

  const fetchMe = async (tk = token) => {
    setError('')
    try {
      const res = await fetch(`${baseUrl}/auth/me`, {
        headers: { Authorization: `Bearer ${tk}` },
      })
      if (!res.ok) throw new Error('Failed to fetch profile')
      setMe(await res.json())
    } catch (e) { setError(e.message) }
  }

  return (
    <section id="signup" className="bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h3 className="text-3xl font-bold">Try the secure auth</h3>
          <p className="mt-3 text-slate-300">Create an account and get an access token instantly.</p>
          <ul className="mt-6 space-y-2 text-slate-300 list-disc list-inside">
            <li>Unique emails with salted password hashes</li>
            <li>JWT-based sessions with bearer tokens</li>
            <li>Protected endpoints with role-ready structure</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <div className="flex gap-2 mb-6">
            <button onClick={() => setMode('login')} className={`px-4 py-2 rounded-lg border ${mode==='login'?'border-emerald-500 bg-emerald-500/10 text-emerald-300':'border-slate-700 hover:bg-slate-800'}`}>Login</button>
            <button onClick={() => setMode('register')} className={`px-4 py-2 rounded-lg border ${mode==='register'?'border-emerald-500 bg-emerald-500/10 text-emerald-300':'border-slate-700 hover:bg-slate-800'}`}>Register</button>
          </div>

          {mode === 'register' && (
            <div className="mb-3">
              <label className="text-sm text-slate-300">Name</label>
              <input value={name} onChange={(e)=>setName(e.target.value)} className="mt-1 w-full rounded bg-slate-800 border border-slate-700 px-3 py-2" placeholder="Jane Doe" />
            </div>
          )}
          <div className="mb-3">
            <label className="text-sm text-slate-300">Email</label>
            <input value={email} onChange={(e)=>setEmail(e.target.value)} className="mt-1 w-full rounded bg-slate-800 border border-slate-700 px-3 py-2" placeholder="you@example.com" />
          </div>
          <div className="mb-4">
            <label className="text-sm text-slate-300">Password</label>
            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="mt-1 w-full rounded bg-slate-800 border border-slate-700 px-3 py-2" placeholder="••••••••" />
          </div>

          <div className="flex gap-3">
            {mode === 'login' ? (
              <button onClick={login} disabled={loading} className="rounded-lg bg-emerald-500 px-5 py-2 font-semibold text-slate-950 hover:bg-emerald-400 disabled:opacity-60">{loading? 'Signing in...' : 'Sign In'}</button>
            ) : (
              <button onClick={register} disabled={loading} className="rounded-lg bg-emerald-500 px-5 py-2 font-semibold text-slate-950 hover:bg-emerald-400 disabled:opacity-60">{loading? 'Creating...' : 'Create account'}</button>
            )}
            <button onClick={()=>fetchMe()} disabled={!token} className="rounded-lg border border-slate-700 px-5 py-2 hover:bg-slate-800 disabled:opacity-60">Check profile</button>
          </div>

          {error && <p className="mt-4 text-rose-400 text-sm">{error}</p>}
          {token && (
            <div className="mt-4">
              <p className="text-sm text-slate-300">Your access token</p>
              <code className="mt-1 block max-w-full truncate rounded bg-slate-800 p-2 text-emerald-300 text-xs">{token}</code>
            </div>
          )}

          {me && (
            <div className="mt-4 rounded border border-slate-800 bg-slate-900/60 p-3 text-sm">
              <p><span className="text-slate-400">id</span>: {me.id}</p>
              <p><span className="text-slate-400">email</span>: {me.email}</p>
              {me.name && <p><span className="text-slate-400">name</span>: {me.name}</p>}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
