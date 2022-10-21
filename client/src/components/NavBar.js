import React from 'react'
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

function NavBar({ setUser, user }) {
  
  function handleLogoutClick() {
    fetch('/logout', { method: "DELETE" })
      .then(r => {
        if (r.ok) {
          setUser(null);
        }
      });
  }

  return (
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
<Container>
  <Navbar.Brand style={{fontWeight:"700"}}  to ="/">MY YOGA ZONE</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link ><Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/">Home</Link></Nav.Link>
      <Nav.Link ><Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/trainers">Trainers</Link></Nav.Link>
      <Nav.Link ><Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/yoga-tutorials">Tutorial Videos</Link></Nav.Link>
      <Nav.Link ><Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/add-tutorial">Add Tutorial Videos</Link></Nav.Link>
      <Nav.Link ><Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/trainees">Trainees</Link></Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link >WELCOME {(user.name).toUpperCase()}</Nav.Link>
     <Nav.Link  > <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/profile">My Profile</Link></Nav.Link>
      <Nav.Link ><Button onClick={handleLogoutClick}>LOGOUT</Button></Nav.Link>
       </Nav>
  </Navbar.Collapse>
</Container>
</Navbar>
  );
}

export default NavBar;
