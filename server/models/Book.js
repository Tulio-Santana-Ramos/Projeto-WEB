const {Schema, model} = require('mongoose')

const BookSchema = new Schema({
    name:String,
    pages:Number,
    categories: [Number],
    price: String,
    promo: Object,
    synopsis: String,
    editor: String,
    autor: String,
    tradutor: String,
    year: Number,
    id:Number,
    evaluations:[Object]
})

const Book = model('book', BookSchema)

module.exports = Book