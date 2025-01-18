import { useState,useCallback, useEffect, useRef } from 'react'


function App() {
  const [length, setlength] = useState(8)
  const[numberAllowed,setnumberAllowed] = useState(false)
  const[charAllowed,setcharAllowed] = useState(false)
  const[Password,setPassword] = useState('')


  const passwordRef = useRef(null)

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0,3); //here we can assign range based selection of the text
    window.navigator.clipboard.writeText(Password)
  },[Password])

  const passwordGenerator = useCallback(() => {
    let pass=''
    let str='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    if(numberAllowed){
      str+='0123456789'
    }
    if(charAllowed){
      str+='!$%#&*_'
    }
    for (let i=1;i<=length;i++){
      let char = Math.floor(Math.random()*str.length+1)
      pass+=str.charAt(char)
    }
    setPassword(pass)

  }, [length,numberAllowed,charAllowed,setPassword])
  
  useEffect(() => {
    passwordGenerator()
  }, 
  [length,numberAllowed,charAllowed,passwordGenerator])
  return (
    <>
    <h1 className='text-2xl font-bold w-screen text-center text-white' style={{backgroundColor:'green'}}>Password Generator</h1>
     <div className='w-full flex-wrap max-w-fit mx-auto shadow-lg rounded-lg my-10 bg-gray-300 px-5 py-5 m-10'> 
      
      <div className='flex shadow-sm rounded-lg overflow-hidden mb-4 bg-blue'>
      <input 
      type="text"
      value={Password}
      className='outline-none w-full font-bold py-1 px-3 rounded-lg my-1'
      placeholder='password'
      ref={passwordRef}
      readOnly /> 
      <button 
      onClick={copyPasswordToClipboard}
      className='outline-none font-bold rounded-lg  hover:bg-green-800 
       active:bg-green-900 active:ring-black
       active:ring-2 
       active:ring-offset-1 bg-green-700 text-white px-3 py-0.5 m-3 shrink-0'
      > Copy </button>
      </div>

      <div className='flex flex-wrap text-sm gap-2'>
        <div className='flex items-center gap-1'>
          <input 
          type='range'
          min={6}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(event) => {
            setlength(event.target.value)
          }}
          />
          <label>Length : {length}</label>
          </div>
        <div className='flex items-center gap-x-1'>
          <input
          type='checkbox'
          defaultChecked={numberAllowed}
          id='numberInput'
          onChange={() => {
            setnumberAllowed((prev)=> !prev)
          }}
          />
          <label htmlFor='numberInput'>Include Numbers</label>
          
        </div>
        <div className='flex items-center gap-x-1'>
          <input
          type='checkbox'
          defaultChecked={charAllowed}
          id='numberInput'
          onChange={() => {
            setcharAllowed((prev)=> !prev)
          }}
          />
          <label htmlFor='numberInput'>Include Characters</label>
          
        </div>
          </div>
      </div>
      <div className='w-full flex-wrap max-w-fit mx-auto shadow-lg rounded-lg my-10 px-5 py-5 m-10'>
      <button
      onClick={passwordGenerator}
      className='bg-green-700 text-white 
         
      py-2 px-4 rounded-lg shadow-lg
       hover:bg-green-800 
      
       active:bg-green-900 active:ring-white
       active:ring-2 
       active:ring-offset-1' 
      >Regenerate Password</button>
      </div>
    </>
  )
}

export default App
