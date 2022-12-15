import React, { useState, useEffect } from 'react';
import { Table, Tag, Space, Layout, Header } from 'antd';
import { getGoals } from '../data/http';
import { EditTwoTone, CloseCircleTwoTone, CheckCircleTwoTone } from '@ant-design/icons';
import { CustomButton } from '../components/UI_components/button.jsx';
import { GoalView } from '../components/forms/goal_preview.jsx';

export const Goals = () => {
  const [goals, getGoalsFromDb] = useState( [] );
  const [loaded, setLoaded] = useState( false );
  const [goalPopup, showGoalPopup] = useState( false );
  const handleOk = () => showGoalPopup( false );
  const handleCancel = () => showGoalPopup( false );
  const showGoalPreview = () => showGoalPopup( true );

  useEffect( () => {
    if ( !loaded ) {
      getGoals().then( ( info ) => {
        console.log( info );
        getGoalsFromDb( info );
      } );
      setLoaded( true );
    }
  }, [goals, loaded, setLoaded] );

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
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'From Date',
      key: 'fromDateTime',
      dataIndex: 'fromDateTime',
      render: ( date ) => new Date( date ).toLocaleDateString(),
    },
    {
      title: 'To Date',
      key: 'toDateTime',
      dataIndex: 'toDateTime',
      render: ( date ) => new Date( date ).toLocaleDateString(),
    },
    {
      title: 'Actions',
      key: 'actions',
      dataIndex: 'actions',
    },
    {
      title: 'Achieved',
      key: 'achieved',
      dataIndex: 'achieved',
      render: ( data ) => data ? 'Yes' : 'No',
    },
    {
      title: 'Edit',
      key: 'edit',
      dataIndex: 'edit',
      render: () => <EditTwoTone onClick={showGoalPreview} />,
      width: 100,
    },
    {
      title: 'Mark done',
      key: 'done',
      dataIndex: 'done',
      render: () => <CheckCircleTwoTone twoToneColor="#52c41a" />,
      width: 100,
    },
    {
      title: 'Delete',
      key: 'delete',
      dataIndex: 'delete',
      render: () => <CloseCircleTwoTone twoToneColor="#eb2f96" />,
      width: 100,
    }
  ];
  return (
    <>
      <Layout style={{ display: 'flex', flexDirection: 'column', backgroundColor: 'white' }}>
        <CustomButton onClick={showGoalPreview} style={{ width: '130px', height: '40px', marginBottom: '20px', alignSelf: 'flex-end' }} title="Добавить цель" />
        <Table columns={columns} dataSource={goals || []} onRow={onRow} />
      </Layout>
      <GoalView handleOk={handleOk} handleCancel={handleCancel} isModalVisible={goalPopup} />
    </>
  )
}

