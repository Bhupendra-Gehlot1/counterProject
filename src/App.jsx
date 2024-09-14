import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const addValue = ()=>{
    if(count<20)
      setCount(count+1);
    else
      alert(`count cannot be >20`)
  }
  const removeValue = ()=>{
    if(count>0)
      setCount(count-1);
    else
      alert(`count cannot be <0`)
  }

  return (
    <>
      <h1>Counter Project</h1>
      <h2>counter value: {count}</h2>
      <button onClick={addValue}>Add value</button>
      <br />
      <br />
      <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
