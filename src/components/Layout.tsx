import React from 'react';
import { Container, Nav, NavItem } from 'reactstrap';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Signin from './signin';
import Signup from './signup';
import {Enthusiasm} from './enthusiasmProps';

// import Cookie from "js-cookie";

export interface PageProps {
    title: string;
}

class Layout extends React.Component<PageProps> {
  constructor(props: PageProps) {
    super(props);
  }

  componentDidMount() {
    //this.input.focus();
    console.log("Layout did mount");
  }
  myenthusiasm = new Enthusiasm({name: "Serg", enthusiasmLevel: 3});
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
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/signup" render={ props => <Signup {...props} enthusiasmProps = {this.myenthusiasm.enthusiasmProps} /> }/>
        </Router>
        <Container>{this.props.children}</Container>
      </div>
    );
  }
}

export default Layout;