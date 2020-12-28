import React, { Component } from 'react'
import { Container, Row, Card, Col } from 'react-bootstrap'
import UserCard from './User-card'
import './Users-list.css'


import UserService from './../../../service/users.service'

class UserList extends Component {

    constructor() {
        super()
        this.state = {
            user: [],
            favourites: []
        }
        this.userService = new UserService()
    }


    componentDidMount = () => {
        this.userService
            .getUsers()
            .then(res => {
                this.setState({ user: res.data })
            })
            .catch(err => console.log(err))
    }


    render() {
        return (
            <Container className="user-list">
                <h4>con espacio para un elfo...</h4>
                <Row className="home-card">
                    <Col lg={4}>
                        <Card className="user-card">
                            <video className="user-card-img" autoPlay='autoplay' muted playsInline loop variant="top">
                                <source src="https://res.cloudinary.com/demo/video/upload/rsswf9muyxj0ltgcnvaw.mp4"></source>
                            </video>
                        </Card>
                    </Col>
                    {this.state.user.map(elm => <UserCard key={elm._id} {...elm}></UserCard>)}
                </Row>
            </Container>
        )
    }
}
export default UserList