import React, { useEffect, useState } from 'react'

type Item = {
  id: string
  title: string
  notes?: string
}

const STORAGE_KEY = 'reactjs_crud.items'

function uid() {
  return Math.random().toString(36).slice(2, 9)
}

function load(): Item[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    return JSON.parse(raw) as Item[]
  } catch {
    return []
  }
}

function save(items: Item[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
}

export default function CrudApp() {
  const [items, setItems] = useState<Item[]>(() => load())
  const [title, setTitle] = useState('')
  const [notes, setNotes] = useState('')
  const [editingId, setEditingId] = useState<string | null>(null)

  useEffect(() => {
    save(items)
  }, [items])

  function create() {
    if (!title.trim()) return
    const item: Item = { id: uid(), title: title.trim(), notes: notes.trim() }
    setItems((s) => [item, ...s])
    setTitle('')
    setNotes('')
  }

  function startEdit(i: Item) {
    setEditingId(i.id)
    setTitle(i.title)
    setNotes(i.notes || '')
  }

  function update() {
    if (!editingId) return
    setItems((s) => s.map((it) => (it.id === editingId ? { ...it, title: title.trim(), notes: notes.trim() } : it)))
    setEditingId(null)
    setTitle('')
    setNotes('')
  }

  function remove(id: string) {
    setItems((s) => s.filter((it) => it.id !== id))
  }

  return (
    <div className="bg-white shadow-md rounded-xl p-6">
      <section className="grid gap-4 md:grid-cols-3">
        <div className="md:col-span-2">
          <h2 className="text-xl font-medium">Items</h2>
          <p className="text-sm text-slate-500">Stored locally in localStorage — demonstrates data layer separation.</p>
          <ul className="mt-4 space-y-3">
            {items.length === 0 && <li className="text-slate-500">No items yet — create one.</li>}
            {items.map((it) => (
              <li key={it.id} className="p-3 rounded-lg border border-slate-100 flex justify-between items-start">
                <div>
                  <div className="font-semibold">{it.title}</div>
                  {it.notes && <div className="text-sm text-slate-500 mt-1">{it.notes}</div>}
                </div>
                <div className="flex gap-2">
                  <button onClick={() => startEdit(it)} className="px-3 py-1 rounded bg-slate-100 hover:bg-slate-200 text-sm">Edit</button>
                  <button onClick={() => remove(it.id)} className="px-3 py-1 rounded bg-red-50 text-red-600 hover:bg-red-100 text-sm">Delete</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <aside className="md:col-span-1">
          <h3 className="text-lg font-medium">{editingId ? 'Edit item' : 'Create item'}</h3>
          <div className="mt-3 flex flex-col gap-2">
            <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" className="border rounded px-3 py-2 focus:outline-none focus:ring" />
            <textarea value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="Notes (optional)" className="border rounded px-3 py-2 focus:outline-none focus:ring h-24" />
            <div className="flex gap-2">
              {editingId ? (
                <>
                  <button onClick={update} className="px-4 py-2 rounded bg-primary text-white">Save</button>
                  <button onClick={() => { setEditingId(null); setTitle(''); setNotes('') }} className="px-4 py-2 rounded border">Cancel</button>
                </>
              ) : (
                <button onClick={create} className="px-4 py-2 rounded bg-primary text-white">Create</button>
              )}
            </div>
          </div>
        </aside>
      </section>
    </div>
  )
}
