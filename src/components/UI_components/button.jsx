import React from 'react';
import { Button } from 'antd';


export const CustomButton = ( props ) => {
  const { title, style, onClick } = props;
  return (
    <Button
      onClick={onClick}
      style={style}
      type="primary"
      size="middle"

    >
      {title}
    </Button>
  );
}