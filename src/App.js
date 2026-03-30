// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './components/Home';
import Soundtrack from './components/Soundtrack';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import About from './components/About';
import Splash from './components/Splash';
import './index.css'; 


function App() {
  const [showSplash, setShowSplash] = useState(!sessionStorage.getItem('entered'));

  const handleEnter = () => {
    sessionStorage.setItem('entered', '1');
    setShowSplash(false);
  };

  return (
    <Router>
      {showSplash && <Splash onEnter={handleEnter} />}
      <div className="flex flex-col min-h-screen">
        <NavBar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Gallery />} />
            <Route path="/audio" element={<Home />} />
            <Route path="/soundtrack" element={<Soundtrack />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

