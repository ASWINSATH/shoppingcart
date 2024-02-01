import React, { useState } from "react";
import Button from "../../components/UI/Button";
import Input from "../../components/UI/Input";
import "./styles/style.css";

function Signin() {
  const { name, setName } = useState("");
  const { password, setPassword } = useState("");
  const handleClick = () => {};
  return (
    <>
      <div className="model">
        <div className="login">
          <div>
            <div className="cancel">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
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

            <div className="">
              <Input
                label="Password"
                value={password}
                setValue={setPassword}
                type="password"
                placeholder="*******"
              />
            </div>

            <div>
              <Button name="Login" onClick={handleClick} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signin;
