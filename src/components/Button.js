import React from "react";

const Button = ({ buttonColor, link, buttonText }) => {
  return (
    <a href={link} className={`btn btn-${buttonColor}`}>
      {buttonText}
    </a>
  );
};

export default Button;
