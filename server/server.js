const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const PORT = 27017
const mongoURI = "mongodb://localhost:27017/test"
const book = require('./routes/api/book')
const acc = require('./routes/api/accounts')
const payment = require('./routes/api/payment')
const category = require('./routes/api/category')
const buy = require('./routes/api/buy')
const lib = require('./routes/api/library')


const router = express.Router();


app.use(cors())
app.use(morgan('tiny'))
app.use(bodyParser.json())


mongoose.connect(
    mongoURI,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    }
).then(()=> console.log('mongodb connected'))
.catch((err)=>console.log(err))

app.use('/api/book',book)
app.use('/api/acc',acc)
app.use('/api/payment',payment)
app.use('/api/category', category)
app.use('/api/buy',buy)
app.use('/api/lib',lib)

module.exports = router

app.listen(3000)