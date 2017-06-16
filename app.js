angular.module("todoApp", []).controller("appController", appController)

function appController() {
    var todo = this;
    todo.tasks = [];
    todo.addTask = addTask;

    var position = 0;
    todo.editMode = false;

    function addTask() {
        var listItem = {};
        listItem.title = todo.task;
        listItem.status = false;
        todo.tasks.push(listItem);
        todo.task = "";


    }
    todo.update = function() {
        var temp = todo.task;
        todo.task = "";
        todo.editMode = false;
        todo.tasks[position].title = temp;




    }
    todo.deleteTask = function(index) {
        todo.tasks.splice(index, 1);
    }
    todo.upTask = function(index) {
        if (index > 0) {
            var sw = {};
            sw = todo.tasks[index];
            todo.tasks[index] = todo.tasks[index - 1];
            todo.tasks[index - 1] = sw;
        }
    }
    todo.downTask = function(index) {
        if (index < todo.tasks.length - 1) {
            var sw = {};
            sw = todo.tasks[index];
            todo.tasks[index] = todo.tasks[index + 1];
            todo.tasks[index + 1] = sw;
        }
    }
    todo.doneTask = function(index) {
        todo.tasks[index].status = !todo.tasks[index].status
    }
    todo.editTask = function(index) {
        position = index;
        todo.task = todo.tasks[index].title;
        todo.editMode = true;

    }
}