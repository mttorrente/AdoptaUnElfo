import React, { Component } from "react";
import { Form, Button, Spinner } from "react-bootstrap";


import UserService from "./../../../service/users.service";
import FilesService from "./../../../service/upload.service";

class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: "",
        description: "",
        image: "",
        phone: '',
        user: props.logged ? props.logged._id : "",
      },
      uploadingActive: false,
    };

    this.userService = new UserService();
    this.filesService = new FilesService();
  }

  handleInputChange = (e) =>
    this.setState({
      user: { ...this.state.user, [e.target.name]: e.target.value },
    });

  handleSubmit = (e) => {
    e.preventDefault();

    this.userService
      .editUser(this.props.logged._id, this.state.user)
      .then(() => {
        this.props.closeModal();
        this.props.history.push("/lista-huespedes");
      })
      .catch((err) => console.log(err));
  };

  handleImageUpload = (e) => {
    const uploadData = new FormData();
    uploadData.append("image", e.target.files[0]);

    this.setState({ uploadingActive: true });

    this.filesService
      .uploadImage(uploadData)
      .then((response) => {
        this.setState({
          user: { ...this.state.user, image: response.data.secure_url },
          uploadingActive: false,
        });
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" name="name" value={this.state.name} onChange={this.handleInputChange} />
        </Form.Group>
        <Form.Group controlId="description">
          <Form.Label>Descripción</Form.Label>
          <Form.Control type="text" name="description" value={this.state.description} onChange={this.handleInputChange} />
        </Form.Group>
        <Form.Group controlId="description">
          <Form.Label>Teléfono</Form.Label>
          <Form.Control type="text" name="phone" value={this.state.phone} onChange={this.handleInputChange} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Imagen{" "}
            {this.state.uploadingActive && (
              <Spinner animation="grow" variant="success" size="sm" />
            )}
          </Form.Label>
          <Form.File id="custom-file-translate-scss" label="Subir imagen" lang="en" custom type="file" onChange={this.handleImageUpload} />
        </Form.Group>
        <Button className="btn-block button-form" variant="dark" type="submit">Editar perfil</Button>
      </Form>
    );
  }
}

export default UserForm;
