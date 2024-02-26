import {useState,useEffect} from "react"
import LogIn from "./components/LogIn";
import NoLogIn from "./components/NoLogIn";
export default function App() {
    const[isUsuario,setIsUsuario]= useState(JSON.parse(localStorage.getItem("usuarioIniciado"))||[]);
 const [filter,setFilter]=useState("");
 const [articulosDisponibles, setArticulosDisponibles]=useState([]);
 const [pintaArticulos, setPintaArticulos] = useState(false);
 useEffect(()=>{
    fetch(`http://44.221.16.151:3000/articulos/?nombre_like=${filter}`)
    .then(response=>{
        if(response.ok){
            return response.json()
        }else throw new Error("Error en la red")
    })
    .then(data=>{
        setArticulosDisponibles(data)
    })
 },[filter,pintaArticulos])

 
  return (
    <>
      {isUsuario.lenght!==0 ? 
      <LogIn filter={filter} setFilter={setFilter} articulosDisponibles={articulosDisponibles} setPintaArticulos={setPintaArticulos} setIsUsuario={setIsUsuario}/>:
      <NoLogIn filter={filter} setFilter={setFilter} articulosDisponibles={articulosDisponibles} setIsUsuario={setIsUsuario}/>}
    </>
  )

}
