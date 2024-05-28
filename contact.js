var slidenav=document.getElementById("slidenav")
var closenav=document.getElementById("closenav")
var menuicon=document.getElementById("menuicon")

menuicon.addEventListener("click",function(){
    slidenav.style.right=0
})
closenav.addEventListener("click",function(){
    slidenav.style.right="-50%"
})