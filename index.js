const path = require('path')
const express = require('express')
const port = process.env.PORT || 3000

var app = express();

var staticPath = path.join(__dirname, '/public');
app.use(express.static(staticPath));

app.listen(port, function() {
  console.log('listening');
});
