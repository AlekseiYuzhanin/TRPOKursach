import { Tabs } from "antd";
import { FC } from "react";
import HomePage from "./HomePage";
import LoginPage from "./LoginPage";
import AbonentRegistrationForm from "./AbonentRegistrationForm";
import AdminPage from "./AdminPage";
import CallsPage from "./CallsPage";

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
          <div>4</div>
        </Tabs.TabPane>
        <Tabs.TabPane tab="Моя информация" key={5}>
          <div>5</div>
        </Tabs.TabPane>
        <Tabs.TabPane tab="Заблокировать" key={6}>
          <div>6</div>
        </Tabs.TabPane>
      </Tabs>
  )
}

export default TabsComponent;