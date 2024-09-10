const express = require('express');
const path = require('path');
const rootDir = require('../util/path')

const router = express.Router();

router.get('/add-product',(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','add-product.html'));

})

router.get('/contactus',(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','contact-us.html'))
})

router.post('/success',(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','success.html'))
})

router.post('/add-product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
})

module.exports = router;