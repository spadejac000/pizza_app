const express = require('express');
const router = express.Router();
const pizzapi = require('dominos'); 
let myStore = new pizzapi.Store(4336);
myStore.ID = 4336;

router.get('/', (req, res) => {
  console.log(
    myStore.getMenu(
      function(storeData){
          console.log(storeData.menuByCode);
      }
    )
  )
  res.status(200).json(myStore)
})

module.exports = router;