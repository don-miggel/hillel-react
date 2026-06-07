import { useState } from 'react'
import { useEffect } from 'react';
import { service as locationService } from './service/locations';
import { RouterProvider } from "react-router";
import { router } from './router/router';

function App() {

 // const [locations, setLocations] = useState([]);

 // useEffect(()=>{
  //  const fetch = async () => {locationService.get()
  //    .then(data =>setLocations(data));
  //  } 
  //  fetch();
 // }, [])
  

  return (
    <>
      < RouterProvider router={router}/>

    </>
  )
}

export default App
