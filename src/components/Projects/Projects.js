import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import shop from "../../Assets/Projects/shop.png";
import crypto from "../../Assets/Projects/crypto.png";
import twitter from "../../Assets/Projects/twitter.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shop}
              isBlog={false}
              title="Store"
              description="an online eccomerce store made with typescript and react js With a focus on user experience efficient state management and integrated secure payment processing for seamless transactions."
              ghLink="https://github.com/mohamed-taj/React-shop"
              demoLink="https://react-shop-eight-kappa.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={twitter}
              isBlog={false}
              title="twitter-clone"
              description="a front-end clone of X formally twitter social media site made react js"
              ghLink="https://github.com/mohamed-taj/React-shop"
              demoLink="https://twitter-clone-seven-brown-72.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={crypto}
              isBlog={false}
              title="Crypto-tracker"
              description=" real-time cryptocurrency tracker leveraging data from the CoinGecko API. This application provides up-to-the-minute prices of various currencies, offering users instant access to accurate and reliable cryptocurrency data."
              ghLink="https://github.com/mohamed-taj/crypto-tracker"
              demoLink="https://crypto-tracker-alpha-five.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
