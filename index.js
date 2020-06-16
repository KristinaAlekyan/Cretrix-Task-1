
let previouslyToggled=document.getElementById("content1");
function changeContent(view){
    let result = "content" + view.toString();
    let x = document.getElementById(result);
  
  if (previouslyToggled && previouslyToggled !== x) {
    previouslyToggled.style.display = "none"; 
  }
  
  if (x.style.display === "flex") {
    x.style.display = "flex";
  } else {
    x.style.display = "flex";    
  }  
  previouslyToggled = x;
}


let modal = document.getElementById("myModal");
let btn = document.getElementById("deny");
btn.onclick = function() {
  modal.style.display = "block";
}