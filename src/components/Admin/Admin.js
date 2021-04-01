import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AddBook from '../AddBook/AddBook';

const Admin = () => {
  return (
    <Container >
      <Row>
        <Col md={3}>
          <Button as={Link} to="/addBooks">Add Books</Button>
        </Col>
        <Col md={9}>
          <AddBook></AddBook>
        </Col>
      </Row>
    </Container>
  );
};

export default Admin;