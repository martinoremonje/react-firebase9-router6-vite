export const erroresFirebase = (code) => { 
    switch(code){
        case "auth/email-already-in-use": 
        return {
            code: "email",
            message: "Ya esta registrado este correo"
        }
        case "auth/invalid-email": 
        return {
            code: "email",
            message: "Formato email no valido"
        }
        case "auth/invalid-credential":
        return {
            code: "email",
            message: "Email o contraseña incorrecta"
        }
        default: 
        return "Error inesperado"
 }
}