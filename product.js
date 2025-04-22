
let sideNav = document.getElementById("sideNav")
let crossBtn = document.getElementById("crossBtn")
let menuIcon = document.getElementById("menuIcon")

menuIcon.addEventListener("click",function(){
    sideNav.style.right=0
})

crossBtn.addEventListener("click",function(){
    sideNav.style.right="-50%"
})


// Search Functionality 
let productContainer = document.getElementById("product-container")
let search = document.getElementById("search") 
let productList = productContainer.querySelectorAll("div")

search.addEventListener("keyup", function(){
    let enteredValue = event.target.value.toUpperCase()

    for(count=0; count<productList.length; count=count+1){
        let productName = productList[count].querySelector("h1").textContent
        if(productName.toUpperCase().indexOf(enteredValue)<0){
            productList[count].style.display="none"

        }else{
            productList[count].style.display="block"

        }
    }
})
