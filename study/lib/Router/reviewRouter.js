const express=require('express');
const path=require('path');
const db = require('../db');
const template=require('../template/reviewTemplate');
const fs=require('fs');
const sanitizeHTML=require('sanitize-html');

const router=express.Router();

router.get('/',(req,res)=>{
    db.query(`SELECT * FROM review ORDER BY id DESC`,(err,review)=>{
        const html=template.reviewHTML(review);
        res.send(html);
    });
});

router.get('/create',(req,res)=>{
    const html=template.review_create_HTML();
    res.send(html);
});

router.post('/create_process',(req,res)=>{
    const post=req.body;
    const location=sanitizeHTML(post.location);
    const star=parseInt(post.star);
    const description=sanitizeHTML(post.description);
    db.query(`INSERT INTO review (location,star,description) VALUES (?,?,?)`,[location,star,description],(err,result)=>{
        res.redirect(302,'/review');
    });
});

router.get('/detail/:pageId',(req,res)=>{ //상세보기 구현
    const pagdId=req.params.pageId;
    db.query(`SELECT * FROM review WHERE id=?`,[pageId],(err,review)=>{
        
    });
});

router.post('/delete_process',(req,res)=>{ //삭제하기 구현
    const body=req.body;
    const id=parseInt(body.id);
    db.query(`DELETE FROM review WHERE id=${id}`,(err,result)=>{
        res.redirect(302,'/review');
    });
});

module.exports=router;