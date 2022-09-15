const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const {createUpvoteCoordinator} = require("./upvotes-coordinators");
 
app.use(bodyParser.json());

function prepFailableForSerialization(failable) {
    return {
        ...failable,
        error: failable.error && {
            ...failable.error,
            stack: failable.error.stack
        }
    }
}

app.post('/upvotes', async function (req, res) {
    const resultFailable = await createUpvoteCoordinator(req.body);
    res.set('content-type', 'application/json; charset=utf-8');
    if (!resultFailable.success) console.error(resultFailable);
    res.status(resultFailable.success ? 200 : 500);
    res.send(prepFailableForSerialization(resultFailable));
});
 
app.listen(3000);