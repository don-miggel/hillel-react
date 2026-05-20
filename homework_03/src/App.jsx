import { useState } from 'react'
import DeletionTimer from './components/DeletionTimer/DeletionTimer';


function App() {
  
   const[isActive, setIsActive ] = useState(true);


  return (
    <>
     <button onClick={()=>setIsActive(prev=> !prev)}>
        {isActive ? "Деактивувати" : "Активувати"}
      </button>
     { isActive && <DeletionTimer setIsActive={setIsActive}/>}
    </>
  )
}

export default App
