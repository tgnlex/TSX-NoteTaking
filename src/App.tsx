import { useState } from 'react';
import { Container } from 'react-bootstrap'
import { Routes, Route, Navigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Container className="my-4">
    <Routes>
      <Route path="/" element={<h1>Home</h1>} />
      <Route path="/new" element={<h1>New</h1>} />
      <Route path="/:id" element={<h1>Show</h1>} />
      <Route path="edit" element={<h1>Edit</h1>} />
      <Route path="*" element={<Navigate to="/" />}/>
    </Routes>
    </Container>
  )
}

export default App
