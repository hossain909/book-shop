import React, { useContext, useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { UserContext } from '../../App';
import OrderDetail from '../../OrderDetail/OrderDetail';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loggedInUser, setLoggedInUser] = useContext(UserContext)
  const {email} = orders[0] || {}
  useEffect(()=>{
    fetch("http://localhost:5000/orders?email="+loggedInUser.email)
    .then(res => res.json())
    .then(data => setOrders(data))
  },[loggedInUser.email])
  
  return (
    <Container>
      <h3 className="text-center">You have {orders.length} orders</h3>
      <h3>{email}</h3>
      <Row>
        <Col>
          {
            orders.map(order => <OrderDetail order={order}></OrderDetail>)
          }
        </Col>
      
      </Row>
    </Container>
  );

}
export default Orders;