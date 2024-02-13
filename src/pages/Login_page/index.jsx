import React, { useState } from "react";
import Button from "../../components/UI/Button";
import Input from "../../components/UI/Input";
import { RxEyeOpen } from "react-icons/rx";
import { RiEyeCloseLine } from "react-icons/ri";
import { GiCancel } from "react-icons/gi";
import { Link, useNavigate } from "react-router-dom";
import "./styles/style.css";
import loginValidation from "../../uttils/validators/loginValidation";
import useFetch from "../../api/hooks/useApi";
import routes from "../../constants/routes";

function SignIn() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const { fetchData } = useFetch({
    url: "https://portal.umall.in/api/customer/login",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleValidation = async (event) => {
    event.preventDefault();
    const validationErrors = loginValidation(values);
    setLoading(true);
    if (Object.keys(validationErrors).length === 0) {
      const data = await fetchData({
        emailormobile: values.email,
        password: values.password,
      });

      if (data?.sts == "00") {
        alert(data?.msg);
        setLoading(false);
      } else if (data?.sts == "01") {
        navigate(routes.HomePage());
        setLoading(false);
      }
    } else {
      setErrors(validationErrors);
      setLoading(false);
    }
  };
  if (loading){
    <div>Loading...</div>
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
                value={values}
                setValues={setValues}
                field="email"
                type="text"
                placeholder="Mobile Number"
              />
              {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
            </div>

            <div className="relative ml-1">
              <Input
                label="Password"
                value={values}
                setValues={setValues}
                field="password"
                type={showPassword ? "text" : "password"}
                placeholder="*******"
              />
              {errors.password && (
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
              <Link to="/forgotpass" className=" text-blue-500">
                Forgot password ?
              </Link>
            </div>

            <div className="mb-2">
              <Button name="Login" onClick={handleValidation} />
            </div>
            <div className="text-center">
              Not a user?
              <Link to="/signup" className=" text-blue-500  ">
                &nbsp;Sign Up
              </Link>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignIn;
