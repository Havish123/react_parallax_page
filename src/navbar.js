import './navbar.css';
import * as React from 'react';
import { FaBaby } from 'react-icons/fa';

import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav,Form,FormControl,Button} from '../node_modules/react-bootstrap';

function Navb() {
    return (
     <>
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home"><FaBaby /></Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-info">Search</Button>
            </Form>
        </Navbar>
     </>
    );
  }
  
  export default Navb;