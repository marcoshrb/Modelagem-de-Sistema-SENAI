import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/hippo.png";
import style from "./Nav-bar.module.css";

export const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className={style.navbar}>
            <img src={Logo} alt="NSS Logo" className={style.logo} />
            <button className={style.menuButton} onClick={toggleMenu}>
                Menu
            </button>
            <div className={`${style.menu} ${menuOpen ? style.active : ""}`}>
                <NavLink to="/" activeClassName={style.activeLink}>Home</NavLink>
                <NavLink to="/about" activeClassName={style.activeLink}>About</NavLink>
                <NavLink to="/contact" activeClassName={style.activeLink}>Contact</NavLink>
            </div>
        </div>
    );
};
