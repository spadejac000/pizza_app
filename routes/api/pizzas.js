const express = require('express');
const router = express.Router();

// Pizza Model
const Pizza = require('../../models/Pizza')

// GET api/pizzas
router.get('/', (req, res) => {
  Pizza.find()
    .then(pizzas => res.json(pizzas))
})

// POST api/pizzas
router.post('/', (req, res) => {
  // const newPizza = new Pizza({
  //   pizzaName: req.body.pizzaName,
  //   price: req.body.price,
  //   quantity: req.body.quantity,
  //   image: req.body.image
  // });

  // newPizza.save().then(pizza => res.json(pizza))
  console.log(req.body)
})

// DELETE api/pizzas
router.delete('/:id', (req, res) => {
  Pizza.findById(req.params.id).then(pizza => {
    pizza.remove().then(() => res.json({success: true}))
  }).catch(err => res.status(404).json({success: false}))
})


module.exports = router;