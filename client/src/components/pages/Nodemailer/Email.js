/* eslint-disable */
import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import './Email.css'
import EmailService from "./../../../service/nodemailer.service";

class Email extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      subject: '',
      message: ''
    },
      (this.emailService = new EmailService());
  }

  handleInputChange = (e) => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = (e) => {
    e.preventDefault()

    this.emailService
      .sendEmail(this.state)
      .then((response) => {
        this.props.closeModal()
      })
      .catch((err) => console.log(err));
  };

  render() {


    return (
      <>
        <Form onSubmit={this.handleSubmit}>
          <h5>Contactar</h5>
          <hr className="send-button"/>
                <Form.Group controlId="to">
                    <Form.Label>Email</Form.Label>
            <Form.Control type="email" name="email" value={this.state.email} onChange={this.handleInputChange} placeholder={'email@ejemplo.com'}/>
                </Form.Group>
                <Form.Group controlId="subject">
                    <Form.Label>Asunto</Form.Label>
                    <Form.Control type="text" name="subject" value={this.state.subject} onChange={this.handleInputChange} />
                </Form.Group>
                <Form.Group controlId="message">
                    <Form.Label>Mensaje</Form.Label>
                    <Form.Control type="text" as="textarea" name="message" value={this.state.message} onChange={this.handleInputChange} />
                </Form.Group>
            <Button variant="dark btn-block" className="send-button" type="submit"> Enviar</Button>
          </Form>
      </>
    );
  }
}

export default Email;

