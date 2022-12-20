import React, { useState, useContext, useReducer } from 'react';
import {Layout, Header, Modal, Button, message } from 'antd';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { ProfileContext } from '../context';
import { addUser } from '../data/http';
import { EditTwoTone, CloseCircleTwoTone, CheckCircleTwoTone } from '@ant-design/icons';
import { CustomButton } from '../components/UI_components/button.jsx';
import { GoalView } from '../components/forms/goal_preview.jsx';
import { userReducer, initUser } from '../reducer';

export const Registration = () => {
  const { profile, setProfile } = useContext(ProfileContext);
  const [ user, dispatch] = useReducer(userReducer, initUser);
  const history = useHistory();
  const [password, setPassword] = useState('');
  const [login, setLogin] = useState('');

  const onEnterPassword = (e) => {
    console.log(e.target.value);
    setPassword((prev) => e.target.value);
  }
  const onEnterLogin = (e) => {
    console.log(e.target.value);
    setLogin((prev) => e.target.value);
  }

  const onChangeValue = (v) => {
    const { name, value } = v.target;
    dispatch({ type: name, payload: { [name]: value }});
  }
  const deleteInputs = () => {
    dispatch({ type: 'deleteState' });
  }

  const onRigister = (e) => {
    //history.push('/');
    addUser(user)
      .then((data) =>  {
        //setProfile(data.body);
        history.push('/');
        deleteInputs();
      })
      .catch((error) => {
        message.error(error.message);
        deleteInputs();
      });
  }
  const btnLoginDisabled = Object.values(user).filter((value) => value?.length === 0)?.length !== 0;

  return (
    <Layout style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <div className='registration_container'>
        <div className='title'>Регистрация</div>

        <div className="item_wrapper">
          <div className="item-label">
            <label htmlFor='name'>Имя</label>
          </div>
          <input name='name' type={'text'} value={user?.name} onChange={onChangeValue} placeholder="введите имя"/>
        </div>

        <div className="item_wrapper">
          <div className="item-label">
            <label htmlFor='surname'>Фамилия</label>
          </div>
          <input name='surname' type={'text'} value={user?.surname} onChange={onChangeValue} placeholder="введите фамилию"/>
        </div>

        <div className="item_wrapper">
          <div className="item-label">
            <label htmlFor='lastname'>Отчество</label>
          </div>
          <input name='lastname' type={'text'} value={user?.lastname} onChange={onChangeValue} placeholder="введите отчество"/>
        </div>

        <div className="item_wrapper">
          <div className="item-label">
            <label htmlFor='phone'>Телефон</label>
          </div>
          <input name='phone' type={'tel'} value={user?.phone} onChange={onChangeValue} placeholder="введите телефон"/>
        </div>

        <div className="item_wrapper">
          <div className="item-label">
            <label htmlFor='email'>Электронная почта</label>
          </div>
          <input name='email' type={'email'} value={user?.email} onChange={onChangeValue} placeholder="введите электронную почту"/>
        </div>

        <div className="item_wrapper">
          <div className="item-label">
            <label htmlFor='birthday'>Дата рождения</label>
          </div>
          <input name='birthday' type={'datetime-local'} value={user?.birthday} onChange={onChangeValue} placeholder="введите дату рождения"/>
        </div>

        <div className="item_wrapper">
          <div className="item-label">
            <label htmlFor='login'>Логин</label>
          </div>
          <input name='login' type={'text'} value={user?.login} onChange={onChangeValue} placeholder="введите логин"/>
        </div>

        <div className="item_wrapper">
          <div className="item-label">
            <label htmlFor='password'>Пароль</label>
          </div>
          <input name='password' type={'password'} value={user?.password} onChange={onChangeValue} placeholder="введите пароль"/>
        </div>

        <div className="item_wrapper">
          <div className="item-label">
            <label htmlFor='password_1'>Повторный ввод пароля</label>
          </div>
          <input name='password_1' type={'password'} value={user?.password_1} onChange={onChangeValue} placeholder="введите пароль"/>
        </div>

        <div className='btn_container'>
          <Button
            disabled={btnLoginDisabled}
            style={{ width: '200px' }}
            type="primary"
            color='blue'
            size='large'
            shape='round'
            onClick={onRigister}
          >
            Зарегистрироваться
          </Button>
        </div>
      </div>
    </Layout>
  )
}

