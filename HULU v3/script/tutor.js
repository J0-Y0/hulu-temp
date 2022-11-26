var currentTab = 0;
showTab(currentTab);
function showTab(n){
    var x = document.getElementsByClassName("tab");
    
    x[n].style.display ="block";
    
    if(n == 0){
        document.getElementById("preBtn").style.display ="none";
    }else{
        document.getElementById("preBtn").style.display = "inline";
    }
    if(n == (x.length-1)){
        document.getElementById("nextBtn").innerHTML = "Submit"

    }else{
        document.getElementById("nextBtn").innerHTML = "Next"
    }
    indicator(n);
}

function nextPerv(n){
    var x = document.getElementsByClassName("tab");
     if( n == 1 && !validateForm()){
              return false;

     }
    x[currentTab].style.display ="none";
    
    currentTab +=n;
    if(currentTab>=x.length){
        document.getElementById("form").submit()
    }
 showTab(currentTab)

}

function validateForm(){
    var valid =true;
    x = document.getElementsByClassName("tab");
    y = x[currentTab].getElementsByTagName("input");
 
    // for(item of y){
    //     window.alert(item).get;

    // }

    for(i=0; i<y.length ;i++){
        if(y[i].value == ""){
            y[i].className += " invalid"
            valid = false;
        }
    }
    if(valid){
        document.getElementsByClassName("step")[currentTab].className +=" finished"
  
    }
    return valid;
}
function indicator(n){
    x = document.getElementsByClassName("step")
    for(var i = 0;i<x.length;i++){
        x[i].className.replace(" active" ,"")
    }
    x[n].className += " active";
}