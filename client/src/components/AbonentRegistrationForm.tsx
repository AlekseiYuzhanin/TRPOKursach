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

const AbonentRegistrationForm:FC = () => {
    const [form] = Form.useForm();
    const [formData, setFormData] = useState<FormData>({ LastName: '',
     FirstName: '',
      MiddleName: '',
    Login: '',
    Password: '',
    PhoneNumber: '',
    PassportNumber: '' });

    const handleSubmit = () => {
    axios.post('http://localhost:5000/users', formData)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    return(
            <Form form={form} onFinish={handleSubmit} 
            style={{flexDirection:"column",
            alignItems:"center",
            display:"flex", 
            justifyContent:"center", 
             maxWidth:"800px"}}
             >
                <Form.Item label="Фамилия" name="LastName" />
                <Input name="LastName" value={formData.LastName} 
                onChange={handleInputChange} style={{maxWidth:"400px"}}/>
                <Form.Item label="Имя" name="FirstName"/>
                <Input name="FirstName" value={formData.FirstName} 
                onChange={handleInputChange} style={{maxWidth:"400px"}} />
                <Form.Item label="Отчество" name="MiddleName" />
                <Input name="MiddleName" value={formData.MiddleName} 
                onChange={handleInputChange} style={{maxWidth:"400px"}}/>
                <Form.Item label="Номер телефона" name="PhoneNumber" />
                <Input name="PhoneNumber" value={formData.PhoneNumber} 
                onChange={handleInputChange} style={{maxWidth:"400px"}} />
                <Form.Item label="Номер паспорта" name="PassportNumber" />
                <Input name="PassportNumber" value={formData.PassportNumber} 
                onChange={handleInputChange} style={{maxWidth:"400px"}} />
                <Form.Item label="Логин" name="Login" />
                <Input name="Login" value={formData.Login} 
                onChange={handleInputChange} style={{maxWidth:"400px"}} />
                <Form.Item label="Пароль" name="Password"/>
                <Input name="Password" value={formData.Password} 
                onChange={handleInputChange} style={{maxWidth:"400px"}}/>
                <Form.Item style={{paddingTop:"20px"}}>
                    <Button type="primary" htmlType="submit" style={{width:"200px"}}>Confirm</Button>
                </Form.Item>
            </Form>
    )
}

export default AbonentRegistrationForm;