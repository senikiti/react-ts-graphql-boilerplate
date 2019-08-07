import React, { Component } from 'react';
import { Container, Nav, NavItem } from 'reactstrap';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import App from '../App';
import Signin from './signin';
import Signup from './signup';
// import Cookie from "js-cookie";

export interface PageProps {
    title: string;
}

class Layout extends React.Component<PageProps> {
  constructor(props: PageProps) {
    super(props);
  }

  render() {
    return (
      <div>
        <Router>
          <header>
            <Nav className="navbar navbar-dark bg-dark">
                <NavItem>
                    <Link to="/" className="navbar-brand">Home</Link>
                </NavItem>
                <NavItem>
                    <Link to="/signin" className="nav-link">Sign In</Link>
                </NavItem>
                <NavItem>
                    <Link to="/signup" className="nav-link">Sign Up</Link>
                </NavItem>
            </Nav>
          </header>
          <Route exact path="/signin" component={Signin}/>
          <Route exact path="/signup" component={Signup}/>
        </Router>
        <Container>{this.props.children}</Container>
      </div>
    );
  }
}

export default Layout;