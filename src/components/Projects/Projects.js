import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import AR_car_racing from "../../Assets/Projects/AR_car_racing.png";
import AR_Tank_War from "../../Assets/Projects/AR_Tank_War.png";
import Realm_Rush from "../../Assets/Projects/Realm_Rush.png";
import Jungle_Night from "../../Assets/Projects/Jungle_Night.png";
import Business_Card from "../../Assets/Projects/Business_Card.jpg";
import Argon_Assault from "../../Assets/Projects/Argon_Assault.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="blue">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Jungle_Night}
              isDone={true}
              title="Jungle Night"
                          description="Jungle Night is Zombie FPS, survival game for windows designed and programmed in Unity 3D. Applied concepts of Laws of Motion, Vectors, AI (NavMeshAgent) for enemy, Physics Raycast. Integrated third-party visual assets (Animation, 3D models, particle systems (VFX), lighting systems, SFX)."
              link1="https://youtu.be/dO1MKQyglE0"
              link2="https://github.com/deepak-bhole/Jungle-Night"


            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Argon_Assault}
              isDone={true}
              title="Argon Assault"
                          description="Argon Assault is Timeline based Spaceship shooting game. Designed UI, Camera Trail, enemy movement (animation) in timeline, used design tools like Terrains, Timelines, and also programmed player controller. Integrated third-party visual assets (Spaceships 3D models, particle systems (VFX), lighting systems, SFX)."
              link1="https://youtu.be/dIMCwmCb96Y"
              link2="https://github.com/deepak-bhole/Argon-Assault"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Realm_Rush}
              isDone={true}
              title="Realm Rush"
                          description="Realm Rush is a tower defence game - we have defend our castle from enemy ram by placing defence tower (Ballista). Designed and programmed Grid Manager, Object pooling, Breadth first search pathfinding algorithm, Money manager(Bank)."
              link1="https://youtu.be/isZQieiJcck"
              link2="https://github.com/deepak-bhole/Realm-Rush_advance"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={AR_car_racing}
              isDone={true}
              title="AR Racing Car"
                          description="AR Racing Car is a Augmented reality flag collection game. Designed and programmed ARplacementReticle, Car controller, Game and mission Manager. Lightship ARDK SDK is used for collider meshing of the environment."
              link1="https://youtu.be/52u_8_9jTbA"
              link2="https://github.com/deepak-bhole/ARRacingCar"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Business_Card}
              isDone={true}
              title="AR Business Card"
                          description="Business Card is a marker based AR application to Augment the extra information, Videos, link1s on top of the business card. Vuforia SDK is used for marker detection and Augmented UI UX is programmed and developed, in Unity 3D"
              link1="https://youtu.be/lDbR89XnVeQ"
              link2="https://github.com/deepak-bhole/My_Business_Card"
            />
          </Col>
        </Row>
      </Container>

        <Container>
        <h1 className="project-heading">
          <strong className="blue">Working  </strong> on
        </h1>
        <p style={{ color: "white" }}>
          Project I am working on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={AR_Tank_War}
              isDone={false}
              title="AR Tank War"
                          description="AR Tank war will be the small multiplayer online and LAN vehicular combat game. It will be developed on Unity Netcode SDK and Lightship ARDK SDK. Features include PowerUp pickups, upgrade weapons, maps, Scoreboard.   Level categories - Flag capture, Deathmatch."
              link1=""
              link2=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
