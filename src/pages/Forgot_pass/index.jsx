import React, { useState } from "react";
import Button from "../../components/UI/Button";
import Input from "../../components/UI/Input";
import "../Forgot_pass/styles/style.css";
import useFetch from "../../api/hooks/useApi";
import ForgotValidation from "../../uttils/validators/forgotValidation";
import { useNavigate } from "react-router-dom";
import routes from "../../constants/routes";

const Forgotpass = () => {
  const phone_pattern = /^\d{10}$/;
  const navigate = useNavigate()

  const [values, setValues] = useState({
    phone: "",
    otp: "",
    password: "",
    confirmpassword: "",
  });

  const [otp, setOtp] = useState({
    phone: "",
    error: "",
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const { fetchData: fetchForgot } = useFetch({
    url: "https://portal.umall.in/api/check-mobile",
  });

  const { fetchData: resetPassword } = useFetch({
    url: "https://portal.umall.in/api/reset-password",
  });

  const handleOTP = async (event) => {
    setLoading(true);
    event.preventDefault();
    if (otp.phone == "" || !phone_pattern.test(otp.phone)) {
      setLoading(false);
      otp.error = "Invalid Phone Number";
      setOtp({ ...otp });
    } else {
      const data = await fetchForgot({
        number: otp.phone,
      });

      if (data?.sts == "00") {
        setLoading(false);
        alert(data?.msg);
      } else if (data?.sts == "01") {
        setLoading(false);
        alert(`${data?.msg} - ${data?.otp} `);
        values.phone = otp.phone;
        setValues({ ...values });
      }
    }
  };

  const handlePassword = async (e) => {
    e.preventDefault();
    const validationErrors = ForgotValidation(values);

    if (Object.keys(validationErrors).length === 0) {
      const data = await resetPassword({
        number: values.phone,
        password: values.password,
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

  return (
    <div className="bg-slate-200 flex justify-center py-9">
      <div className="bg-white rounded-2xl lg:w-[500px] md:w-[500px] w-[330px] flex justify-center ">
        <div className="lg:w-[280px] md:w-[280px] w-[295px] my-14">
          <div>
            <div className="text-xl font-bold text-center pb-2">s
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
              value={otp}
              setValues={setOtp}
              field="phone"
            />
            {otp.error && <p style={{ color: "red" }}>{otp.error}</p>}

            <div className=" text-white bg-blue-900 lg:rounded-xl md:rounded-xl rounded-lg  text-center mt-4 h-[20px] w-[60px] text-sm ml-60 ">
              <button onClick={handleOTP}>Get OTP</button>
            </div>
          </div>
          <div>
            <Input
              type="text"
              placeholder="Enter OTP"
              value={values}
              setValues={setValues}
              field="otp"
            />
            {errors.otp && <p style={{ color: "red" }}>{errors.otp}</p>}
            <div>
              <Input
                type="text"
                placeholder="Reset Password"
                value={values}
                setValues={setValues}
                field="password"
              />
              {errors.password && (
                <p style={{ color: "red" }}>{errors.password}</p>
              )}
            </div>
            <Input
              type="text"
              placeholder="Confirm Password"
              value={values}
              setValues={setValues}
              field="confirmpassword"
            />
            {errors.confirmpassword && (
              <p style={{ color: "red" }}>{errors.confirmpassword}</p>
            )}

            <Button name="Reset Password" onClick={handlePassword} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forgotpass;
