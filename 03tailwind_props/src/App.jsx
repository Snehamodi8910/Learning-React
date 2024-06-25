import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className='bg-green-300 text-black p-4 rounded-xl'>Tailwind test</h1>
    <figure class="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
    <img class="w-28 h-28 rounded-full mx-auto" src="https://images.pexels.com/photos/7775636/pexels-photo-7775636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" width="1000" height="800"/>
    <div class="pt-6 space-y-4">
    <blockquote>
      <p class="text-lg font-medium">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption class="font-medium">
      <div>
        Sneha Modi
      </div>
      <div>
        Staff Engineer, India
      </div>
    </figcaption>
  </div>
</figure>
    </>
  )
}

export default App
