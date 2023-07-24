import NoteForm from './NoteForm';
import NewNoteTypes from '../types/NewNoteTypes'
export default function NewNote({ onSubmit}: NewNoteProps) {
  return ( 
    <>
      <h1>New Note</h1>
      <NoteForm onSubmit={onSubmit} />
    </>
  )
}
