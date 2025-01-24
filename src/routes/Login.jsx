import { useContext } from "react"
import { UserContext } from "../context/UserProvider"
import { useNavigate } from "react-router-dom"

const Login = () => {

    const {user, setUser} = useContext(UserContext)
    const navigate = useNavigate()

    const handleClickLogin = () => { 
    

      setUser(true)
      console.log("usuario loggeado")
      navigate("/")
     }

    return (
      <>
          <h1>Login</h1>
          <h2>{
            user ? "online" : "offline"
            }</h2>
            <button onClick={handleClickLogin}>Login</button>
      </>
    )
  }
  
  export default Login
  