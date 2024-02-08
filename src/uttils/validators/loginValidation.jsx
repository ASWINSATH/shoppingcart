export default function loginValidation(values) {
    
    const errors = {};
  
    if (values.email === "") {
      errors.email = "Email is Required";
    }   
  
  
    if (values.password === "") {
      errors.password = "Password Required";
     }
  
  
    return errors;
  }
  