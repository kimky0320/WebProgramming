//locationRouter구현
const express=require('express');
const router=express.Router(); 
//router.get() or router.post()로 사용
//마지막에 router exports해줘야됨
//필요한 모듈들 전부 불러와야됨

router.get('/',(req,res)=>{ //location 메인페이지

});

router.get('/:pageId',(req,res)=>{ //location 상세보기 페이지
    var pageId=req.params.pageId;
});
module.exports=router;