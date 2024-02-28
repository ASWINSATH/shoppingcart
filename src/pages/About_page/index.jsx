import React from "react";
import Header from "../../components/blocks/Header";
import Footer from "../../components/blocks/Footer";

const About = () => {
  return (
    <div>
      <Header/>
      <div className="lg:px-20 px-5 h-screen ">
        <h2 className="text-center mt-10 font-bold mb-5 lg:text-lg md:text-lg text-sm">About Us</h2>
        <p className="lg:text-lg md:text-lg text-md">
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content. Lorem ipsum may be
          used as a placeholder before final copy is available.
        </p>
      </div>
      <Footer/>
    </div>
  );
};

export default About;