import { useEffect, useState } from "react"

export const Message = () => {


  const [coords, setCoords] = useState({x:0, y:0});

  useEffect( () => {

    const onMouseMove = ({x,y}) => {
      // const coords = { x, y};
      setCoords({x,y})
      // console.log(coords);
    }

    window.addEventListener('mousemove', onMouseMove);
    
    return () => {
     }
  }, []);


  return (

    <>
    
    <h3>Ya existe el usuario</h3>
    {JSON.stringify(coords)}

    </>
  )
}
