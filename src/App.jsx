import React from "react";
import Login from "./pages/Login_page/index"
import SignUp from "./pages/Sign__Page/index";
import {BrowserRouter as Router,Routes,Route, } from "react-router-dom";
import  routes  from "./constants/routes";
import Forgotpass from "./pages/Forgot_pass";
import HomePage from "./pages/Home__Page/index.jsx"



const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path={routes.signIn()} element={<Login/>} />
          <Route path={routes.signUp()} element={<SignUp/>} />
          <Route path={routes.ForgotPass()} element={<Forgotpass/>}/>
          <Route path={routes.HomePage()} element={<HomePage/>}/>
        </Routes>
      </Router>
    </div>
  );
};

export default App;

