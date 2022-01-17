import React from 'react';
// Routing
// @ts-ignore
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Components
import Home from './components/Home';
import NotFound from './components/NotFound';

const App: React.FC = () => (
  <Router>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/*' element={<NotFound />} />
    </Routes>
  </Router>
);

export default App;
