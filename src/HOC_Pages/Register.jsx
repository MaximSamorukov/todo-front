import React, { useState } from 'react';
import {Layout, Header, Modal, Button } from 'antd';
import { getGoals } from '../data/http';
import { EditTwoTone, CloseCircleTwoTone, CheckCircleTwoTone } from '@ant-design/icons';
import { CustomButton } from '../components/UI_components/button.jsx';
import { GoalView } from '../components/forms/goal_preview.jsx';

export const Register = () => {
  const [password, setPassword] = useState('');
  const [login, setLogin] = useState('');
  const [goals, getGoalsFromDb] = useState( [] );
  const [loaded, setLoaded] = useState( false );
  const [goalPopup, showGoalPopup] = useState( true );
  const handleOk = () => showGoalPopup( false );
  const handleCancel = () => showGoalPopup( false );
  const showGoalPreview = () => showGoalPopup( true );
  const onEnterPassword = (e) => {
    console.log(e.target.value);
    setPassword((prev) => e.target.value);
  }
  const onEnterLogin = (e) => {
    console.log(e.target.value);
    setLogin((prev) => e.target.value);
  }
  const onLogin = (e) => {
    console.log({ password, login });
  }
  const btnLoginDisabled = password.length === 0 || login.length === 0;
  return (
    <Layout style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <div className='login_container'>
        <div className='title'>Вход в приложение</div>
        <div className="login">
          <div className="login-label">
            <label htmlFor='login'>Введите логин</label>
          </div>
          <input name='login' type={'text'} value={login} onChange={onEnterLogin} placeholder="введите значений"/>
        </div>
        <div className="password">
          <div className="password-label">
            <label htmlFor='password'>Введите пароль</label>
          </div>
          <input name='password' type={'password'} value={password} onChange={onEnterPassword} placeholder="введите пароль"/>
        </div>
        <div className='btn_container'>
          <Button
            disabled={btnLoginDisabled}
            style={{ width: '200px' }}
            type="primary"
            color='blue'
            size='large'
            shape='round'
            onClick={onLogin}
          >
            Вход
          </Button>
        </div>
      </div>
    </Layout>
  )
}

