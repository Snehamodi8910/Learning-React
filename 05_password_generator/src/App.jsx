import { useState , useCallback  , useEffect , useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numAllowed , setNumAllowed] = useState(false)
  const [charAllowed , setCharAllowed] = useState(false)
  const [password , setPassword] = useState("")//kuch generate krvaaege

  const passGenerator = useCallback(()=>{
    let pass =""
    let str = "ABCDEFGHIKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numAllowed) str+= "0123456789"
    if (charAllowed) str += "!@#$%^&*()_+{}[]<>?"
    //loop chalaege kitni baar - length
    for(let i = 1 ; i<=length ; i++){
      let char =Math.floor(Math.random()*str.length+1)
      pass += str.charAt(char);
    }
    setPassword(pass);

  } , [length , numAllowed , charAllowed , setPassword])

  const copyPasswordToClipboard = useCallback(()=>{
    passRef.current?.select() //user improvement
    passRef.current?.setSelectionRange(0 , 100);
    window.navigator.clipboard.writeText(password)
  } ,[password])

useEffect(()=>{
  passGenerator()} , [length , numAllowed , charAllowed , passGenerator])

  const passRef = useRef(null)
  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md px-4 rounded-lg py-8 my-8 text-orange-500 bg-gray-500 '>
      <h1 className='text-white text-center mb-2'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input
        type='text'
        value={password}
        className='outline-none w-full py-1 px-3'
        placeholder='Password'
        readOnly
        ref={passRef}
        />
        <button onClick={copyPasswordToClipboard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 '
        >Copy</button>

      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex item-center gap-x-1'>
          <input
          type='range'
          min={6}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e)=>{
            setLength(e.target.value)
          }}
          ></input>
          <label>Length:{length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input
          type='checkbox'
          defaultChecked = {numAllowed}
          id='numberInput'
          onChange={()=>{
            setNumAllowed((prev)=>!prev);
          }}
          >
          </input>
          <label htmlFor='characterInput'>Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input
          type='checkbox'
          defaultChecked = {charAllowed}
          id='characterInput'
          onChange={()=>{
            setCharAllowed((prev)=>!prev);
          }}
          >
          </input>
          <label htmlFor='characterInput'>Characters</label>
        </div>
      </div>
    </div>

  </>
  )
}

export default App
