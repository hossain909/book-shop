import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const DeleteBook = ({book}) => {
  const [deleted, setDeleted] = useState(false)

  const handleDeleteBook = (id) =>{
    fetch(`http://localhost:5000/delete/${id}`, {
      method: "DELETE",
    })
      .then(res => res.json())
      .then(result => {
        setDeleted(result)
      })
  }
  return (
        <div className="d-flex justify-content-between" >
          <p className="mt-1 w-25">{book.bookName}</p>
          <p className="mt-1 w-25">{book.authorName}</p>
          <p className="mt-1 w-25">{book.price}</p>
          <Button onClick={() => handleDeleteBook(book._id)} size="sm" className="btn-danger mt-1">Delete</Button>
        </div>
  );
};

export default DeleteBook;