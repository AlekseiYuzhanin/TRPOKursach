import { Layout, Menu, Row } from "antd";
import { FC } from "react";
import {useNavigate} from 'react-router-dom';
import { RouterNames } from "../router";
import { useTypedSelector } from "../hooks/useTypedSelector";

const Navbar:FC = () => {
    const router = useNavigate()
    const {isAuth} = useTypedSelector(state => state.authReducer);
     return(
        <Layout.Header>
            <Row justify="end">
                {isAuth 
                ?
                <Menu theme="dark" mode="horizontal" selectable={false}>
                    <div style={{color: 'white'}}>Трухаев Виктор</div>
                    <Menu.Item key={1}>Logout</Menu.Item>
                </Menu>
                :
                <Menu theme="dark" mode="horizontal" selectable={false}>
                    <Menu.Item onClick={() => router(RouterNames.LOGIN)} key={1}>Login</Menu.Item>
                </Menu> 
            }
                
            </Row>
        </Layout.Header>
    )
}

export default Navbar;