import {useState} from "react"

function App() {
  const [color , setColor] = useState("olive")

  return (
    <>
      <div className="w-full h-screen duration-200"
      style={{backgroundColor : color}}>
        <div className="fixed flex flex-wrap justify-center bottom-48 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button onClick={()=> setColor("red")}
            className=" outline px-4 py-1 rounded-full text-white " style={{backgroundColor: "red"}}>Red</button>
            <button  onClick={()=> setColor("green")}
            className=" outline px-4 py-1 rounded-full text-white " style={{backgroundColor: "green"}}>Green</button>
            <button  onClick={()=> setColor("yellow")}
            className=" outline px-4 py-1 rounded-full text-black " style={{backgroundColor: "yellow"}}>Yellow</button>
            <button  onClick={()=> setColor("pink")}
            className=" outline px-4 py-1 rounded-full text-black " style={{backgroundColor: "pink"}}>Pink
            </button>
              <button  onClick={()=> setColor("grey")}
              className=" outline px-4 py-1 rounded-full text-white" style={{backgroundColor: "grey"}}>Grey</button>
              <button  onClick={()=> setColor("black")}
              className=" outline px-4 py-1 rounded-full text-white" style={{backgroundColor: "black"}}>Black</button>
                <button  onClick={()=> setColor("lavender")}
              className=" outline px-4 py-1 rounded-full text-black" style={{backgroundColor: "lavender"}}>Lavender</button>
                <button  onClick={()=> setColor("white")}
              className=" outline px-4 py-1 rounded-full text-black" style={{backgroundColor: "white"}}>White</button>
                <button  onClick={()=> setColor("purple")}
              className=" outline px-4 py-1 rounded-full text-white" style={{backgroundColor: "purple"}}>Purple</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
