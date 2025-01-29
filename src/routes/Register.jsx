import {  useContext  } from "react"
import { UserContext } from "../context/UserProvider";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { erroresFirebase } from "../utils/erroresFirebase";

import { formValidate } from "../utils/formValidate";
import FormError from "../components/FormError";
import FormInput from "../components/FormImput";

const Register = () => {

 
    const {registerUser} = useContext(UserContext);
    const {required, patternEmail, minLength, validateTrim,validateEquals} = formValidate()
    const navigate = useNavigate()

    const {register, handleSubmit, formState: {errors}, getValues, setError} = useForm();


    const onSubmit = async ({email, password}) => {
       try {
        await registerUser(email,password);
        console.log("Accion exitosa... redirigiendo");
        navigate("/");
       } catch (error) {
        setError("firebase", {
          message: erroresFirebase(error.code)
        })
       }
    }



  
    return (
      <>
          <h1>Register</h1>
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

            <FormInput 
            type="password" placeholder="Ingrese repassword" {...register("repassword", {
              validate: validateEquals(getValues)
            })}
            ></FormInput>
            <FormError error={errors.repassword}/>
            <button type="submit">Registrarse</button>
          </form>
      </>
    )
  }
  
  export default Register