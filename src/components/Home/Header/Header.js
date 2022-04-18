import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";

const Header = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
      signOut(auth);
  }

  return (
    <Navbar bg="white">
      <Container>
        <Navbar.Brand as={Link} to="/">Adonis and Associates</Navbar.Brand>
      </Container>
      <Nav>
        <Nav.Link as={Link} to="checkout">
          Checkout
        </Nav.Link>
        <Nav.Link as={Link} to="about">
          About
        </Nav.Link>
        <Nav.Link as={Link} to="blog">
          Blog
        </Nav.Link>
        {
            user ? 
            <button className='btn btn-info' onClick={handleSignOut}>sign out</button>
            :
        <Nav.Link as={Link} to="login">
          Login
        </Nav.Link>
        }
      </Nav>
    </Navbar>
  );
};

export default Header;
