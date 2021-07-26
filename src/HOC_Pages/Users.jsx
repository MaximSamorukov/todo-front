import React, { useState, useEffect } from 'react';
import { Table, Tag, Space } from 'antd';
import { getUsers } from '../data/http';

export const Users = () => {
  const [users, getUsersFromDb] = useState( [] );
  getUsers().then( ( info ) => {
    getUsersFromDb( info );
  } );
  useEffect( () => {
    console.log( users );
  }, [users] );

  const columns = [
    {
      title: 'id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Login',
      dataIndex: 'login',
      key: 'login',
    },
    {
      title: 'Password',
      key: 'password',
      dataIndex: 'password',
    },
  ];
  return <Table columns={columns} dataSource={users} />
}

