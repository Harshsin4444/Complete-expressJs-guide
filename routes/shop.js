const express = require('express');

const router = express.Router();

router.get('/',(req,res,next)=>{
    console.log('in the middleware');
    res.send('<h1>HELLO WORLD</h1>');
})

module.exports = router;