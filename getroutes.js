const fs = require('fs');
module.exports = function(app){
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
}