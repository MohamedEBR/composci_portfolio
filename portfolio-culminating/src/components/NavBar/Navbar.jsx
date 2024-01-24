import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" sticky="top">
      <Container>
        <Navbar.Brand href="#home">Mohamed Ebraheem</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#file">File R/W</Nav.Link>
            <Nav.Link href="#classes">Classes</Nav.Link>
            <Nav.Link href="#inheritance">Inheritance</Nav.Link>
            <Nav.Link href="#uml">Documentation/UML</Nav.Link>
            <Nav.Link href="#sort">Sorting Algorithms</Nav.Link>
            <Nav.Link href="#search">Searching Algortihms</Nav.Link>
            <Nav.Link href="#recursion">Recursion</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


export default NavBar