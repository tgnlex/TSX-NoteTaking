import { NoteData, Tag } from  '../types/NoteTypes'

type EditNoteProps = {
    onSubmit: (id: string, data: NoteData) => void
    onAddTag: (tag: Tag) => void
    availableTags: Tag[]
  }
export default EditNoteProps