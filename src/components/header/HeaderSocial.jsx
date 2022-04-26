import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from 'react-icons/bs';
import { FaDribbbleSquare } from 'react-icons/fa';

const HeaderSocial = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkdin.com">
        <BsLinkedin />
      </a>
      <a href="https://www.github.com"><BsGithub/></a>
      <a href="https://www.dribbles.com"><FaDribbbleSquare/></a>
    </div>
  );
};

export default HeaderSocial;
