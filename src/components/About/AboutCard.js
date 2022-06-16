import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello Everyone,
            <br />
            <br />I am an Engineer and a curious Developer obsessed with Technology.
            I have done my Bachelor in Engineering from <b className="blue"> University of Mumbai.</b>
            <br />
            I have worked as an <b className="blue"> Design Engineer</b>  in Godrej and Boyce Ltd,
            there I was Responsible for Designing new engineering products and processes,
            crafting models and drawings of products using CAD software (PTC CREO, AutoCAD) and 
            also for testing prototypes as well as identifying solutions for further Improvement.
            I loved working with my team and all cross-functional teams as 
            it was very exciting to know about what all functions and work needs to be done to launch a product. 
            <br />
            That's why, after some serious self- reflection, I thought how exciting it will be to work on Technology with People of different Professions. So,
            I have started looking into becoming XR Technology Developer.
            <br />
            <br />
            
            Apart from these, I love 
            <b className="blue"> Hiking</b> and
            <i>
              <b className="blue">
                {" "}
                Travelling,
              </b> 
            There is nothing  better than being outdoors with friends or family, in touch with nature, 
            sitting in front of a campfire and experiencing nature. 
            
            <br />
            <br />    
            </i>
              &nbsp;And in my spare time, I
              enjoy   
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Drawing
            </li>
            <li className="about-activity">
              <ImPointRight /> Sketching
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning any new skill
            </li>
          </ul>

          <br />
          <br />
          <p style={{ color: "#1e90ff" }}>
          “We can change the world and make it a better place. It is in your hands to make a difference.” 
          </p>
          <footer style={{ color: "#1e90ff" }} >-Nelson Mandela</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
