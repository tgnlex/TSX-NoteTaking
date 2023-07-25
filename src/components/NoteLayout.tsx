import { Navigate, Outlet, useOutletContext, useParams } from "react-router-dom"
import NoteLayoutProps from "../types/NoteLayoutTypes"
import { Note } from "../types/NoteTypes"


export function NoteLayout({ notes }: NoteLayoutProps) {
    const {id} = useParams() 
    const note = notes.find(n => n.id === id)
    
    if (note == null) return <Navigate to="/" replace />
    
    return <Outlet context={note} />
}

export default function useNote():Note {
  return (
    useOutletContext<Note>()
  )
}
