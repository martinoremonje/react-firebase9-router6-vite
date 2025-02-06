import {  useContext  } from "react"
import { UserContext } from "../context/UserProvider";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { erroresFirebase } from "../utils/erroresFirebase";

import { formValidate } from "../utils/formValidate";
import FormError from "../components/FormError";
import FormInput from "../components/FormImput";
import TitleForm from "../components/TitleForm";
import FormButton from "../components/FormButton";
import ButtonLoading from "../components/ButtongLoading";

const Register = () => {

 
    const {registerUser, loading, setLoading} = useContext(UserContext);
    const {required, patternEmail, minLength, validateTrim,validateEquals} = formValidate()
    const navigate = useNavigate()

    const {register, handleSubmit, formState: {errors}, getValues, setError} = useForm();


    const onSubmit = async ({email, password}) => {
       try {
        setLoading(true)
        await registerUser(email,password);
        console.log("Accion exitosa... redirigiendo");
        navigate("/");
       } catch (error) {
        const {code, message} = erroresFirebase(error.code)
        setError(code, {
          message
        })
       }
       finally{
        setLoading(false)
       }
    }



  
    return (
      <>
          <TitleForm title="Register"/>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormInput
            type="email" placeholder="Ingrese email" error={errors.email} label="Ingresa tu correo" {...register("email", {
              required,
              
              pattern: patternEmail
              }
                        
              )}
            ></FormInput>
            
            <FormError error={errors.email}/>

            <FormInput
              type="password" error={errors.password} placeholder="Ingrese password" label="Ingresa password" {...register("password", {
                minLength: minLength(6),
                validate: validateTrim                       
                }
                )}
            ></FormInput>

            <FormError error={errors.password}/>

            <FormInput 
            type="password" error={errors.repassword} placeholder="Ingrese repassword" label="Ingresa nuevamente la password" {...register("repassword", {
              validate: validateEquals(getValues("password"))
            })}
            ></FormInput>
            <FormError error={errors.repassword}/>
            {
              loading ? <ButtonLoading /> : <FormButton text="Register" />
            }
          </form>
      </>
    )
  }
  
  export default Register