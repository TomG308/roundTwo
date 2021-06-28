const router = require('express').Router()
let Supporters = require('../models/supporters.model')

router.route('/').get((req, res) => {
    Supporters.find()
    .then(supporters => res.json(supporters))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/add').post((req, res) => {
    const firstName = req.body.firstName
    const lastName = req.body.lastName
    const email = req.body.email
    const areaCode = req.body.areaCode
    const phoneNumber = req.body.phoneNumber

    const newSupporters = new Supporters({
        firstName,
        lastName,
        email,
        areaCode,
        phoneNumber,
    })

    newSupporters.save()
    .then(() => res.json('supporter added!!!'))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/:id').get((req, res) => {
    Supporters.findById(req.params.id)
        .then(supporters => res.json(supporters))
        .catch(err => res.status(400).json('Error:' + err))
})

router.route('/:id').delete((req, res) => {
    Supporters.findByIdAndDelete(req.params.id)
    .then(() => res.json('Supporter deleted.'))
    .catch(err => res.status(400).json('Error:' + err))
})

router.route('/update/:id').post((req, res) => {
    Supporters.findById(req.params.id)
        .then(supporters => {
            supporters.firstName = req.body.firstName
            supporters.lastName = req.body.lastName
            supporters.email = req.body.email
            supporters.areaCode = req.body.areaCode
            supporters.phoneNumber = req.body.phoneNumber

            supporters.save()
                .then(() => res.json('Supporter updated')   )
                .catch(err => res.status(400).json('Error: ' + err))
        })
        .catch(err => res.status(400).json('Error: ' + err))
})

module.exports = router