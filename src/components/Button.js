import React from "react";

const Button = ({ buttonColor, link, buttonText, buttonAnimated }) => {
  return (
    <a
      href={link}
      className={`btn btn-${buttonColor} ${
        buttonAnimated ? "btn-animated" : null
      }`}>
      {buttonText}
    </a>
  );
};

export default Button;
