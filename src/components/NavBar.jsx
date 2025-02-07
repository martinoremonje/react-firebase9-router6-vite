import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { UserContext } from "../context/UserProvider";
import domain from '../assets/img/domain.gif';

const NavBar = () => {

  const { user, signOutUser } = useContext(UserContext);

  const handleLogOut = async () => { 
    await signOutUser();
  }

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={domain} className="h-8" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">MartinXApp</span>
        </Link>
        <button
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-responsive"
          aria-expanded="false"
          onClick={() => document.getElementById('navbar-responsive').classList.toggle('hidden')}
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
          </svg>
        </button>
        <div className="hidden w-full md:flex md:items-center md:w-auto" id="navbar-responsive">
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0">
            {user ? (
              <>
              <li>
                  <NavLink className="block py-2 pl-3 pr-4 text-gray-900 rounded md:p-0 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" to="/">URLS</NavLink>
                </li>
                <li>
                  <NavLink className="block py-2 pl-3 pr-4 text-gray-900 rounded md:p-0 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" to="/about">About</NavLink>
                </li>
                <li>
                <NavLink className="block py-2 pl-3 pr-4 rounded md:p-0" to="/perfil">
  <img src="https://img.icons8.com/?size=100&id=98957&format=png&color=000000" className="h-8 transition-transform duration-300 ease-in-out transform hover:scale-110" alt="perfil" />
</NavLink>

                </li>
                <li>
                  <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-light rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={handleLogOut}>LogOut</button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink className="block py-2 pl-3 pr-4 text-gray-900 rounded md:p-0 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" to="/login">Login</NavLink>
                </li>
                <li>
                  <NavLink className="block py-2 pl-3 pr-4 text-gray-900 rounded md:p-0 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" to="/register">Register</NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
