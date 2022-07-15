const {Schema, model} = require('mongoose')

const AccountSchema = new Schema({
    email:String,
    senha:String,
    admin:Boolean,
    name:String,
    phone:String,
    id:Number,
    cards:[Schema.Types.Mixed]
})

const Account = model('accounts', AccountSchema)

module.exports = Account