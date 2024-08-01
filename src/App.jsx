import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Greetings from './Greetings'
import './App.css'

function App() {

  const [isShow, setShow] = useState(true);

  const handleClick = () =>{
    setShow(!isShow);
  }

  const greetings = "Hello world to learning react!!!"

  const info = "It's great learning react!!!"
  return (
    <>
      <button onClick={handleClick}>Next</button>
      <Greetings text={ isShow? greetings:info }/>
    </>
  )
}

export default App
