const {Schema, model} = require('mongoose')

const LibSchema = new Schema({
    user:int,
    lib: [Schema.Types.Mixed]
})

const Lib = model('lib', LibSchema)

module.exports = Lib