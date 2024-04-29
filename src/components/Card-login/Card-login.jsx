// import { useHistory } from "react-router-dom";
import style from "./Card-login.module.css"
import Logo from "../../assets/hippo.png"

export const CardLogin = () => {

    // const history = useHistory();
    
    const Login = () => 
    {
        // history.push("/home");
    }

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
                <button className={style["button-Login"]} onClick={Login}>
                    Login
                </button>
                <hr className={style["line-Login"]} />
                <div className={style["Link-Cadastro"]}>
                    <p>
                        Não possui login? <a href="/cadastro">Cadastrar</a>
                    </p>
                </div>

            </div>
        </>
    );
}