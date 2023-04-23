import Link from "next/link";
import { NavStyles, NavItems, NavItems2 } from "../styles/NavStyles";
import Cart from "./Cart";
import { useStateContext } from "../lib/context";
import User from "./User";
import { useUser } from "@auth0/nextjs-auth0/client";

import { CiGrid41, CiGrid42 } from "react-icons/ci";

import { useState, useEffect } from "react";
import Buscador from "./Buscador";

//Iconos

import { CiDark, CiLight, CiHeart, CiShoppingCart } from "react-icons/ci";

const { AnimatePresence, motion } = require("framer-motion");

const Nav = ({ onTemaChange, tema, menuToggle, menuOpen }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const { showCart, setShowCart, totalQuantities } = useStateContext();
  const { user, error, isLoading } = useUser();
  console.log(user);

  return (
    <NavStyles tema={tema}>
      <NavItems tema={tema}>
        {/* <CiGrid41 onClick={menuToggle} className="menu-icon"></CiGrid41> */}
        {menuOpen === "open" ? (
          <CiGrid41 onClick={menuToggle} className="menu-icon"></CiGrid41>
        ) : (
          <CiGrid42 onClick={menuToggle} className="menu-icon"></CiGrid42>
        )}

        {tema === "light" ? (
          <CiDark onClick={onTemaChange} />
        ) : (
          <CiLight onClick={onTemaChange} />
        )}
      </NavItems>
      <Buscador tema={tema}></Buscador>

      {tema === "light" ? (
        <Link href={"/"}>
          <img
            src="https://s3.amazonaws.com/skybar.database.teset.1/logo+fixly+png+negativo.png"
            alt=""
            className={scrolled ? "scrolled" : "logo"}
          />
        </Link>
      ) : (
        <Link href={"/"}>
          <img
            src="https://s3.amazonaws.com/skybar.database.teset.1/logo+fixly+png+positivo.png"
            alt=""
            className={scrolled ? "scrolled" : "logo"}
          />
        </Link>
      )}

      <AnimatePresence>{showCart && <Cart></Cart>}</AnimatePresence>

      <NavItems2 tema={tema}>
        <User></User>
        <CiHeart></CiHeart>
        <div>
          {totalQuantities > 0 && (
            <motion.span animate={{ scale: 1 }} initial={{ scale: 0 }}>
              {totalQuantities}
            </motion.span>
          )}
          <CiShoppingCart onClick={() => setShowCart(true)}></CiShoppingCart>
        </div>
      </NavItems2>
    </NavStyles>
  );
};

export default Nav;
