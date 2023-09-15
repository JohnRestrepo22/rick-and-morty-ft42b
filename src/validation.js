export default (data) => {
    let errors = {};
  
    if (!data.email.includes("@")) {
      errors.email = "El Email es inválido";
    }
    if (!data.email) {
      errors.email = "Ingrese Email";
    }
    if (data.email.length > 35) {
      errors.email = "Debe tener menos de 35 caracteres";
    }
    if (!/\d/.test(data.password)) {
      errors.password = "La contraseña debe contener al menos un número";
    }
    if (data.password.length < 6) {
      errors.password = "La contraseña debe tener al menos 6 caracteres";
    }
    if (data.password.length > 10) {
      errors.password = "La contraseña debe tener como máximo 10 caracteres";
    }
  
    return errors;
  };
  