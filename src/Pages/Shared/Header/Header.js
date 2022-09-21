import { signOut } from 'firebase/auth';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../images/nft.png';

const Header = () => {


  //sign out

  const [user] =useAuthState(auth);
 
  const handleSignOut=()=>{
    signOut(auth);
  }


    return (
     
      <Navbar collapseOnSelect sticky='top' expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand as={Link} to="/">
        <img src={logo} height={30} alt="/"/>
         COSMOS
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto  ">
          <Nav.Link href="home">Home</Nav.Link>
            <Nav.Link href="home#marketplaces">Marketplace</Nav.Link>
            <Nav.Link href="home#categories">Category</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            {
              user && <>
              <Nav.Link as={Link} to="/addmarketplace">Add</Nav.Link>
              <Nav.Link as={Link} to="/manage">Manage</Nav.Link>
              </>
            }

            {/* sign out */}
            {


                user?
                <button className='btn btn-link text-black text-decoration-none' onClick={handleSignOut}>sign out</button>
            :
            <Nav.Link as={Link} to="/login" eventKey={2} href="#memes">
              LogIn
            </Nav.Link>}
          </Nav>
        </Navbar.Collapse>
      </Container>
     
    </Navbar>
      
    );
}

export default Header;
