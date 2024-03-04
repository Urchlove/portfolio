import React from 'react';
import './App.scss';
import { Routes, Route, useLocation } from 'react-router-dom';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import Home from './container/Home';
import About from './container/Home/About';
import Resume from './container/Home/About/Resume';
import Skills from './container/Home/About/Resume/Skills';
import Portfolio from './container/Home/About/Resume/Skills/Portfolio';
import Contact from './container/Home/About/Resume/Skills/Portfolio/Contact';
import Navbar from './component/navBar';
import marticles from './until/marticles';

function App() {

  const location = useLocation();
  console.log(location);

  const handle= async (main) => {
    await loadFull(main)
  };
  return (
    <div className="App">
      <Particles  id='particles'  options={marticles} />
      <Navbar />
      <div className='appmain'>
      <Routes>
          <Route index path='/' element={<Home/>} />
          <Route  path='/about' element={<About/>}/>
          <Route path='/resume'  element={<Resume/>}/>
          <Route  path='/skills' element={<Skills/>}/>
          <Route  path='/portfolio' element={<Portfolio/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </div>
  
    </div>
  );
}

export default App;
