const express = require ("express");
const router = express.Router();
const db = require('../db');

// Add Pokemon to DB
router.post('/', (req, res) => {
    try{
    const {id, name, img_url} = req.body;
    const checkPokemons = db.prepare('SELECT * FROM pokemon WHERE id = ?').get(id);
    
    if (checkPokemons) return res.sendStatus(409);

    const addPokemon = db.prepare('INSERT INTO pokemon(id, name, img_url) VALUES(?, ?, ?)');
    const pokemonAdded = addPokemon.run(id, name, img_url);
    res.status(200).json({message: "Success", data: pokemonAdded});
    }
    catch (err) {
        console.log(err.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
    
})

// Get all pokemon in DB
router.get('/', (req,res) => {
    const getAllPokemons = db.prepare('SELECT * FROM pokemon')
    const allPokemons = getAllPokemons.all();
    res.status(200).json(allPokemons);
})

// Delete a pokemon
router.delete('/:id', (req,res) => {
    const {id} = req.params;
    const deleteData = db.prepare('DELETE FROM pokemon where id = ?');
    deleteData.run(id);
    res.status(200).json({message: 'Deleted'});
})

module.exports = router;