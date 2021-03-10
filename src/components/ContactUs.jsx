import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import { Nav,NavDropdown,Button } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./ContactUs.css";

function ContactUs() {
    return(
    <div className="main-container">
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="/">Movie Roulette</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/AboutUs">About Us</Nav.Link>
        <Nav.Link href="/ContactUs">Contact Us</Nav.Link>
        </Nav>
        <input id="search" type="text" placeholder="Search" className=" mr-sm-2" />
    </Navbar.Collapse>
    </Navbar>
    <div className="contact">
    </div>
    <h3>
        Contact Us
    </h3>
    <p>
        Movie Roulette website
        <br></br>
        Phone no: +1-2145541887
        <br>
        </br>
        info@movieroulette.com
        <br></br>
         http://www.movieroulette.com
    </p>
    </div>
    );
}


export default ContactUs
