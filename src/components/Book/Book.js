import React, { useContext } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BookDetailContext } from '../../App';

const Book = ({book}) => {
 const [bookDetail, setBookDetail] = useContext(BookDetailContext)
 const loadSingeBook = (id) =>{
   fetch(`http://localhost:5000/book/${id}`)
   .then(res => res.json())
   .then(data => {
     setBookDetail([data])
   })
 }
  return (
    <Card className="col-md-4 text-center" style={{width: "15rem"}}>
      <Card.Img className="w-75 m-auto" variant="top" src={book.imageURL} />
      <Card.Body>
        <Card.Title>{book.bookName}</Card.Title>
        <Card.Text>{book.authorName}</Card.Text>
        <footer className="d-flex justify-content-between">
          <h5>Price:$ {book.price}</h5>
          <Button onClick={()=>loadSingeBook(book._id)} as={Link} to="/checkOut" variant="primary">Buy Now</Button>
        </footer>
      </Card.Body>
    </Card>
    
  );
};

export default Book;