import { useContext } from "react"
import { UserContext } from "../context/UserProvider"
import { Navigate, Outlet } from "react-router-dom"

const RequireAuth = () => { 

    const {user} = useContext(UserContext)

    if(!user){
        return <Navigate to="/login"/>
    }

    return (
        <div className="w-150 mx-auto mt-10">
            <Outlet />
        </div>
    )
 }

export default RequireAuth