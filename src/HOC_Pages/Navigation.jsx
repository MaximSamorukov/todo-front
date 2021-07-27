import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';
import { Layout, Menu, Avatar, Space, Row, Col } from 'antd';
import { Users } from './Users.jsx';
import { v4 as uuidv4 } from 'uuid';
import { UserOutlined } from '@ant-design/icons';

import '../styles/style.css';

const { Header, Content, Footer } = Layout;
export const Navigation = () => {
  console.log('top');
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Row>
          <Col span={22}>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
              <Menu.Item key={uuidv4()}>Цели</Menu.Item>
              <Menu.Item key={uuidv4()}>Пользователи</Menu.Item>
            </Menu>
          </Col>
          <Col span={2}>>
            <Avatar size={40} icon={<UserOutlined />} />
          </Col>

        </Row>
      </Header>
      <Content style={{ "margin-top": '20px', padding: '0 50px' }}>
        <div className="site-layout-content">
          <Users />
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  )

}
