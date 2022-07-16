const {Schema, model} = require('mongoose')

const LibSchema = new Schema({
    user:Number,
    lib: [Schema.Types.Mixed]
})

const Lib = model('lib', LibSchema)

module.exports = Lib