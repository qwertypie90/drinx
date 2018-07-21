import React from "react";
import { Nav, NavItem, Navbar, NavDropdown, MenuItem } from 'react-bootstrap';
import './Navi.css';

const Navi = () =>
  
<Navbar>
  <Navbar.Header>
    <Navbar.Brand>
      <a href="/">driinx</a>
    </Navbar.Brand>
  </Navbar.Header>
  <Nav>
    <NavItem eventKey={1} href="/about">
      About
    </NavItem>
    <NavItem eventKey={2} href="/faq">
      FAQ
    </NavItem>
      </Nav>
    <Navbar.Text>
      <Navbar.Link href="/admin">Login</Navbar.Link>
    </Navbar.Text>

</Navbar>;

export default Navi;