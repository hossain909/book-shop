import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import plus from "../../icons/plus 1.png";
import DeleteBook from '../DeleteBook/DeleteBook';

const ManageBooks = () => {
  const [displayBooks, setDisplayBooks] = useState([])

  useEffect(() => {
    fetch("https://rhubarb-crisp-18858.herokuapp.com/books")
      .then(res => res.json())
      .then(data => {
        setDisplayBooks(data)})
  },[])
  return (
    <Container>
      <Row className="mt-5">
        <Col md={3}>
          <Button as={Link} to="/addBook">Add Books<img style={{width: "25px"}} src={plus} alt=""/></Button>
        </Col>
        <Col md={9}>
          <div className="d-flex justify-content-between">
            <h5 className="w-25">Book Name</h5>
            <h5 className="w-25">Author Name</h5>
            <h5 className="w-25">Price</h5>
            <h5>Action</h5>
          </div>
          {
            displayBooks.map(book => <DeleteBook book={book}></DeleteBook>)
          }
        </Col>
      </Row>
     
    </Container>
  );
};

export default ManageBooks;