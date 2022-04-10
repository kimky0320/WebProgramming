const express=require('express');
const mainTemplate=require('./lib/template/mainTemplate');
const bodyParser=require('body-parser');
const path=require('path');
const db=require('./lib/db');

const saleRouter=require('./lib/Router/saleRouter');
const locationRouter=require('./lib/Router/saleRouter');
const reviewRouter=require('./lib/Router/reviewRouter');

const app=express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
//사용자가 내부적으로 전송한 post 데이터를 분석해서 모든데이터를 가져온다음 req.body 에 저장

app.use(express.static(path.join(__dirname,'Static')));
app.use('/sale',saleRouter);
app.use('/locatoin',locationRouter);
app.use('/review',reviewRouter);

app.get('/',(req,res)=>{
    db.query('SELECT * FROM review ORDER by recommend DESC',(err,review)=>{
        html=mainTemplate.mainHTML(review);
        res.send(html);
    });
});

app.listen(3000,()=>{
    console.log('3000번 포트 open');
});

app.use((err,req,res,next)=>{
    console.error(err.stack);
    res.status(500).send('Something Broken!');
});
//에러처리