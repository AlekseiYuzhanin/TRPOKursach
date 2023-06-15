import { Tabs } from "antd";
import { FC } from "react";
import HomePage from "./HomePage";
import LoginPage from "./LoginPage";

const TabsComponent:FC = () =>{
  return(
      <Tabs>
        <Tabs.TabPane tab="Tab 1" key={1}>
          <LoginPage></LoginPage>
        </Tabs.TabPane>
        <Tabs.TabPane tab="Tab 2" key={2}>
          <div>2</div>
        </Tabs.TabPane>
        <Tabs.TabPane tab="Tab 3" key={3}>
          <div>3</div>
        </Tabs.TabPane>
        <Tabs.TabPane tab="Tab 4" key={4}>
          <div>4</div>
        </Tabs.TabPane>
        <Tabs.TabPane tab="Tab 5" key={5}>
          <div>5</div>
        </Tabs.TabPane>
      </Tabs>
  )
}

export default TabsComponent;