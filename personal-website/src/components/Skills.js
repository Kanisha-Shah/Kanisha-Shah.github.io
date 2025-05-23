import meter1 from "../assets/img/skill.png";
import meter2 from "../assets/img/competence.png";
import meter3 from "../assets/img/skill2.png";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>💡 Skills That Drive My Work</h2>
              <p>I know I’m not perfect, but I have the full dedication to learn and adapt new skills, and the drive to continuously improve.<br></br>With a growth-oriented mindset, I embrace challenges as opportunities to evolve and innovate.</p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>Gen AI & ML</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Python</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>Data Science & Analytics</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>AWS & GCP</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Java</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>JavaScript</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}