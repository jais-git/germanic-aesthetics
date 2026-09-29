let ham=document.querySelector(".fa-bars");
let crs=document.querySelector(".fa-xmark");
let pan=document.querySelector(".navl");
ham.addEventListener("click", function(){
    console.log("clicked");
    pan.classList.add("getout");
    console.log(pan.className);
})
crs.addEventListener("click",function(){
    pan.classList.remove("getout");
})
