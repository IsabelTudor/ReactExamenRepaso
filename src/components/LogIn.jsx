import { useEffect, useState } from "react"
import BarraBusqueda from "./BarraBusqueda";
import Articulos from "./LogInComponents/Articulos";
import Cesta from "./LogInComponents/Cesta";
export default function LogIn({filter,setFilter,articulosDisponibles,setPintaArticulos,setIsUsuario}){
    const username=JSON.parse(localStorage.getItem("usuarioIniciado"));
    const [articulosCesta, setArticulosCesta] = useState([]);
     // Estado para indicar si es necesario volver a cargar la cesta
    const [pintarCesta, setPintarCesta] = useState(false);
    useEffect(()=>{
        fetch(`http://44.221.16.151:3000/cesta?username=${username[0].username}`) 
        .then(response => {
            if (response.ok){
                
                setPintaArticulos(true)
                return response.json();
            }
            throw new Error(response.status);
            })
            .then(data =>{
                setArticulosCesta(data);
                setPintarCesta(false);
            })
            .catch(err => {
            console.error("ERROR: ", err.message)
            });
        }, [pintarCesta]);
        function cerrarSesion() {
            localStorage.setItem("usuarioIniciado", JSON.stringify([]))
            setIsUsuario(JSON.parse(localStorage.getItem("usuarioIniciado")))
        }
    return (
        <>
            <h1>Lista de Articulos (Logeado)</h1>
            <h3>Hola {username[0].username}</h3>
            <button onClick={()=>cerrarSesion()}>Cerrar Sesion</button>
            <br />
            <br />
            <BarraBusqueda filterText={filter} setFilterText={setFilter}/>
            <Articulos articulosDisponibles={articulosDisponibles} setPintaArticulos={setPintaArticulos} setPintarCesta={setPintarCesta}/>
            <Cesta articulosCesta={articulosCesta} setPintaArticulos={setPintaArticulos} setPintarCesta={setPintarCesta}/>
        </>
    )
}