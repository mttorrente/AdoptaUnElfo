import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card, Button, Container, Col, Row, ButtonGroup } from "react-bootstrap";
import HomeForm from "./../Home-form/Home-form";
import UserForm from "./../User-form/User-form";
import Popup from "./../../shared/Popup/Popup";

import "./Profile.css";

import AuthService from "./../../../service/auth.service";
import HomeService from "./../../../service/home.service";

class Profile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
    this.authService = new AuthService();
    this.homeService = new HomeService();
  }



  handleModal = (visible) => this.setState({ showModal: visible });

  render() {
    return (
      <>
        <main className="main">
          <Container>
            <Row>
              <div className="card-profile">
                <Col lg={{ span: 6, offset: 3 }} lg={{span: 8, offset:2}}>
                  <Card>
                    <Card.Body>
                      <Card.Text>
                        <h5>Bienvenido a tu perfil {this.props.logged.name}</h5>
                        <hr />
                        <h6>Tus datos:</h6>
                        <p>{this.props.logged.description}</p>
                        <ButtonGroup aria-label="Basic example">
                          <Button className="btn-sm btn-dark button-profile" onClick={() => this.handleModal(true)}>
                            {this.props.logged.role === "ADMIN" ? "Crear nueva cena" : "Editar perfil"}</Button>
                          <br />
                          <Link to="/" className="btn-sm btn-dark button-profile" style={{ textDecoration: "none" }}>Volver a inicio
                        </Link>
                        </ButtonGroup>
                        <Popup show={this.state.showModal} title={
                          this.props.logged.role === "ADMIN" ? "Crear cena" : "Editar perfil"} handleModal={this.handleModal}>
                          {this.props.logged.role === "ADMIN" ? (<HomeForm {...this.props} closeModal={() => this.handleModal(false)} />) : (<UserForm {...this.props} closeModal={() => this.handleModal(false)} />)}
                        </Popup>
                      </Card.Text>
                    </Card.Body>
                    <Card.Img variant="bottom" className="profileImage" width={100} height={300} alt="Foto de perfil" src={this.props.logged.image} />
                  </Card>
                </Col>
              </div>
            </Row>
          </Container>
        
        <Container>
        <Row className="link-buttons">
              <Col lg={{ span: 6, offset: 4 }}>
                {this.props.logged.role === "ADMIN"
                  ?
                  <>
            <Link className="btn-sm btn-dark" className="lined-thick" to={'/lista-casas'} style={{ textDecoration: "none" }}>Ver anfitriones</Link>
                    <Link className="btn-sm btn-dark" className="lined-thick" to={'/lista-huespedes'} style={{ textDecoration: "none" }}>Adopta un elfo</Link>
                    </>
                  :
            <Link className="btn-sm btn-dark" className="lined-thick" to={'/lista-casas'} style={{ textDecoration: "none" }}>Ver anfitriones</Link>
                    
                }
          </Col>
          </Row>
        </Container>
      </main>
      </>
    );
  }
}

export default Profile;
