const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const checkId = require('./../middleware/midlewares')

const User = require('../models/user.model')


//Get all users
router.get('/all-users', (req, res) => {

    User
        .find({role:'USER'})
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

//Get user details
router.get('/:id', checkId, (req, res) => {


    User
        .findById(req.params.id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

//Edit profile user
router.put('/:id', (req, res) => { 

    const { name, image, description, phone} = req.body
    const userId = req.params.id 
    
    User
        .findByIdAndUpdate(userId, {name, image, description, phone})
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

module.exports = router