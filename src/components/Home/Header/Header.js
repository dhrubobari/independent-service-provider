import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="white">
      <Container>
        <Navbar.Brand as={Link} to="/">Adonis and Associates</Navbar.Brand>
      </Container>
      <Nav>
        <Nav.Link as={Link} to="about">
          About
        </Nav.Link>
        <Nav.Link as={Link} to="blog">
          Blog
        </Nav.Link>
        <Nav.Link as={Link} to="login">
          Login
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default Header;
