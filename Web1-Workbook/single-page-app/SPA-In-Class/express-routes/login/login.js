const express = require('express');
const router = express.Router();

router.post('/validate', (req,res) => {
    const response = {
        errors: false, 
        message: 'Login Validated',
        postedData: req.body,
    }
    res.json(response);
});

module.exports = router;