import { SimplifiedNote } from "../types/NoteListTypes"
import {Card, Badge, Stack} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import  styles from '../assets/css/NoteCard.module.css'
 export function NoteCard({ id, title, tags}: SimplifiedNote) {
  return (
  <Card as={Link} to={`${id}`} className={`h-100 text-reset text-decoration-none ${styles.Card}`}>
    <Card.Body className={styles.Card}>
      <Stack gap={2} className="align-items-center justify-content-center h-100">
          <span className="fs-5">
            {title}
          </span>
         { tags.length > 0 && (
          <Stack 
            gap={1} 
            direction="horizontal"
            className="justify-content-center flex-wrap">
            {tags.map(tag => (
              <Badge className="text-truncates" key={tag.id}>
                {tag.label}
              </Badge>  
            ))}
          </Stack>
        )}
      </Stack>
    </Card.Body>
  </Card>
  )
}