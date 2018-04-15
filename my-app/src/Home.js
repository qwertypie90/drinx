import React, { Component } from 'react';
import App from './App';
import { Nav, NavItem, Navbar, NavDropdown, MenuItem } from 'react-bootstrap';
import './Navi.css';
import {Link} from 'react-router-dom';


class Home extends Component {
    // calls the login method in authentication service
    login = () => {
        this.props.auth.login();
    }
    // calls the logout method in authentication service
    logout = () => {
        this.props.auth.logout();
    }
    render() {
        // calls the isAuthenticated method in authentication service
        const { isAuthenticated } = this.props.auth;
        return (
<div>
      
        {
          isAuthenticated() &&
          <div>
          <Navbar>
  <Navbar.Header>
    <Navbar.Brand>
      <a href="/">driinx</a>
    </Navbar.Brand>
  </Navbar.Header>
  <Nav>
    <NavItem eventKey={1} href="/About">
      About
    </NavItem>
    <NavItem eventKey={2} href="/Admin">
      Add HH
    </NavItem>
    <NavDropdown eventKey={3} title="MAS" id="basic-nav-dropdown">
      <MenuItem eventKey={3.1}>Collab?</MenuItem>
      <MenuItem eventKey={3.2}>Suggestions</MenuItem>
      <MenuItem eventKey={3.3}>Something else here</MenuItem>
      <MenuItem divider />
      <MenuItem eventKey={3.4} href="#">FAQs</MenuItem>
    </NavDropdown>
      </Nav>
    <Navbar.Text>

            
              You are logged in!{' '}
              <a
                style={{ cursor: 'pointer' }}
                onClick={this.logout} > Log Out </a>.
              

            </Navbar.Text>
            </Navbar>
            <App /> 
            </div>
            


            } {
                !isAuthenticated() && (
                    <div className="container column">
              <h5>ReactiveSearch Auth0 Example</h5>
              <h5>
                You are not logged in! Please{' '}
                <a
                  style={{ cursor: 'pointer' }}
                  onClick={this.login}
                >
                  Log In
                </a>
                {' '}to continue.
              </h5>
              <h6>This is the default <b><code>Home</code></b> component. The <b><code>App</code></b> component will only be visible once you authenticate.</h6>
            </div>
                )
            } </div>
    );
}
}

export default Home;