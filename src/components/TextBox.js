import React from "react";

const TextBox = ({ topHeading, secondaryHeading, children }) => {
  return (
    <div className='text-box'>
      <div>
        <h1 className='heading-primary'>
          <span className='heading-primary-main'>{topHeading}</span>
          <span className='heading-primary-sub'>{secondaryHeading}</span>
        </h1>
      </div>
      {children}
    </div>
  );
};

export default TextBox;
