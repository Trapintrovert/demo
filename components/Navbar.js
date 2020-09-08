import React, { useState } from 'react';
import Link from "next/link";

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
        <Navbar color="light" light expand="md" className="py-3">
            <Container>
                <div className="navbar-brand">
                    <Link href="/">Trap Introvert</Link>
                </div>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <Link href='/about'>
                            <NavLink className="mx-2">About</NavLink>
                        </Link>
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
