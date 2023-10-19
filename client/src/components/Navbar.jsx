import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Modal, Tab } from "react-bootstrap";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignupForm";
import logo from "../images/robbertlogo.png"

import Auth from "../utils/auth";

const AppNavbar = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      {/* <h1> Hello there</h1>
      <div>
        <Link to="/login"> Login</Link>
        <Link to="/signup"> Signup</Link>
      </div> */}

      <Navbar bg="blue" variant="blue" expand="lg">
        <Container fluid>
          <Navbar.Brand
            as={Link}
            to="/"
            style={{ fontSize: "60px", fontFamily: "'BlinkMacSystemFont', ariel", alignItems: "center",  display: "flex",
            justifyContent: "flex-end",}}
        
            className="center"
           >  
             <img
              alt=""
              src={logo} classname="center" 
              justifyContent="center"
              width="550"
              height="550"
              padding-right="10px"
              padding-left="27%"
             
              // margin-right="10px="
              // margin-left="35px"
              // margin-top="5px"
              // margin= "0 auto" // Center horizontally
              // marginLeft= "auto" // Center horizontally
              // marginRight= "auto" // Center horizontally
              // display= "block"// Remove any default inline-block behavior
              // marginTop= "5px"
              // className="d-inline-block align-top-center"
              
            />
             {/* Where's Robbert? */}
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbar" />
          <Navbar.Collapse id="navbar" className="d-flex flex-row-reverse"style={{alignSelf: "baseline", fontSize: "1em", fontWeight: "bold"}}>
            <Nav className="ml-auto d-flex">
              <Nav.Link as={Link} to="/">
                <strong>Search For Campgrounds</strong>
              </Nav.Link>
              {/*if user is logged in show saved books and logout*/}
              {Auth.loggedIn() ? (
                <>
                  <Nav.Link as={Link} to="/saved">
                    See Your Campgrounds
                  </Nav.Link>
                  <Nav.Link onClick={Auth.logout}>Logout</Nav.Link>
                </>
              ) : (
                <Nav.Link onClick={() => setShowModal(true)}>
                  <strong>Login/Sign Up</strong>
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Modal
        size="lg"
        show={showModal}
        onHide={() => setShowModal(false)}
        aria-labelledby="signup-modal"
      >
        {/* tab container to do either signup or login component */}
        <Tab.Container defaultActiveKey="login">
          <Modal.Header closeButton>
            <Modal.Title id="signup-modal">
              <Nav variant="pills">
                <Nav.Item>
                  <Nav.Link eventKey="login">Login</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="signup">Sign Up</Nav.Link>
                </Nav.Item>
              </Nav>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Tab.Content>
              <Tab.Pane eventKey="login">
                <LoginForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
              <Tab.Pane eventKey="signup">
                <SignUpForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
            </Tab.Content>
          </Modal.Body>
        </Tab.Container>
      </Modal>
    </>
  );
};

export default AppNavbar;
