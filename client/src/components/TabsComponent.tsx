import { Tabs } from "antd";
import { FC } from "react";
import HomePage from "./HomePage";
import LoginPage from "./LoginPage";

const TabsComponent:FC = () =>{
  return(
      <Tabs tabPosition="left" style={{paddingTop: "10%", alignItems: "center", justifyContent:"center"}}>
        <Tabs.TabPane tab="Список абонентов" key={1}>
          <LoginPage></LoginPage>
        </Tabs.TabPane>
        <Tabs.TabPane tab="Зарегестрировать абонента" key={2}>
          <div>2</div>
        </Tabs.TabPane>
        <Tabs.TabPane tab="Список звонков" key={3}>
          <div>3</div>
        </Tabs.TabPane>
        <Tabs.TabPane tab="Пополнить счет" key={4}>
          <div>4</div>
        </Tabs.TabPane>
        <Tabs.TabPane tab="Моя информация" key={5}>
          <div>5</div>
        </Tabs.TabPane>
        <Tabs.TabPane tab="Заблокировать абонента" key={6}>
          <div>6</div>
        </Tabs.TabPane>
      </Tabs>
  )
}

export default TabsComponent;