import React, { useState } from 'react';
import {
    Collapse,
    Container,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
  } from 'reactstrap';

const Navbarr = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
  
    return (
        <Navbar color="light" light expand="md">
            <Container>
                <NavbarBrand href="/">Trap Introvert</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                    <NavLink className="mx-2" href="/components/">About</NavLink>
                    </NavItem>
                    <NavItem>
                    <NavLink className="mx-2" href="https://github.com/reactstrap/reactstrap">Portfolio</NavLink>
                    </NavItem>
                    <NavItem>
                    <NavLink className="mx-2" href="https://github.com/reactstrap/reactstrap">Contact</NavLink>
                    </NavItem>
                </Nav>
                </Collapse>
            </Container>
        </Navbar>
    )
}

export default Navbarr
