import React from "react";
import { Nav, NavItem, Navbar, NavDropdown, MenuItem } from 'react-bootstrap';
import './Navi.css';

const Navi = () =>
  
<Navbar>
  <Navbar.Header>
    <Navbar.Brand>
      <a href="#home">driinx</a>
    </Navbar.Brand>
  </Navbar.Header>
  <Nav>
    <NavItem eventKey={1} href="#">
      About
    </NavItem>
    <NavItem eventKey={2} href="#">
      Login
    </NavItem>
    <NavDropdown eventKey={3} title="MAS" id="basic-nav-dropdown">
      <MenuItem eventKey={3.1}>Collab?</MenuItem>
      <MenuItem eventKey={3.2}>Suggestions</MenuItem>
      <MenuItem eventKey={3.3}>Something else here</MenuItem>
      <MenuItem divider />
      <MenuItem eventKey={3.4}>Login</MenuItem>
    </NavDropdown>
      </Nav>
    <Navbar.Text>
      Signed in as: <Navbar.Link href="#">Robyn Fenty</Navbar.Link>
    </Navbar.Text>

</Navbar>;

export default Navi;