import React, { useState, useEffect } from 'react';
import { Table, Tag, Space } from 'antd';
import { getUsers } from '../data/http';
import { EditTwoTone } from '@ant-design/icons';


export const Users = () => {
  const [loaded, setLoaded] = useState( false );
  const [users, getUsersFromDb] = useState( [] );

  useEffect( () => {
    if ( !loaded ) {
      getUsers().then( ( info ) => {
        getUsersFromDb( info );
        setLoaded( true );
      } );
    }
    //console.log( users );
  }, [users, loaded, setLoaded] );
  const onRow = ( record, rowIndex ) => ( {
    onClick: ( event ) => {
      console.log( event, record, rowIndex );
    }
  } );

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
    {
      title: 'Edit',
      key: 'edit',
      dataIndex: 'edit',
      render: () => <EditTwoTone />,
    },
  ];
  return <Table columns={columns} dataSource={users} onRow={onRow} />
}

