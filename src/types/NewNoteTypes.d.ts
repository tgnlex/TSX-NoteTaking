import {NoteData, Tag} from './NoteTypes';
type NewNoteProps = {
  onSubmit: (data: NoteData) => void
  onAddTag: (tag: Tag) => void
  availableTags: Tag[]
}

export default NewNoteProps;