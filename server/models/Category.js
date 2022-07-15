const {Schema, model} = require('mongoose')

const CategorySchema = new Schema({
    name:String,
    id: Number
})

const Category = model('category', CategorySchema)

module.exports = Category