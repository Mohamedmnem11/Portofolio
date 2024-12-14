let btn=document.querySelector(".header #btn");

let nav=document.querySelector(".header #nav")

btn.onclick=function(){
     btn.classList.toggle("fa-times");
     nav.classList.toggle("active");
    
    if(nav.className=="nav active"){
        nav.style.display="block";
        
    }
    else{
        nav.style.display="none";
        
    }

}