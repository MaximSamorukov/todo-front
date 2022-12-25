import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Table, Tag, Space } from 'antd';
import { ProfileContext } from '../context';
import { getUser } from '../data/http';
import { createDataUser } from '../data/functions';
import data from '../data/mockUser.json';
export const User = () => {
  const { id } = useParams();
  const profile = useContext(ProfileContext);
   const [user, setUser] = useState([]);
   useEffect(() => {
     getUser(id)
      .then( ( info ) => {
        setUser(createDataUser(info));
      })
      .catch((err) => {
        console.error(err);
        setUser([]);
      })
   },[]);


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
  return <Table columns={columns} dataSource={user} />
}

