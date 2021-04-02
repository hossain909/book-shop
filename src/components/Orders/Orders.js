import React, { useContext, useEffect, useState } from 'react';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import { UserContext } from '../../App';
import OrderDetail from '../../OrderDetail/OrderDetail';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loggedInUser, setLoggedInUser] = useContext(UserContext)
  const {email,orderPlaced} = orders[0] || {}

  useEffect(()=>{
    fetch("https://rhubarb-crisp-18858.herokuapp.com/orders?email="+loggedInUser.email)
    .then(res => res.json())
    .then(data => setOrders(data))
  },[loggedInUser.email])

  const totalPrice = orders.reduce((sum, item) => sum + parseInt(item.price), 0)
  return (
    <Container>
      <h6>Order Time: {orderPlaced}</h6>
       <div style={{width: "20px", margin: "auto"}}>
        {
          orders.length === 0 && <Spinner animation="border" size="lg" variant="success" />
        }
       </div>
      <Row className="mt-5">
        <Col md={4}>
          <h3>Billing Info</h3>
          <form action="">
            <label for="fname">Full Name</label>
            <input className="form-control" value={loggedInUser.name} placeholder="Enter name" type="text" name="name" />
            <label for="email">Email</label>
            <input className="form-control" value={loggedInUser.email} placeholder="Enter email" type="email" name="email"/>
            <label for="address">Address</label>
            <input className="form-control"  placeholder="Enter address" type="email" name="email"/>
            <label for="address">City</label>
            <input className="form-control"  placeholder="Enter city" type="email" name="email"/>
            <button type="button" class="btn btn-primary mt-3">Submit</button>

          </form>
        </Col>
        <Col md={8}>
          {
            orders.map(order => <OrderDetail price={totalPrice} order={order}></OrderDetail>)
          }
          <hr/>
         <div style={{width: "600px",marginLeft:"auto",padding: "10px"}} className="d-flex justify-content-between">
           <h5>Total Price:</h5>
           <h6 style={{ width: "100px" }}>${totalPrice}</h6>
         </div>
        </Col>
      
      </Row>
    </Container>
  );

}
export default Orders;