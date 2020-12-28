import { Col, Card, Figure } from 'react-bootstrap'
import './Home-details.css'

const UserDinnerCard = ({ name, image }) => {

    return (
        <Col lg={{span: 4, offset: 1}} className="user-card">
            <Figure.Image className="user-card-img user-dinner" variant="top" src={image} />
            <Card.Body>
                <Card.Title className="user-title">{name}</Card.Title>
            </Card.Body>
        </Col>
    )
}

export default UserDinnerCard
