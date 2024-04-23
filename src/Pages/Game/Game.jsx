import { NavBar } from "../../components/Nav-bar/Nav-bar.jsx";
import style  from "./Game.module.css";

export default function GamePage() {
    return(
        <>
            <NavBar/>
            <div className={style.game}>

            </div>
        </>
    );
}