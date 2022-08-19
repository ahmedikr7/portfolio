import React from "react";
import CV from "../../media/CV.pdf";

const Onclickk = () => {
  return (
    <div className="onclickk">
      <a href={CV} download className="btn">
        Download my CV
      </a>
      <a href="#contact" className="btn">
        Let's Talk
      </a>
    </div>
  );
};

export default Onclickk;
