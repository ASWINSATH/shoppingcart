import React from "react";
import Login from "./pages/Login_page/index"
import SignUp from "./pages/Sign__Page/index";
import {BrowserRouter as Router,Routes,Route, } from "react-router-dom";
import  routes  from "./constants/routes";
import Forgotpass from "./pages/Forgot_pass";
import HomePage from "./pages/Home__Page/index.jsx";
import AboutPage from "./pages/About_page";
import ContactPage from "./pages/Contact_page"



const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path={routes.signIn()} element={<Login/>} />
          <Route path={routes.signUp()} element={<SignUp/>} />
          <Route path={routes.ForgotPass()} element={<Forgotpass/>}/>
          <Route path={routes.HomePage()} element={<HomePage/>}/>
          <Route path={routes.AboutPage()} element={<AboutPage/>}/>
          <Route path={routes.ContactPage()} element={<ContactPage/>}/>
        </Routes>
      </Router>
    </div>
  );
};

export default App;

