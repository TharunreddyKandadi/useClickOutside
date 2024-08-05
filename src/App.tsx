import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [btnSubmit, setBtnSubmit] = useState(false)
  const ref=useRef<any>(null)
const [options,setOptions]=useState(["tata","kia","mg","honda"]);

useEffect(() => {
  const click = ({ target }: Event): void => {
    if (target && ref.current && !ref.current.contains(target as Node)) {
      setBtnSubmit(false)
    }
  }
  document.addEventListener('mousedown', click)
  
  return () => {
    document.removeEventListener('mousedown', click)
  }
}, [])
  return (
    <>
    <button onClick={()=>{setBtnSubmit(!btnSubmit)}}>select car</button>
    {
      btnSubmit && (

    <ul className="options" ref={ref}>
      {
        options.map((val)=>{
          return (
            <li>{val}</li>
          )
        })
      }
    </ul>
      )
    }
    </>
  )
}

export default App
