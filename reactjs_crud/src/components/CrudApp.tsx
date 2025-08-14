import { useState } from 'react'
import { useItems, type Item } from './useItems'
import ItemList from './ItemList'
import ItemForm from './ItemForm'

export default function CrudApp() {
  const { items, createItem, startEdit, editingItem, editingId, updateItem, removeItem, cancelEdit } = useItems()
  const [title, setTitle] = useState('')
  const [notes, setNotes] = useState('')

  // keep form state synced when entering edit mode
  if (editingItem && (title === '' && notes === '')) {
    // populate form when editing starts
    setTitle(editingItem.title)
    setNotes(editingItem.notes || '')
  }

  function handleCreate() {
    createItem({ title, notes })
    setTitle('')
    setNotes('')
  }

  function handleUpdate() {
    if (!editingId) return
    updateItem({ id: editingId, title, notes })
    setTitle('')
    setNotes('')
  }

  return (
    <div className="bg-white shadow-md rounded-xl p-6">
      <section className="grid gap-4 md:grid-cols-3">
        <div className="md:col-span-2">
          <ItemList items={items} onEdit={(it: Item) => { startEdit(it); setTitle(it.title); setNotes(it.notes || '') }} onDelete={removeItem} />
        </div>
        <ItemForm
          title={title}
          notes={notes}
          onChangeTitle={setTitle}
          onChangeNotes={setNotes}
          onSubmitCreate={handleCreate}
          onSubmitUpdate={handleUpdate}
          onCancel={() => { cancelEdit(); setTitle(''); setNotes('') }}
          editing={!!editingId}
        />
      </section>
    </div>
  )
}
