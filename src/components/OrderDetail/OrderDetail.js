import React from 'react';

const OrderDetail = ({order}) => {
  return (
    <div style={{padding: "10px", width: "600px", marginLeft: "auto"}} className="d-flex justify-content-between">
      <h6 style={{ width: "220px" }}>{order.bookName}</h6>
      <h6 style={{ width: "100px" }}>{order.quantity}</h6>
      <h6 style={{ width: "100px" }}>${order.price}</h6>
    </div>
       

   
  );
};

export default OrderDetail;