const   mongoose = require('mongoose')

const Schema = mongoose.Schema

const supportersSchema = new Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true, 
    },
    email: {
        type: String,
        required: true
    },
    areaCode: {
        type: Number,
        required: true,
        // max: 3,
    },
    phoneNumber: {
        type: Number,
        required: true,
        // max: 7,
    }
}, {
    timestamps: true,
})

const Supporters = mongoose.model('Supporters', supportersSchema)

module.exports = Supporters