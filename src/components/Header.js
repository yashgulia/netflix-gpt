import React from "react";
import Logo from "../img/Netflix_Logo.png";

const Header = () => {
  return (
    <div className="absolute px-28 bg-gradient-to-b from-black z-10">
      <img className="w-48" src={Logo} alt="Logo" />
    </div>
  );
};

export default Header;
