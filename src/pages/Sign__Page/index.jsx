import React, { useState } from "react";
import Input from "../../components/UI/Input";
import Button from "../../components/UI/Button";
import { RxEyeOpen } from "react-icons/rx";
import { RiEyeCloseLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import "./styles/style.css";
import validation from "../../uttils/validators/validation";
import useFetch from "../../api/hooks/useApi";
import routes from "../../constants/routes";

const SignUp = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmpassword: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const { fetchData } = useFetch({
    url: "https://portal.umall.in/api/customer/register",
  });

  const handleValidation = async (event) => {
    setLoading(true);
    event.preventDefault();
    const validationErrors = validation(values);

    if (Object.keys(validationErrors).length === 0) {
      const data = await fetchData({
        name: values.name,
        email: values.email,
        password: values.password,
        phone: values.phone,
      });

      if (data?.sts == "00") {
        setLoading(false);
        alert(data?.msg);
      } else if (data?.sts == "01") {
        setLoading(false);
        navigate(routes.signIn());
      }
    } else {
      console.log("error");
      setErrors(validationErrors);
      setLoading(false);
    }
  };
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  if(loading){
    <div>Loading...</div>
  }

  return (
    <div className="model1">
      <div className="login1 rounded-lg">
        <div>
          <h1 className="text-center mb-4  font-bold">Sign up</h1>
          <div className="ml-1">
            <Input
              label="Name"
              value={values}
              setValues={setValues}
              type="text"
              field="name"
              placeholder="Enter Your Name"
              // onChange={handleChange}
            />
            {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
          </div>
          <div className="ml-1">
            <Input
              label="Email"
              value={values}
              setValues={setValues}
              type="email"
              field="email"
              placeholder="Enter Your Email"
              // onChange={handleChange}
            />
            {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
          </div>
          <div className="ml-1">
            <Input
              label="Number"
              value={values}
              setValues={setValues}
              type="number"
              field="phone"
              placeholder="Enter Your Number"
              // onChange={handleChange}
            />
            {errors.phone && <p style={{ color: "red" }}>{errors.phone}</p>}
          </div>
          <div className="relative ml-1">
            <Input
              label="Password"
              value={values}
              setValues={setValues}
              type={showPassword ? "text" : "password"}
              field="password"
              placeholder="Enter Your Psssword"
              // onChange={handleChange}
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
          <div className="relative mb-4 ml-1">
            <Input
              label="Confirm Password"
              value={values}
              setValues={setValues}
              type="password"
              field="confirmpassword"
              placeholder="Confirm Password"
              // onChange={handleChange}
            />
            {errors.confirmpassword && (
              <p style={{ color: "red" }}>{errors.confirmpassword}</p>
            )}
          </div>
          <div className="mb-2">
            <Button name="sign up" onClick={handleValidation} />
          </div>
          <div className="text-center">
            Already have an account?
            <Link to="/" className="text-blue-500">
              &nbsp;Log in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
