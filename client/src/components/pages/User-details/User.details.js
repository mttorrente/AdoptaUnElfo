import React, { Component } from 'react'
import { Container, Row, Col, Card, Spinner } from 'react-bootstrap'
import { Link } from "react-router-dom"
import './User-details.css'
import Loader from './../../shared/Spinner/Loader'
import Email from './../Nodemailer/Email'

import UserService from './../../../service/users.service'


class UserDetails extends Component {

    constructor() {
        super()
        this.state = {
            user: []
        }
        this.userService = new UserService()
    }

    componentDidMount = () => {

        const user_id = this.props.match.params.id
        this.userService
            .getUser(user_id)
            .then(res => this.setState({ user: res.data }))
            .catch(err => console.log(err))

    }

    render() {
        return (
            <body className="background" style={{ position: "absolute", width: "100%", height: "100%", objectFit: "cover", transform: "translate (-50%, -50%)", zIndex: "-1" }}>
                <Container >
                    <Row className="details-container">
                        {this.state.user._id
                            ?
                            <>
                                <Col lg={7}>
                                    <Card className="bg-dark text-white">
                                        <Card.Img className="details-card-img" src={this.state.user.image}/>
                                        <Card.ImgOverlay>
                                            <Card.Title className="home-details-text">Cena con {this.state.user.name}</Card.Title>
                                            <Card.Text className="home-details-text">{this.state.user.description} <br />
                                                <p>Email: {this.state.user.email}</p>
                                            </Card.Text>
                                        </Card.ImgOverlay>
                                    </Card>
                                    <Link to="/lista-huespedes" style={{ textDecoration: "none" }} className="lined-thick user-link">Volver</Link>
                                </Col>
                                <Col className="mail-form" lg={{span: 4, offset: 1}}>
                                    <Email />
                                </Col>
                            </>
                            :
                            <Loader />
                        }
                    </Row>
                </Container>
            </body>
        )
    }
}
export default UserDetails