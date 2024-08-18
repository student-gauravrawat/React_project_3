import styled from "styled-components";
import NumberSelector from "./NumberSelector";
import TotalScore from "./TotalScore";
import RoleDice from "./RoleDice";
import { useState } from 'react'
import { Button } from "../styled/Button";
import Rules from "./Rules";

export default function GamePlay(){
    const [selectedNum, setSelectedNum] = useState();
    const [currentDice, setCurrentDice] = useState(1)
    const [score, setScore] = useState(0)
    const [error, setError] = useState("")
    const[showRule, setShowRule] = useState(false)
    
  let generateNumber = (min, max) =>{
    return Math.floor(Math.random()* (max * min) + min )
};

let roleDice = ()=>{
if(!selectedNum){
   return setError("You have not selected any number")
}
const randomNum =  generateNumber(1,6);
setCurrentDice((prev)=> randomNum)

if(selectedNum=== randomNum){
    setScore((prev)=> prev+1)
 }else{
    setScore((prev)=> prev-1)
 }
 setSelectedNum(undefined)
};

 const resetScore= ()=>{
    setScore(0)
 }

    return(
        <>
        <Main>
           <TotalScore score={score}/>
           <NumberSelector selectedNum={selectedNum} setSelectedNum={setSelectedNum} error={error} setError={setError}/>
        </Main>
        <RoleDice currentDice={currentDice} roleDice={roleDice}/>
        <Buttons >
            <Button onClick={resetScore}>Reset Score</Button>
            <Button onClick={()=> setShowRule((prev)=> !prev)}>{showRule ? "Hide": "Show"} Rules</Button>
        </Buttons>
        {showRule && <Rules/>}
        </>
        
    )
}

const Main = styled.div`
 display: flex;
 justify-content: space-between;
 align-items: center;
 
`;

const Buttons= styled.div`
    margin-top: 30px;
    margin-right: 277px;
    gap: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
   
`;

