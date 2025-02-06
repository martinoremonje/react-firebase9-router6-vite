import { useContext } from "react"
import { UserContext } from "../context/UserProvider"

const Perfil = () => { 

    const {user} = useContext(UserContext)

    return (
        <>
            <h1>Hola {user.name ||  null}!</h1>
            <h2>Datos</h2>
            <p>email: {user.email}</p>
            <p>uid: {user.uid}</p>
        </>
    )
 }

export default Perfil