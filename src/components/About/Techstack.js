import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiCsharp } from "react-icons/si";
import { FaUnity } from "react-icons/fa";
import { GiJupiter } from "react-icons/gi";



import {
  DiPython,
  DiGit,
  
} from "react-icons/di";
import {
  SiPytorch,
    SiVisualstudio,
    SiArduino
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons">
            <FaUnity />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiCsharp />
          </Col>

        <Col xs={4} md={2} className="tech-icons">
            <DiPython />
          </Col>
          
        <Col xs={4} md={2} className="tech-icons">
            <SiPytorch />
          </Col>

        <Col xs={4} md={2} className="tech-icons">
            <SiVisualstudio />
          </Col>

        <Col xs={4} md={2} className="tech-icons">
            <SiArduino />
        </Col>

        <Col xs={4} md={2} className="tech-icons">
            <GiJupiter />
        </Col>

        <Col xs={4} md={2} className="tech-icons">
              <DiGit />
        </Col>

      </Row>
    
  );
}

export default Techstack;
