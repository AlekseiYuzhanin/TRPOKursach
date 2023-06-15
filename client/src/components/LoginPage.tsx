import {FC} from "react";
import '../styles/LoginStyles.scss';

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
                </form>
            </div>
        </div>
    )
}

export default LoginPage;