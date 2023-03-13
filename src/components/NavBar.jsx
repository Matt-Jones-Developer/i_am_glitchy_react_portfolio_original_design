import { useHref } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
// import NavTabs from "./NavTabs";
import codeIcon from "../assets/icons/coder_icn.png";
// import styles from "./styles/NavBar.module.css";
import "../App.css";
import myCV from "../assets/pdf/Matt Jones C.V 2023 (Google Docs).pdf";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavBar = () => {
  const href = useHref();

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
          <Navbar.Brand as={Link} to="/">
            <div className="flex items-center">
              {/* Nav Icon btn and name link */}
              <Link href={href} className="flex items-center">
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
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              {/* <Nav.Link href="/skills">Skills</Nav.Link> */}
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
              <Link
                to={`${myCV}`}
                onClick={handleCVClick}
                target="_blank"
                rel="noreferrer"
              >
                CV
              </Link>
            </Nav>
            {/* <NavTabs /> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
