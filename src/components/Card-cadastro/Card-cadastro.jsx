import style from "./Card-cadastro.module.css"
import Logo from "../../assets/hippo.png"

export const CardCadastro = () => {
    return (
        <>
            <div className={style.CardBack}>
                <div className={style["Card-Icon"]}>
                    <img src={Logo} className={style["Logo-login"]}></img>
                </div>
                <div className={style["Card-Inputs"]}>
                    <label>Email:</label>
                    <input></input>
                    <label>Nome Completo:</label>
                    <input></input>
                    <div className={style["Inputs-Data-cpf"]}>
                        <div >
                            <label>Nascimento:</label>
                            <input className={style["Inputs-pequenos"]}></input>
                        </div>
                        <div>
                            <label>CPF:</label>
                            <input className={style["Inputs-pequenos-CPF"]}></input>
                        </div>
                    </div>
                    <label>Senha:</label>
                    <input></input>
                    <label>Confirmar Senha:</label>
                    <input></input>
                </div>
                <button className={style["button-Login"]}>
                    Cadastrar
                </button>
                <hr className={style["line-Login"]} />
                <div className={style["Link-Cadastro"]}>
                    <p>
                        Já possui conta? <a href="/">Faça Login</a>
                    </p>
                </div>

            </div>
        </>
    );
}