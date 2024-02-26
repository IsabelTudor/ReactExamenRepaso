import { useEffect, useState } from 'react'

import './App.css'
import LogIn from './components/LogIn';
import NoLogIn from './components/NoLogIn';

function App() {
  //Para ver si tenemos un usuario
  const [isUsuario,setIsUsuario]=useState(JSON.parse(localStorage.getItem("usuarioIniciado"))||[])
  //Para enviar articulos
  const [articulosDisponibles,setArticulosDisponibles]=useState([]);
  //para filtrar
  const [filter,setFilter]=useState("");
    // Estado para controlar si se deben volver a pintar los artículos
    const [pintaArticulos, setPintaArticulos] = useState(false);

    //para traer los articulos
    useEffect(()=>{
      fetch(`http://44.221.16.151:3000/articulos/?nombre_like=${filter}`)
      .then(response=>{
        if(response.ok){
          return response.json()
        }else throw new Error("No se pudo hacer")
      })
      .then(data=>{
        setArticulosDisponibles(data)
      })
    },[filter,pintaArticulos])

  return (
    <>
    {isUsuario.length!==0? <LogIn
                    filter={filter} 
                    setFilter={setFilter} 
                    articulosDisponibles={articulosDisponibles} 
                    setPintaArticulos={setPintaArticulos} 
                    setIsUsuario={setIsUsuario} />:
                    <NoLogIn 
                    filter={filter} 
                    setFilter={setFilter} 
                    articulosDisponibles={articulosDisponibles} 
                    setIsUsuario={setIsUsuario}
                    />}
    </>
  )
}

export default App
