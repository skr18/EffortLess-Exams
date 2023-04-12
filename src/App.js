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
import CircuitTh from './Sem3QA/CircuitTh';
import Analog from './Sem3QA/Analog'
import Signal from './Sem3QA/Signal'

import Eee3rd from './Eee3rd';
import Eie3rd from './Eie3rd';
import Circuit3 from './Sem3QA/Circuit3'
import Electromagnetic from './Sem3QA/Electromagnetic';
import Instrumentation from './Sem3QA/Instrumentation';


import Sem4 from './Sem4';

import Cse4th from './Cse4th';
import Cst4th from './Cst4th';
import Math4cs from './Sem4QA/cs/Math'
import Economics from './Sem4QA/cs/Economics';
import Daa from './Sem4QA/cs/Daa';
import Dbms from './Sem4QA/cs/Dbms';
import Ai from './Sem4QA/cs/Ai';
import Os from './Sem4QA/cs/Os';
import Ajp from './Sem4QA/cs/Ajp';

import Ece4th from './Ece4th';
import Analog4 from './Sem4QA/Ece/Analog';
import Bme4 from './Sem4QA/Ece/Bme';
import Consys from './Sem4QA/Ece/Consys'
import Digsignal from './Sem4QA/Ece/Digsignal'
import Math4ece from './Sem4QA/Ece/Math4'
import Uhvp from './Sem4QA/Ece/Uhvp'
import Py from './Sem4QA/Ece/Py'

import Eee4th from './Eee4th';
import Digcir4 from './Sem4QA/EEE/Digcir4';
import Funda4 from './Sem4QA/EEE/Funda4'
import Mea4 from './Sem4QA/EEE/Mea4'
import Mech4 from './Sem4QA/EEE/Mech4'

import Eie4th from './Eie4th';



import Sem5 from './Sem5';
import Cse5th from './Cse5th';
import Cst5th from './Cst5th';
import Cn from './Sem5QA/Cn'
import Flat from './Sem5QA/Flat'
import Dmdw from './Sem5QA/Dmdw'
import Mc from './Sem5QA/Mc'
import Ml from './Sem5QA/Ml'
import Uhvpe from './Sem5QA/Uhvpe'
import Rs from './Sem5QA/Rs'
import Ece5th from './Ece5th';
import Mm from './Sem5QA/Ece/Mm'
import Bi from './Sem5QA/Ece/Bi'
import Dc from './Sem5QA/Ece/Dc'
import Emw from './Sem5QA/Ece/Emw'
import Fd from './Sem5QA/Ece/Fd'
import Sct from './Sem5QA/Ece/Sct'
import Eee5th from './Eee5th';
import Ce from './Sem5QA/Eee/Ce'
import Eptd from './Sem5QA/Eee/Eptd'
import Idsp from './Sem5QA/Eee/Idsp'
import Pe from './Sem5QA/Eee/Pe'
import Eie5th from './Eie5th';
import Dvd from './Sem5QA/Eie/Dvd'
import Dsp from './Sem5QA/Eie/Dsp'


import Sem6 from './Sem6';
import Cse6th from './Cse6th';
import Cst6th from './Cst6th';
import Cc from './Sem6QA/cs/Cc'
import Cd from './Sem6QA/cs/Cd'
import Nlp from './Sem6QA/cs/Nlp'
import Se from './Sem6QA/cs/Se'
import Me from './Sem6QA/cs/Me'
import Ece6th from './Ece6th';
import Fm from './Sem6QA/Ece/Fm'
import Iot from './Sem6QA/Ece/Iot'
import Eee6th from './Eee6th';
import Eie6th from './Eie6th';

import Tra4 from './Sem4QA/Eie/Tra4';
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
              <Route path="/bme4" element={<Bme4/>} />
              <Route path="/math3" element={<Math3/>}/>
              <Route path="/coa" element={<Coa/>} />
              <Route path="/java" element={<Java/>} />

          <Route path="/ece3rd" element={<Ece3rd/>} />
                <Route path="/circuitThece" element={<CircuitTh/>} />
          
          <Route path="/eee3rd" element={<Eee3rd/>} />
              <Route path="/electromagneticTH" element={<Electromagnetic/>} />
          
          <Route path="/eie3rd" element={<Eie3rd/>} />
              <Route path="/signal" element={<Signal/>} />
              <Route path="/analog" element={<Analog/>} />
              <Route path="/circuit3" element={<CircuitTh/>} />
              <Route path="/math3es" element={<Math3es/>}/>
              <Route path="/instrumentation" element={<Instrumentation/>}/>



      <Route path="/sem4" element={<Sem4/>} />
          <Route path="/cse4th" element={<Cse4th/>} />
          <Route path="/cst4th" element={<Cst4th/>} />
              <Route path="/math4cs" element={<Math4cs/>} />
              <Route path="/eco" element={<Economics/>} />
              <Route path="/daa" element={<Daa/>} />
              <Route path="/dbms" element={<Dbms/>} />
              <Route path="/os" element={<Os/>} />
              <Route path="/ai" element={<Ai/>} />
              <Route path="/ajp" element={<Ajp/>} />
          
          <Route path="/ece4th" element={<Ece4th/>} />
              <Route path="/math4ece" element={<Math4ece/>} />
              <Route path="/uhvp" element={<Uhvp/>} />
              <Route path="/dig4" element={<Digsignal/>} />
              <Route path="/ana4" element={<Analog4/>} />
              <Route path="/bme4" element={<Bme4/>} />
              <Route path="/con4" element={<Consys/>} />
              <Route path='/py' element={<Py />} />
  

          <Route path="/eee4th" element={<Eee4th/>} />
              <Route path="/digcir4" element={<Digcir4/>} />
              <Route path="/fun4" element={<Funda4/>} />
              <Route path="/meas4" element={<Mea4/>} />
              <Route path="/mach4" element={<Mech4/>} />

          <Route path="/eie4th" element={<Eie4th/>} />
            <Route path="/tra4" element={<Tra4/>} />
      
      <Route path="/third" element={<Third/>} />
          <Route path="/sem5" element={<Sem5/>} />
             <Route path="/cse5th" element={<Cse5th/>} />
             <Route path="/cst5th" element={<Cst5th/>} />
                 <Route path='/cn' element={<Cn />} />
                 <Route path='/Dmdw' element={<Dmdw />} />
                 <Route path='/Flat' element={<Flat />} />
                 <Route path='/Mc' element={<Mc />} />
                 <Route path='/Ml' element={<Ml />} />
                 <Route path='/Rs' element={<Rs />} />
                 <Route path='/Uhvpe' element={<Uhvpe />} />
             <Route path="/ece5th" element={<Ece5th/>} />
                 <Route path='/Bi' element={<Bi />} />
                 <Route path='/Dc' element={<Dc />} />
                 <Route path='/Emw' element={<Emw />} />
                 <Route path='/Fd' element={<Fd />} />
                 <Route path='/Mm' element={<Mm />} />
                 <Route path='/Sct' element={<Sct />} />
             <Route path="/eee5th" element={<Eee5th/>} />
                 <Route path='/Ce' element={<Ce />} />
                 <Route path='/Eptd' element={<Eptd />} />
                 <Route path='/Idsp' element={<Idsp />} />
                 <Route path='/Pe' element={<Pe />} />
             <Route path="/eie5th" element={<Eie5th/>} />
                 <Route path='/dvd' element={<Dvd />} />
                 <Route path='/dsp' element={<Dsp />} />

          
          <Route path="/sem6" element={<Sem6/>} />
             <Route path="/cse6th" element={<Cse6th/>} />
             <Route path="/cst6th" element={<Cst6th/>} />
                 <Route path='/cc' element={<Cc />} />
                 <Route path='/cd' element={<Cd />} />
                 <Route path='/Nlp' element={<Nlp />} />
                 <Route path='/se' element={<Se />} />
                 <Route path='/me' element={<Me />} />
             <Route path="/ece6th" element={<Ece6th/>} />
                 <Route path='/fm' element={<Fm />} />
                 <Route path='/iot' element={<Iot />} />
             <Route path="/eee6th" element={<Eee6th/>} />
             <Route path="/eie6th" element={<Eie6th/>} />      
      </Routes>
    </Router>
  );
}

export default App;
