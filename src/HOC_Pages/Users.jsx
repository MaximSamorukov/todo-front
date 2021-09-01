import React, { useState, useEffect } from 'react';
import { Table, Tag, Space } from 'antd';
import { getUsers, addUser, deleteUser } from '../data/http';
import { EditTwoTone, CloseCircleOutlined } from '@ant-design/icons';
import { CustomButton } from '../components/UI_components/button.jsx';
import { AddUser } from '../components/forms/addUser.jsx';
import moment from 'moment';

export const Users = () => {
  const [loaded, setLoaded] = useState( false );
  const [users, getUsersFromDb] = useState( [] );
  const [addUserVisible, setAddUserVisible] = useState( false );

  const addUserFormOnOk = () => {
    setAddUserVisible( false );
  }

  const addUserFormOnCancel = () => {
    setAddUserVisible( false );
  }

  const addNewUser = async ( user ) => {
    const answer = await addUser( user );
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
    const prepairedData = data && data.map( ( item ) => ( {
      fullname: `${item.name} ${item.surname} ${item.lastname}`,
      ...item,
      birthday: moment( item.birthday ).format( "DD.MM.YYYY" ),
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
      title: 'Birthday',
      dataIndex: 'birthday',
      key: 'birthday',
    },
    {
      title: 'Role',
      dataIndex: 'role',
      key: 'role',
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
        <CustomButton title="Добавить" onClick={() => setAddUserVisible( true )} />
      </div>
      <Table columns={columns} dataSource={prepaireData( users )} onRow={onRow} />
      <AddUser handleOk={addUserFormOnOk} handleCancel={addUserFormOnCancel} isModalVisible={addUserVisible} addNewUser={addNewUser} />
    </>
  )
}

