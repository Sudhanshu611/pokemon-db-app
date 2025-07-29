const express = require ("express");
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 5000;
const path = require('path');
const pokemonRouter = require('./routers/routes');

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname,'../frontend')));

// Routers
app.use('/pokemon', pokemonRouter)

app.get('/', (req,res) => {
    res.status(200).sendFile(path.join(__dirname,'../frontend/index.html'));
})

app.listen(PORT, () => console.log('Server is listening at ' + PORT));