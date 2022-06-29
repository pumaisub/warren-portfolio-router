import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import LookBook from './components/LookBook/LookBook';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import GradLookBook from './components/LookBook/GradLookBook';


function App() {
  return (
   <Router>
    <div className="App">
      <Navbar />
      <Routes>
      <Route path ="" element = {<LookBook/>} />
        <Route path ="/lookbook" element = {<LookBook/>} />
        <Route path ="/graduation" element = {<GradLookBook/>} />
      </Routes>
    </div>
   </Router> 
  );
}

export default App;
