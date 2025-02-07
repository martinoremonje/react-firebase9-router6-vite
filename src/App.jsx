import { Routes, Route } from "react-router-dom"
import Login from "./routes/Login"
import Home from "./routes/Home"
import About from "./routes/About"
import Perfil from "./routes/Perfil"
import NavBar from "./components/NavBar"
import RequireAuth from "./components/RequireAuth"
import Register from "./routes/Register"
import { useContext } from "react"
import { UserContext } from "./context/UserProvider"
import LayoutContainerForm from "./components/LayoutContainerForm"
import NotFound from "./routes/NotFound"
import Loading from "./components/ButtonLoading"
import LayoutRedirect from "./components/LayoutRedirect"

const App = ()=> {
 
    const {user} = useContext(UserContext)
    
    if(user === false) {
      return <Loading />
      
    }

  return (
    <>
    <div className="no-select">
    <NavBar/>
    <Routes>
      
    
     <Route path="/" element={<RequireAuth/>}>

      <Route index element={<Home />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/perfil" element={<Perfil />}/>
    </Route>
      
      <Route path="/" element={<LayoutContainerForm/>}>

          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
      </Route>

      <Route path="/:nanoid" element={<LayoutRedirect/>}>

      <Route index element={<NotFound/>}/>
      </Route>
    </Routes>
    </div>
    </>
  )
}

export default App
