enum statusType{active, complete, delete}

interface todos{
    name: string;
    status: statusType;
}

class todoList{
    names: string[];
    status: statusType[];
public constructor(){
    this.names = [];
    this.status = [];
}

    add(todo:todos){
 this.names.push(todo.name);
 this.status.push(todo.status);
    }

    delete(id: number){
        this.status[id] = statusType.delete;
    }

    complete(id: number){
        this.status[id] = statusType.complete;
    }

    active(id: number){
        this.status[id] = statusType.active;
    }

}

var todo = new todoList();
function addTodo(name: string, status: statusType){
    todo.add({
        name: name,
        status: status
    });
}

function deleteTodoData(id: number){
    todo.delete(id);
}

function completeTodoData(id:number){
    todo.complete(id);
}

function activeTodoData(id:number){
    todo.active(id);
}

