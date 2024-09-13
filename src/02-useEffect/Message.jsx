import { useEffect } from "react"

export const Message = () => {

  useEffect( () => {
    console.log('Mensaje Mounted');
    
    return () => {
      console.log('Message Unmounted');
    }
  }, []);


  return (

    <>
    
    <h3>Ya existe el usuario</h3>

    </>
  )
}
