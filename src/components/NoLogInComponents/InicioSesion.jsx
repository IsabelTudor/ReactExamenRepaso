export default function InicioSesion({username, setUsername, password, setPassword, setClickButtonRegistrar, setIsUsuario}){
    function iniciarSesion(){
        //le pedimos los datos a el servidor
        fetch(`http://44.221.16.151:3000/usuarios?username=${username}`)
        .then(response => {
          if (response.ok)
            return response.json();
      
          throw new Error(response.status);
        })
        .then(data => {
            //comprobamos la longitud y cuando veamos que esta bien , guardamos los datos en el localstorage
            if(data.length == 1){
                if(data[0].password == password){
                    localStorage.setItem("usuarioIniciado", JSON.stringify(data));
                    setIsUsuario(JSON.parse(localStorage.getItem("usuarioIniciado")));
                }else{
                    document.getElementById("mensajesError").innerText="La contraseña no es correcta";
                }
            }else{
                document.getElementById("mensajesError").innerText="Usuario no encontrado";
            }
        })
        .catch(err => {
          console.error("ERROR: ", err.message);
        });
    }
    return(
        <fieldset>
            <legend> Inicio de sesión</legend>
            <span id="datosLogin">
                Username: <input type="text" value={username} placeholder="Username" onChange={(e) => setUsername(e.target.value)}/>
                Password: <input type="password" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
            </span>
            <span id="mensajesError"></span>
            <br/>
            <br/>
            <button onClick={()=>{iniciarSesion()}}>Iniciar Sesión</button>
            <button onClick={()=>{setUsername('') 
                setPassword('')
                setClickButtonRegistrar(true)}}>Usuario Nuevo</button>
        </fieldset>
    )
}