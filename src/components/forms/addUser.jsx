import React, { useState } from 'react';
import { Row, Col, Divider } from 'antd';
import { Modal } from 'antd';
import { CustomButton } from '../UI_components/button.jsx';
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
  Space,
} from 'antd';

export const AddUser = ( props ) => {
  const { handleOk, handleCancel, isModalVisible, addNewUser } = props;
  const [componentSize, setComponentSize] = useState( 'default' );
  const [form] = Form.useForm();

  const onFormLayoutChange = ( { size } ) => {
    setComponentSize( size );
  };
  return (
    <Modal title="Добавить пользователя" visible={isModalVisible} footer={null} onCancel={handleCancel}>
      <Form
        name="add_user_form"
        form={form}
        onFinish={( data ) => {
          addNewUser( data );
          handleOk();
          form.resetFields();
        }}
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        initialValues={{
          size: componentSize,
        }}
        onValuesChange={onFormLayoutChange}
        size={componentSize}
      >
        <Form.Item name="name" label="Имя:" rules={[{ required: true, message: 'Требуется ввести Ваше имя.' }]}>
          <Input />
        </Form.Item>
        <Form.Item name="surname" label="Фамилия:" rules={[{ required: true, message: 'Требуется ввести Вашу фамилию.' }]}>
          <Input />
        </Form.Item>
        <Form.Item name="lastname" label="Отчество:" rules={[{ required: true, message: 'Требуется ввести Ваше отчество.' }]}>
          <Input />
        </Form.Item>
        <Form.Item name="phone" label="Телефон:">
          <Input />
        </Form.Item>
        <Form.Item name="email" label="Электронная почта:" rules={[{ required: true, message: 'Требуется ввести Ваш номер телефона.' }]}>
          <Input />
        </Form.Item>
        <Form.Item name="role" label="Роль:" rules={[{ required: true, message: 'Укажите свою роль.' }]}>
          <Select>
            <Select.Option value="admin">Админ</Select.Option>
            <Select.Option value="user">Пользователь</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item name="birthday" label="Дата рождния:" rules={[{ required: true, message: 'Укажите Вашу дату рождения.' }]}>
          <DatePicker />
        </Form.Item>
        <Form.Item name="login" label="Логин:" rules={[{ required: true, message: 'Укажите логин.' }]}>
          <Input />
        </Form.Item>
        <Form.Item name="password" label="Пароль:" rules={[{ required: true, message: 'Укажите пароль.' }]}>
          <Input />
        </Form.Item>
        <Space>
          <Button type="primary" htmlType="submit">
            Сохранить
          </Button>
          <Button type="default" htmlType="reset">
            Отмена
          </Button>
        </Space>
      </Form>
    </Modal>
  );
}