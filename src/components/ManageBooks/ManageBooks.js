import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import DeleteBook from '../../DeleteBook/DeleteBook';

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
      <div className="d-flex justify-content-between mt-5">
        <h5 className="w-25">Book Name</h5>
        <h5 className="w-25">Author Name</h5>
        <h5 className="w-25">Price</h5>
        <h5>Action</h5>
      </div>
      {
        displayBooks.map(book => <DeleteBook book={book}></DeleteBook>)
      }
    </Container>
  );
};

export default ManageBooks;