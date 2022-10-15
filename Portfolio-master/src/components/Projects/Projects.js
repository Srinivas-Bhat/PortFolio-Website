import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Food from "../../Assets/Projects/FoodApp.png";
import BlueMercury from "../../Assets/Projects/BlueMercury.png";
import SnapDeal from "../../Assets/Projects/SnapDeal.png";
import pharmeasy from "../../Assets/Projects/pharmeasy.png";
import everhour from "../../Assets/Projects/everhour.png";

function Projects() {
  return (
    <Container  fluid className="project-section">
      <div id="project" className="projects-sections"></div>
      <Particle />
      <Container>
        <h1 className="project-heading" >
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={BlueMercury}
              isBlog={false}
              title="Clone of BlueMercury"
              description="BlueMercury is an e-commerce website. Have built the user flow of the website from sign up to product description page and the data managed with json server."
              stacks="Tech Stack : REACT, REDUX, JAVASCRIPT, CHAKRA-UI"
              ghLink="https://github.com/Srinivas-Bhat/brisk-hour-6305"
              demoLink="https://srinivasbluemercury.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pharmeasy}
              isBlog={false}
              title="Clone of Pharmeasy"
              description="Full Stack Web application clone of an e-commerce website to buy health-care and medical related products, having userflow from login to payment page."
              stacks="Tech Stack : JAVASCRIPT, CSS, React, Chakra-UI, Express, MongoDB, Node"
              ghLink="https://github.com/ayaznoori/PharmEasy-Clone"
              demoLink="https://pharmeasy-webclone.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SnapDeal}
              isBlog={false}
              title="Clone of Snapdeal"
              description="A famous e-commerce website having the user flow from sign up to placing the orders, address updating page, and checkout page, and data managed with json server and local storage."
              stacks="Tech Stack :  HTML, CSS, JAVASCRIPT"
              ghLink="https://github.com/Srinivas-Bhat/snap-deal-clone"
              demoLink="https://snapdeal-website-clone.netlify.app/"
            />
          </Col>          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Food}
              isBlog={false}
              title="Food Application"
              description="A FrontEnd web application where user can order a particular food item listed at the left and the respective food item will be displayed after certain time interval with a random token, also having the login and signup pages &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;"
              stacks="Tech Stack : HTML, CSS, JAVASCRIPT &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; "
              ghLink="https://github.com/Srinivas-Bhat/Food-App"
              demoLink="https://glittery-pavlova-f03ed3.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={everhour}
              isBlog={false}
              title="Clone of Everhour"
              description="Full stack application clone of Everhour website that helps to calculate the work hours of your team or particular team member, which has userflow from signup/login to adding"
              stacks="Tech Stack : JAVASCRIPT, CSS, React, Chakra-UI, Express, MongoDB, Node"
              ghLink="https://github.com/ravinishadcoder/Everhour"
              demoLink="https://everhour2.vercel.app/"              
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Caratlane.com Clone"
              description="Web application clone of an E-commerce website caratlane.com selling diamonds and jewellery for both men and women."
              stacks="Tech Stack : HTML5, CSS3, Javascript"
              ghLink="https://github.com/Shubham-46/CARAT-LANE-CLONE"
              demoLink="https://sensational-kheer-5c4a81.netlify.app/"              
            />
          </Col> */}

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
