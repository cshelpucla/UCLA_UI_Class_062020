const express = require('express');
const router = express.Router();

router.post('/send', (req,res) => {
    const response = {
        errors: false, 
        message: 'Email Sent',
        postedData: req.body,
    }
    
    console.log('Post Sent Email');
    res.json(response);
});

module.exports = router;