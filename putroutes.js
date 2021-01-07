const fs = require('fs');
module.exports = function(app){
    app.put('/:animalId', function (req, res) {
        req.body.id = req.params.animalId;
        let newData = JSON.stringify(req.body);
        fs.writeFile(`data/${req.body.id}.json`, newData, (err) => {
            if (err) throw err;
            res.send(newData);
        });
    });
}