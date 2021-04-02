import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BookDetailContext, UserContext } from '../../App';


const CheckOut = () => {
  const [bookDetail, setBookDetail] = useContext(BookDetailContext)
  const [loggedInUser, setLoggedInUser] = useContext(UserContext)
  const {bookName,quantity,price} = bookDetail[0] || {}
  const bookInfo = {
    bookName:bookName,
    quantity: quantity,
    price: price
  }
  const handleBooking = () =>{
    let addOrders = {...bookInfo, ...loggedInUser,orderPlaced: new Date()}
    fetch("https://rhubarb-crisp-18858.herokuapp.com/addOrders",{
      method: "POST",
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(addOrders),
    })
    .then(res => res.json())
    .then(data => {
      if(data){
        alert("Your order placed successfully")
      }
    })
  }
  return (
    <Container>
      <h2>CheckOut</h2>
      <div className="d-flex justify-content-between mt-5">
        <h5>Description</h5>
        <h5>Quantity</h5>
        <h5>Price</h5>
      </div>
      <div className="d-flex justify-content-between">
        <p>{bookName}</p>
        <p>{quantity}</p>
        <p>${price}</p>
      </div>
      <Link to="/orders">
        <button className="btn btn-primary mt-4" onClick={() => handleBooking()} >CheckOut</button>
      </Link>
    </Container>
  );
};

export default CheckOut;