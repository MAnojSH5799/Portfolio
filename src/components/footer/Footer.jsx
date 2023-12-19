import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiOutlineMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import "./footer.css";

function Footer() {
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright"></Col>
        <Col md="4" className="footer-copywright">
          <span>
            Designed and Developed by{" "}
            <i className="primary-header">Manoj Shakya</i>
          </span>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                style={{ color: `var(--clr-primary)` }}
                className="github"
                href="https://github.com/MAnojSH5799?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="github"
              >
                <AiFillGithub />
              </a>
            </li>
            {/* <li className="social-icons">
              <a
                style={{ color: `var(--clr-primary)` }}
                className="twitter"
                href="https://twitter.com/Rahuljha4171"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="twitter"
              >
                <AiOutlineTwitter />
              </a>
            </li> */}
            <li className="social-icons">
              <a
                style={{ color: `var(--clr-primary)` }}
                className="email"
                href="mailto:manojshakya54@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="email"
              >
                <AiOutlineMail />
              </a>
            </li>
            <li className="social-icons">
              <a
                style={{ color: `var(--clr-primary)` }}
                className="linkedin"
                href="https://www.linkedin.com/feed/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="linkedin"
              >
                <FaLinkedinIn />
              </a>
            </li>
            {/* <li className="social-icons">
              <a
                style={{ color: `var(--clr-primary)` }}
                className="instagram"
                href="https://www.instagram.com/dead.programmer/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="instagram"
              >
                <AiFillInstagram />
              </a>
            </li> */}
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
