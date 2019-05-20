const express = require('express');
const router = express.Router();
const pizzapi = require('dominos'); 
// let myStore = new pizzapi.Store(4336);
// myStore.ID = 4336;

// let menu = myStore.getMenu(
//   function(storeData){
//       return storeData.menuByCode;
//   }
// );

// let theMenu = {'DominosPizza': menu}

let nearbyStores = pizzapi.Util.findNearbyStores(
  '700 Clark Ave, St. Louis, MO, 63102',
  'Delivery',
  function(storeData){
      return storeData;
  }
);

router.get('/', (req, res) => {
  // res.status(200).json(theMenu);
  console.log(nearbyStores, 'Sam I am');
})

module.exports = router;