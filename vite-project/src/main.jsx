// import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { createRoot } from 'react-dom/client'
import React from 'react'
import App from './App.jsx'
import {jsx as _jsx} from 'react/jsx-runtime'

function App2(){
  return(
    <div>
      <h1>Custom react APP </h1>
    </div>
  )
}

createRoot(document.getElementById('root')).render(
    <App />
)
const company = "google"
const link = "https://"+company+".com"
const ReactElement = React.createElement(
    'a',  //first parameter - tag name
  {
  href : link, target : '_blank', //2nd properties of the tag given above
  },
  'Click to Visit ', //3rd parameter - children - here it defines the text to be displayed on the anchor tag
  company 
)

const anotherElement = (
      <a href='https://google.com'
      target='_blank'>Click to Visit google </a>
    )


ReactDOM.createRoot(document.getElementById('root')).render(
  // App2(),  //will also call the function - javascript syntax for execution
  //<App2 /> //is another way to call the function for rendering in javascript

  
  // anotherElement here the function is call
  ReactElement
  
)

