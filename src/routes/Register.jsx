import { useState, useContext  } from "react"
import { UserContext } from "../context/UserProvider";
import { useNavigate } from "react-router-dom";

const Register = () => {

    const [email, setEmail] = useState("pepito@gmail.com");
    const [password, setPassword] = useState("123456");

  const navigate = useNavigate()

    const {registerUser} = useContext(UserContext)

    const handleSubmit = async (e) => { 
        e.preventDefault()
        console.log(`Creando usuario: ${email} y ${password}`);

       try {
        await registerUser(email,password);
        console.log("Accion exitosa... redirigiendo");
        navigate("/");
       } catch (error) {
            console.log(error)
       }
     }

    return (
      <>
          <h1>Register</h1>
          <form >
            <input type="email" placeholder="Ingrese email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
            <input type="password" placeholder="Ingrese password" value={password} onChange={(e)=> setPassword(e.target.value)}/>
            <button type="submit" onClick={handleSubmit}>Registrarse</button>
          </form>
      </>
    )
  }
  
  export default Register