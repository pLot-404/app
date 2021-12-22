function Play(){
    alert("Play") //選択に合致するゲーム画面をstatic/display.xmlから呼び出す
}
function Setting(){
    $("body").html = "<p>ここにListを挿入</p>"
}
if(localStorage.getItem(['history'])===null){
    localStorage.setItem(['history'],[0]);
}
let static_src=[
    "static/display.xml"
];
let request = new XMLHttpRequest;
request.onreadystatechange=function(){
    if(request.readyState===4&&request.status===200){
        document.getElementById("main").innerHTML = request.response;
    }
}
request.open('GET',static_src[localStorage.getItem(['history'])]);
request.send(null);
