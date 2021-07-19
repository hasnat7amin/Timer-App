import React,{useState} from 'react';
import './App.css';

function App() {
  let [sInterval, SetSInterval] = useState<number>(0)
  let [time, setTime] = useState<number>(0)
  
  let hours: number = Math.floor(sInterval / 3600)
  let minut: number  = Math.floor((sInterval - (hours * 3600))/60)
  let seconds: number = sInterval - (hours * 3600) - (minut * 60)

  useState(()=>{
   
  })
  
  let startTimer = () => {
    let interval: any =  setInterval(()=>{
      SetSInterval((time:number):number=>time + 1)
    },1000)
    setTime(interval)
     
  }
  let stopTimer = () => {
    clearInterval(time)
  }
  let restartTimer = () => {
    SetSInterval(0)
    clearInterval(time)
    SetSInterval(0)
  }
 
  return (
    <div className="App">
      <header className="App-header">
        <h1>Timer App</h1>
        <h1 id="time">
          
          {hours<10?  `0${hours}`: hours}:
          {minut<10?  `0${minut}`: minut}:
          {seconds<10?  `0${seconds}`: seconds}
          
        </h1>
        <div className="buttons">
          <button id="play" onClick={startTimer} >Play</button>
          <button id="stop" onClick={stopTimer} >Stop</button>
          <button id="reset" onClick={restartTimer} >Reset</button>
        </div>
      </header>
    </div>
  );
}

export default App;
