// install modules
const express = require('express');
const app = express();
const fs = require('fs');
// midlleware reqires to parse incoming json 
app.use(express.json());

// add animals
require('./postroutes')(app);

// read a list of animals
require('./getroutes')(app);

// updata animal data
require('./putroutes')(app);

// delete animal data
require('./deleteroutes')(app);

// access to the server
app.listen(3000);

