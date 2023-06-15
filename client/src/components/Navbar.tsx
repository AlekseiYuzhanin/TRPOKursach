import { Layout, Menu, Row } from "antd";
import { FC } from "react";
import {useNavigate} from 'react-router-dom';
import { RouterNames } from "../router";

const Navbar:FC = () => {
    const router = useNavigate();
    const auth = true;
    console.log(router)
    return(
        <Layout.Header>
            <Row justify="end">
                {auth 
                ?
                <Menu theme="dark" mode="horizontal" selectable={false}>
                    <div style={{color: 'white'}}>Admin</div>
                    <Menu.Item key={1}>Logout</Menu.Item>
                </Menu>
                :
                <Menu theme="dark" mode="horizontal" selectable={false}>
                    <Menu.Item onClick={() => router(RouterNames.LOGIN)} key={1}>Login</Menu.Item>
                    <Menu.Item onClick={() => router(RouterNames.REGISTRATION)} key={2}>Registration</Menu.Item>
                </Menu> 
            }
                
            </Row>
        </Layout.Header>
    )
}

export default Navbar;