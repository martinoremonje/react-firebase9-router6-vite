import { useContext, useState} from "react"
import { UserContext } from "../context/UserProvider"
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form";
import { erroresFirebase } from "../utils/erroresFirebase";
import FormError from "../components/FormError";
import FormInput from "../components/FormImput";
import { formValidate } from "../utils/formValidate";
import TitleForm from "../components/TitleForm";
import FormButton from "../components/FormButton";
import ButtonLoading from "../components/ButtongLoading";

const Login = () => {
     
    const {loginUser,loading, setLoading} = useContext(UserContext)
    const navigate = useNavigate();
    

    const {register, handleSubmit, formState: {errors}, setError} = useForm();
    const {required, patternEmail, minLength, validateTrim} = formValidate()
   
const onSubmit = async ({email, password}) => {
       try {
        setLoading(true)
        await loginUser(email,password);
        console.log("Accion exitosa... redirigiendo");
        navigate("/");
       } catch (error) {
        const {code, message} = erroresFirebase(error.code)
        setError(code, {
          message
        })
       }finally{
        setLoading(false)
       }
    }

    return (
      <>
          <TitleForm title="Login" />
            <form onSubmit={handleSubmit(onSubmit)}>
            <FormInput
            type="email" error={errors.email} placeholder="Ingrese email" label="Ingresa Email" {...register("email", {
              required,
              pattern: patternEmail
              }          
              )}
            ></FormInput>
            
            <FormError error={errors.email}/>

            <FormInput
              type="password" error={errors.password} placeholder="Ingrese password" label="Ingresa Password" {...register("password", {
                minLength,
                validate: validateTrim                       
                }
                )}
            ></FormInput>

            <FormError error={errors.password}/>
            {
              loading ? <ButtonLoading /> :  <FormButton text="Ingresar"/>
            }
           
          </form>
            
      </>
    )
  }
  
  export default Login
  