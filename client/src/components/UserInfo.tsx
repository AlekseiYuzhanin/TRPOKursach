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

const DepositPage:FC = () => {
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
        window.alert(`Пользователь с именем ${response.data.FirstName} был успешно добавлен!`)
      })
      .catch((error) => {
        console.log(error);
        window.alert('Такой пользователь уже существует!')
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
                <Form.Item label="Логин" name="LastName" />
                <Input name="LastName" value={formData.LastName} 
                onChange={handleInputChange} style={{maxWidth:"400px"}}/>
                <Form.Item label="Сумма" name="FirstName"/>
                <Input name="FirstName" value={formData.FirstName} 
                onChange={handleInputChange} style={{maxWidth:"400px"}} />
                <Form.Item style={{paddingTop:"20px"}}>
                    <Button type="primary" htmlType="submit" style={{width:"200px"}}>Пополнить</Button>
                </Form.Item>
            </Form>
    )
}

export default DepositPage;