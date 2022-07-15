const {Schema, model} = require('mongoose')

const PaymentSchema = new Schema({
    name:String,
    life_time: String
})

const Payment = model('payment', PaymentSchema)

module.exports = Payment