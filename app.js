angular.module("todoApp", []).controller("appController", appController)

function appController() {
    var todo = this;
    todo.tasks = [];
    todo.addTask = addTask;

    function addTask() {
        todo.tasks.push(todo.task);

        todo.task = "";

    }
    todo.deleteTask = function(index) {
        todo.tasks.splice(index, 1);
    }
}