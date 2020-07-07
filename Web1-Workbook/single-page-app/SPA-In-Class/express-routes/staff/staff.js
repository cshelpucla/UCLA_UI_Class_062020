const express = require('express');
const router = express.Router();

const staff = require('./staffData.js');
router.get('/', (req,res) => { 
    res.json(staff);
    console.log('Retreived Staff'); 
});

module.exports = router;