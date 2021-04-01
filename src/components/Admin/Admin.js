import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AddBook from '../AddBook/AddBook';

const Admin = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col md={4}>
          <Button as={Link} to="/addBooks">Add Books</Button>
        </Col>
        <Col md={8}>
          <AddBook></AddBook>
        </Col>
      </Row>
    </Container>
  );
};

export default Admin;