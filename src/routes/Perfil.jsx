import { useContext } from "react"
import { UserContext } from "../context/UserProvider"

const Perfil = () => { 

    const {user} = useContext(UserContext)

    return (
        <>
            <h1>Hola {user.name ||  null}!</h1>
            <h2>Datos:</h2>
            <p>email: {user.email}</p>
            <p>uid: {user.uid}</p>
            <p className="text-blue-300">aqui voy a colocar un boton para cambiar la foto de perfil, pronto... :D</p>
        </>
    )
 }

export default Perfil