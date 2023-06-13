function searchClick(){
    alert("searchClick")
}
window.onload = function(){
    document.onscroll = function(){
    let s1 = document.documentElement.scrollTop;
    let s2 = document.body.scrollTop;
    let s = s1 > s2 ? s1 : s2;
    let search = document.getElementById("fixedBox");
    let width = document.documentElement.clientWidth;
    if(s >= width*0.12){
        search.style.position = "fixed";
        search.style.left = '0';
        search.style.top = '0';
    }
    else{
        search.style.position = "static";
    }

    }
}