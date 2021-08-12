import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';
import { Layout, Menu, Avatar, Space, Row, Col } from 'antd';
import { Users } from './Users.jsx';
import { Goals } from './Goals.jsx';
import { User } from './User.jsx';
import { v4 as uuidv4 } from 'uuid';
import { UserOutlined } from '@ant-design/icons';
import { CONSTANTS } from '../data/constants';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect,
  useLocation,
  useHistory,
} from "react-router-dom";
import '../styles/style.css';

const { Header, Content, Footer } = Layout;
export const Navigation = () => {
  const history = useHistory();
  const location = useLocation();
  console.log( location );
  const handleClick = ( e ) => {
    history.push( e.key );
  };
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Row>
          <Col span={22}>
            <Menu
              theme="dark"
              mode="horizontal"
              onClick={handleClick}
              selectedKeys={location?.pathname.split( '/' )[1]}
            >
              <Menu.Item key="users">Пользователи</Menu.Item>
              <Menu.Item key="goals">Цели</Menu.Item>
            </Menu>
          </Col>
          <Col span={2}>
            <NavLink onClick={handleClick} key="user" to={`/user`}><Avatar size={40} icon={<UserOutlined />} /></NavLink>
          </Col>
        </Row>

      </Header>
      <Content style={{ "marginTop": '20px', padding: '0 50px' }}>
        <div className="site-layout-content">
          <Switch>
            <Route path="/goals" component={Goals} />
            <Route path="/users" component={Users} />
            <Route path="/user" component={User} />
            <Route path="/" render={() => <Redirect to="/users" />} />
          </Switch>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  )

}
