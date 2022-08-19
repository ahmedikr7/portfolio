import React from "react";
import { GrLinkedin } from "react-icons/gr";
import { FaBasketballBall } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { BsMedium } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
const Socialsheader = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/ahmed-ikram-a2954122b/">
        <GrLinkedin />
      </a>
      <a href="https://github.com/ahmedikr7">
        <BsGithub />
      </a>
      <a href="https://dribbble.com/Ahmedikr97">
        <FaBasketballBall />
      </a>
      <a href="https://medium.com/@ahmedikram_69374">
        <BsMedium />
      </a>

      <a href="https://twitter.com/ahmedikr7">
        <AiFillTwitterCircle />
      </a>
      <a href="https://www.instagram.com/aikr97/">
        <BsInstagram />
      </a>
    </div>
  );
};

export default Socialsheader;
