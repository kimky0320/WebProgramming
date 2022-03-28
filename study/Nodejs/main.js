const express=require('express');
const mainTemplate=require('./template/mainTemplate');

app=express();

app.get('/',(req,res)=>{
    html=mainTemplate.html;
    res.send(html);
});

app.listen(3000,()=>{
    console.log('3000번 포트 open');
});