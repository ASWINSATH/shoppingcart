import React, { useState } from "react";
import Button from "../../components/UI/Button";
import Input from "../../components/UI/Input";
import { RxEyeOpen } from "react-icons/rx";
import { RiEyeCloseLine } from "react-icons/ri";
import { GiCancel } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import "./styles/style.css";
import validation from "../../uttils/validators/validation";

function Signin() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  function handleChange  (event)  {
    const newObj = { ...values, [event.target.name]: event.target.value };
    setValues(newObj);
  }

  function handleValidation(event) {
    event.preventDefault();
    setErrors(validation(values));
  }
  

  return (
    <>
      <div className="model">
        <div className="login  rounded-lg">
          <div>
            <div className="cancel">
              <GiCancel />
            </div>
            <div className="logdiv">
              <h1 className="loghead">Welcome back !</h1>
              <h3 className="logh3">
                Where Every Bites Tells a Story,every <br />
                Moment Feels Like Home!
              </h3>
            </div>

            <div className="ml-1">
              <Input
                label="Email ID/Mobile Number"
                values={values}               
                setValues={setValues}
                field="email"        
                type="text"
                placeholder="Mobile Number"
                onChange={handleChange}
              />
              {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
            </div>

            <div className="relative ml-1">
              <Input
                label="Password"
                values={values}
                setValues={setValues}
                field="password"
                type={showPassword ? "text" : "password"}
                placeholder="*******"
                onChange={handleChange}

              />{errors.password && (
                <p style={{ color: "red" }}>{errors.password}</p>
              )}
              {showPassword ? (
                <RxEyeOpen
                  onClick={handleShowPassword}
                  className="absolute h-6 w-7 top-9 right-3 pr-3 lg:m-1 md:m-1 -m-1 cursor-pointer"
                />
              ) : (
                <RiEyeCloseLine
                  onClick={handleShowPassword}
                  className="absolute h-6 w-7 top-9 right-3 pr-3 lg:m-1 md:m-1 -m-1 cursor-pointer"
                />
              )}
              
            </div>

            <div className="forpsw">
              <button className=" text-blue-500  "
                onClick={() => navigate("/forgotpass")}>Forgot password ?</button>
            </div>

            <div className="mb-2">
              <Button name="Login" onClick={handleValidation} />
            </div>
            <div className="text-center">
              not a user?
              <button
                className=" text-blue-500  "
                onClick={() => navigate("/signup")}
              >
                Sign Up
              </button>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signin;
