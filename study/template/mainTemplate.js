saleTemplate=(sale)=>{
    saleList="";
    saleList+='<ul>'
    for(var i=0;i<5;i++){
        saleList+=`<li><a href="/sale/${i}"><img src="/Image/img${i}.jpg" class="sectionimg"><h5>할인중${i}</h5></a></li>`;
    }
    saleList+='</ul>';
    return saleList;
}

locationTemplate=(location)=>{
    locationList="";
    locationList+='<ul>';
    for(var i=0;i<5;i++){
        locationList=`<li><a href="/location/${i}"><img src="/Image/img${i}.jpg" class="sectionimg"><h5>촬영지${i}</h5></a></li>`;
    }
    locationList+='</ul>'
    return locationList
}

reviewTemplate=(review)=>{
    reviewList="";
    reviewList+="<ul>";
    for(var i=0;i<2;i++){
        reviewList+=`<li><p>★★★★★</p>후기가 어쩌고 저쩌고 좋아요~~!!</li>`
    }
}
//아직 구현못함

exports.mainHTML=()=>{
    var html=`
    <!DOCTYPE html>
    <html lang="ko">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>어쩌구저쩌구</title>
        <link rel="stylesheet" href="/CSS/study.css">
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
                    <h1>어쩌구 저쩌구</h1>
                </li>
                <li id="userprofile">
                    <a href="/user"><img src="/Image/user.png" id="userimg"></a>
                </li>
                
            </ul>
        </header>
        <nav>
                <ul id="mainbar">
                    <li class="mainbar">지역</li>
                    <li class="mainbar">테마</li>
                    <li class="mainbar">예약</li>
                    <li class="mainbar">게시판</li>
                    <li class="mainbar">순위</li>
                </ul>
            </nav>
        <section>
            <img src="../Image/img1.jpg" id="mainimg">
            <ul id="imgbar">
                <li class="imgbar"><</li>
                <li class="imgbar">●</li>
                <li class="imgbar">●</li>
                <li class="imgbar">●</li>
                <li class="imgbar">●</li>
                <li class="imgbar">●</li>
                <li class="imgbar">></li>
            </ul>
        </section>
        <section>
            <header>
                    <h3>지금 할인 중!</h3>
                    <ul>
                    <li><a href="/sale1"><img src="/Image/img2.jpg" class="sectionimg"><h5>할인중1</h5></a></li>
                    <li><a href="/sale2"><img src="/Image/img3.jpg" class="sectionimg"><h5>할인중2</h5></a></li>
                    <li><a href="/sale3"><img src="/Image/img4.jpg" class="sectionimg"><h5>할인중3</h5></a></li>
                    <li><a href="/sale4"><img src="/Image/img5.jfif" class="sectionimg"><h5>할인중4</h5></a></li>
                    <li><a href="/sale5"><img src="/Image/img6.jpg" class="sectionimg"><h5>할인중5</h5></a></li>
                </ul>
                <h3>'사내맞선' 촬영지!</h3>
                <ul>
                    <li><a href="/location1"><img src="/Image/img7.jpg" class="sectionimg"><h5>촬영지1</h5></a></li>
                    <li><a href="/location2"><img src="/Image/img8.jfif" class="sectionimg"><h5>촬영지2</h5></a></li>
                    <li><a href="/location3"><img src="/Image/img9.jpg" class="sectionimg"><h5>촬영지3</h5></a></li>
                    <li><a href="/location4"><img src="/Image/img10.jpg" class="sectionimg"><h5>촬영지4</h5></a></li>
                    <li><a href="/location5"><img src="/Image/img11.jpg" class="sectionimg"><h5>촬영지5</h5></a></li>
            </ul>
            </header>
            <section>
                <div id="review">
                    <h4>베스트 후기</h4>
                <ul>
                    <li><p>★★★★★</p>후기가 어쩌고 저쩌고 좋아요~~!!</li>
                    <li><p>★☆☆☆☆</p>여긴 좀 에바인듯...</li>
                </ul>
                </div>
                <div id="tripsearch">
                <h4>빠른 여행지 찾기</h4>
                <div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3263.6169972082794!2d128.9660611150671!3d35.11627348032984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3568c25d14c1764f%3A0x9f345b4d72a391e7!2z64-Z7JWE64yA7ZWZ6rWQIOyKue2Vmey6oO2NvOyKpA!5e0!3m2!1sko!2skr!4v1648980331181!5m2!1sko!2skr"style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    <form>
                        <select>
                            <option>도/시</option>
                            <option>서울/인천/경기</option>
                            <option>강원도</option>
                            <option>경남/부산/울산</option>
                            <option>경북/대구</option>
                            <option>전라남도/광주</option>
                            <option>전라북도</option>
                            <option>충남/충북/대전</option>
                            <option>제주도</option> 
                        </select>
                        <select>
                            <option>시/군/구</option>
                        </select>
                        <select>
                            <option>분류</option>
                        </select>
                        <label><input type="checkbox" checked>대중교통 이용</label>
                        <label><input type="checkbox" checked>뭐 넣을지 못 정함</label>
                        <input type="submit">
                    </form>
                </div>
                
                </div>
            </section>
            <footer>
                <div id="rank1">
                    <h4>관광지 순위</h4>
                        <table>
                            <th>NO.</th>
                            <th>Name</th>
                            <th>Value</th>
                            <tr>
                                <td>1</td>
                                <td>송주집</td>
                                <td>value</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>해진집</td>
                                <td>value</td>
                            </tr>
                        </table>
                </div>
                <div id="rank2">
                    <h4>후기 추천 순위</h4>
                    <table>
                        <th>NO.</th>
                        <th>Name</th>
                        <th>Value</th>
                        <tr>
                            <td>1</td>
                            <td>기윤집</td>
                            <td>value</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>dca동방</td>
                            <td>value</td>
                        </tr>
                    </table>
                </div>
                
            </footer>
        </section>
    </body>
    </html>
    `
    return html;
}