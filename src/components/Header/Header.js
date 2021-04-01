import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const Header = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext)

  return (
    <Container>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Learn Programming</Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link className="mr-3" as={Link} to="/">Home</Nav.Link>
          <Nav.Link className="mr-3" as={Link} to="/orders">Orders</Nav.Link>
          <Nav.Link className="mr-3" as={Link} to="/admin">Admin</Nav.Link>
          <Nav.Link className="mr-3" as={Link} to="/deals">Deals</Nav.Link>
          <Nav.Link as={Link} to="/manageBooks">Manage Books</Nav.Link>
        </Nav>
        {loggedInUser.email
          ? <h6 style={{ color: "#fdc600", marginTop: "7px", fontWeight: "bold" }}>{loggedInUser.name}</h6>
          : <Button size="sm" as={Link} to="/checkOut">Login</Button>
        }
      </Navbar>
    </Container>
  );
};

export default Header;