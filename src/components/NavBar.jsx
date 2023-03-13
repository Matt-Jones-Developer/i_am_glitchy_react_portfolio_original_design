import React, { useState } from "react";
import { useHref } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import NavTabs from "./NavTabs";
import codeIcon from "../assets/icons/coder_icn.png";
// import styles from "./styles/NavBar.module.css";
import "../App.css";
import myCV from "../assets/pdf/Matt Jones C.V 2023 (Google Docs).pdf";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavBar = () => {

  const [toggle, setToggle] = useState(false);
  // handle toggles function
  const handleToggle = () => setToggle(!toggle);
  // init useHistory
  const href = useHref();

  // handle side toggle navs onClick
  const handleLinkClick = () => {
    setToggle(false);
  };

  // handle external CV link
  function handleCVClick() {
    window.open(`${myCV}`, "_blank");
    window.location.reload();
  }

  return (
    <>
      {/* build the NavBar */}
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        sticky="top"
      >
        <Container>
          <Navbar.Brand href="/">
            <div className="flex items-center">
              {/* Nav Icon btn and name link */}
              <Link to={href} className="flex items-center">
                <img
                  className="mr-5 animate-pulse"
                  src={`${codeIcon}`}
                  alt="coder icon"
                  width="50px"
                  height="50px"
                  // force refresh
                  onClick={() => {
                    window.location.reload();
                    // fix the 404 useHref
                    window.location.href = href;
                  }}
                  title="keep tapping me to reset the coloured squares!"
                />
              </Link>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto nav">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              {/* <Nav.Link href="/skills">Skills</Nav.Link> */}
              <Nav.Link href="/projects">Projects</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
            {/* <NavTabs /> */}
            <Nav>
              <Nav.Link href="/cv">CV</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
