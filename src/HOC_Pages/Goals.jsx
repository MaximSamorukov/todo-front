import React, { useState, useEffect } from 'react';
import { Table, Tag, Space } from 'antd';
import { getGoals } from '../data/http';
import data from '../data/mockGoals.json';

export const Goals = () => {
  // const [goals, getGoalsFromDb] = useState([]);
  // getGoals().then((info) => {
  //   getGoalsFromDb(info);
  // });
  // useEffect(() => {
  //   console.log(goals);
  // }, [goals]);

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
    },
    {
      title: 'To Date',
      key: 'toDateTime',
      dataIndex: 'toDateTime',
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
    },
  ];
  return <Table columns={columns} dataSource={data} />
}

