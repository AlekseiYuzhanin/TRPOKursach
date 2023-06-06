import {FC} from "react";
import '../styles/LoginStyles.scss';
import DefaultButton from "./UI/button/DefaultButton";

const LoginPage:FC = () => {
    return(
        <div className="wrapper">
            <div className="container">
                <form>
                    <div className="">
                        <label>Login</label>
                        <input type="text" name="login" required/>
                    </div>
                    <div>
                        <label>Password</label>
                        <input type="password" name="password" required/>
                    </div>
                    <DefaultButton type="submit">Login</DefaultButton>
                </form>
            </div>
        </div>
    )
}

export default LoginPage;