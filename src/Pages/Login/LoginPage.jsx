import { CardLogin } from "../../components/Card-login/Card-login";
import style  from "./Login.module.css";

export default function LoginPage() {
    return(
        <>
        <div className={style["body-Login"]}>
            <CardLogin/>
        </div>
        </>
    );
}