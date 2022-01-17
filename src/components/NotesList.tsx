import React from 'react';
import { Note } from '../models/note.model';

interface INotesListProps {
  notes: Note[];
}

const NotesList: React.FunctionComponent<INotesListProps> = ({ notes }) => {
  return (
    <>
      <h2 className='mt-3'>Notes</h2>
    </>
  );
};

export default NotesList;
