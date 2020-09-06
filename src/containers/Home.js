import React from "react";
import TextBox from "../components/TextBox";
import Button from "../components/Button";

const Home = () => {
  return (
    <header className='header'>
      <div class='logo-box'>
        <img
          src={require("../static/img/logo-white.png")}
          alt='Logo'
          className='logo'
        />
      </div>
      <TextBox topHeading='Outdoors' secondaryHeading='is where life happens'>
        <Button
          buttonColor='primary'
          buttonText='discover our tours'
          link='#'
        />
      </TextBox>
    </header>
  );
};

export default Home;
