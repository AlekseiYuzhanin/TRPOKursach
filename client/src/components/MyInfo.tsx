import { FC, useState } from "react";
import {Button, Form,Input } from "antd";
import axios from "axios";

interface FormData {
    LastName: string;
    FirstName: string;
    MiddleName?: string;
    Login: string;
    Password: string;
    PhoneNumber: string;
    PassportNumber: string;
}

const MyInfo:FC = () => {
 
    const [lastname,setLastName] = useState('Петров')
    const [firstname,setFirstName] = useState('Петр')
    const [middlename,setMiddleName] = useState('Афанасьевич')
    const [phonenumber,setPhoneNumber] = useState('+795350451113')
    const [passportnumber,setPassportNumber] = useState('5123 504123')
    const [town,settowntitle] = useState('Moskwa')
    const [phoneoperator,setPhoneOperator] = useState('Tele2')
    const [balance,setBalance] = useState('10000')
    
    axios.get('http://localhost:5000/users/getUser/qwerty1233')
  
    return(
            <Form 
            style={{flexDirection:"column",
            alignItems:"center",
            display:"flex", 
            justifyContent:"center", 
             maxWidth:"800px"}}
             >
                <Form.Item label="Фамилия" name="LastName" />
                <Input name="LastName" value={lastname} 
                 style={{maxWidth:"400px"}}/>
                <Form.Item label="Имя" name="FirstName"/>
                <Input name="FirstName"  value={firstname}
                 style={{maxWidth:"400px"}} />
                <Form.Item label="Отчество" name="MiddleName" />
                <Input name="MiddleName" value={middlename}
                style={{maxWidth:"400px"}}/>
                <Form.Item label="Номер телефона" name="PhoneNumber" />
                <Input name="PhoneNumber" value={phonenumber}
                 style={{maxWidth:"400px"}} />
                <Form.Item label="Номер паспорта" name="PassportNumber" />
                <Input name="PassportNumber" value={passportnumber} 
                 style={{maxWidth:"400px"}} />
                <Form.Item label="Город" name="Login" />
                <Input name="Login" value={town}
                 style={{maxWidth:"400px"}} />
                <Form.Item label="Телефонный оператор" name="Password"/>
                <Input name="Password"  value={phoneoperator}
                style={{maxWidth:"400px"}}/>
                 <Form.Item label="Баланс" name="Password"/>
                <Input name="Password" value={balance}
                 style={{maxWidth:"400px"}}/>
                <Form.Item style={{paddingTop:"20px"}}>
                    <Button type="primary" htmlType="submit" style={{width:"200px"}}>Обновить</Button>
                </Form.Item>
            </Form>
    )
}

export default MyInfo;