export default (data) => {
let errors = {};
if(!data.email.includes("@")) {
    errors.email1 = "El Email es invalido";
}
if(!data.email){
    errors.email2 = "Ingrese Email"
}
if(data.email.length > 35){
    errors.email3 = "Debe de contener menos de 35 caracteres"
}
if(!/\d/.test(data.password)){
    errors.password1 = "La contraseña debe tener al menos  un numero"
}
if(data.password.length < 6 || data.password.length > 10) {
    errors.password2 = "La contraseña debe tener una longitud entre 6 y 10 caracteres"
}
return errors
};