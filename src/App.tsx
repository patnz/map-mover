import { useState } from 'react'
import './App.css'
import ViewCheck from './components/ViewCheck'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ViewCheck />
    </>
  )
}

export default App
