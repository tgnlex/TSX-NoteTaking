import React from 'react';
import { Container }  from 'react-bootstrap'
import { Routes, Route, Navigate } from "react-router-dom";
import NoteForm from './components/NoteForm'
import NewNote from './components/NewNote'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
  

  return (
    <Container className="my-4">
       <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/new" element={<h1>New</h1>} />
        <Route path="/:id" element={<h1>Show</h1>} />
        <Route path="/edit" element={<NoteForm />} />
        <Route path="/" element={<Navigate to="/" />}/>
      </Routes>
    </Container>
  )
}

export default App
