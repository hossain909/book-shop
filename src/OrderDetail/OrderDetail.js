import React from 'react';

const OrderDetail = ({order}) => {
  return (
    <div>
      <p>Book Name: {order.bookName}</p>
      <p>Quantity: {order.quantity}</p>
      <p>Price: {order.price}</p>
    </div>
  );
};

export default OrderDetail;