import { Badge, Button, Col, Row, Stack } from 'react-bootstrap'
import {useNote} from './NoteLayout'
import { Link, useNavigate } from 'react-router-dom'
import ReactMarkdown from "react-markdown"
import { NoteProps } from '../types/NoteTypes'
function Note({onDelete}: NoteProps) {
    const note = useNote()
    const navigate = useNavigate()
  return (
    <><Row className="align-items-center mb-4">
          <Col>
              <h1>{note.title}</h1>
              {note.tags.length > 0 && (
                  <Stack
                      gap={1}
                      direction="horizontal"
                      className=" flex-wrap">
                      {note.tags.map(tag => (
                          <Badge className="text-truncates" key={tag.id}>
                              {tag.label}
                          </Badge>
                      ))}
                  </Stack>
              )}
          </Col>
          <Col xs="auto">
              <Stack gap={2} direction="horizontal">
                  <Link to={`/${note.id}/edit`}>
                      <Button variant="outline-secondary">Create</Button>
                  </Link>
                  <Button onClick={() => {
                    onDelete(note.id)
                    navigate("/")
                  }} variant="outline-danger">Delete</Button>
                  <Link to="/">
                      <Button variant="outline-secondary">
                          Cancel
                      </Button>
                  </Link>
              </Stack>
          </Col>
      </Row><ReactMarkdown>{note.markdown}</ReactMarkdown></>
  )
}

export default Note
