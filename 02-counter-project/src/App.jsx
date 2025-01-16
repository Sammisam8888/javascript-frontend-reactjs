import { useState } from 'react'

import './App.css'

function App() {

 let [counter,setcounter] = useState(0)
  //usestate is a react hook
  //here setcounter is not a default value, it can be any name, but for convinience here we use set counter for counter variable.. in the background this entire thing behaves like 'let counter = 0'

  // let counter=0; //- not required as state is used to set the value of counter - here the problem was the value wasnt being updated on the actual frontend, it was just updated in console log 
  const Increment= () => {
    setcounter(counter+1)
    console.log("value incremented : ", counter)
  }
  const Increase4= () => {
    setcounter(counter = counter+1)
    setcounter(counter = counter+1)
    setcounter(counter = counter+1)
    console.log("value incremented : ", counter)
  }
  const Decrement= () => {
    setcounter(counter-1)
    console.log("value decremented : ", counter)
  }
  const Reset= () => {
    setcounter(0)
    console.log("value reseted : ", counter)
  }

  return (
    <>
      <h1>Counter App</h1>
      <h2>Counter value : {counter}</h2>
      <button onClick={Increment}>Increase value</button>
      <br />
      <button onClick={Decrement}>Decrease value</button>
      <br />
      <button onClick={Reset}>Reset value</button>
      <br />
      <button onClick={Increase4}>Increase value by 4</button>
    </>
  )
}

export default App
