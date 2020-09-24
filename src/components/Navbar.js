import React from 'react';
// import bootstrap package
import { Navbar,Nav } from "react-bootstrap";
import {LinkContainer} from 'react-router-bootstrap'

const MyNavbar = () =>{
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" fixed="top" variant="dark">
        <Nav>
          <Navbar.Brand>WebWithReactRouter</Navbar.Brand>
        </Nav>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <LinkContainer to="/Register">
              <Nav.Link>Register</Nav.Link>            
            </LinkContainer>
            
            <LinkContainer to="/Calculator">
              <Nav.Link>Calculator BMI</Nav.Link>            
            </LinkContainer>
            
            <LinkContainer to="/TextTransform">
              <Nav.Link>Text Transform</Nav.Link>            
            </LinkContainer>
            
            <LinkContainer to="/Todos">
              <Nav.Link>Todos</Nav.Link>            
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
}

export default MyNavbar;