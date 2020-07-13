import React from 'react';
import { TabContainer } from './styles.js';
import { Tabs } from 'antd';
import { Layout, Menu } from 'antd';
import Tasks from './Tasks';

const { TabPane } = Tabs;

const { Header, Content } = Layout;

const Home = () => {
    return(
      <Layout>

         <Header> 
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
            </Menu>
         </Header>

         <Content>
            <TabContainer>
            <Tabs defaultActiveKey="tasks">
               <TabPane tab="Tasks" key="tasks">
                  <Tasks></Tasks> 
               </TabPane>
               <TabPane tab="Categories" key="categories">
                  Categories
               </TabPane>
            </Tabs>
            </TabContainer>
         </Content>
         
      </Layout>
    )
};

export default Home;