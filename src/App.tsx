import React, { useState } from 'react';
// Routing
// @ts-ignore
// Components
import Header from './components/Header';
// import NotFound from './components/NotFound';

interface Note {
  id:string,
  title:string,
  text:string,
  color:string,
  date:string
}

const App: React.FC = () => {
  const [notes, setNotes] = useState<{
    id:string,
    title:string,
    text:string,
    color:string,
    date:string
  }[]>([{
    id: (new Date()).toString(),
    title: 'Applications',
    text: 'Schedule application launch.',
    color: '#dfdfdf',
    date: (new Date()).toString()
  }]);

  return (
    <div className='App'>
      <Header />
    </div>
  );
};

export default App;
