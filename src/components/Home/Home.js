import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import Book from '../Book/Book';

const Home = () => {
  const [books, setBooks] = useState([])

  useEffect(()=>{
    fetch("https://rhubarb-crisp-18858.herokuapp.com/books")
    .then(res => res.json())
    .then(data => setBooks(data))
  },[])
  return (
    <Container>
      <Row className="mt-5 mb-5">
        {
          books.length === 0 && <Spinner className="m-auto" animation="border" size="lg" variant="success" />
        }
        {
          books.map(book => <Book key={book._id} book={book}></Book>)
        }
      </Row>
  
    </Container>
  );
};

export default Home;