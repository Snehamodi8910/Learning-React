import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
  function App() {
    const [count, setCount] = useState(0)
  let myobj = {
    username : "hitesh",
    age: 21
  }

  let myarr = [1 , 2, 3, 4]


  return (
    <>
     <h1 className='bg-green-300 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
      <Card username = "Sneha" someobj = {myarr} btntext = "Visit me"/>
      <Card username = "Priya" />

    </>
  )
}

export default App
