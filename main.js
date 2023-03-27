let addToDo = document.getElementById('addToList');
let itemContainer = document.getElementById('itemContainer');
let inputField = document.getElementById('input')

addToDo.addEventListener('click', addFunc)

function addFunc(){
 let para = document.createElement('p')
 itemContainer.appendChild(para)
 para.innerText = inputField.value
 inputField.value = "";
}


