import React, { useState, useEffect, useContext, useMemo } from 'react';
import { Table, Tag, Space } from 'antd';
import { getUsers, addUser, deleteUser, editUserFunction } from '../data/http';
import { EditTwoTone, CloseCircleOutlined } from '@ant-design/icons';
import { ProfileContext } from '../context';
import { useNavigate } from 'react-router-dom';
import { CustomButton } from '../components/UI_components/button.jsx';
import { AddUser } from '../components/forms/addUser.jsx';
import { EditUser } from '../components/forms/editUser.jsx';

import moment from 'moment';

export const Users = () => {
  const navigate = useNavigate();
  const { isAdmin, isUser, profile: { role } } = useContext(ProfileContext);
  const [loaded, setLoaded] = useState( false );
  const [users, getUsersFromDb] = useState( [] );
  const [addUserVisible, setAddUserVisible] = useState( false );
  const [editPopupVisible, setEditPopupVisible] = useState( false );
  const [userData, setUserData] = useState();

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

  const editUserFormOnOk = () => {
    setEditPopupVisible( false );
  }

  const editUserFormOnCancel = () => {
    setEditPopupVisible( false );
  }

  const editUser = async ( user ) => {
    const answer = await editUserFunction( user );
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

  }, [users, loaded, setLoaded] );
  const onRow = ( record, rowIndex ) => ( {
    onDoubleClick: ( event ) => {
      if (record?.id && isAdmin) {
        navigate(`/user/${record?.id}`);
      }
    },
  } );
  const prepaireData = ( data ) => {
    const prepairedData = data && data.map( ( item ) => ( {
      fullname: `${item.name} ${item.surname} ${item.lastname}`,
      ...item,
      birthday: moment( item.birthday ).format( "DD.MM.YYYY" ),
    } ) )
    return prepairedData;
  }
  const columnsForUser = useMemo(() => [
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
  ], []);
  const columnsForAdmin = useMemo(() => [
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
      render: ( _, record ) => {
        return (
          <EditTwoTone onClick={() => {
            const newBirthdayValue = moment( record.birthday, "DD.MM.YYYY" );
            setUserData( { ...record, birthday: newBirthdayValue, } );
            setEditPopupVisible( true );
          }} />
        )
      },
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
  ], []);
  const columns = {
    admin: columnsForAdmin,
    user: columnsForUser,
  }

  return (
    <>
        {
          isAdmin && (
            <div style={{ marginBottom: '10px' }}>
              <CustomButton title="Добавить пользователя" onClick={() => setAddUserVisible( true )} />
            </div>

          )
        }
      <Table columns={columns[role]} dataSource={prepaireData( users )} onRow={onRow} />
      <AddUser handleOk={addUserFormOnOk} handleCancel={addUserFormOnCancel} isModalVisible={addUserVisible} addNewUser={addNewUser} />
      {userData && (
        <EditUser user={userData} handleOk={editUserFormOnOk} handleCancel={editUserFormOnCancel} isModalVisible={editPopupVisible} editUser={editUser} />
      )}
    </>
  )
}

