import * as React from 'react';
import {Nav, NavItem}from 'reactstrap';

interface IProps {
    name?: string;
}

const Header: React.FC<IProps> = (props: IProps) => (
    <Nav className="navbar navbar-dark bg-dark">
        <NavItem>
            <a className="navbar-brand">Home</a>
        </NavItem>
        <NavItem>
            <a className="navbar-brand">Hello {props.name}</a>
        </NavItem>
    </Nav>
)

Header.defaultProps = {
    name: 'world',
};

export default Header;
