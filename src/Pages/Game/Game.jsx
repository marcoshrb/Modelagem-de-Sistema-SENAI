import { useState, useEffect } from 'react';
import { NavBar } from "../../components/Nav-bar/Nav-bar.jsx";
import style from "./Game.module.css";
import ImagemGame from "../../assets/ImagemGame.png"
import insta from "../../assets/instagram.png"
import tiktok from "../../assets/tiktok.png"
import twitterx from "../../assets/twitterx.png"
import youtube from "../../assets/youtube.png"
import logout from "../../assets/logout.png"

export default function GamePage() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 425);
        };

        // Adiciona um event listener para monitorar a alteração de tamanho da tela
        window.addEventListener('resize', handleResize);

        // Remove o event listener quando o componente é desmontado
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            <NavBar />
            <div className={style.game}>

                <div style={{ display: isMobile ? 'none' : 'block' }}>
                    <div className={style.ImgLogoOut}>
                        <img src={logout} className={style.imgsSocialMedia} alt="Logout"></img>
                    </div>
                </div>

                <img src={ImagemGame} className={style.ImagemGame} alt="Game Image"></img>

                <div style={{ display: isMobile ? 'none' : 'block' }}>
                    <div className={style.ImgLogoOut}>
                        <img src={insta} className={style.imgsSocialMedia} alt="Instagram"></img>
                    </div>
                    <div className={style.ImgLogoOut}>
                        <img src={tiktok} className={style.imgsSocialMedia} alt="TikTok"></img>
                    </div>
                    <div className={style.ImgLogoOut}>
                        <img src={twitterx} className={style.imgsSocialMedia} alt="Twitter"></img>
                    </div>
                    <div className={style.ImgLogoOut}>
                        <img src={youtube} className={style.imgsSocialMedia} alt="YouTube"></img>
                    </div>
                </div>

            </div>
        </>
    );
}
