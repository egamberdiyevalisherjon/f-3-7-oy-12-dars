import React from "react";
import Logo from "./Logo";
import Nav from "./Nav";
import Icons from "./Icons";
import Cart from "./Cart";

const Header = () => {
  return (
    <div>
      <Logo />
      <Nav />
      <Icons />
      <Cart />
    </div>
  );
};

export default Header;
