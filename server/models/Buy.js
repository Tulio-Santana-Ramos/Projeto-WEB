const {Schema, model} = require('mongoose')

const BuySchema = new Schema({
    name:String,
    value: String
})

const Buy = model('buy', BuySchema)

module.exports = Buy