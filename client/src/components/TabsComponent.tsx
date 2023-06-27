import { Tabs } from "antd";
import { FC } from "react";
import HomePage from "./HomePage";
import LoginPage from "./LoginPage";
import AbonentRegistrationForm from "./AbonentRegistrationForm";
import AdminPage from "./AdminPage";
import CallsPage from "./CallsPage";
import DepositPage from "./DepositPage";
import MyInfo from "./MyInfo";
import BanUser from "./BanUser";

const TabsComponent:FC = () =>{
  return(
      <Tabs tabPosition="top" style={{paddingTop: "10%", alignItems: "center", justifyContent:"center"}}>
        <Tabs.TabPane tab="Список абонентов" key={1}>
          <LoginPage></LoginPage>
        </Tabs.TabPane>
        <Tabs.TabPane tab="Зарегестрировать абонента" key={2}>
          <AbonentRegistrationForm></AbonentRegistrationForm>
        </Tabs.TabPane>
        <Tabs.TabPane tab="Список звонков" key={3}>
          <CallsPage/>
        </Tabs.TabPane>
        <Tabs.TabPane tab="Пополнить счет" key={4}>
          <DepositPage></DepositPage>
        </Tabs.TabPane>
        <Tabs.TabPane tab="Моя информация" key={5}>
          <MyInfo></MyInfo>
        </Tabs.TabPane>
        <Tabs.TabPane tab="Заблокировать" key={6}>
          <BanUser></BanUser>
        </Tabs.TabPane>
      </Tabs>
  )
}

export default TabsComponent;