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
  const newPizza = new Pizza({
    pizzaName: req.body.pizzaName,
    price: req.body.price,
    quantity: req.body.quantity,
    image: req.body.image
  });

  newPizza.save().then(pizza => res.json(pizza))
})

// DELETE api/pizzas
router.delete('/', (req, res) => {
  const newPizza = new Pizza({
    pizzaName: req.body.pizzaName,
    price: req.body.price,
    quantity: req.body.quantity,
    image: req.body.image
  });

  newPizza.save().then(pizza => res.json(pizza))
})

module.exports = router;