const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const passport = require("passport")
const checkId = require('./../middleware/midlewares')

const Home = require('../models/home.model')
const User = require('../models/user.model')


//Get all homes
router.get('/all-homes', (req, res) => {

    Home
        .find()
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

//Get homes details
router.get('/:id', checkId, (req, res) => { 

    const promiseHome= Home.findById(req.params.id).populate('user')
    const promiseUser = User.find({role:'USER'})
    
    Promise
        .all([promiseHome, promiseUser])
        .then(response => {
            res.status(200).json({ home: response[0], user: response[1]})
        })
        .catch(err => res.status(500).json(err))
})

//Create dinner (home)
router.post('/new-dinner', (req, res) => {

    const { name, image, description, street, diet, phone, owner} = req.body
    
    Home
        .create({name, image, description, street, diet, phone, owner })
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

//Edit dinner (home)
router.put('/:id', (req, res) => { 

    Home
        .findByIdAndUpdate(req.params.id, req.body)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

//Delete dinner (home)
router.delete('/:id', (req, res) => {

    const homeId = req.params.id
    console.log(req.params.id)

    Home
        .findByIdAndDelete(homeId)
        .then(response => {
            console.log(response)
           return res.json(response)
        })
        .catch(err => res.status(500).json(err))
})

//Favourites
router.get('/:id', (req, res) => {

    Home
        .findById(req.params.id)
        .populate('favourites')
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})


module.exports = router