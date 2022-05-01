import React, { Component } from 'react'
import './Nav-auth.css';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'
import logo from '../logo.PNG'
class NavAuth extends Component {
  render() {
    return (
      <Navbar className='nav-bg' expand="lg">
        <Container>
          <Navbar.Brand href="#insciption"><img src={logo} className="logo-auth" /> </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="">
              <Nav.Link href="#fonctionalite">Fonctionalite</Nav.Link>
            </Nav>
          </Navbar.Collapse>

          <Navbar.Collapse className="justify-content-center">
            <Navbar.Text>
              <a href="/">Connexion</a>
            </Navbar.Text>
          </Navbar.Collapse>

          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <a href="#insciption">Insciption</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>)
  };
}
export default NavAuth;
