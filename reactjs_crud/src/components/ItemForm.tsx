import React from 'react'
import type { Item } from './useItems'

type Props = {
  title: string
  notes: string
  onChangeTitle: (v: string) => void
  onChangeNotes: (v: string) => void
  onSubmitCreate: () => void
  onSubmitUpdate: () => void
  onCancel?: () => void
  editing?: boolean
}

export default function ItemForm({ title, notes, onChangeTitle, onChangeNotes, onSubmitCreate, onSubmitUpdate, onCancel, editing = false }: Props) {
  return (
    <aside className="md:col-span-1">
      <h3 className="text-lg font-medium">{editing ? 'Edit item' : 'Create item'}</h3>
      <div className="mt-3 flex flex-col gap-2">
        <input value={title} onChange={(e) => onChangeTitle(e.target.value)} placeholder="Title" className="border rounded px-3 py-2 focus:outline-none focus:ring" />
        <textarea value={notes} onChange={(e) => onChangeNotes(e.target.value)} placeholder="Notes (optional)" className="border rounded px-3 py-2 focus:outline-none focus:ring h-24" />
        <div className="flex gap-2">
          {editing ? (
            <>
              <button onClick={onSubmitUpdate} className="px-4 py-2 rounded bg-primary text-white">Save</button>
              <button onClick={onCancel} className="px-4 py-2 rounded border">Cancel</button>
            </>
          ) : (
            <button onClick={onSubmitCreate} className="px-4 py-2 rounded bg-primary text-white">Create</button>
          )}
        </div>
      </div>
    </aside>
  )
}
