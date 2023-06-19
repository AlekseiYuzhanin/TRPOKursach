import {FC, useEffect, useState} from "react";
import '../styles/LoginStyles.scss';
import { Table } from "antd";
import { ColumnsType } from "antd/es/table";

interface IData {
    LastName: string;
    FirstName:string;
    MiddleName:string;
    PhoneNumber:string;
    Ballance:bigint;
}

const columns: ColumnsType<IData> = [
    {
      title: 'Фамилия',
      dataIndex: 'LastName',
      key: '1',
    },
    {
      title: 'Имя',
      dataIndex: 'FirstName',
      key: '2',
    },
    {
      title: 'Отчество',
      dataIndex: `MiddleName`,
      key: '3',
    },
    {
      title: 'Номер телефона',
      key: 'PhoneNumber',
      dataIndex: 'PhoneNumber',
    },
    {
      title: 'Текущий баланс (в рублях)',
      key: 'Ballance',
      dataIndex: 'Ballance',
    },
  ];

const LoginPage:FC = () => {

    const [data,setData] = useState<IData[]>([]);

    const getUsers = async () => {
        const response = await fetch('http://localhost:5000/users');
        const jsonData = await response.json();
        setData(jsonData);
      };

    useEffect(() => {
        getUsers()
    }, []);

    return(
        <Table dataSource={data} columns={columns}/>
    )
}

export default LoginPage;