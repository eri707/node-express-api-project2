const fs = require('fs');
module.exports = function(app){
    app.delete(`/:animalId`, function (req, res){
        fs.unlink(`data/${req.params.animalId}.json`, () => {
            res.send(true);
        });
    });
}