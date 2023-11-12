
window.addEventListener("scroll",reveal);
function reveal(){
    var reveals=document.querySelectorAll(".reveal");
    for(var i=0;i<reveals.length;i++){

        var windowHeight=window.innerHeight;
        var revealTop=reveals[i].getBoundingClientRect().top;
        var revealPoint=150;

        if(revealTop<windowHeight-revealPoint){
            reveals[i].classList.add("active");
        }else{
            reveals[i].classList.remove("active");
        }
    }
}
let menuIcon=document.querySelector("#Hname svg");
let menuList=document.querySelector("#hMenu");
menuIcon.addEventListener("mouseover",()=>{
    menuList.style.opacity="1"; 
})
menuIcon.addEventListener("mouseleave",()=>{
    menuList.style.opacity="0";
})