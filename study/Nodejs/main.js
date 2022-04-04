const express=require('express');
const mainTemplate=require('./template/mainTemplate');
const bodyParser=require('body-parser');

const saleRouter=require('./Router/saleRouter');
const locationRouter=require('./Router/locationRouter');

app=express();

app.use('/sale',saleRouter);
app.use('/locatoin',locationRouter);

app.get('/',(req,res)=>{
    html=mainTemplate.html(sale,location);
    res.send(html);
});

app.listen(3000,()=>{
    console.log('3000번 포트 open');
});

app.use((err,req,res,next)=>{
    console.error(err.stack);
    res.status(500).send('Somting Broken!');
});
//에러처리