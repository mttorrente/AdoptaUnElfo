import React from "react";
import { Row, Col, Container, Jumbotron } from "react-bootstrap";
import "./Home.css";
import MainCarousel from "./Carousel";

const Home = () => {
  return (
    <>
      <main>
        <Container>
          <img
            className="home-img" alt="img-home"
            src="https://res.cloudinary.com/dolljue2l/image/upload/v1608241812/pc-elfo-v2_kj70kp.jpg"
          ></img>
        </Container>
        <Jumbotron className="section">
          <Row>
            <Col lg={{span:6, offset: 1}}>
              <h3 className="home-title">AdoptaUnElfo_</h3>
              <br />
              <p>
                ¿Te han hecho el vacío y te has quedado solo/a estas navidades? ¿Tienes más espacio del que necesitas? . <br />
                Este año, tenemos límite de aforo en las cenas de navidad, como cuando había discotecas y te quedabas fuera, pero para ver a tu cuñado. <br />
                Como no queremos que te quedes sin disfrutar estas fiestas, te presentamos AdoptaUnElfo_ <br />
                Registrate para encontrar el Anfitrión ideal para ti o acoge a un Elfo si tienes la casa ideal pero vacía.

              </p>
            </Col>
            <Col lg={3}>
              <MainCarousel />
            </Col>
          </Row>
        </Jumbotron>
      </main>
      </>
    )
}

export default Home;

