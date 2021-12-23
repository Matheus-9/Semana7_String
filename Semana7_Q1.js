var enterButton = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.getElementById("ul");
var item = document.getElementsByTagName("li");


function inputlength(){
  return input.Value.length;
}

function createlistElement(){
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.Value));
  ul.appendChild("li");
  input.Value = "";
  
  function crossOut(){
    li.classList.toggle("done");
  }

  li.addEventListener("click",crossOut);
  
  var dBtn = document.createElement("button");
  dBtn.appendChild(document.createTextNode("x"));
  li.dBtn.appendChild(dBtn);
  dBtn.addEventListener("click", deleListItem);
  
  function deleListItem(){
    li.classList.add("delete");
  }
  
}
enterButton.addEventListener("click", addListAfterClik);
input.addEventListener("keypress", addListAfterKeypress);
  
//quantidade de caracteres.!//

function addListAfterClik(){
  if (inputlength() > 0){
    createlistElement();
  }
}
  // 13 é referente ao codigo chave do ENTER//
function  addListAfterKeypress(){
  if (inputlength()> 0 && event.which === 13){
    createlistElement
  }

}