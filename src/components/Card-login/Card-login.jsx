import style from "./Card-login.module.css"
import Logo from "../../assets/hippo.png"

export const CardLogin = () => {
    return (
        <>
            <div className={style.CardBack}>
                <div className={style["Card-Icon"]}>
                    <img src={Logo} className={style["Logo-login"]}></img>
                </div>
                <div className={style["Card-Inputs"]}>
                    <label>Email:</label>
                    <input></input>
                    <label>Senha:</label>
                    <input></input>
                </div>
                <button className={style["button-Login"]}>
                    Login
                </button>
                <hr className={style["line-Login"]}/>
                <h1>
                    Não possui login? 
                </h1>

            </div>
        </>
    );
}