import React, { useState } from 'react';
// Routing
// @ts-ignore
// Components
import Header from './components/Header';
// import NotFound from './components/NotFound';
import { Note } from './models/note.model';
import NotesList from './components/NotesList';
import { Container, Row, Col } from 'react-bootstrap';
import CreateNotes from './components/CreateNotes';

const App: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>([
    {
      id: new Date().toString(),
      title: 'Applications',
      text: 'Schedule Application Deployment.',
      color: '#dfdfdf',
      date: new Date().toString(),
    },
  ]);

  return (
    <>
      <Header />
      <Container className='mt-5'>
        <Row>
          <Col>
            <NotesList notes={ notes} setNotes={ setNotes }/>
            <CreateNotes/>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default App;
