import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import amazonLogo from "../assets/img/amazon-logo.jpeg";
import dbLogo from "../assets/img/DB.jpg";
import v360Logo from "../assets/img/V360.jpeg";

import projLogo1 from "../assets/img/Netflix_for_research.jpg";
import projLogo2 from "../assets/img/Alexa.png";
import projLogo3 from "../assets/img/DS_Salary.jpg";
import projLogo4 from "../assets/img/object-detection.png";
import projLogo5 from "../assets/img/hallucination.png";

import columbiaLogo from "../assets/img/CU.png";
import presidentNU from "../assets/img/presidentNU.png";
import CSINU from "../assets/img/CSInu.jpg";
import DSI from "../assets/img/DSI.jpeg";
import EGSC from "../assets/img/EGSC.jpeg";
import DSISc from "../assets/img/DSIScholar.jpeg";
import Merit from "../assets/img/MeritScholarship.jpg";

import projImg1 from "../assets/img/project-img2.png";

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const experience = [
    {
        title: "Software Engineer | Amazon",
        description: "Redesigned search infrastructure and integrated AI-driven enhancements to improve query performance and search relevance",
        imgUrl: amazonLogo,
        githubLink: "https://github.com/Kanisha-Shah"
      },
      {
        title: "Software Developer | V360 Technology Inc.",
        description: "Developed a probability-based data pipeline, optimizing inventory stock analysis and data consistency for diamond trading",
        imgUrl: v360Logo,
        githubLink: "https://github.com/Kanisha-Shah"
      },
      {
        title: "Technology Analyst | Deutsche Bank",
        description: "Worked on software testing, object-oriented programming, and integrating BDD frameworks for streamlined data processing",
        imgUrl: dbLogo,
        githubLink: "https://github.com/Kanisha-Shah"
      }
  ];

  const projects = [
    {
      title: "Medical AI Research | Automated Object Detection",
      description: "Developed a deep learning model to detect spinal cords in ultrasound images with 93-95% accuracy for clinical applications",
      imgUrl: projLogo4,
      githubLink: "https://github.com/Kanisha-Shah"
    },
    {
      title: "Hallucination Mitigation in Medical MCQA",
      description: "Designed a RAG-based pipeline using Claude & GPT with MedQuAD dataset to improve accuracy in medical question-answering models",
      imgUrl: projLogo5,
      githubLink: "https://github.com/Kanisha-Shah"
    },
    {
      title: "Netflix for Researchers",
      description: "Developed a research paper recommendation system using TF-IDF and KNN to enhance paper discoverability",
      imgUrl: projLogo1,
      githubLink: "https://github.com/Kanisha-Shah/Netflix-for-Researcher"
    },
    {
      title: "Voice Intelligence: Alexa",
      description: "Built an interactive voice system integrating Alexa with Java backend to enhance learning experiences for kids",
      imgUrl: projLogo2,
      githubLink: "https://github.com/Kanisha-Shah/Voice-Intelligence-Alexa"
    },
    {
      title: "Data Science Salary Predictor",
      description: "Led a comprehensive analysis of 20,000+ survey responses to predict salary trends in data science using ML techniques",
      imgUrl: projLogo3,
      githubLink: "https://github.com/Kanisha-Shah/Data-Science-Salary-Predictor"
    }
  ];

  const academic = [
    {
      title : "Data Science Institute Research Scholar",
      description: "Top 2% among cohort",
      imgUrl: DSISc,
      githubLink: "https://www.linkedin.com/in/kanisha-shah97/details/experience/",
    },
    {
      title : "Merit Scholarship for Academic Excellence",
      description: "Rank: 3/326",
      imgUrl: Merit,
      githubLink: "https://www.linkedin.com/in/kanisha-shah97/details/experience/",
    },
    {
      title: "Career Resource Chair | Columbia University",
      imgUrl: DSI,
      githubLink: "https://www.linkedin.com/in/kanisha-shah97/details/experience/",
    },
    {
      title: "Department Representative | Columbia University",
      imgUrl: EGSC,
      githubLink: "https://www.linkedin.com/in/kanisha-shah97/details/experience/",
    },
    {
      title: "President | Nirma University",
      imgUrl: presidentNU,
      githubLink: "https://www.linkedin.com/in/kanisha-shah97/details/experience/",
    },
    {
      title: "Organization Secretary | CSI, Nirma University",
      imgUrl: CSINU,
      githubLink: "https://www.linkedin.com/in/kanisha-shah97/details/experience/",
    }
  ];


  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>🚀 My Journey in Tech</h2>
                <p>A glimpse into my experience, innovative projects, and accolades that define my journey</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Experience</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Awards & Recognitions</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          experience.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                          {
                            projects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                  />
                              )
                            })
                          }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Row>
                          {
                            academic.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                  />
                              )
                            })
                          }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}