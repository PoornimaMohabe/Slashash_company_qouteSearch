import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
    
    return (
        <Navbar expand="lg" style={{ backgroundColor: 'blue', color: 'white' }}>
            <Container fluid>
                <Navbar.Brand href="/"><h2>University</h2></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                        
                        <Link to='Favourite' style={{ color: 'white' }}><h5>Favourite qoutes</h5> </Link>
                    </Nav>
                    <Form className="d-flex" >
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                            value={search}
                      
                            style={{ backgroundColor: 'lightyellow', color: 'black' }}
                        />
                        <Button type="submit" variant="outline-success" style={{ borderRadius: '20px' ,backgroundColor: 'yellow',color: 'black'}}>Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navbar;