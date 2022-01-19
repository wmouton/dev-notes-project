import * as React from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

interface ICreateNotesProps {}

const CreateNotes: React.FunctionComponent<ICreateNotesProps> = () => {
  const titleRef = React.useRef<HTMLInputElement | null>(null);
  const textRef = React.useRef<HTMLTextAreaElement | null>(null);
  const colorRef = React.useRef<HTMLInputElement | null>(null);

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>): void => {
    
  }

  return (
    <>
      <h2>Create Notes</h2>
      <Form className='mt-3 mb-3' onSubmit={ (e) =>handleSubmit(e) }>
        <Form.Group className='mb-3' controlId='formBasicTitle'>
          <Form.Label>Title</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter Note Title'
            ref={titleRef}
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicText'>
          <Form.Label>Text</Form.Label>
          <Form.Control
            placeholder='Enter notes'
            as='textarea'
            rows={3}
            ref={textRef}
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Label htmlFor='colorInput'>Notes Color</Form.Label>
          <Form.Control
            type='color'
            id='colorInput'
            defaultValue='#dfdfdf'
            title='Choose your color'
            ref={colorRef}
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicCheckbox'>
          <Form.Check type='checkbox' label='Check me out' />
        </Form.Group>
        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
    </>
  );
};

export default CreateNotes;
