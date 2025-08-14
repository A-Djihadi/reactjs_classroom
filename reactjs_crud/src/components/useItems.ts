export type Item = {
  id: string
  title: string
  notes?: string
}

const STORAGE_KEY = 'reactjs_crud.items'

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

function uid() {
  return Math.random().toString(36).slice(2, 9)
}

import { useEffect, useMemo, useState } from 'react'

export function useItems() {
  const [items, setItems] = useState<Item[]>(() => load())
  const [editingId, setEditingId] = useState<string | null>(null)

  useEffect(() => {
    save(items)
  }, [items])

  function createItem(payload: { title: string; notes?: string }) {
    if (!payload.title.trim()) return
    const item: Item = { id: uid(), title: payload.title.trim(), notes: (payload.notes || '').trim() }
    setItems((s: Item[]) => [item, ...s])
  }

  function startEdit(item: Item) {
    setEditingId(item.id)
  }

  function updateItem(payload: { id: string; title: string; notes?: string }) {
    setItems((s: Item[]) => s.map((it: Item) => (it.id === payload.id ? { ...it, title: payload.title.trim(), notes: (payload.notes || '').trim() } : it)))
    setEditingId(null)
  }

  function removeItem(id: string) {
    setItems((s: Item[]) => s.filter((it: Item) => it.id !== id))
    if (editingId === id) setEditingId(null)
  }

  function cancelEdit() {
    setEditingId(null)
  }

  const editingItem = useMemo(() => items.find((it) => it.id === editingId) || null, [items, editingId])

  return { items, createItem, startEdit, editingItem, editingId, updateItem, removeItem, cancelEdit }
}
