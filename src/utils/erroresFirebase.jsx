export const erroresFirebase = (code) => { 
    switch(code){
        case "auth/email-already-in-use": 
        return "Ya esta registrado este correo"
        case "auth/invalid-email": 
        return "Formato email no valido"
        case "auth/invalid-credential":
        return "Email o contraseña incorrecta"
        default: 
        return "Error inesperado"
 }
}