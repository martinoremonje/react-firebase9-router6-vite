import { useContext } from "react"
import {  NavLink } from "react-router-dom"
import { UserContext } from "../context/UserProvider"

const NavBar = ()=> {

  const {user, signOutUser} = useContext(UserContext);

  const handleLogOut = async() => { 
    await signOutUser()
   }

  return (
    <div>
        
        {
          user ? (
                  <>                
                  <NavLink to="/">Home</NavLink>
                  <button onClick={handleLogOut}> LogOut</button>
                  </>
          ) : (
            <>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/register">Register</NavLink>
            </>
          
          
        
        )
        }
    </div>
  )
}

export default NavBar