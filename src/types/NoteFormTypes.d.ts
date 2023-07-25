import {NoteData, Tag} from './NoteTypes'
type NoteFormProps = {
  onSubmit: (data: NoteData) => void
  onAddTag: (tag: Tag) => void
  availableTags: Tag[]
}


export default NoteFormProps;