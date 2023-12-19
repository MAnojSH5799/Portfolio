import React from "react";
import Card from "react-bootstrap/Card";
import { AiOutlineArrowRight } from "react-icons/ai";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0" data-aos="zoom-in">
          <p style={{ textAlign: "justify"}}>
            Hi Everyone, I am <span className="primary-header">Manoj Shakya</span> from Kanpur, Uttar Pradesh, India. I am a Electronics and
communication graduate and a passionate programmer.
            <br />
           
            <br />
           
● In my role as a software engineer at Madgical Techdom OPC Private Limited.
<br />
● I have been involved in various projects and have gained experience in
technologies like React JS, Node JS, MySQL, and OpenAI.
          </p>
          {/* <ul>
            <li className="about-activity">
              <AiOutlineArrowRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <AiOutlineArrowRight /> Reading Books
            </li>
            <li className="about-activity">
              <AiOutlineArrowRight /> Playing Games
            </li>
            <li className="about-activity">
              <AiOutlineArrowRight /> Traveling
            </li>
          </ul> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
