import {  useContext  } from "react"
import { UserContext } from "../context/UserProvider";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const Register = () => {

 
    const {registerUser} = useContext(UserContext)
    const navigate = useNavigate()

    const {register, handleSubmit, watch, formState: {errors}, getValues, setError} = useForm();
    const onSubmit = async ({email, password}) => {
       try {
        await registerUser(email,password);
        console.log("Accion exitosa... redirigiendo");
        navigate("/");
       } catch (error) {
            console.log(error);
            switch(error.code){
              case "auth/email-already-in-use": 
              setError("email", {type: "custom", message: "Ya esta registrado este correo"});
              break;
              case "auth/invalid-email": 
              setError("email", {type: "custom", message: "Formato email no valido"});
              break;
              default: console.log("Error inesperado")
            }
       }
    }



    // const handleSubmit = async (e) => { 
    //     e.preventDefault()
    //     console.log(`Creando usuario: ${email} y ${password}`);

    //    try {
    //     await registerUser(email,password);
    //     console.log("Accion exitosa... redirigiendo");
    //     navigate("/");
    //    } catch (error) {
    //         console.log(error)
    //    }
    //  }

    return (
      <>
          <h1>Register</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input type="email" placeholder="Ingrese email" {...register("email", {
              required: {value:true, message:"Campo obligatorio"},
              pattern: {
                value: /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/,
                message: "Formato de email no valido"} 
              }          
              )}/>
            {errors.email && <p>{errors.email.message}</p>}
            <input type="password" placeholder="Ingrese password" {...register("password", {
              setValueAs: v => v.trim(),
              minLength:{value:6, message:"Minimo 6 caracteres"},
              validate: {
                trim: v => {
                  if(!v.trim()) return "No seas payaso ♠"
                  return true
                }
              }
              }
              )}/>
            {errors.password && <p>{errors.password.message}</p>}
            <input type="password" placeholder="Ingrese repassword" {...register("repassword", {
              setValueAs: v => v.trim(),
              validate: {
                equals: (v) => v === getValues("password") || "No coinciden las contraseñas",
              }
            })}/>
            {errors.repassword && <p>{errors.repassword.message}</p>}
            <button type="submit">Registrarse</button>
          </form>
      </>
    )
  }
  
  export default Register