import { useState } from "react";
import InicioSesion from "./NoLogInComponents/InicioSesion";
import Registrar from "./NoLogInComponents/Registrar";
import BarraBusqueda from "./BarraBusqueda";
export default function NoLogIn({filter, setFilter, articulosDisponibles, setIsUsuario}){
    //aqui cogemos los valores de username y password y con el boton de registro 
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [clickButtonRegistrar, setClickButtonRegistrar] = useState(false);
    return(
        <>
        <h1>Lista de Articulos (No Logeado)</h1>
        {clickButtonRegistrar?<Registrar username={username} setUsername={setUsername} 
        password = {password} setPassword = {setPassword} setClickButtonRegistrar = {setClickButtonRegistrar}/> :
        <InicioSesion username={username} setUsername={setUsername} 
        password = {password} setPassword = {setPassword} setClickButtonRegistrar = {setClickButtonRegistrar} setIsUsuario={setIsUsuario}/>
         }
          <br />
           <BarraBusqueda filter={filter} setFilter={setFilter}/>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Unidades</th>
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