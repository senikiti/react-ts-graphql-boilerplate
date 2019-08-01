import React, { Component } from 'react';
import { Container, Nav, NavItem } from 'reactstrap';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import App from '../App';
import Signin from './signin';
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
        <Router>
          <header>
            <Nav className="navbar navbar-dark bg-dark">
                <NavItem>
                    <Link to="/">
                        <a className="navbar-brand">Home</a>
                    </Link>
                </NavItem>
                <NavItem className="ml-auto">
                    <Link to="/signin">
                        <a className="nav-link">Sign In</a>
                    </Link>
                </NavItem>
                <NavItem>
                    <Link to="/signup">
                        <a className="nav-link">Sign Up</a>
                    </Link>
                </NavItem>
            </Nav>
          </header>
          <Container>{this.props.children}</Container>

          <Route path="/" component={App} />
          <Route path="/signin" component={Signin} />
        </Router>
    );
  }
}

export default Layout;