import { Routes, Route } from "react-router-dom"
import Login from "./routes/Login"
import Home from "./routes/Home"
import NavBar from "./components/NavBar"
import RequireAuth from "./components/RequireAuth"

const App = ()=> {
 

  return (
    <>
    <NavBar/>
    <h1>App</h1>
    <Routes>
    <Route path="/" element={
      <RequireAuth>
      <Home />
    </RequireAuth>
    }/>
      <Route path="/login" element={<Login />}/>
    </Routes>
    </>
  )
}

export default App
