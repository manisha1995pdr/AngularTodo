var newTodo = document.getElementById("Iptext");
var addTodoButton = document.getElementById("AddButton");
var ActiveTodo = document.getElementById("active");
var CompleteTodo = document.getElementById("complete");
var DeletedTodo = document.getElementById("delete");

window.onload = function () {
    console.log("hek");
    if(localStorage.getItem('todoList')){
        let list = JSON.parse(localStorage.getItem('todoList'));
        for(let i=0;i<list.names.length;i++){
            addTodo(list.names[i],list.status[i]);

        }
    }else{
       // console.log(todo);
        console.log("ishant");
        localStorage.setItem('todoList',JSON.stringify(todo));
    }
    displayTodo();
}

addTodoButton.onclick = function () {
    todos = JSON.parse(localStorage.getItem('todoList'));
    console.log(todos);
        addTodo(newTodo.value,statusType.active);

    saveTodo();
    displayTodo();
}

function saveTodo() {
    localStorage.setItem('todoList',JSON.stringify(todo));
}

function deleteTodo(id) {
    let todos = JSON.parse(localStorage.getItem('todoList'));
    todos.status[id] = statusType.delete;
    deleteTodoData(id);
    localStorage.setItem('todoList',JSON.stringify(todos));
    displayTodo();
}


function completeTodo(id) {
    let todos = JSON.parse(localStorage.getItem('todoList'));
    todos.status[id] = statusType.complete;
    //console.log(todos);
    completeTodoData(id);
    localStorage.setItem('todoList',JSON.stringify(todos));
    displayTodo();
}

function activeTodo(id) {
    let todos = JSON.parse(localStorage.getItem('todoList'));
    todos.status[id] = statusType.active;
    //console.log(todos);
    activeTodoData(id);
    localStorage.setItem('todoList',JSON.stringify(todos));
    displayTodo();
}

function displayTodo(){
    ActiveTodo.innerHTML = "";
    CompleteTodo.innerHTML="";
    DeletedTodo.innerHTML ="";

    var todoListStorage = JSON.parse(localStorage.getItem('todoList'));
//    console.log(todoListStorage.names.length)

    for(let i=0;i<todoListStorage.names.length;i++) {
        var todoName = document.createElement('div');
        todoName.setAttribute("id", "" + i + "");
        todoName.innerText = todoListStorage.names[i];

        if (todoListStorage.status[i] === statusType.active){
            var deleteButton = document.createElement('button');
            deleteButton.setAttribute('onclick', "deleteTodo("+i+")");
            deleteButton.setAttribute("class", "deletebutton");
            deleteButton.setAttribute("name","Delete");
            deleteButton.innerText="delete";

            var completeButton = document.createElement("input");
            completeButton.setAttribute("type", "checkbox");
            completeButton.setAttribute("style","float:left;");
            completeButton.setAttribute('onchange', "completeTodo("+i+")");

            todoName.appendChild(completeButton);
            todoName.appendChild(deleteButton);

            ActiveTodo.appendChild(todoName);
            ActiveTodo.appendChild(document.createElement("br"));
        }else {
            if(todoListStorage.status[i]===statusType.complete){
                var active_button = document.createElement("input");
                active_button.setAttribute("type","checkbox");
                active_button.setAttribute("checked","true");
                active_button.setAttribute("style","float:left;");
                active_button.setAttribute("onchange", "activeTodo("+i+")");

                var delete_button = document.createElement("button");
                delete_button.setAttribute("onclick","deleteTodo("+i+")");
                delete_button.setAttribute("class", "deletebutton");
                // delete_button.setAttribute("class","glyphicon glyphicon-trash");
                delete_button.innerText="Delete";

                todoName.appendChild(active_button);
                todoName.appendChild(delete_button);

                CompleteTodo.appendChild(todoName);
                CompleteTodo.appendChild(document.createElement("br"));
            }
            else {
                DeletedTodo.append(todoName);
                DeletedTodo.appendChild(document.createElement("br"));
            }
        }
    }

}
