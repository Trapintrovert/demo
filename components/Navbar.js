import React, { useState } from 'react';
import Link from "next/link";

import {
    Collapse,
    Container,
    Navbar,
    NavbarToggler,
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
                <Link href="/" className="navbar-brand">
                    Trap Introvert
                </Link>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <Link href='/about'>
                            <NavLink className="mx-2">About</NavLink>
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link href='/portfolio'>
                            <NavLink className="mx-2" >Portfolio</NavLink>
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link href='/contact'>
                            <NavLink className="mx-2">Contact</NavLink>
                        </Link>
                    </NavItem>
                </Nav>
                </Collapse>
            </Container>
        </Navbar>
    )
}

export default Navbarr
