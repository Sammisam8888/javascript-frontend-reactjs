import { useState } from 'react'


function App() {
  const [color, setColor] = useState('black')

  return (
    <>
      <div className="w-screen h-screen duration-200" style ={{backgroundColor: color}}>
        <div className="fixed flex justify-center  bottom-12 inset-x-5 px-1 items-center ">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-0 py-3 rounded-xl">
            
            <button onClick={() => setColor('black')} className="outline-none px-7 py-1 shadow-lg rounded-full text-white font-bold" style={{backgroundColor: 'black'}}>Black</button>

            <button onClick={() => setColor('red')} className="outline-none px-7 py-1 shadow-lg rounded-full font-bold text-white" style={{backgroundColor: 'red'}}>Red</button> 
            
            <button onClick={() => setColor('green')} className="outline-none px-7 py-1 shadow-lg font-bold  rounded-full text-white" style={{backgroundColor: 'green'}}>Green</button>
            
            <button 
            onClick={() => setColor('blue')} 
            className="outline-none px-7 py-1 shadow-lg rounded-full text-white font-bold" 
            style={{backgroundColor: 'blue'}}>
              Blue</button> 
            
            <button onClick={() => setColor('yellow')} className="outline-none px-7 py-1 shadow-lg rounded-full text-black font-bold" style={{backgroundColor: 'yellow'}}>Yellow</button>
            
            <button onClick={() => setColor('cyan')} className="outline-none px-7 py-1 shadow-lg rounded-full text-black font-bold" style={{backgroundColor: 'cyan'}}>Cyan</button>

            </div>
            </div>
        </div>
    </>
  )
}

export default App
