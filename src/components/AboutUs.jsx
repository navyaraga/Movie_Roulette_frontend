import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import { Nav } from 'react-bootstrap';

function AboutUs() {
    return (
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
        <div className="about">
            <div className="aboutdescription">
                <h2> Hi,there</h2>
                <img src="https://www.themoviedb.org/assets/2/v4/marketing/deadpool-06f2a06d7a418ec887300397b6861383bf1e3b72f604ddd5f75bce170e81dce9.png" id="imgs" ></img>
                <div className="info">
                    <h3 id="infohead">Let's talk about Movie Roulette</h3>
                    <p>
                        Movie Roulette generates movies based on user input of selection of movie genre & movie ratings.<br>
                        </br>
                        Each time when we click the spin button, website generates random movie.
                    </p>
                </div>
            </div>
        </div>
        </div>
    )
}


export default AboutUs
