function newElement(){
    var li = document.createElement("li");
    var inputValue = document.getElementById("toDoInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === ''){
        alert("Please fill in a task.");
    }
    else{
        document.getElementById("myTaskList").appendChild(li);
    }
    document.getElementById("toDoInput").value = "";

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
          var div = this.parentElement;
          div.style.display = "none";
        }
      }
}
const inputText = document.querySelector('#txt');
const myButton = document.querySelector('.btn-list');
const list = document.querySelector('.container ul');
myButton.addEventListener('click',(e) =>{
  if(inputText.value != ""){
    e.preventDefault();
    const myLi = document.createElement('li');
    myLi.innerHTML = inputText.value;
    list.appendChild(myLi);
    const mySpan = document.createElement('span');
    mySpan.innerHTML = 'X';
    myLi.appendChild(mySpan);
  }
  const close = document.querySelectorAll('span');
  for(let i=0; i<close.length; i++){
    close[i].addEventListener('click',()=>{
      close[i].parentElement.style.opacity = 0;
      setTimeout(()=>{
        close[i].parentElement.style.display = "none";
      }, 500);
    })
  }
});
var li = document.querySelector('ul');
li.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);
