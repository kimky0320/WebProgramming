const express=require('express');
const db = require('../db');
const template=require('../template/reviewTemplate');
const router=express.Router();

router.get('/',(req,res)=>{
    db.query(`SELECT * FROM review ORDER BY id DESC`,(err,review)=>{
        const html=template.reviewHTML(review);
        res.send(html);
    });
});

router.get('/create',(req,res)=>{

});

router.post('/create_process',(req,res)=>{

});

module.exports=router;