import React, { useState } from "react";
import Input from "../../components/UI/Input";
import Button from "../../components/UI/Button";
import { RiEyeCloseLine } from "react-icons/ri";
import "./styles/style.css";

const SignUp = () => {
  const { name, setName } = useState("");
  const { email, setEmail } = useState("");
  const { number, setNumber } = useState("");
  const { password, setPassword } = useState("");
  const { confirmpassword, confirmsetPassword } = useState("");

  const handleClick = () => {};
  return (
    <div className="model">
      <div className="login">
        <div>
          <div>
            <Input
              className=""
              label="Name"
              value={name}
              setName={setName}
              type="type"
              placeholder="Enter Your Name"
            />
          </div>
          <div>
            <Input
              className=""
              label="email"
              value={email}
              setName={setEmail}
              type="email"
              placeholder="Enter Your Email"
            />
          </div>
          <div>
            <Input
              className=""
              label="Number"
              value={number}
              setName={setNumber}
              type="number"
              placeholder="Enter Your Number"
            />
          </div>
          <div className="relative">
            <Input
              label="Password"
              value={password}
              setValue={setPassword}
              type="password"
              placeholder="Enter Your Psssword"
            />
            <RiEyeCloseLine className="absolute h-6 w-7 top-9 inset-y-0 right-3 pr-3 flex items-center cursor-pointer" />
          </div>
          <div className="relative">
            <Input
              label="Confirm Password"
              value={confirmpassword}
              setValue={confirmsetPassword}
              type="password"
              placeholder="Confirm Password"
            />
            <RiEyeCloseLine className="absolute h-6 w-7 top-9 inset-y-0 right-3 pr-3 flex items-center cursor-pointer" />
          </div>
          <div>
            <Button name="sign up" onClick={handleClick} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
