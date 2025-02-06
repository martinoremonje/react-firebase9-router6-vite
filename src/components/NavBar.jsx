import { useContext } from "react"
import {  Link, NavLink } from "react-router-dom"
import { UserContext } from "../context/UserProvider"
import domain from '../assets/img/domain.gif';

const NavBar = ()=> {

  const {user, signOutUser} = useContext(UserContext);

  const handleLogOut = async() => { 
    await signOutUser()
   }

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
        <img src={domain} className="h-8" alt="Flowbite Logo" />
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">MartinXApp</span>
    </Link>
        {
          user ? (
                  <>
                  <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                  <NavLink className="block mr-3 py-2 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" to="/about">About</NavLink>
                  <NavLink className="block mr-3 py-2 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" to="/perfil"><img src={user.photoURL} className="h-8" alt="perfil" /></NavLink>
                  <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-light rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={handleLogOut}> LogOut</button>
                  </div>                
                  
                  </>
          ) : (
            <>
            <div className="flex md:order-2 space-x-6">
            <NavLink className="block py-2 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" to="/login">Login</NavLink>
            <NavLink className="block py-2 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" to="/register">Register</NavLink>

            </div>
            </>
          
          
        
        )
        }
        </div>
    </nav>
  )
}

export default NavBar