import React, { useState } from "react";
import Button from "../../components/UI/Button";
import Input from "../../components/UI/Input";
import { RiEyeCloseLine } from "react-icons/ri";
import { GiCancel } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import "./styles/style.css";

function Signin() {
  const navigate = useNavigate()
  const { name, setName } = useState("");
  const { password, setPassword } = useState("");
  const handleClick = () => {};
  return (
    <>
      <div className="model">
        <div className="login">
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

            <div className="">
              <Input
                className=""
                label="Email ID/Mobile Number"
                value={name}
                setName={setName}
                type="type"
                placeholder="Mobile Number"
              />
            </div>

            <div className="relative">
              <Input
                label="Password"
                value={password}
                setValue={setPassword}
                type="password"
                placeholder="*******"
              />
              <RiEyeCloseLine className="absolute h-6 w-7 top-9 inset-y-0 right-3 pr-3 flex items-center cursor-pointer" />
            </div>
            <div className="forpsw">
              <button>
                Forgot password ?
              </button>
            </div>

            <div className="mb-2">
              <Button name="Login" onClick={handleClick} />
            </div>
            <div  className="flex justify-end mb-2 mr-2">
              <button onClick={() => navigate("/signup")}>
                Not a User
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signin;
