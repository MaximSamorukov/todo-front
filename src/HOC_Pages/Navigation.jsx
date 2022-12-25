import React, { useState, useEffect, useContext } from 'react';
import { Layout, Menu, Avatar, Space, Row, Col } from 'antd';
import { Users } from './Users.jsx';
import { Goals } from './Goals.jsx';
import { Register } from './Register.jsx';
import { Registration } from './Registration.jsx';
import { User } from './User.jsx';
import { v4 as uuidv4 } from 'uuid';
import { UserOutlined } from '@ant-design/icons';
import { CONSTANTS } from '../data/constants';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  redirect,
  useLocation,
  Navigate,
  useNavigate
} from "react-router-dom";
import { ProfileContext } from '../context';
import '../styles/style.css';

const { Header, Content, Footer } = Layout;
export const Navigation = () => {
  const navigate = useNavigate();
  const { isAdmin, setProfile } = useContext(ProfileContext)
  const location = useLocation();

  const handleClick = ( e ) => {
    navigate(`/${e.key}`);
  };

  const onExit = () => {
    setProfile(null);
  }

  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Row>
          <Col span={24}>
            <Menu
              theme="dark"
              mode="horizontal"
              onClick={handleClick}
              selectedKeys={location?.pathname.split( '/' )[1]}
              items={isAdmin ? [
                {
                  key: 'users',
                  label: 'Пользователи',
                },
                {
                  key: 'goals',
                  label: 'Цели',
                },
                {
                  key: '_current_user',
                  label: <Avatar size={40} icon={<UserOutlined />} />,
                  children: [
                    {
                      label: 'Пользователь',
                      key: 'user',
                    },
                    {
                      label: 'Выход',
                      key: 'register',
                      onClick: onExit,
                    }
                  ]
                }
              ] : []
            }
              >
            </Menu>
          </Col>
        </Row>

      </Header>
      <div className="content" style={{ padding: '10px'}}>
        <div className="site-layout-content">
          <>
            {isAdmin ? (
              <Routes>
                <Route path="register" element={<Register />} />
                <Route path="goals" element={<Goals />} />
                <Route path="users" element={<Users />} />
                <Route path="user" element={<User />} />
                <Route path="*" element={<Navigate to="/users" />} />
              </Routes>
            ) : (
              <Routes>
                <Route path='*' element={ <Navigate to="/register" /> } />
                <Route path="/register" element={<Register />} />
                <Route path="/registration" element={<Registration />} />
              </Routes>
            )}
          </>
        </div>
      </div>
    </Layout>
  )

}
