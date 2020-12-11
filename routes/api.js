var express = require('express');
var router = express.Router();
const superheroesCtrl = require('../controllers/api/superheroes')

router.get('/superheroes', superheroesCtrl.index)
router.get('/superheroes/:id', superheroesCtrl.show)
router.post('/superheroes', superheroesCtrl.create)
router.put('/superheroes/:id', superheroesCtrl.update)
router.delete('/superheroes/:id', superheroesCtrl.delete)

module.exports = router;
