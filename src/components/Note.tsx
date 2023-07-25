import { Badge, Col, Row, Stack } from 'react-bootstrap'
import useNote from '../helpers/useNote'
function Note() {
    const note = useNote()
  return (
    <Row className="align-items-center mb-4">
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
        <Stack gap={2} direction={horizontal}>
            <Link to="/new">
                <Button variant="outline-secondary">Edit</Button>
            </Link>
        </Stack>
      </Col>
    </Row>
  )
}

export default Note
