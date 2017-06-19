angular.module("todoApp", ['ngRoute'])
    .config(function($routeProvider) {
        $routeProvider
            .when("/", { templateUrl: "views/home.html" })
            .when("/:listname", { templateUrl: "views/lists.html" })
            .otherwise({ redirectTo: 'views/home.html' })
    })
    .controller("appController", appController)
    .controller("secondCtrl", secondCtrl)
    .factory("taskService", taskService)

function taskService() {
    return [];
}

function appController(taskService, $routeParams) {
    var todo = this;

    for (var i = 0; i < taskService.length; i++) {
        var element = taskService[i];
        if (element.listName == $routeParams.listname) {
            todo.tasks = element.tasks;
            todo.title = element.listName;

        }
    }
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

function secondCtrl(taskService) {
    var second = this;
    second.listGroup = taskService;
    second.click = function() {
        var obj = {};
        obj.listName = second.text;
        obj.tasks = [];
        second.listGroup.push(obj);
        second.text = "";
    }
}