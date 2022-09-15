const express = require('express');
const app = express();
const bodyParser = require('body-parser');
 
app.use(bodyParser.json());

app.post('/upvotes', (req, res) => {
    res.send({});
});
 
app.listen(3000);