export default function Registrar({username, setUsername, password, setPassword, setClickButtonRegistrar}){
    function registrarUsuario(){
        

    fetch("http://44.221.16.151:3000/usuarios",{
        method: "POST",
        body: JSON.stringify({
            username: username,
            password: password
            }),
            headers: {
                 "Content-Type": "application/json",
            },
            })
            .then(response => {
            if (response.ok)
                return response.json();
            throw new Error(response.json());
            })
            .catch(err => {
            console.error("ERROR: ", err.message)
            });

            setClickButtonRegistrar(false)
        
        
    }
    return(
    <>
        <fieldset>
            <legend>Registrar Usuario</legend>
            <span id="datosLogin">
                Username: <input type="text" id="username" value={username} placeholder="Username" onChange={(e) => setUsername(e.target.value)}/>
                Password: <input type="password" id="password" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
            </span>
            <span id="mensajesError"></span>
            <br/>
            <br/>
            <button onClick={()=>registrarUsuario()}>Registrar Usuario</button>
            
        </fieldset>
    </>
    )
    
}