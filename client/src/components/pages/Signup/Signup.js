import React, { Component } from "react"
import { Form, Button, Spinner } from "react-bootstrap"

import AuthService from './../../../service/auth.service'
import FilesService from './../../../service/upload.service'


class Signup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      credentials: {
        username: '',
        password: ''
      },
      uploadingActive: false
    }
    this.authService = new AuthService()
    this.filesService = new FilesService()
  }

  handleInputChange = e => this.setState({ credentials: { ...this.state.credentials, [e.target.name]: e.target.value } })

  handleSubmit = e => {
    e.preventDefault()

    this.authService
      .signup(this.state.credentials)
      .then(loggedUser => {
        this.props.expandUser(loggedUser.data)
        this.props.closeModal()
        this.props.history.push('/perfil')
      })
      .catch(err => console.log(err))

  }
  handleImageUpload = e => {

    const uploadData = new FormData()
    uploadData.append('image', e.target.files[0])

    this.setState({ uploadingActive: true })

    this.filesService
      .uploadImage(uploadData)
      .then(response => {
        this.setState({
          credentials: { ...this.state.credentials, image: response.data.secure_url },
          uploadingActive: false
        })
      })
      .catch(err => console.log('ERRORRR!', err))

  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group controlId="username">
          <Form.Label>Usuario</Form.Label>
          <Form.Control type="text" name="username" value={this.state.username} onChange={this.handleInputChange} />
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" name="password" value={this.state.password} onChange={this.handleInputChange} />
        </Form.Group>

        <Form.Group>
          <Form.Label>Imagen {this.state.uploadingActive && <Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true" />}</Form.Label>
          <Form.File id="custom-file-translate-scss" label="Subir imagen" lang="en" custom type="file" onChange={this.handleImageUpload} />
        </Form.Group>
        <Button className="btn-block register-button" variant="dark" type="submit">Registrarme</Button>
      </Form>
    )
  }
}
export default Signup
