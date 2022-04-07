const reviewList=(review)=>{
    var num=(review.length>5) ? 5 : review.length;
    console.log(num);
    var html="<ul id=reviewList>";
    for(var i=0;i<num;i++){
        var star=review[i].star;
        var location=review[i].location;
        var description=review[i].description;
        html+=`
        <li class="reviewList">
            <h4>${location}</h4>
            <h5>${countingStar(star)}</h5>
            <p>${description}</p>
        </li>`
    }
    html+='</ul>' 

    return html;
}

countingStar=(num)=>{ //이거 좀 비효율적인듯 고쳐야됨
    var star="";
    for(var i=0;i<num;i++){
        star+='★';
    }
    for(var i=0;i<5-num;i++){
        star+='☆';
    }
    return star;
}

exports.reviewHTML=(review)=>{
    var html=`
    <!DOCTYPE html>
    <html lang="ko">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>어쩌구저쩌구</title>
        <link rel="stylesheet" href="/CSS/review.css">
    </head>
    <body>
        <header>
            <ul>
                <li id="mainform">
                    <form>
                        <input type="submit" id="searchsubmit" value="">
                        <input type="search" id="search" placeholder="검색">
                    </form>
                </li>
                <li id="maintext">
                    <h1>어쩌구저쩌구</h1>
                </li>
                <li id="userprofile">
                    <a href="/user"><img src="../Image/user.png" id="userimg"></a>
                </li>
            </ul>
            <nav>
                <ul id="mainbar">
                    <li class="mainbar">지역</li>
                    <li class="mainbar">테마</li>
                    <li class="mainbar">예약</li>
                    <li class="mainbar">게시판</li>
                    <li class="mainbar">순위</li>
                </ul>
            </nav>
        </header>
        <section>
            <button type="button" class="w-btn w-btn-indigo"  onclick="location.href='/board/create'">글쓰기</button>
            ${reviewList(review)}
        </section>
    </body>
    </html>
    `
    return html;
}