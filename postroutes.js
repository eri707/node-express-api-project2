const fs = require('fs');
module.exports = function(app){
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
}