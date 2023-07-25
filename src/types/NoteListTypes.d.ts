import {Tag} from './NoteTypes'
export type SimplifiedNote = {

  title: string
  id: string 
  tags: Tag[]
}
export type NoteListProps = {
  availableTags: Tag[]
  notes: SimplifiedNote[]
  onDeleteTag: (id: string) => void
  onUpdateTag: (id:string, label: string) => void

}
export type EditTagsModalProps ={
  show: boolean
  availableTags: Tag[]
  handleClose: () => void
  onDeleteTag: (id: string) => void
  onUpdateTag: (id: string, label: string) => void
}

