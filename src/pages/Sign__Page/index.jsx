import React, { useState } from "react";
import Input from "../../components/UI/Input";
import Button from "../../components/UI/Button";
import { RiEyeCloseLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import "./styles/style.css";

const SignUp = () => {
  const navigate = useNavigate();
  const { name, setName } = useState("");
  const { email, setEmail } = useState("");
  const { number, setNumber } = useState("");
  const { password, setPassword } = useState("");
  const { confirmpassword, confirmsetPassword } = useState("");

  const handleClick = () => {};
  return (
    <div className="model">
      <div className="login rounded-lg"> 
        <div>
          <h1 className="text-center mb-5 text-blue-500 font-bold">Sign up</h1>
          <div className="ml-1">
            <Input
              
              label="Name"
              value={name}
              setName={setName}
              type="type"
              placeholder="Enter Your Name"
            />
          </div>
          <div className="ml-1">
            <Input
              className=""
              label="email"
              value={email}
              setName={setEmail}
              type="email"
              placeholder="Enter Your Email"
            />
          </div>
          <div className="ml-1">
            <Input
              className=""
              label="Number"
              value={number}
              setName={setNumber}
              type="number"
              placeholder="Enter Your Number"
            />
          </div>
          <div className="relative ml-1">
            <Input
              label="Password"
              value={password}
              setValue={setPassword}se
              type="password"
              placeholder="Enter Your Psssword"
            />
            <RiEyeCloseLine className="absolute h-6 w-7 top-9 inset-y-0 right-3 pr-3 -m-1 flex items-center cursor-pointer" />
          </div>
          <div className="relative mb-4 ml-1">
            <Input
              label="Confirm Password"
              value={confirmpassword}
              setValue={confirmsetPassword}
              type="password"
              placeholder="Confirm Password"
            />
            <RiEyeCloseLine className="absolute h-6 w-7 top-9 inset-y-0 right-3 pr-3 -m-1 flex items-center cursor-pointer" />
          </div>
          <div className="mb-2">
            <Button name="sign up" onClick={handleClick} />
          </div>
          <div className="text-center">
            Already have an account?<button className="text-blue-500" onClick={() => navigate("/")}>Log in</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
