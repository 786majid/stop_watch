
import { useState } from 'react'; //it style is called define useState 


import './App.css';

// const adjustInterval = undefined;
let adjustInterval = undefined;

function App() {
  const [watch, setWatch] = useState(0)                                                                                                
  const [started, setStarted] = useState(false)

  const startWatch = () => {
    adjustInterval = setInterval(() => {
      // setWatch(watch+1)  <-- this style is wrong
      setWatch((x) => x + 1)
    }, 1000)
    setStarted(true)   //it is for show strt button
  }

  const stopWatch = () => {
    clearInterval(adjustInterval);
    setStarted(false)   //it is used for again show start button
  }

  const resetWatch = () => {
    setWatch(0)  // it is for making zero value
    clearInterval(adjustInterval);
    setStarted(false)
  }


  return (
    <div className="well">
      <div>
        <h1 className='some'>Start Stop Watch</h1>
        <h1 className='aaa'>{watch}</h1>
        <button className='awsm' disabled={started} onClick={startWatch}>Start</button>
        <button className='yes' onClick={stopWatch}>Stop</button>
        <button className='no' onClick={resetWatch}>Reset</button>
      </div>
      <h2 className='good'>It is done by Mr Majid Alam</h2>
    </div>
  );
}

export default App;



