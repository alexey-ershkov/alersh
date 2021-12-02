import './index.scss';

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HomePage from './pages/home';
import Projects from './pages/projects';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
