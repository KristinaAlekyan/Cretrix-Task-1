
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


function changeActiveToPending(view){
    let result = "content" + view.toString();
    let x = document.getElementById(result);
    let z = document.getElementsByClassName(result);
  
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