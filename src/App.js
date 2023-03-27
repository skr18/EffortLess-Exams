import React  from 'react';
import Home from './Home';
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";

import First from './First';
import Second from './Second';
import Third from './Third';
import About from './About';

import Sem1 from './Sem1';
import Math1 from './Sem1QA/Math1';
import Cp from './Sem1QA/Cp';
import Bee from './Sem1QA/Bee';
import Chy from './Sem1QA/Chy';
import Phy from './Sem1QA/Phy';
import Ci from './Sem1QA/Ci';
import Be from './Sem1QA/Be'
import Envs from './Sem1QA/Envs';

import Sem2 from './Sem2';
import Math2 from './Sem2QA/Math2'
import Dsa from './Sem2QA/Dsa'
import Cte from './Sem2QA/Cte';

import Sem3 from './Sem3';
import Cse3rd from './Cse3rd';
import Cst3rd from './Cst3rd';
import Math3 from './Sem3QA/Math3';
import Coa from './Sem3QA/Coa';
import Java from './Sem3QA/Java';
import Bio from './Sem3QA/Bio'
import De from './Sem3QA/De'
import Bme from './Sem3QA/Bme'


import Ece3rd from './Ece3rd';
import Math3es from './Sem3QA/Math3es'
import Circuit3 from './Sem3QA/Circuit3'
import Analog from './Sem3QA/Analog'
import Signal from './Sem3QA/Signal'

import Eee3rd from './Eee3rd';
import Eie3rd from './Eie3rd';
import Sem4 from './Sem4';
import Cse4th from './Cse4th';
import Cst4th from './Cst4th';
import Ece4th from './Ece4th';
import Eee4th from './Eee4th';
import Eie4th from './Eie4th';



import Sem5 from './Sem5';
import Cse5th from './Cse5th';
import Cst5th from './Cst5th';
import Ece5th from './Ece5th';
import Eee5th from './Eee5th';
import Eie5th from './Eie5th';


import Sem6 from './Sem6';
import Cse6th from './Cse6th';
import Cst6th from './Cst6th';
import Cn from './Sem5QA/Cn'
import Flat from './Sem5QA/Flat'
import Dmdw from './Sem5QA/Dmdw'
import Mc from './Sem5QA/Mc'
import Ml from './Sem5QA/Ml'
import Uhvpe from './Sem5QA/Uhvpe'
import Ece6th from './Ece6th';
import Eee6th from './Eee6th';
import Eie6th from './Eie6th';
function App() {

  return (
    <Router>
      {/* <Home /> */}
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/first" element={<First/>} />
      <Route path='/about' element={<About/>}/>
          <Route path="/sem1" element={<Sem1/>} />
              <Route path="/math1" element={<Math1/>} />
              <Route path="/cp" element={<Cp/>} />
              <Route path="/bee" element={<Bee/>} />
              <Route path="/chy" element={<Chy/>} />
              <Route path="/phy" element={<Phy/>} />
              <Route path="/ci" element={<Ci/>} />
              <Route path="/be" element={<Be/>} />
              <Route path="/envs" element={<Envs/>} />

          <Route path="/sem2" element={<Sem2/>} />
              <Route path="/math2" element={<Math2/>} />
              <Route path="/dsa" element={<Dsa/>} />
              <Route path="/cte" element={<Cte/>} />

      <Route path="/second" element={<Second/>} />

        <Route path="/sem3" element={<Sem3/>} />
          <Route path="/cse3rd" element={<Cse3rd/>} />
          <Route path="/cst3rd" element={<Cst3rd/>} />
              <Route path="/bio" element={<Bio/>} />
              <Route path="/de" element={<De/>} />
              <Route path="/bme" element={<Bme/>} />
              <Route path="/math3" element={<Math3/>}/>
              <Route path="/coa" element={<Coa/>} />
              <Route path="/java" element={<Java/>} />

          <Route path="/ece3rd" element={<Ece3rd/>} />
          <Route path="/eee3rd" element={<Eee3rd/>} />
          <Route path="/eie3rd" element={<Eie3rd/>} />
              <Route path="/signal" element={<Signal/>} />
              <Route path="/analog" element={<Analog/>} />
              <Route path="/circuit3" element={<Circuit3/>} />
              <Route path="/math3es" element={<Math3es/>}/>


      <Route path="/sem4" element={<Sem4/>} />
          <Route path="/cse4th" element={<Cse4th/>} />
          <Route path="/cst4th" element={<Cst4th/>} />
          <Route path="/ece4th" element={<Ece4th/>} />
          <Route path="/eee4th" element={<Eee4th/>} />
          <Route path="/eie4th" element={<Eie4th/>} />
      
      <Route path="/third" element={<Third/>} />
          <Route path="/sem5" element={<Sem5/>} />
             <Route path="/cse5th" element={<Cse5th/>} />
             <Route path="/cst5th" element={<Cst5th/>} />
             <Route path="/ece5th" element={<Ece5th/>} />
             <Route path="/eee5th" element={<Eee5th/>} />
             <Route path="/eie5th" element={<Eie5th/>} />
          
          <Route path="/sem6" element={<Sem6/>} />
             <Route path="/cse6th" element={<Cse6th/>} />
             <Route path="/cst6th" element={<Cst6th/>} />
             <Route path="/ece6th" element={<Ece6th/>} />
             <Route path="/eee6th" element={<Eee6th/>} />
             <Route path="/eie6th" element={<Eie6th/>} />
      </Routes>
    </Router>
  );
}

export default App;
