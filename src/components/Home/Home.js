import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Book from '../Book/Book';

const Home = () => {
  const [books, setBooks] = useState([])

  useEffect(()=>{
    fetch("http://localhost:5000/books")
    .then(res => res.json())
    .then(data => setBooks(data))
  },[])
  return (
    <Container>
      <Row className="mt-5 mb-5">
        {
          books.map(book => <Book key={book._id} book={book}></Book>)
        }
      </Row>
  
    </Container>
  );
};

export default Home;