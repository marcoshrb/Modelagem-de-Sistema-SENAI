import { CardCadastro } from "../../components/Card-cadastro/Card-cadastro";
import style  from "./Cadastro.module.css";

export default function CadastroPage() {
    return(
        <>
        <div className={style["body-Cadastro"]}>
            <CardCadastro/>
        </div>
        </>
    );
}