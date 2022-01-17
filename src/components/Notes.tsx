import * as React from 'react';
import { Note } from '../models/note.model';

interface INotesProps {
  note: Note;
}

const Notes: React.FunctionComponent<INotesProps> = props => {
  return <div>Note Card</div>;
};

export default Notes;
