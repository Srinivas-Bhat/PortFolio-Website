import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import photo from "../../Assets/srinivas.jpg";
import Tilt from "react-parallax-tilt";
import { ImPointRight } from "react-icons/im";
// import { AiFillGithub } from "react-icons/ai";
// import { FaLinkedinIn } from "react-icons/fa";
// import { SiGmail } from "react-icons/si";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              <span className="purple"> ABOUT </span> ME
            </h1>
            <p className="home-about-body">
              <i>
                <b className="purple">Full Stack Developer </b>
              </i>
              , who is passionate about building digital products that improve everyday
              experience for people. Proficient in
              <i>
                <b className="purple"> MERN Stack. </b>
              </i>
              I love to work on exciting projects that test what I've learnt, also look
              forward to work in a challenging environment which gives me an opportunity
              to prove myself & provides me with an atmosphere in which I can learn &
              grow.
            </p>
            <p className="home-work-body">
              <i>
                <b className="purple">Work Experience </b>
              </i>
              <br />
              Additionally, I have worked as a Full Stack Web Developer at TrustCheckr.
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={photo} className="img-fluid myphoto" alt="avatar" />
            </Tilt>
          </Col>
        </Row>

        {/* <Row>
          <Col md={12} className="home-about-social">
            <p> 
              Feel free to <span className="purple">connect </span>with me
            </p>
            <p className="contact-font">
              Mobile : <span className="purple">+91 9739940543 </span>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/aakarsh604"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/aakarsh604/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:aakarsh604@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <SiGmail />
                </a>
              </li>
            </ul>
          </Col>
        </Row> */}
      </Container>
    </Container>
  );
}
export default Home2;
