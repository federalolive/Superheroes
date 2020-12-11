const mongoose = require('mongoose')
const Schema = mongoose.Schema

const superheroSchema = new Schema({
  name: {type: String, required: true},
  abilities: {type: String, default: ''},
}, {
  timestamps: true
})

module.exports = mongoose.model("Superhero", superheroSchema)