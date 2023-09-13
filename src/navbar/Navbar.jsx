import React from 'react'
import './nav.css'
import {NavLink} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function Navbarr() {
  return (
    <>

    {/* <nav className="navbar navbar-expand-lg  fixed-top">
      <div className="container">
        <NavLink className="logo" to="/">START FRAMEWORK</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="about">ABOUT</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="portfolio">PORTOFOLIO</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="contact">CONTACT</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav> */}

    <Navbar expand="lg" className="">
      <Container>
        <Navbar.Brand className='logo' href="/">START FRAMEWORK</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink className='nav-link' to="about">ABOUT</NavLink>
            <NavLink className='nav-link' to="portfolio">PORTOFOLIO</NavLink>
            <NavLink className='nav-link' to="contact">CONTACT</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    
    
    </>
  )
}

export default Navbarr