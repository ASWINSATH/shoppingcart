export default function ForgotValidation(values) {
    
    const errors = {};
    const password_pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$/
    const phone_pattern = /^\d{10}$/;
  
    
  
  
    if (values.phone === "") {
      errors.phone = " Phone Number Required";
    } else if (!phone_pattern.test(values.phone)) {
      errors.phone = " Invalid Phone Number";
    }
  
    if (values.password === "") {
      errors.password = "Password Required";
    } else if (!password_pattern.test(values.password)) {
      errors.password = "Passwords did'nt match";
     }
  
    if (values.confirmpassword === "") {
      errors.confirmpassword = " Confirm Password Required";
    } else if (values.password !== values.confirmpassword) {
      errors.confirmpassword = " Passwords did'nt match";
    }
  
    if (values.otp === "") {
      errors.otp = "OTP Required";
    }
  
    return errors;
  }
  