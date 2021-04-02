import React from 'react';
import { Container } from 'react-bootstrap';
import ManageBooks from '../ManageBooks/ManageBooks';

const Admin = () => {
  return (
    <Container className="mt-5">
      <ManageBooks></ManageBooks>
    </Container>
  );
};

export default Admin;