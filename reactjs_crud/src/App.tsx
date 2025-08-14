import React from 'react'
import CrudApp from './components/CrudApp'

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-slate-100 text-slate-900">
      <header className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-semibold">ReactJS CRUD — clean patterns demo</h1>
        <p className="text-sm text-slate-600 mt-2">A small demonstration of CRUD with modern UI and clean architecture.</p>
      </header>
      <main className="max-w-4xl mx-auto p-6">
        <CrudApp />
      </main>
    </div>
  )
}
