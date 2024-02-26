import BarraBusqueda from "./BarraBusqueda";
import InicioSesion from "./InicioSesion";
import {useState} from "react"
export default function NoLogIn({filter, setFilter, articulosDisponibles, setIsUserLogin}){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [clickButtonRegistrar, setClickButtonRegistrar] = useState(false);
    return(
        <>
        <h1>Lista de Articulos (No Logeado)</h1>

        {clickButtonRegistrar ? <RegistrarUsuario username={username} setUsername={setUsername} 
        password = {password} setPassword = {setPassword} setClickButtonRegistrar = {setClickButtonRegistrar}/> :
        <InicioSesion username={username} setUsername={setUsername} 
        password = {password} setPassword = {setPassword} setClickButtonRegistrar = {setClickButtonRegistrar} setIsUserLogin={setIsUserLogin}/>
        }

        <br />
        <BarraBusqueda filterText ={filter} setFilterText={setFilter}/>
        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>Stock</th>
                </tr>
            </thead>
            <tbody>
            {articulosDisponibles.map((articulo)=>(
                <tr key={articulo.id}>
                    <td>{articulo.nombre}</td>
                    <td>{articulo.precio}</td>
                    <td>{articulo.unidades}</td>
                </tr>
            ))}
            </tbody>
        </table>

        
    </>
    )
}