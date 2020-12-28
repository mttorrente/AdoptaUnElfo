import { Col, Card } from 'react-bootstrap'
import { Link } from "react-router-dom"

const UserCard = ({ image, _id }) => {

    return (
        <Col lg={4}>
            <Card className="user-card">
                <Link to={`/detalles-huespedes/${_id}`}>
                <Card.Img className="user-card-img" variant="top" src={image} />
                </Link>
            </Card>
        </Col>
    )
}

export default UserCard