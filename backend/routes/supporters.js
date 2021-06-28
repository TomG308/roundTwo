const router = require('express').Router()
let Supporters = require('../models/supporters.model')

router.route('/').get((req, res) => {
    Supporters.find()
    .then(supporters => res.json(supporters))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/add').post((req, res) => {
    const name = req.body.name
    const email = req.body.email
    const number = req.body.number

    const newSupporters = new Supporters({
        name,
        email,
        number,
    })

    newSupporters.save()
    .then(() => res.json('supporter added!!!'))
    .catch(err => res.status(400).json('Error: ' + err))
})

module.exports = router