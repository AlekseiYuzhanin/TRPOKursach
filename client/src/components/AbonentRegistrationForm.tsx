import { FC, useState } from "react";
import {Button, Form,Input } from "antd";

const AbonentRegistrationForm:FC = () => {
    const [LastName, setLastName] = useState('')
    const [FirstName, setFirstName] = useState('')
    const [MiddleName, setMiddleName] = useState('')
    const [PhoneNumber, setPhoneNumber] = useState('')
    const [PassportNumber, setPassportNumber] = useState('')
    const [Login, setLogin] = useState('')
    const [Password, setPassword] = useState('')

    return(
            <Form style={{flexDirection:"column",
            alignItems:"center",
            display:"flex", 
            justifyContent:"center", 
             maxWidth:"800px"}}
             method="post"

             >
                <Form.Item label="Фамилия" name="LastName" />
                <Input style={{maxWidth:"400px"}} required/>
                <Form.Item label="Имя" name="FirstName" />
                <Input style={{maxWidth:"400px"}} required/>
                <Form.Item label="Отчество" name="MiddleName" />
                <Input style={{maxWidth:"400px"}}/>
                <Form.Item label="Номер телефона" name="LastName" />
                <Input style={{maxWidth:"400px"}} required/>
                <Form.Item label="Номер паспорта" name="LastName" />
                <Input style={{maxWidth:"400px"}} required/>
                <Form.Item label="Логин" name="LastName" />
                <Input style={{maxWidth:"400px"}} required/>
                <Form.Item label="Пароль" name="LastName"/>
                <Input style={{maxWidth:"400px"}} required/>
                <Form.Item style={{paddingTop:"20px"}}>
                    <Button type="primary" htmlType="submit" style={{width:"200px"}}>Confirm</Button>
                </Form.Item>
            </Form>
    )
}

export default AbonentRegistrationForm;