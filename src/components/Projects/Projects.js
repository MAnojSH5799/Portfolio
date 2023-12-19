import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import ProjectCard from "./ProjectCards";

import PrivateChat from "../../Assets/Login.png";
import Portfolio from "../../Assets/mini-stoct.png";
import Ecart from "../../Assets/Sarrtthi.png";
import ExpenseTracker from "../../Assets/Projects/ExpenseTracker.png";

import "./project.css";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="Fluorescent-Blue">Works </strong>
        </h1>
        <p>Here are a few projects I've worked on recently.</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={Ecart}
              title="Sarrthi Education Quiz application"
              description="This is a fully functional Sarrthi Education Quiz application that uses React.js and CSS in the front end."
              ghLink="https://github.com/MAnojSH5799/Assessment"
              demoLink="https://quiz-tool-4cd61.web.app/"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={Portfolio}
              title="Mini Stock Tracker"
              description="This is a fully functional Mini stock Tracker application that uses React.js and CSS in the front end. and Node.js and express.js in back end."
              ghLink="https://github.com/MAnojSH5799/mini-stock-frontend"
              demoLink="https://mini-stock-frontend.vercel.app/"
            />
          </Col>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={PrivateChat}
              title="Simple Login Project with User details"
              description="This is a fully functional Login page application and showing the all user details and edit,delete,update functionallity that uses React.js and CSS in the front end. and Node.js and express.js in back end."
              ghLink="https://github.com/MAnojSH5799/Simple_project/tree/main/registration-form"
              demoLink="https://simple-project-smoky.vercel.app/"
            />
          </Col>

        </Row>
      </Container>
      <ScrollToTop />
    </Container>
  );
}

export default Projects;
