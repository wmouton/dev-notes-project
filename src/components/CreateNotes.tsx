import * as React from 'react';
import { Form, Button } from 'react-bootstrap';

interface ICreateNotesProps {}

const CreateNotes: React.FunctionComponent<ICreateNotesProps> = () => {
  return (
    <>
      <h2>Create Notes</h2>
      <Form className='mt-3 mb-3'>
        <Form.Group className='mb-3' controlId='formBasicTitle'>
          <Form.Label>Title</Form.Label>
          <Form.Control type='text' placeholder='Enter Note Title' />
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicText'>
          <Form.Label>Text</Form.Label>
          <Form.Control placeholder='Enter notes' as='textarea' rows={3} />
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control type='password' placeholder='Password' />
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
