var slidenav=document.getElementById("slidenav")
var closenav=document.getElementById("closenav")
var menuicon=document.getElementById("menuicon")

menuicon.addEventListener("click",function(){
    slidenav.style.right=0
})
closenav.addEventListener("click",function(){
    slidenav.style.right="-50%"
})

//search function
var productContainer=document.getElementById("productcontainer")
var search=document.getElementById("search")
var productlist=productContainer.querySelectorAll("div")
var noresult=document.getElementById("noresult")

search.addEventListener("keyup",function(){
    var entervalue=event.target.value.toUpperCase()

    for(count=0;count<productlist.length; count=count+1){
        var productname=productlist[count].querySelector("h1").textContent
        if(productname.toUpperCase().indexOf(entervalue)<0){
            productlist[count].style.display="none"
            noresult.style.display="block"
        }
        else{
            productlist[count].style.display="block"
            noresult.style.display="none"
        }

    }
})