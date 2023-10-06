import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
    <div className = "w-full h-screen duration-200"
    style={{backgroundColor: color}}
    >
<div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
<div className='flex flec-wrap justify-center gap-3 shadow-lg bg-white px-3 rounded-3xl'>
<button onClick={ ()=> setColor("red")}

className='outline-none px-4 py-1 rounded-full text-white shadow-lg'  style={{backgroundColor: 'red'}}>Red</button>
<button onClick={ ()=> setColor("green")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg'  style={{backgroundColor: 'green'}}>Green</button>
<button onClick={ ()=> setColor("blue")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg'  style={{backgroundColor: 'blue'}}>Blue</button>
<button onClick={ ()=> setColor("purple")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg'  style={{backgroundColor: 'purple'}}>Purple</button>
<button onClick={ ()=> setColor("pink")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg'  style={{backgroundColor: 'pink'}}>Pink</button>
<button onClick={ ()=> setColor("aquamarine")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg'  style={{backgroundColor: 'aquamarine'}}>Aquamarine</button>
</div>

</div>

    </div>  
      
    </>
  )
}

export default App
