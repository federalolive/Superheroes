const superhero = require('../../models/superhero')
const Superhero = require('../../models/superhero')
module.exports = {
  index, 
  show,
  create,
  update,
  delete: deleteSuperhero
}
function index(req, res) {
    Superhero.find({})
    .then((superheroes) => {
      res.status(200).json(superheroes)
    })
  }
function show(req, res) {
  Superhero.findById(req.params.id)
  .then((Superhero) => {
  (res.status(200).json(superhero))
})
}

function create( req, res) {
    Superhero.create(req.body)
    .then((superhero)=>{
        res.status(201).json(superhero)
    })
}
function update(req, res) {
  Superhero.findByIdAndUpdate(req.params.id, req.body, {new: true})
  .then((Superhero) => {
    res.status(200).json(superhero)
  })
}
  
function deleteSuperhero(req, res) {
  Superhero.findByIdAndDelete(req.params.id)
  .then((Superhero) => {
  (res.status(200).json(superhero))
})
}