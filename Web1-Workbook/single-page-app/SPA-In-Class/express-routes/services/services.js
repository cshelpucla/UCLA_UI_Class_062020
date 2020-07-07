const express = require('express');
const router = express.Router();

const services = require('./servicesData');

router.get('/', (req,res) => { 
    res.json(services);
    console.log('Retreived Services'); 
});

module.exports = router;