import Home from "./Components/Home";
import "./App.css"
import { useState } from "react";
import GamePlay from "./Components/GamePlay";


function App() {
  let[isGameStarted, setIsGameStarted] = useState(false)

  const toggelGamePlay = ()=>{
    setIsGameStarted((prev)=>!prev)
  }
  return (
    <>
     {isGameStarted? <GamePlay/> : <Home toggle={toggelGamePlay}/>}
    
    </>
  )
}

export default App
