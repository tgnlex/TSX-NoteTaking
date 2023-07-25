import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import {useMemo} from 'react';
import { Container }  from 'react-bootstrap';
import { Routes, Route, Navigate } from "react-router-dom";
import NewNote from './components/NewNote';
import useLocalStorage from './api/useLocalStorage';
import {Tag, NoteData, RawNote} from './types/NoteTypes';
import {v4 as uuidV4} from 'uuid';


function App() {
  const [notes, setNotes] = useLocalStorage<RawNote[]>("NOTES", [])
  const [tags, setTags] = useLocalStorage<Tag[]>("TAGS", [])
  
  const notesWithTags = useMemo(() => {
    return notes.map(note => {
      return { ...note, tags: tags.filter(tag => 
        note.tagIds.includes(tag.id))}
      })    
  }, [notes, tags])

  function onCreateNote ({tags, ...data}: NoteData) {
    setNotes(prevNotes => {
      return [
        ...prevNotes, 
        {...data, id: uuidV4(), tagIds: tags.map(tag => tag.id) }, 
      ]
    })
  }

  function addTag(tag: Tag) {
    setTags(prev => [...prev, tag])
  }
  return (
    <Container className="my-4">
       <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/new" element={<NewNote onSubmit={onCreateNote} onAddTag={addTag}  availableTags={tags} /> }/>
        <Route path="/:id" element={<h1>Show</h1>} />
        <Route path="/edit" element={<h1>Edit</h1>} />
        <Route path="/" element={<Navigate to="/" />}/>
      </Routes>
    </Container>
  )
}

export default App
