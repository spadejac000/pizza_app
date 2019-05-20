const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// myStore.getMenu(
//   function(storeData){
//       console.log(storeData.menuByCode);
//   }
// );

const app = express();
app.use(cors())

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
});

app.use('/', require('./routes/api/pizza'))
