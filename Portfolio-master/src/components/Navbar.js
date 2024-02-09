import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import pdf from "../Assets/srinivas.pdf";
import { CgFileDocument } from "react-icons/cg";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
  AiOutlinePhone,
  AiOutlineRocket,
} from "react-icons/ai";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const [active, setActive] = useState("");

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <strong className="purple namelogo">S K B</strong>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link
                href="#home"
                style={{ color: active === "home" ? "#c770f0" : "white" }}
                onClick={() => {
                  updateExpanded(false);
                  setActive("home");
                }}
                className="NavigationItem"
              >
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                style={{ color: active === "about" ? "#c770f0" : "white" }}
                href="#about"
                onClick={() => {
                  updateExpanded(false);
                  setActive("about");
                }}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                style={{ color: active === "skills" ? "#c770f0" : "white" }}
                href="#skills"
                onClick={() => {
                  updateExpanded(false);
                  setActive("skills");
                }}
              >
                <AiOutlineRocket style={{ marginBottom: "2px" }} /> Skills
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                href="#project"
                style={{ color: active === "projects" ? "#c770f0" : "white" }}
                onClick={() => {
                  updateExpanded(false);
                  setActive("projects");
                }}
              >
                <AiOutlineFundProjectionScreen style={{ marginBottom: "2px" }} /> Projects
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                eventKey="resume"
                style={{ color: active === "contact" ? "#c770f0" : "white" }}
                href="#contact"
                onClick={() => {
                  updateExpanded(false);
                  setActive("contact");
                }}
              >
                <AiOutlinePhone style={{ marginBottom: "2px" }} /> Contact
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                style={{ color: active === "resume" ? "#c770f0" : "white" }}
                href={pdf}
                target="_blank"
                onClick={() => {
                  updateExpanded(false);
                  setActive("resume");
                }}
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
              </Nav.Link>
            </Nav.Item>

            {/* <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/aakarsh604/"
                target="_blank"
                className="fork-btn-inner"
              >
                <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
                <AiFillStar style={{ fontSize: "1.1em" }} />
              </Button>
            </Nav.Item> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
