const express = require('express');
const bodyParser = require('body-parser');
const pizzapi = require('dominos'); 
let myStore = new pizzapi.Store(4336);
myStore.ID = 4336;

myStore.getMenu(
  function(storeData){
      console.log(storeData.menuByCode);
  }
);

// pizzapi.Util.findNearbyStores(
//   '700 Clark Ave, St. Louis, MO, 63102',
//   'Delivery',
//   function(storeData){
//       console.log(storeData);
//   }
// );

const app = express();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
});

app.use('/', require('./routes/api/pizza'))