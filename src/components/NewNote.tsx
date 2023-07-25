import NoteForm from './NoteForm';
import NewNoteProps from '../types/NewNoteTypes'


export default function NewNote({ onSubmit, onAddTag, availableTags }: NewNoteProps) {
  return ( 
    <>
      <h1>New Note</h1>
      <NoteForm onSubmit={onSubmit} onAddTag={onAddTag} availableTags={availableTags} />
    </>
  )
}
