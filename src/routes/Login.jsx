import { useContext, useState } from "react"
import { UserContext } from "../context/UserProvider"
import { useNavigate } from "react-router-dom"

const Login = () => {
     const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");
    const {loginUser} = useContext(UserContext)
    const navigate = useNavigate()

    const handleClickLogin = async(e) => { 
      e.preventDefault()
      try {
        await loginUser(email,password)
             
        console.log("usuario loggeado")
        navigate("/")
      } catch (error) {
        console.log(error)
      }
      
     }

    return (
      <>
          <h1>Login</h1>
            <form >
            <input type="email" placeholder="Ingrese email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
            <input type="password" placeholder="Ingrese password" value={password} onChange={(e)=> setPassword(e.target.value)}/>
            <button type="submit" onClick={handleClickLogin}>Ingresar</button>
          </form>
            
      </>
    )
  }
  
  export default Login
  