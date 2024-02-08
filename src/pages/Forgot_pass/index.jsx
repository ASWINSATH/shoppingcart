import React, { useState } from "react";
import Button from "../../components/UI/Button";
import Input from "../../components/UI/Input";
import validation from "../../uttils/validators/validation";
import "../Forgot_pass/styles/style.css";

const Forgotpass = () => {
  const [values, setValues] = useState({
    phone: "",
    otp: "",
    password: "",
    confirmpassword: "",
  });

  const [errors, setErrors] = useState({});

  function handleChange(event) {
    const newObj = { ...values, [event.target.name]: event.target.value };
    setValues(newObj);
  }

  function handleValidation(event) {
    event.preventDefault();
    setErrors(validation(values));
  }

  return (
    <div className="bg-slate-200 flex justify-center py-9">
      <div className="bg-white rounded-2xl lg:w-[500px] md:w-[500px] w-[330px] flex justify-center ">
        <div className="lg:w-[280px] md:w-[280px] w-[295px] my-14">
          <div>
            <div className="text-xl font-bold text-center pb-2">
              Welcome back !
            </div>
            <p className="font-normal text-md text-sm text-center">
              Where Every Bite Tells a Story, and Every
            </p>
            <p className="font-normal lg:text-md text-sm text-center">
              Moment Feels Like Home!
            </p>
          </div>
          <div>
            <Input
              type="number"
              placeholder="Mobile"
              value={values}
              setValues={setValues}
              field="phone"
              onChange={handleChange}
            />
            {errors.phone && <p style={{ color: "red" }}>{errors.phone}</p>}

            <div className=" text-white bg-blue-900 lg:rounded-xl md:rounded-xl rounded-lg  text-center mt-4 h-[20px] w-[60px] text-sm ml-60 ">
              <button onClick={handleValidation}>Get OTP</button>
            </div>
          </div>
          <div>
            <Input
              type="text"
              placeholder="Enter OTP"
              value={values}
              setValues={setValues}
              field="otp"
              onChange={handleChange}
            />
            {errors.otp && <p style={{ color: "red" }}>{errors.otp}</p>}
            <div>
            <Input
              type="text"
              placeholder="Reset Password"
              value={values}
              setValues={setValues}
              field="password"
              onChange={handleChange}
            />
            {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
             
            </div>
            <Input
              type="text"
              placeholder="Confirm Password"
              value={values}
              setValues={setValues}
              field="confirmpassword"
              onChange={handleChange}
            />
            {errors.confirmpassword && <p style={{ color: "red" }}>{errors.confirmpassword}</p>}
            
            <Button name="Reset Password" onClick={handleValidation} />

          </div>
        </div>
      </div>
    </div>
  );
};

export default Forgotpass;
