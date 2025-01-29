import { useContext} from "react"
import { UserContext } from "../context/UserProvider"
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form";
import { erroresFirebase } from "../utils/erroresFirebase";
import FormError from "../components/FormError";
import FormInput from "../components/FormImput";
import { formValidate } from "../utils/formValidate";

const Login = () => {
     
    const {loginUser} = useContext(UserContext)
    const navigate = useNavigate()

    const {register, handleSubmit, formState: {errors}, setError} = useForm();
    const {required, patternEmail, minLength, validateTrim} = formValidate()
   
const onSubmit = async ({email, password}) => {
       try {
        await loginUser(email,password);
        console.log("Accion exitosa... redirigiendo");
        navigate("/");
       } catch (error) {
        console.log(error.code)
            setError("firebase", {
              message: erroresFirebase(error.code)
            })
       }
    }

    return (
      <>
          <h1>Login</h1>
            <FormError error={errors.firebase}/>
            <form onSubmit={handleSubmit(onSubmit)}>
            <FormInput
            type="email" placeholder="Ingrese email" {...register("email", {
              required,
              pattern: patternEmail
              }          
              )}
            ></FormInput>
            
            <FormError error={errors.email}/>

            <FormInput
              type="password" placeholder="Ingrese password" {...register("password", {
                minLength,
                validate: validateTrim                       
                }
                )}
            ></FormInput>

            <FormError error={errors.password}/>
            <button type="submit">Ingresar</button>
          </form>
            
      </>
    )
  }
  
  export default Login
  