import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import LookBook from './components/LookBook/LookBook';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import GradLookBook from './components/LookBook/GradLookBook';
import Engagement from './components/LookBook/Engagement';
import Fashion from './components/LookBook/Fashion';
import AboutMe from './components/AboutMe/AboutMe';

function App() {
  return (
   <Router>
    <div className="App">
      <Navbar />
      <Routes>
      <Route path ="" element = {<LookBook/>} />
      <Route path ="/aboutme" element = {<AboutMe/>} />
        <Route path ="/lookbook" element = {<LookBook/>} />
        <Route path ="/graduation" element = {<GradLookBook/>} />
        <Route path ="/engagement" element = {<Engagement/>} />
        <Route path ="/fashion" element = {<Fashion />} />
      </Routes>
    </div>
   </Router> 
  );
}

export default App;
