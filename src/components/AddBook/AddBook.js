import axios from 'axios';
import React, { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

const AddBooks = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const [imageURL, setImageURL] = useState(null)

  const onSubmit = data => {
    const bookInfo = {
      bookName: data.bookName,
      authorName: data.authorName,
      quantity: data.quantity,
      price: data.price,
      imageURL: imageURL,
      orderTime: new Date()
    }
    console.log(data);
    console.log(bookInfo);
    const url = `https://rhubarb-crisp-18858.herokuapp.com/addBook`
    fetch(url,{
      method: "POST",
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(bookInfo)
    })
    .then(res => {
      console.log("server side response",res);
    })
  
  };
  const handleImageUpload = (event) =>{
    // console.log(event.target.files[0]);
    const imageData = new FormData();
    imageData.set("key",  "d58202b670e3bb3290211a1357a63b2c")
    imageData.append("image",event.target.files[0])

    axios.post('https://api.imgbb.com/1/upload', imageData)
      .then(function (response) {
        setImageURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <Container>
      <Row className="mt-5">
        <Col md={3}>
          <Button as={Link} to="/manageBooks">Manage Books</Button>
        </Col>
        <Col md={9}>
          <h3>Add your favourite books here</h3>
          <form  onSubmit={handleSubmit(onSubmit)}>
            <input className="form-control" name="bookName" placeholder="book name" ref={register} /><br/>
            <input className="form-control" name="authorName" placeholder="author name" ref={register} /><br/>
            <input style={{marginBottom: "20px"}} onChange={handleImageUpload} name="imageURL" type="file" /><br />
            <input className="form-control" type="number" defaultValue="1" placeholder="quantity" name="quantity" ref={register({ min: 1, max: 10 })}/><br/>
            <input className="form-control" type="number"  name="price" placeholder="book price" ref={register({ min: 10})}/><br/>

            <input type="submit" />
          </form>
        </Col>
      </Row>
    </Container>
  );
}
export default AddBooks;
