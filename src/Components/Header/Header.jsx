import React from "react";
import "./header.css";
import Onclickk from "./Onclick";
import IMG from "../../media/IMG.png";
import Socialsheader from "./Socialsheader";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h2>Hello! I am </h2>
        <h1>Ahmed Ikram</h1>
        <h2 className="text-light">
          MERN Stack <i>Learner</i>
        </h2>
        <br />
        <Onclickk />
        <a href="#contact" className="scroll__down">
          Scroll below
        </a>

        <div className="Ahmed">
          <img src={IMG} alt="Ahmed's image" />
        </div>
        <hr />
        <Socialsheader />
      </div>
    </header>
  );
};

export default Header;
