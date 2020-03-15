import React from 'react';
import { Button } from '@material-ui/core';

const MaterialButton = ({ children, ...props }) => {
  return <Button {...props}>{children}</Button>;
};

export default MaterialButton;
