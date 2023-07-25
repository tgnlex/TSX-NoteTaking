import {Tag, Note} from './NoteTypes'
export type SimplifiedNote = {

  title: string
  id: string 
  tags: Tag[]
}
export type NoteListProps = {
  availableTags: Tag[]
  notes: Note[]
}

