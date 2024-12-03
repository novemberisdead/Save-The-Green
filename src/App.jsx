import React,{useRef} from 'react'
import Header from './Components/Header.jsx';
 import {Hero,EndangeredTrees,Maps,Awareness} from "./Components/index.js"

function App() {
  const heroRef = useRef(null)
  const endangeredRef = useRef(null);
  const mapsRef = useRef(null);
  const awarenessRef = useRef(null);

  

  return (
    <>
    <Header
    heroRef={heroRef}
    endangeredRef={endangeredRef}
    mapsRef={mapsRef}
    awarenessRef={awarenessRef}
    />
   
      <Hero ref={heroRef} endangeredRef={endangeredRef}/>
      <EndangeredTrees ref={endangeredRef}/>
      <Maps ref={mapsRef}/>
      <Awareness ref={awarenessRef}/>
     
    </>
  )
}

export default App
