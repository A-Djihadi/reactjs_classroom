import React from 'react'
import type { Item } from './useItems'

type Props = {
  items: Item[]
  onEdit: (item: Item) => void
  onDelete: (id: string) => void
}

export default function ItemList({ items, onEdit, onDelete }: Props) {
  return (
    <div>
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
              <button onClick={() => onEdit(it)} className="px-3 py-1 rounded bg-slate-100 hover:bg-slate-200 text-sm">Edit</button>
              <button onClick={() => onDelete(it.id)} className="px-3 py-1 rounded bg-red-50 text-red-600 hover:bg-red-100 text-sm">Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
