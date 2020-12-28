import React, { useState, useEffect } from 'react'
import HomeService from './../../../service/home.service'
import HomeCard from './Home-card'
import { Container, Row } from 'react-bootstrap'
import Searchbar from './Searchbar'

import './Home-list.css'

function HomeList() {
    const homeService = new HomeService()
    const [home, setHomes] = useState([])
    const [filteredHomes, setFilteredHomes] = useState([])

    function filterList(e) {

        const filterHomes = home.filter((elm) => {
            return elm.diet.includes(e.target.value)
        })
        setFilteredHomes(filterHomes)

    }
    useEffect(() => {
        homeService.getHomes()
            .then(homes => {
                setHomes(homes.data)
                setFilteredHomes(homes.data)
            })
            .catch(err => console.log(err))

    }, [])

    return (
        <>
         <Container className="home-list">
                <h4 className="home-title">tu anfitrión ideal aquí...</h4>
                 <>
                 <Searchbar handleChange={filterList}/>
                 </>
            <Row className="home-card" >
                {filteredHomes.map(elm => <HomeCard key={elm._id} {...elm}></HomeCard>)}           
                </Row>
          </Container>
       </>
    )
}

export default HomeList