import React from "react";
import Card from "react-bootstrap/Card";
import { Row, Col } from "react-bootstrap";
import { BsLinkedin } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { FaPhoneSquareAlt, FaGithubSquare } from "react-icons/fa";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body className="aboutCardBody">
        <Row className="contact_icons" style={{ justifyContent: "center" }} xs={1} md={2}>
          <Col className="contactMail_column">
            <BsLinkedin />
            <br />
            <a
              href="https://www.linkedin.com/in/srinivas-k-bhat"
              target="_blank"
              rel="noreferrer"
              className="contact_info"
            >
              Srinivas K Bhat
            </a>
          </Col>
          <Col className="contactMail_column">
            <FaGithubSquare />
            <br />
            <a
              href="https://github.com/Srinivas-Bhat"
              target="_blank"
              rel="noreferrer"
              className="contact_info"
            >
              Srinivas K Bhat
            </a>
          </Col>
        </Row>
        <Row className="contact_icons" style={{ justifyContent: "center", padding : "50px"}} xs={1} md={2}>
          <Col className="contactMail_column">
            <GrMail />
            <br />
            <a
              href="mailto:srinivasbhat0105@gmail.com"
              target="_blank"
              rel="noreferrer"
              id="contact_info"
              className="contact_info"
            >
              srinivasbhat0105@gmail.com
            </a>
          </Col>
          <Col className="contactMail_column">
            <FaPhoneSquareAlt />
            <br />
            <a
              href="tel:+918073687889"
              rel="noreferrer"
              className="contact_info"
            >
              +91 8073687889  &nbsp;
            </a>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
