// install modules
const express = require('express');
const app = express();
const fs = require('fs');
// midlleware reqires to parse incoming json 
app.use(express.json());
// helper function to generate id for each record
const generalId = () => {
    let resultString = '';
    for (i = 0; i < 6; i += 1) {
        let letters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let randomLetters = letters[Math.floor(Math.random() * letters.length)];
        resultString += randomLetters;
    }
    return resultString;
}
// add animal data
app.post('/', function (req, res) {
    // add id to the object of req.body
    req.body.id = generalId();
    // create json data from req.body
    let data = JSON.stringify(req.body);
    // create the json file
    fs.writeFile(`data/${req.body.id}.json`, data, (err) => {
        if (err) throw err;
        res.send(req.body);
    });
});
// read a list of animals
app.get('/', function (req, res) {
    fs.readdir('data/', (err, files) => {
        if (err) throw err;
        let animals = [];
        files.forEach(file => {
            let animal = JSON.parse(fs.readFileSync(`data/${file}`));
            animals.push(animal);
        });
        res.send(animals);
    });
});
// read a single of animals
app.get('/:animalId', function (req, res) {
    let animal = JSON.parse(fs.readFileSync(`data/${req.params.animalId}.json`));
    res.send(animal);
});

// access to the server
app.listen(3000);

