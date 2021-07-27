import React, { useState, useEffect } from 'react';
import { Table, Tag, Space } from 'antd';
import { getUsers } from '../data/http';
import data from '../data/mockUser.json';
export const User = () => {
  // const [users, getUsersFromDb] = useState( [] );
  // getUsers().then( ( info ) => {
  //   getUsersFromDb( info );
  // } );
  // useEffect( () => {
  //   console.log( users );
  // }, [users] );

  const columns = [
    {
      title: 'Properties',
      dataIndex: 'property',
      key: 'property',
    },
    {
      title: 'Values',
      dataIndex: 'value',
      key: 'value',
    },
  ];
  return <Table columns={columns} dataSource={data} />
}

