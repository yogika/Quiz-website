import React from 'react';
import Home from './Home';
import ContentAll from './ContentAll';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './Contact';
import Htmlpage from './Htmlpage';
import Quiz from './Quiz';

import Quiz1 from "./Quiz1";



function App() {
  return (
   
  <BrowserRouter>
 
    <Routes>
      <Route exact path="/" element={<Home />} />
     <Route  path="/ContentAll" element={<ContentAll />} />
      <Route  path="/Contact" element={<Contact />} />  
      <Route  path="/Htmlpage" element={<Htmlpage />} />  
       <Route  path="/Quiz" element={<Quiz />} /> 
        <Route  path="/Quiz1" element={<Quiz1 />} /> 
          
    </Routes>

  </BrowserRouter>

 
   
    
  );
}

export default App;