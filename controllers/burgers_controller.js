const router = require('express').Router()
const {selectAll, insertOne, updateOne} = require('../controllers/burgers_controller.js')

router.get('/burgers',
  (req, res) => selectAll(burgers => res.json(burgers)))

router.post('/burgers', (req, res) => insertOne(req.body, () => res.sendStatus(200)))

router.post('/burgers/:id', (req, res) => updateOne(req.body, req.params.id, () res.sendStatus(200)))

module.exports = router