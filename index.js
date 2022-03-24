const formElement = document.querySelector("#myForm")
formElement.addEventListener("submit", addTodo)

const tbodyElement = document.querySelector("tbody")
//create ADD function 
function addTodo(e){
    e.preventDefault()
    console.log("addTodo")
    const todos = document.querySelector("#inputTodo").value
const days = document.querySelector("#inputDay").value
// alert("todos: " + todos + ", days: " + days)
tbodyElement.innerHTML += 
`<tr>
  <td>${days}</td>
  <td>${todos}</td>
  <td> <button class= "deleteBtn">Delete</button> </td>
`
};

function onDeleteRow(e){
  if(!e.target.classList.contains("deleteBtn")){
return;
  }
  const btn = e.target;
  btn.closest('tr').remove();
}

const tableDelete = document.querySelector("#myTable")
console.log(tableDelete)
tableDelete.addEventListener("click", onDeleteRow)