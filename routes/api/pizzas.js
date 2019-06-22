const express = require('express');
const router = express.Router();

// Pizza Model
const Pizza = require('../../models/Pizza')

// GET api/pizzas
router.get('/', (req, res) => {
  console.log(nearbyStores, 'Sam I am');
})

module.exports = router;