var buttons=document.querySelectorAll('.ajaxButton'); //추천버튼 있는거 클래스선택자로 가져옴
var recommends=document.querySelectorAll('.recommend'); //추천수 적혀있는 버튼 클래스 

for(let i=0;i<buttons.length;i++){ //버튼 갯수만큼 반복문 돌려서 전부 event 걸어주려함
    buttons[i].addEventListener('click',()=>{
        var id=parseInt(buttons[i].getAttribute('id')); 
        var recommend=parseInt(recommends[i].innerText); //추천수 가져오기
        sendAjax('/review/recommend_process',id,recommend,i);
    });
}

const sendAjax=(url,id,recommend,i)=>{
    var data={'recommend':recommend,'id':id};
    data=JSON.stringify(data);
    var xhr=new XMLHttpRequest();
    xhr.open('POST',url); //매개변수로 전달된 url로 post방식으로 값 전달
    xhr.setRequestHeader('Content-type',"application/json");
    xhr.send(data); 

    xhr.addEventListener('load',()=>{
        recommends[i].innerText=xhr.responseText;
    });
}

/*
//ajaxbutton을 눌렀을 때 실행되는 함수
document.querySelectorAll('.ajaxButton').addEventListener('click', function () {
    var inputdata = 'han'
    sendAjax('http://localhost:3000/ajax', inputdata)
})
//send함수 'http://localhost:3000/ajax'주소에 inputdata를 보냅니다.
function sendAjax(url, data) {

    var data = { 'name': data };
    data = JSON.stringify(data);
    
    //data에 inputdata를 json형식으로 넣고 이를 xmlhttprequest를 통해 post방식으로 보냅니다.
    var xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    xhr.setRequestHeader('Content-type', "application/json");
    xhr.send(data);
    
    //서버에서 결과가 도착하면 그것을 result div에 입력합니다.
    xhr.addEventListener('load', function () {
        console.log(xhr.responseText);

        document.querySelector(".result").innerHTML = xhr.responseText
    });
}
*/