import React from 'react';
import { Alert } from 'react-bootstrap';

const Error = () => {
  return (
    <div>
      <Alert variant="danger">
        <Alert.Heading>Four, oh Four!</Alert.Heading>
        <p>Make sure the name you entered is correct!</p>
      </Alert>
    </div>
  );
};
export default Error;
