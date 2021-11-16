const express = require('../crudapp/node_modules/express');
const bodyParser = require('../crudapp/node_modules/body-parser');
// create express app
const app = express();
// Setup server port
const port = process.env.PORT || 8080;
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse requests of content-type - application/json
app.use(bodyParser.json())
// define a root route
app.get('/', (req, res) => {
  res.send("Hello World");
});
// listen for requests
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});