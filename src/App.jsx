import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h2>The React App</h2>
      <Card name={"meow"} desc={"lorem"} img={"https://wallpapercave.com/uwp/uwp1618389.jpeg"}/>
    </div>
  )
}

export default App
