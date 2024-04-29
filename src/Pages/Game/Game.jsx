import { NavBar } from "../../components/Nav-bar/Nav-bar.jsx";
import style from "./Game.module.css";
import ImagemGame from "../../assets/ImagemGame.png"
import insta from "../../assets/instagram.png"
import tiktok from "../../assets/tiktok.png"
import twitterx from "../../assets/twitterx.png"
import youtube from "../../assets/youtube.png"

export default function GamePage() {
    return (
        <>
            <NavBar />
            <div className={style.game}>
                <div>
                    <div className={style.ImgLogoOut}></div>
                </div>
                <img src={ImagemGame} className={style.ImagemGame}></img>
                <div>
                    <div className={style.ImgLogoOut}>
                        <img src={insta} className={style.imgsSocialMedia}></img>
                    </div>
                    <div className={style.ImgLogoOut}>
                        <img src={tiktok} className={style.imgsSocialMedia}></img>
                    </div>
                    <div className={style.ImgLogoOut}>
                        <img src={twitterx} className={style.imgsSocialMedia}></img>
                    </div>
                    <div className={style.ImgLogoOut}>
                        <img src={youtube} className={style.imgsSocialMedia}></img>
                    </div>
                </div>
            </div>
        </>
    );
}