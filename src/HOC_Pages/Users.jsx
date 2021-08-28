import React, { useState, useEffect } from 'react';
import { Table, Tag, Space } from 'antd';
import { getUsers, addUser, deleteUser } from '../data/http';
import { EditTwoTone, CloseCircleOutlined } from '@ant-design/icons';
import { CustomButton } from '../components/UI_components/button.jsx';

export const Users = () => {
  const [loaded, setLoaded] = useState( false );
  const [users, getUsersFromDb] = useState( [] );

  const addNewUser = async () => {
    const answer = await addUser();
    setLoaded( false );
  };

  const delUser = async ( login ) => {
    const answer = await deleteUser( login );
    setLoaded( false );
  };

  useEffect( () => {
    if ( !loaded ) {
      getUsers()
        .then( ( info ) => {
          getUsersFromDb( info );
          setLoaded( true );
        },
          ( error ) => {
            console.log( error );
          } )
    }
    //console.log( users );
  }, [users, loaded, setLoaded] );
  const onRow = ( record, rowIndex ) => ( {
    onClick: ( event ) => {
      //console.log( event, record, rowIndex );
    }
  } );
  const prepaireData = ( data ) => {
    console.log( data );
    const prepairedData = data.map( ( item ) => ( {
      fullname: `${item.name} ${item.surname} ${item.lastname}`,
      ...item,
    } ) )
    return prepairedData;
  }
  const columns = [
    {
      title: 'id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Fullname',
      dataIndex: 'fullname',
      key: 'fullname',
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
    {
      title: 'Delete',
      key: 'delete',
      dataIndex: 'delete',
      render: ( _, record ) => {
        return (
          <button style={{
            border: 'none',
            backgroundColor: 'white',
          }} onClick={() => delUser( record.login )}>
            <CloseCircleOutlined />
          </button>
        );
      },
    },
  ];
  return (
    <>
      <div style={{ marginBottom: '10px' }}>
        <CustomButton title="Добавить" onClick={() => addNewUser()} />
      </div>
      <Table columns={columns} dataSource={prepaireData( users )} onRow={onRow} />
    </>
  )
}

