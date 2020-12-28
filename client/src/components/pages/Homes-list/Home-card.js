import { Col, Card } from 'react-bootstrap'
import { Link } from "react-router-dom"
import './Home-list.css'

import './Home-card.css'

const HomeCard = ({ name, image, _id, diet }) => {

    return (
        <Col lg={4} className="home-card">
            <Link to={`/detalles-casas/${_id}`}>
                <Card.Img className="home-card-img" variant="top" src={image} />
            </Link>
            <Card.Body>
                <Card.Title className="home-card-title">{name} - {diet} </Card.Title>
                <div className ="fav-button">
                    {/* <Favs id={_id} ></Favs> */}
                </div>
            </Card.Body>
        </Col>
    )
}
export default HomeCard