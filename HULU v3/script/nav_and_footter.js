
function showNav(){
    let x = document.getElementById("nav");
    if(x.className==="navBar"){
        x.className += " navBar2"
    }else{
        x.className = "navBar"
    }
  
}
window.onscroll=function(){
  fixNavBar();
}
function fixNavBar(){
    let x = document.getElementById("nav")
    if(document.documentElement.scrollTop>80){
        x.style.position ="fixed"
    }else {
        x.style.position ="static"

    }
    
 }   

// function makeMefocused(activeElement){ 

//     var navs = []
    
//     navs.push("home")
//     navs.push("tutor")
//     navs.push("Shop")
//     navs.push("product")
//     navs.push("about")

//     // navs.push(document.getElementById("home"))
//     // navs.push(document.getElementById("tutor"))
//     // navs.push(document.getElementById("Shop"))
//     // navs.push(document.getElementById("product"))
//     // navs.push(document.getElementById("about"))

//     for(let id of navs){
//         element = document.getElementById(id)
//         element.style.backgroundColor = "gray"
//         if(id == activeElement){
//             element.style.backgroundColor = "red"



//         }
//     }
// }