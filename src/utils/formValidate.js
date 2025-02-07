export const formValidate = () => { 
return {
    required: {value:true, message:"Campo obligatorio"},
    
    patternEmail: {
      value: /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/,
      message: "Formato de email no valido"},
      patternUrl: {
        value: /\bhttps?:\/\/(?:www\.)?[-\w+&@#/%=~_|!:,.;]*[-\w+&@#/%=~_|]/,
        message: "Formato de URL no valido"},
    
      minLength(length){
        return {value:length, message:"Minimo 6 caracteres"}
      },
      validateTrim: {trim: v => {
        if(!v.trim()) return "No seas payaso ♠"
        return true}
      },
      validateEquals(value){
        return {
            equals: (v) => v === value || "No coinciden las contraseñas",
        }
        
      }
    }
 }