const   mongoose = require('mongoose')

const Schema = mongoose.Schema

const supportersSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        lowercase: true,
        trim: true,
        required: true
    },
    areaCode: {
        type: Number,
        required: true,
        trim: true,
    },
    numberPrefix: {
        type: Number,
        required: true,
        trim: true,
    },
    subNumber: {
        type: Number,
        required: true,
        trim: true,
    }
}, {
    timestamps: true,
})

const Supporters = mongoose.model('Supporters', supportersSchema)

module.exports = Supporters