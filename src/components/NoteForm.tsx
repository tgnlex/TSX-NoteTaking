import React, {useRef, useState} from 'react'
import {Col, Button, Label, Form, Row, Stack} from 'react-bootstrap'
import CreatableReactSelect  from 'react-select/creatable'
import NoteFormTypes from '../types/NoteFormTypes'
import {Tag} from '../types/NoteTypes'


function NoteForm() {
  const titleRef = useRef<HTMLInputElement>(null)
  const markdownRef = useRef<HTMLTextAreaElement>(null) 
  const [selectedTags, setSelectedTags] = useState<Tag[]>([])
  function handleSubmit(e: FormEvent) {
    e.preventDefault()

    onSubmit({
      title: titleRef.current!.value,
      markdown: markdownRef.current!.value,
      tags: []
    })
  }

  return ( 
    <>
    <Form>
      <Stack gap={4}>
        <Row>
          <Col>
            <Form.Group controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control ref={titleRef} required />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="tags">
              <Form.Label>Tags</Form.Label>
              <CreatableReactSelect 
                value={selectedTags.map(tag => {
                return { label: tag.label, value: tag.id}
              })}
                onChange={tags => {
                  setSelectedTags(tags.map(tag => {
                    return { label: tag.label, id: tag.value}
                  }))
                }}
                isMulti
              />
            </Form.Group>
          </Col>
        </Row>
          <Form.Group controlId="markdown">
            <Form.Label>Body</Form.Label>
            <Form.Control ref={markdownRef} required as="textarea" rows={15} />
          </Form.Group>
          <Stack direction="horizontal" gap={2} className="justify-content-end">
            <Button type="submit" variant="primary">Save</Button>
            <Button type="button" variant="outline-secondary">Cancel</Button>
          </Stack>
      </Stack>
    </Form>
    </>
  )
}
export default NoteForm;