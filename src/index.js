const express = require('express');
const app = express();
const port = 5000;
const api = require('./api/movieApi');

app.use(express.json());

app.get('/horrors/', api.getAllHorrors);
app.get('/horrors/:id', api.getHorrorById);
app.post('/horrors/', api.addHorror);
app.put('/horrors/:id', api.updateHorror);
app.delete('/horrors/:id', api.deleteHorror);

app.listen(port, () => {
    console.log(`Node app is running on port ${port}.`);
});