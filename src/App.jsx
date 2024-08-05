import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Greetings from './Greetings'
import Button from './Button'
import './App.css'

function App() {

  const [isShow, setShow] = useState(true);

  const handleClick = () =>{
    setShow(!isShow);
  }
  
  const [greetings, setGreetings] = useState("Hello world to learning react!!!");
  
  
  const info = "It's great learning react!!!";
  return (
    <>
      <Button handleClick={handleClick} label={"Next"} />
      <Button handleClick={()=>{alert("Popup clicked")}} label={"Popup"} />

      <input type="text" value={greetings} onChange={event => setGreetings(event.target.value)} />
      <Greetings text={ isShow? greetings:info }/>
    </>
  )
}

export default App
