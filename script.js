
let sideNav = document.getElementById("sideNav")
let crossBtn = document.getElementById("crossBtn")
let menuIcon = document.getElementById("menuIcon")

menuIcon.addEventListener("click",function(){
    sideNav.style.right=0
})

crossBtn.addEventListener("click",function(){
    sideNav.style.right="-50%"
})

