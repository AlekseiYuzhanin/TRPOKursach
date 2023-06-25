import {FC, useEffect, useState} from "react";
import '../styles/LoginStyles.scss';
import { Space, Table } from "antd";
import { ColumnsType } from "antd/es/table";
import axios from "axios";

interface Roles{
  value:string;
  description:string
}

interface Towns {
  TownId: number;
  TownTitle:string;
  DayCost: number;
  NightCost:number;
  Discont:number;
}

interface IData {
    Login:string;
    LastName: string;
    FirstName:string;
    MiddleName:string;
    town: {
      DayCost: number;
      Discont: number;
      NightCost: number;
      TownId: number
      TownTitle: string;
    };
    Banned: boolean;
    PhoneNumber:string;
    Ballance:bigint;
    roles: Roles[];
}


const columns:ColumnsType<IData> = [
    {
      title: 'Фамилия',
      dataIndex: 'LastName',
      key: 'LastName'
    },
    {
      title: 'Имя',
      dataIndex: 'FirstName',
      key: 'FirstName',
    },
    {
      title: 'Отчество',
      dataIndex: 'MiddleName',
      key: 'MiddleName',
    },
    {
      title: 'Номер телефона',
      dataIndex: `PhoneNumber`,
      key: 'PhoneNumber',
    },
    {
      title: 'Город',
      key: 'town',
      dataIndex: 'town',
      render: (town:any) => `${town.TownTitle}`,
    },
    {
      title: 'Оператор',
      key: 'PhoneOperator',
      dataIndex: 'PhoneOperator',
    },
    {
      title: 'Логин',
      key: 'Login',
      dataIndex: 'Login',
    },
    {
      title: 'Текущий баланс (в рублях)',
      key: 'Ballance',
      dataIndex: 'Ballance',
    },
  ];

const LoginPage:FC = () => {

    const [data,setData] = useState<IData[]>([]);
    

    useEffect(() => {
      const getUsers = async () => {
        const response = await axios.get<IData  []>('http://localhost:5000/users');
        setData(response.data);
        console.log(response.data)
      };
  
      getUsers();
    }, []);
    

    return(
        <Table dataSource={data} columns={columns}/>
    )
}

export default LoginPage;