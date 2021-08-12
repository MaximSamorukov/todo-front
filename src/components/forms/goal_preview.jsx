import React from 'react';
import { Modal } from 'antd';

export const GoalView = ( props ) => {
  const { handleOk, handleCancel, isModalVisible } = props;
  return (
    <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Modal>
  );
}