import {FC, useEffect, useState} from "react";
import '../styles/LoginStyles.scss';
import { Table } from "antd";
import { ColumnsType } from "antd/es/table";
import { Typography } from "antd";
import { json } from "stream/consumers";

interface IData {
    CallId:number
    UserId:number;
    TownId: number;
    DateOfCalling:Date;
    CallDuration:number;
    TimeOfCall:string;
    FinalPrice:bigint;
    town: {
      DayCost: number;
      Discont: number;
      NightCost: number;
      TownId: number
      TownTitle: string;
    };
    user: {
      CallId:number
      UserId:number;
      TownId: number;
      DateOfCalling:Date;
      CallDuration:number;
      TimeOfCall:string;
      FinalPrice:bigint;
    }
}

const columns: ColumnsType<IData> = [
    {
      title: 'Номер телефона',
      dataIndex: 'user',
      key: 'user',
      render: (user:any) => `${user.PhoneNumber}`
    },
    {
      title: 'Межгородний',
      dataIndex: 'isCityMatchUser',
      key: 'isCityMatchUser',
    },
    {
      title: 'Дата звонка',
      dataIndex: 'DateOfCalling',
      key: 'DateOfCalling',
      render: (DateOfCalling:any) => `${String(DateOfCalling.slice(0,10))}`
    },
    {
      title: 'Длительность звонка',
      dataIndex: `CallDuration`,
      key: 'CallDuration',
    },
    {
      title: 'Скидка',
      key: 'town',
      dataIndex: 'town',
      render: (town:any) => `${String(town.Discont + '%').slice(3)}`,
    },
    {
      title: 'Время звонка',
      key: 'TimeOfCall',
      dataIndex: 'TimeOfCall',
    },
    {
      title: 'Итоговая стомость',
      key: 'FinalPrice',
      dataIndex: 'FinalPrice',
    },
  ];


const CallsPage:FC = () => {

    const [data,setData] = useState<IData[]>([]);

   
      const processedData = data.map((item) => ({
        ...item,
        isCityMatchUser: item.TownId === item.user.TownId ? "Нет" : "Да"
      }))

    const getCalls = async () => {
        const response = await fetch('http://localhost:5000/calls');
        const jsonData = await response.json();
        setData(jsonData);
      };

    useEffect(() => {
        getCalls()
    }, []);

    return(
        <Table dataSource={processedData} columns={columns}/>
    )
}

export default CallsPage;