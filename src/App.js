
import React,{useState} from'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from "./Components/navBar";
import Home from "./Components/Home";
import Development from "./Components/Development";
import GameDevelopment from "./Components/GameDevelopment";
import  MartialArts  from './Components/MartialArts';
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

import "./Components/Styles/webDev.css";
import "./Components/Styles/gameDev.scss";
import "./Components/Styles/anim.css";
import "./Components/Styles/Footer.css";
import "./Components/Styles/contact.css";
import "./Components/Styles/navBar.css";
import "./Components/Styles/App.css";

function App(){

  return ( <div className='appContainer' >
   <Router>
      <NavBar />
      <Routes>
        <Route path='/'  element={<Home  />} />
        <Route path='/Development' element={<Development />} />
        <Route path='/GameDevelopment' element={<GameDevelopment />} />
        <Route path='/MartialArts' element={<MartialArts />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>
    </Router>
    <Footer />



  </div>
  );
 }


// export default App;
// import React, { useState, useEffect } from 'react';

// function App() {
//   const [data, setData] = useState('');

//   useEffect(() => {
//     (async function () {
//       const { text } = await( await fetch(`/api/message`)).json();
//       setData(text);
//     })();
//   });

//   return (<div>{data}</div>);
// }

export default App;