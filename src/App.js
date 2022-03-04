import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Canvas from './pages/Canvas';
import Result from './pages/Result';
import SearchHome from './pages/SearchHome';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SearchHome />} />
        <Route path="/search" element={<Result />} />
        <Route path="/canvas" element={<Canvas />} />
      </Routes>
    </div>
  );
}

export default App;
