import React, { useState, useEffect, useContext } from "react";
import { MediaContext } from "../../../App";
import { useScrollDirection } from "./useScrollDirection";
import Logo from "../../Logo/Logo";
import HamburgerMenu from "../../HamburgerMenu/HamburgerMenu";
import HeaderNav from "../HeaderNav/HeaderNav";
import classes from "./Heading.module.css";

const Heading = () => {
  const scroll = useScrollDirection();
  const [navOpen, setNavOpen] = useState(false);
  const isDesktop = useContext(MediaContext);
  const toggleNav = () => {
    setNavOpen((prevState) => !prevState);
  };

  useEffect(() => {
    if (isDesktop) {
      setNavOpen(true);
    } else {
      setNavOpen(false);
    }
    if (scroll === "down") {
      setNavOpen(false);
    }
  }, [isDesktop, scroll]);

  return (
    <div className={classes.heading}>
      <Logo />
      {!isDesktop && <HamburgerMenu navOpen={navOpen} onClick={toggleNav} />}
      {(isDesktop || navOpen) && <HeaderNav isDesktop={isDesktop} />}
    </div>
  );
};

export default Heading;
