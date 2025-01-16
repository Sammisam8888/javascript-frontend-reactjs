import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  let myobj={
    username:"samuel",
    age:19
  }

  return (
    <>
      {/* <h1 className='bg-red-400 text-black p-4 rounded-xl'></h1> */}
      <Card username="Sammisam" btnText="Click Me"/>
      <Card username="Trish" btnText = "Follow me"/>

    </>
  )
}

export default App
