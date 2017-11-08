var statusType;
(function (statusType) {
    statusType[statusType["active"] = 0] = "active";
    statusType[statusType["complete"] = 1] = "complete";
    statusType[statusType["delete"] = 2] = "delete";
})(statusType || (statusType = {}));

var todoList = (function () {
    function todoList() {
        this.names = [];
        this.status = [];
    }
    todoList.prototype.add = function (todo) {
        this.names.push(todo.name);
        this.status.push(todo.status);
    };

    todoList.prototype.delete = function (id) {
        this.status[id] = 2 /* delete */;
    };

    todoList.prototype.complete = function (id) {
        this.status[id] = 1 /* complete */;
    };

    todoList.prototype.active = function (id) {
        this.status[id] = 0 /* active */;
    };
    return todoList;
})();

var todo = new todoList();
function addTodo(name, status) {
    todo.add({
        name: name,
        status: status
    });
}

function deleteTodoData(id) {
    todo.delete(id);
}

function completeTodoData(id) {
    todo.complete(id);
}

function activeTodoData(id) {
    todo.active(id);
}
