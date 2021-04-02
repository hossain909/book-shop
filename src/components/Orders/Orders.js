import React, { useContext, useEffect, useState } from 'react';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import { UserContext } from '../../App';
import OrderDetail from '../../OrderDetail/OrderDetail';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loggedInUser, setLoggedInUser] = useContext(UserContext)
  const {email} = orders[0] || {}
  useEffect(()=>{
    fetch("https://rhubarb-crisp-18858.herokuapp.com/orders?email="+loggedInUser.email)
    .then(res => res.json())
    .then(data => setOrders(data))
  },[loggedInUser.email])
  
  return (
    <Container>
      <h4 className="text-center mt-5">You have {orders.length} orders</h4>
       <div style={{width: "20px", margin: "auto"}}>
        {
          orders.length === 0 && <Spinner animation="border" size="lg" variant="success" />
        }
       </div>
      <h4>{email}</h4>
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