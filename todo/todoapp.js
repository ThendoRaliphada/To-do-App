var todoParent = document.querySelector('.todos');
var todoInput = document.querySelector('.inputContainer input');
var addTodo = document.querySelector('.addMyTodo');
var inputContainer = document.querySelector('.inputContainer');


addTodo.addEventListener('click', todoFunction);


function todoFunction(){

    var emptyInput = document.getElementById("myInput").value;
    if (emptyInput == "")
    {
    alert("Please input a Value");
    return false;
    }
    
    var check = document.querySelector('DIV');
    check.addEventListener('click', function(ev) {
      if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
      }
    }, false);
    
 


    var todo = document.createElement('div');
    todo.setAttribute('class', 'todo');
    todoParent.appendChild(todo);

    var todoTitle = document.createElement('li');
    todoTitle.innerHTML = todoInput.value;
    todo.appendChild(todoTitle);

    var todoDate = document.createElement('input')
    todoDate.setAttribute('type', 'date');
    todoDate.setAttribute('class', 'myDate');
    todoDate.innerHTML = todoInput.value;
    todo.appendChild(todoDate);

    
    var editTodo = document.createElement('button');
    editTodo.setAttribute('class', 'editTodo');
    editTodo.innerHTML = "Edit";
    todo.appendChild(editTodo);

    var removeTodo = document.createElement('button');
    removeTodo.setAttribute('class', 'removeTodo');
    removeTodo.innerHTML = "Remove";
    todo.appendChild(removeTodo);

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
    var myList, i, switching, b, shouldSwitch;
    myList = document.getElementsByTagName("div");
    switching = true;
    while (switching) {
        switching = false;
        b = myList.getElementsByTagName('P');
        for (i = 0; i < (b.length -1); i++) {
            shouldSwitch = false;
            if (b[i].innerHTML.toLowerCase()> b[i+1].innerHTML.toLowerCase()){
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            b[i].parentNode.insertBefore(b[i+ 1],b[i]);
            switching = true;
        }
    }
}

// document.getElementById("addMyTodo").addEventListener("click", function(event){
//     event.preventDefault()

// });





function sortMyTodoList() {
    var myList, i, switching, b, shouldSwitch;
    myList = document.getElementById("todos");
    switching = true;
    while (switching) {
        switching = false;
        b = myList.getElementsByTagName("LI");
        for (i = 0; i < (b.length -1); i++) {
            shouldSwitch = false;
            if (b[i].innerHTML.toLowerCase()> b[i+1].innerHTML.toLowerCase()){
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            b[i].parentNode.insertBefore(b[i+ 1],b[i]);
            switching = true;
        }
    }
}







  
 