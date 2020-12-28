import React, { Component } from 'react'
import { Container, Card, Row, Col, Button } from 'react-bootstrap'
import { Link } from "react-router-dom"
import HomeService from './../../../service/home.service'
import UserDinnerCard from './User-dinner-card'
import Loader from './../../shared/Spinner/Loader'
import Popup from './../../shared/Popup/Popup'
import Email from './../Nodemailer/Email'
import './Home-details.css'


class HomeDetails extends Component {

    constructor(props) {
        super(props)
        this.state = {
            home: [],
            showModal: false,
        }
        this.homeService = new HomeService()
    }

    componentDidMount = () => {

        const home_id = this.props.match.params.id

        this.homeService
            .getHome(home_id)
            .then(res => this.setState({ home: res.data.home }))
            .catch(err => console.log(err))
    }

    deleteHome = () => {
        const home_id = this.props.match.params.id

        this.homeService
            .deleteHome(home_id)
            .then(() => this.props.history.push('/lista-casas'))
            .catch(err => console.log(err))
    }

    deleteHome = () => {
        const home_id = this.state.home._id

        this.homeService
            .deleteHome(home_id)
            .then(() => this.props.history.push("/lista-casas"))
            .catch((err) => console.log(err))
    };

    handleModal = visible => this.setState({ showModal: visible })

    render() {

        return (
            <body className="home-details-back" style={{ position: "absolute", width: "100%", height: "100%", objectFit: "cover", transform: "translate (-50%, -50%)", zIndex: "-1" }}>
            <>
            <Container className="home-details">

                {this.state.home._id
                    ?
                    <>
                        <Row>
                            <Col md={{ span: 6, offset: 3 }}>
                                <Card className="bg-dark text-white">
                                    <Card.Img className="home-details-img" src={this.state.home.image} alt={this.state.home.name} />
                                    <Card.ImgOverlay>
                                        <Card.Title className="home-details-text">Cena en {this.state.home.name}</Card.Title>
                                            <Card.Text className="home-details-text">{this.state.home.description} <br />Dirección: {this.state.home.street}
                                                <p>Email: {this.state.home.email}</p>
                                            </Card.Text>
                                        
                                        {this.props.logged.role === 'ADMIN'
                                            ?
                                            <Button className="btn-sm btn-dark" onClick={() => this.deleteHome()}>Eliminar cena</Button>
                                            :
                                            ''
                                        }
                                        <Button className="btn-sm" variant="dark" type="submit" onClick={() => this.handleModal(true)}>Contactar</Button>
                                        <Popup show={this.state.showModal} handleModal={this.handleModal}>
                                            <Email {...this.props} closeModal={() => this.handleModal(false)} />
                                        </Popup>
                                    </Card.ImgOverlay>
                                        </Card>
                                        <Link to="/lista-casas" style={{ textDecoration: "none" }} className="lined-thick user-link">Volver</Link>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg={{ span: 7, offset: 2}} className="details-title">
                                        <h5>A esta cena asistirán:</h5>
                                    </Col>
                                </Row>
                        <Row>
                            {this.state.home.user.map(elm => <UserDinnerCard key={elm._id} {...elm} />)}
                        </Row>
                    </>
                    :
                    <Loader />
                }

                </Container>
                </>
            </body>
        )
    }
}

export default HomeDetails