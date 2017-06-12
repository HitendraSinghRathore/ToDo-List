angular.module("todoApp", []).controller("appController", appController)

function appController() {
    var todo = this;
    todo.tasks = [];
    todo.addTask = addTask;
    var position = 0;
    todo.editMode = false;

    function addTask() {
        todo.tasks.push(todo.task);

        todo.task = "";

    }
    todo.update = function() {
        todo.tasks[position] = todo.task;
        todo.task = "";
    }
    todo.deleteTask = function(index) {
        todo.tasks.splice(index, 1);
    }
    todo.editTask = function(index) {
        position = index;
        todo.task = todo.tasks[index];
        todo.editMode = true;

    }
}