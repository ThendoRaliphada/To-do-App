var todoParent = document.querySelector('.todos');
var todoInput = document.querySelector('.inputContainer input');
var addTodo = document.querySelector('.addMyTodo');
var inputContainer = document.querySelector('.inputContainer');


addTodo.addEventListener('click', todoFunction);

function todoFunction(){

    var todo = document.createElement('div');
    todo.setAttribute('class', 'todo');
    todoParent.appendChild(todo);

    var todoTitle = document.createElement('p');
    todoTitle.innerHTML = todoInput.value;
    todo.appendChild(todoTitle);

    var todoDate = document.createElement('input')
    todoDate.setAttribute('type', 'date');
    todoDate.innerHTML = todoInput.value;
    todo.appendChild(todoDate);

    var removeTodo = document.createElement('button');
    removeTodo.setAttribute('class', 'removeTodo');
    removeTodo.innerHTML = "Remove";
    todo.appendChild(removeTodo);

    var editTodo = document.createElement('button');
    editTodo.setAttribute('class', 'editTodo');
    editTodo.innerHTML = "Edit";
    todo.appendChild(editTodo);

    todoInput.value = "";

    removeTodo.addEventListener('click', function(e){
        var target = e.target.parentNode;
        target.remove();
    })

    editTodo.addEventListener('click', function(e){
        var targetText = e.target.parentNode.childNodes[0].innerHTML;
        todoInput.value = targetText;

        
    var updateTodo = document.createElement('button');
    updateTodo.setAttribute('class', 'updateTodo');
    updateTodo.innerHTML = "Update";
    inputContainer.appendChild(updateTodo);

    // addTodo.style.display = 'none';

   
    updateTodo.addEventListener('click', function(){
        var updateTitle = todoInput.value;
        var targetTask = e.target.parentNode.childNodes[0];
        targetTask.innerHTML = updateTitle;

        todoInput.value = "";
    })
    })
}
document.getElementById("addMyTodo").addEventListener("click", function(event){
    event.preventDefault()

});
var p = document.querySelector('div');
p.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'div') {
    ev.target.classList.toggle('checked');
  }
}, false);





  
 