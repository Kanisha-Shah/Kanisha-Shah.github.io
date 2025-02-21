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

import presidentNU from "../assets/img/presidentNU.png";
import CSINU from "../assets/img/CSInu.jpg";
import DSI from "../assets/img/DSI.jpeg";
import EGSC from "../assets/img/EGSC.jpeg";
import DSISc from "../assets/img/DSIScholar.jpeg";
import Merit from "../assets/img/MeritScholarship.jpg";


import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const experience = [
    {
      title: "Software Engineer | Amazon",
      description: "Redesigned search infrastructure and integrated AI-driven enhancements to improve query performance and search relevance",
      imgUrl: amazonLogo,
      githubLink: "https://www.linkedin.com/feed/update/urn:li:activity:7236850179675435009/"
    },
    {
      title: "Software Developer & Data Scientist | V360 Technology Inc.",
      description: "Developed a probability-based data pipeline, optimizing inventory stock analysis and data consistency for diamond trading",
      imgUrl: v360Logo,
      githubLink: "https://github.com/Kanisha-Shah"
    },
    {
      title: "Technology Analyst | Deutsche Bank",
      description: "Worked on software testing, object-oriented programming, and integrating BDD frameworks for streamlined data processing",
      imgUrl: dbLogo,
      githubLink: "https://www.linkedin.com/posts/kanisha-shah97_bank-summerinternship2022-deutschebank-activity-6940207695010369537-rQqw?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC2oCv0BdYYpiECfvg1xD6A9lvNo_JkC60U"
    }
  ];

  const projects = [
    {
      title: "Medical AI Research | Automated Object Detection",
      description: "Developed a deep learning model to detect spinal cords in ultrasound images with 93-95% accuracy for clinical applications",
      imgUrl: projLogo4,
      githubLink: "https://www.linkedin.com/in/kanisha-shah97/#:~:text=Honors%20%26%20awards-,Data%20Science%20Institute%20Research%20Scholar,-Data%20Science%20Institute"
    },
    {
      title: "Hallucination Mitigation in Medical MCQA",
      description: "Designed a RAG-based pipeline using Claude & GPT with MedQuAD dataset to improve accuracy in medical question-answering models",
      imgUrl: projLogo5,
      githubLink: "https://www.linkedin.com/in/kanisha-shah97/#:~:text=all%206%20experiences-,Capstone%20Project%20%7C%20Data%20Science%20Institute%20%40%20Columbia%20University,-Capstone%20Project%20%7C%20Data"
    },
    {
      title: "Netflix for Researchers",
      description: "Developed a research paper recommendation system using TF-IDF and KNN to enhance paper discoverability",
      imgUrl: projLogo1,
      githubLink: "https://www.linkedin.com/posts/kanisha-shah97_greetings-of-the-day-everyone-i-feel-grateful-activity-6935939430297784321-H2nN?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC2oCv0BdYYpiECfvg1xD6A9lvNo_JkC60U"
    },
    {
      title: "Voice Intelligence: Alexa",
      description: "Built an interactive voice system integrating Alexa with Java backend to enhance learning experiences for kids",
      imgUrl: projLogo2,
      githubLink: "https://www.linkedin.com/in/kanisha-shah97/details/projects/#:~:text=EDAV%20final%20project-,Voice%20Intelligence%20%3A%20Alexa,-Voice%20Intelligence%20%3A%20Alexa"
    },
    {
      title: "Data Science Salary Predictor",
      description: "Led a comprehensive analysis of 20,000+ survey responses to predict salary trends in data science using ML techniques",
      imgUrl: projLogo3,
      githubLink: "https://www.linkedin.com/in/kanisha-shah97/#:~:text=Projects-,Data%20Science%20Salary%20Prediction,-Data%20Science%20Salary"
    }
  ];

  const academic = [
    {
      title: "Data Science Institute Research Scholar",
      description: "Top 2% among cohort",
      imgUrl: DSISc,
      githubLink: "https://www.linkedin.com/in/kanisha-shah97/#:~:text=Honors%20%26%20awards-,Data%20Science%20Institute%20Research%20Scholar,-Data%20Science%20Institute",
    },
    {
      title: "Merit Scholarship for Academic Excellence",
      description: "Rank: 3/326",
      imgUrl: Merit,
      githubLink: "https://www.linkedin.com/posts/kanisha-shah97_dewangmehtafoundation-top3student-nirmauniversity-activity-7102426076148084736-3kDJ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC2oCv0BdYYpiECfvg1xD6A9lvNo_JkC60U",
    },
    {
      title: "Career Resource Chair | Columbia University",
      imgUrl: DSI,
      githubLink: "https://www.linkedin.com/posts/kanisha-shah97_dsisc-columbiauniversity-dsi-activity-7152367299834871808-7uW5?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC2oCv0BdYYpiECfvg1xD6A9lvNo_JkC60U",
    },
    {
      title: "Department Representative | Columbia University",
      imgUrl: EGSC,
      githubLink: "https://www.linkedin.com/in/kanisha-shah97/details/experience/#:~:text=Language%20Processing%20(NLP)-,Department%20Representative,-Department%20Representative",
    },
    {
      title: "President | Nirma University",
      imgUrl: presidentNU,
      githubLink: "https://www.linkedin.com/in/kanisha-shah97/details/experience/#:~:text=Internship_Certificate.pdf-,President,-President",
    },
    {
      title: "Organization Secretary | CSI, Nirma University",
      imgUrl: CSINU,
      githubLink: "https://www.linkedin.com/in/kanisha-shah97/details/experience/#:~:text=President%20Certificate.pdf-,Computer%20Society%20of%20India%2C%20Nirma%20University,-Computer%20Society%20of",
    }
  ];


  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>🚀 My Journey in Tech</h2>
                  <p>A glimpse into my experience, innovative projects, and accolades that define my journey</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center flex-column flex-md-row" id="pills-tab">
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
