import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Admin from './Components/Admin';
import Tarefeiro from './Components/Tarefeiro';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Admin" element={<Admin />} />
        <Route path="/Tarefeiro" element={<Tarefeiro />} />
      </Routes>
    </Router>
  );
}

export default App;
