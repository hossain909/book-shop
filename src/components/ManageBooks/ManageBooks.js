import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import DeleteBook from '../../DeleteBook/DeleteBook';

const ManageBooks = () => {
  const [displayBooks, setDisplayBooks] = useState([])

  useEffect(() => {
    fetch("http://localhost:5000/books")
      .then(res => res.json())
      .then(data => {
        setDisplayBooks(data)})
  },[])
  return (
    <Container>
      <div className="d-flex justify-content-between mt-5">
        <h5 className="w-25">Book Name</h5>
        <h5>Author Name</h5>
        <h5>Price</h5>
        <h5>Action</h5>
      </div>
      {
        displayBooks.map(book => <DeleteBook book={book}></DeleteBook>)
      }
    </Container>
  );
};

export default ManageBooks;