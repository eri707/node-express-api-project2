// install modules
const express = require('express');
const app = express();
app.use(express.json());
const fs = require('fs');

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
    let animal = JSON.stringify(req.body);
    // create the json file
    fs.writeFile('animal.json', animal, (err) => {
        if(err) throw err;
        res.send(req.body);
    });
});
// access to the server
app.listen(3000);

