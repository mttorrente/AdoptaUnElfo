import React, { Component } from "react"
import { Container, Row, Col, Form, Button } from "react-bootstrap"
import Signup from './../Signup/Signup'
import Alert from './../../shared/Alert/Alert'
import Popup from './../../shared/Popup/Popup'
import './Login.css'

import AuthService from './../../../service/auth.service'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      credentials : {
        username: '',
        password: '',
      },
      showModal: false,
      showToast: false,
      toastText: ''
    }
    this.authService = new AuthService()
  }


  handleInputChange = e => this.setState({ credentials: { ...this.state.credentials, [e.target.name]: e.target.value } })

  handleSubmit = e => {
    e.preventDefault()

    this.authService
      .login(this.state.credentials)
      .then(loggedUser => {
        this.props.expandUser(loggedUser.data)
        this.props.history.push('/perfil')
      })
      .catch(err => this.setState({ showToast: true, toastText: err.response.data.message }))
    
  }

  handleModal = visible => this.setState({ showModal: visible })
  handleToast = (visible, text) => this.setState({ showToast: visible, toastText: text })

  render() {

    return (
      <>
        <video className='react-player' autoPlay='autoplay' muted playsInline loop style={{ position: "absolute", width: "100%", height: "100%", objectFit: "cover", transform: "translate (-50%, -50%)", zIndex: "-1" }}>
          <source src="https://res.cloudinary.com/demo/video/upload/rsswf9muyxj0ltgcnvaw.mp4" />
        </video>   
      <Container className="login-img">
        <Row className="login">
          <Col md={{ span: 6, offset: 3 }}>
            <h2>Iniciar sesión</h2>
            <hr className="register-button"/>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId="username">
                <Form.Label>Usuario</Form.Label>
                <Form.Control type="text" name="username" value={this.state.username} onChange={this.handleInputChange}/>
              </Form.Group>
              <Form.Group controlId="password">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" name="password" value={this.state.password} onChange={this.handleInputChange}/>
              </Form.Group>
              <Button className="btn-block login-button" variant="dark" type="submit"> Iniciar sesión</Button>
                <Button className="btn-block register-button" variant="dark" type="submit" onClick={() => this.handleModal(true)}>Registro</Button>
                <Popup show={this.state.showModal} title={'Registro de Usuario'} handleModal={this.handleModal}>
                  <Signup {...this.props} closeModal={() => this.handleModal(false)} />
               </Popup> 
            </Form>
          </Col>
        </Row>
        </Container>
      
          <Alert show={this.state.showToast} toastText={this.state.toastText} handleToast={this.handleToast} />
        </>
    )
  }
}

export default Login
