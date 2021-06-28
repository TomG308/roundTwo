const   mongoose = require('mongoose')

const Schema = mongoose.Schema

const supportersSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true
    },
    number: {
        type: Number,
        required: true,
        maxlength: 10
    }
}, {
    timestamps: true,
})

const Supporters = mongoose.model('Supporters', supportersSchema)

module.exports = Supporters