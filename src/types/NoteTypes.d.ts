type Note = {
  id: string
} & NoteData

type RawNote = {
  id: string;
} & RawNoteData

type RawNoteData = {
  title: string
  markdown: string
  tagIds: string[]
}

export type NoteData = {
  title: string
  markdown: string
  tags: Tag[]
}

export type Tag = {
  id: string
  label: string
}

 const MainTypes = {
    Tag, 
    RawNote
    Note,
    NoteData,
    RawNoteData,
    RawNoteData,
}

export default MainTypes;