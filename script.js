var bgImg = document.getElementById("bgImg");
var li = document.querySelectorAll("li"); 
function Funk(){
        bgImg.style.visibility = "visible"
        bgImg.style.opacity = "1";
}
function FunkOut() {
    bgImg.style.visibility = "hidden"
    bgImg.style.opacity = "0";
}
li[0].addEventListener("mouseover",function(){
    Funk();
})
li[1].addEventListener("mouseover",function(){
    Funk();
})
li[2].addEventListener("mouseover",function(){
    Funk();
})
li[3].addEventListener("mouseover",function(){
    Funk();
})

li[0].addEventListener("mouseout",function(){
    FunkOut();
})
li[1].addEventListener("mouseout",function(){
    FunkOut();
})
li[2].addEventListener("mouseout",function(){
    FunkOut();
})
li[3].addEventListener("mouseout",function(){
    FunkOut();
})
