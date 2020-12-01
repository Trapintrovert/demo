import React, { useState } from 'react';
import Link from "next/link";

import {
    Collapse,
    Container,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink,
    Button
  } from 'reactstrap';

const Navbarr = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
  
    return (
        <Navbar color="light" light expand="md" className="py-3">
            <Container>
                <Link href="/" className="navbar-brand">
                    <span className="logo">Trap Introvert</span>
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
                    <NavItem>
                        <Button className="mx-2 resume">
                            <Link href="https://res.cloudinary.com/trapintrovert/image/upload/v1606812879/Adedamola_Adeniyi_OFFICIAL.pdf">Resume</Link>
                        </Button>
                    </NavItem>
                </Nav>
                </Collapse>
            </Container>
        </Navbar>
    )
}

export default Navbarr
