const express = require('express');
const app = express();

const cors = require('cors');
const port = process.env.PORT || 5000;

const chef = require('./data/chef.json');

app.use(cors());

app.get('/', (req, res) => {
    res.send('Chef is making delicious food!!!')
});

app.get('/chef', (req, res) => {
    res.send(chef);
})


app.get('/chef/:id', (req, res) => {
    const ChefId = req.params.id;
    console.log(ChefId);
    const allAboutChef = chef.find(n => n.id == ChefId);
    res.send(allAboutChef);
})


app.listen(port, () => {
    console.log(`Chef is making food on port: ${port}`)
})