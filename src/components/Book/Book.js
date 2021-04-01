import React, { useContext } from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BookDetailContext } from '../../App';

const Book = ({book}) => {
 const [bookDetail, setBookDetail] = useContext(BookDetailContext)
 const loadSingeBook = (id) =>{
   fetch(`https://rhubarb-crisp-18858.herokuapp.com/book/${id}`)
   .then(res => res.json())
   .then(data => {
     setBookDetail([data])
   })
 }
  const cardStyle = {
    width: '15rem',
    margin: "auto",
    marginBottom: "35px",
    textAlign: "center",
    color: "#fff",
    backgroundColor: "#073b1a",
    boxShadow: "10px 10px 94px 50px rgba(0,0,0,0.54) inset"
  }
  const authorTextColor = {
    color: "orange"
  }
  return (
    <Col md={3}>
      <Card className="text-center" style={cardStyle}>
        <Card.Img className="w-75 m-auto p-3" variant="top" src={book.imageURL} fluid="true"/>
        <Card.Body>
          <Card.Title>{book.bookName}</Card.Title>
          <Card.Text style={authorTextColor}>{book.authorName}</Card.Text>
          <footer className="d-flex justify-content-between">
            <h6>Price:$ {book.price}</h6>
            <Button onClick={()=>loadSingeBook(book._id)} as={Link} to="/checkOut" variant="primary" size="sm">Buy Now</Button>
          </footer>
        </Card.Body>
      </Card>
    </Col>
    
  );
};

export default Book;