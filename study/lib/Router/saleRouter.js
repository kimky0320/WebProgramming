//saleRouter구현
const express=require('express');
const router=express.Router();

router.get('/',(req,res)=>{ //sale 메인페이지

});

router.get('/:pageId',(req,res)=>{ //sale 메인페이지 상세보기
    var pageId=req.params.pageId;
});

module.exports=router;