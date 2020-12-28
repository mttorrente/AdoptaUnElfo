import React, { Component } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Navigation.css";

import AuthService from "./../../../service/auth.service";

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.authService = new AuthService();
  }

  logout = () => {
    this.authService
      .logout()
      .then((res) => {
        this.props.history.push('/')
        this.props.expandUser(undefined);
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <>
      <Navbar collapseOnSelect expand="lg" className="navigation">
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="logo">AdoptaUnElfo_</div>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto navbar">
            {this.props.logged
              ?
              <>
                {this.props.logged.role === "ADMIN"
                  ?
                  <>
                    <NavDropdown title="Perfil" id="collasible-nav-dropdown">
                      <Link to="/perfil" style={{ textDecoration: "none" }}>
                        <NavDropdown.Item as="div">Perfil</NavDropdown.Item>
                      </Link>
                      <NavDropdown.Item as="div" onClick={this.logout}>Cerrar sesión</NavDropdown.Item>
                    </NavDropdown>
                    <Link to="/lista-huespedes" style={{ textDecoration: "none" }}>
                      <Nav.Link as="div">Elfos</Nav.Link>
                    </Link>

                    <Link to="/lista-casas" style={{ textDecoration: "none" }}>
                      <Nav.Link as="div">Anfitriones</Nav.Link>
                    </Link>
                  </>
                  :
                  <>
                    <NavDropdown title="Perfil" id="collasible-nav-dropdown">
                      <Link to="/perfil" style={{ textDecoration: "none" }}>
                        <NavDropdown.Item as="div">Perfil</NavDropdown.Item>
                      </Link>
                      <NavDropdown.Item as="div" onClick={this.logout}>Cerrar sesión</NavDropdown.Item>
                    </NavDropdown>
                    <Link to="/lista-casas" style={{ textDecoration: "none" }}>
                      <Nav.Link as="div">Anfitriones</Nav.Link>
                      </Link>
                       <Link to="/lista-huespedes" style={{ textDecoration: "none" }}>
                      <Nav.Link as="div">Elfos</Nav.Link>
                    </Link>
                  </>

                }
              </>
              :
              <>
                <Link to="/inicio-sesion" style={{ textDecoration: "none" }}>
                  <Nav.Link as="div">Inicio sesión</Nav.Link>
                </Link>
              </>
            }
          </Nav>
        </Navbar.Collapse>
        </Navbar>
        </>
    );
  }
}

export default Navigation;




