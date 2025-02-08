import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.png";
import navIcon3 from "../assets/img/nav-icon3.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={12} xs ={12}className="text-center text-sm-end">
            <div className="social-icon">
             <a href="https://www.linkedin.com/in/kanisha-shah97/"><img src={navIcon1} alt="Linked Link" /></a>
              <a href="https://github.com/Kanisha-Shah"><img src={navIcon2} alt="Github Link" /></a>
              <a href="https://leetcode.com/u/Kanisha_9/"><img src={navIcon3} alt="Leet Code" /></a> 
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}