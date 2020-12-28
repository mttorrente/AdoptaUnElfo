const express = require('express')
const router = express.Router()

const transporter = require('../configs/nodemailer.config')

//Email
router.post('/send-email', (req, res) => {
    const { email, subject, message } = req.body

    console.log(req.body)

    transporter
        .sendMail({
            from:  '"AdoptaUnElfo" <adoptaunelfo@gmail.com>',
            to: email,
            subject: subject,
            text: message,
            html: `<b>${message}</b>`
        })
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

module.exports = router
