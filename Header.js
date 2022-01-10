import React, { Component } from 'react'
import { Nav, Navbar, Container, Form } from 'react-bootstrap'
import logo from './logo192.png'

export default class Header extends Component {
    render() {
        return (
            <Navbar collapseOnSelect bg="light" variant="dark">
                <Container>
                    <Navbar.Brand href="/" >
                        <img
                            src={logo}
                            height="30"
                            width="30"
                            className='d-inline-block align-top'
                            alt='Logo'
                        />
                    </Navbar.Brand>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto" class="aboau">
                            <Nav.Link href="/"> M</Nav.Link>
                            <Nav.Link href="/"> I</Nav.Link>
                            <Nav.Link href="/"> P</Nav.Link>
                            <Nav.Link href="/"> H</Nav.Link>
                            <Nav.Link href="/"> N</Nav.Link>
                            <Nav.Link href="/"> Q</Nav.Link>
                        </Nav>
                        <Form inline>
                            
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}
