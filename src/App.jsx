import { useState } from 'react'

import './App.css'


function App() {
  const[usermove,setusermove]=useState("")
  const[computermove,setcomputermove]=useState("")
  const[yourscore,setyourscore]=useState(0)
  const [result, setResult] = useState("")      
  const [streak, setStreak] = useState(0)  
  const[computerscore,setComputerscore]=useState(0)
  const[moves,setmoves]=useState([])
  const [rounds, setRounds] = useState(0)       
     
  let handleButton =(_usermove)=>{
    return ()=>{
      let _computermove=""
      let _computerscore= computerscore
      let _yourscore=yourscore
      let _result=""
      let num= Math.random()
      console.log(num)
      if (num<0.34){
        _computermove="ROCK"
      }else if (num<0.67){
        _computermove="PAPER"
      }else{
        _computermove="SCISSOR"
      }
      if (_usermove===_computermove){
        _result="Draw"
          console.log("Draw")
          setStreak(0)
      }else if (
        (_computermove==="PAPER" && _usermove==="SCISSOR")||
        (_computermove==="SCISSOR" && _usermove==="ROCK")||
        (_computermove==="ROCK" && _usermove==="PAPER")
      ){
        _result = "You Win.Less go "
        _yourscore++
        setStreak(prev => prev + 1)
      }else{
        _computerscore++
         _result = "Computer Wins.better luck next time"
         setStreak(0)
      }

      console.log(_computermove)
      console.log(_usermove)
      setmoves((prev)=>[[_usermove,_computermove],...prev])
      setComputerscore(_computerscore)
      setyourscore(_yourscore)
      setusermove(_usermove)
      setResult(_result)
      setRounds(rounds+1)
      setcomputermove(_computermove)
    }
  }
    const reset = () => {
    setyourscore(0)
    setComputerscore(0)
    setusermove("")
    setcomputermove("")
   
    setRounds(0)
    setResult("")

    setStreak(0)
     setmoves([])
  }

  return (
    <div>
      <h1 style={{textAlign:"center"}}>Rock Paper Scissor</h1>
      
      <p style={{textAlign:"center",fontSize:"20px"}}>{usermove}  :  {computermove}</p>

      <p style={{textAlign:"center",fontSize:"20px"}} >Computer score : {computerscore}</p>
      <p style={{textAlign:"center",fontSize:"20px"}} >User score : {yourscore}</p>
      <h2 style={{ textAlign: "center" }}>{result}</h2>
      <div style={{display:"flex", justifyContent:"center"}}>
              <button onClick={handleButton("ROCK")}>ROCK </button>
              <button onClick={handleButton("PAPER")}>PAPER </button>
              <button onClick={handleButton("SCISSOR")}>SCISSOR </button>
      </div>
      <p style={{ textAlign: "center" }}>Rounds : {rounds}</p>
      <p style={{ textAlign: "center" }}> Streak : {streak}</p>
      
      <div style={{ textAlign: "center", marginTop: "10px" }}>
        <button onClick={reset}>Reset Game</button>
      </div>
      <h2 style={{textAlign:"center"}}>Moves</h2>
      <div style={{textAlign:"center"}}>
        <ol style={{fontSize:"20px"}}>
          {moves.map((x)=><li>Your move: {x[0]} | Computer: {x[1]}  </li>)}
        </ol>
      </div>
      
    </div> 
  )
}
export default App