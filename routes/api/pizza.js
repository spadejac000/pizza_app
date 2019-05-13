const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('hello world!! I am Sam. Not really. My name is actually Jacob. It is a biblical name according to everyone when I tell them my name');
})

module.exports = router;