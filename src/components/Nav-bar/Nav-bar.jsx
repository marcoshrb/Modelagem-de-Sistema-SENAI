import style from "./Nav-bar.module.css";
import Logo from "../../assets/hippo.png";
import { Outlet, useNavigate } from "react-router-dom";

export const NavBar = () => {
    return (
        <>
            <div className={style.container}>
                <div className={style.content}>
                    <nav role="navigation">
                        <div className={style.menuToggle}>
                            <input type="checkbox" />
                            <span></span>
                            <span></span>
                            <span></span>
                            <ul className={style.menu}>
                                <li><a href="#">Jogos</a></li>
                                <li><a href="#">Prêmios</a></li>
                                <li><a href="#">Perfil</a></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    );
}
