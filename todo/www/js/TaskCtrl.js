angular.module('starter.controllers', [])

// Tasks Controller
.controller('TaskCtrl', function ($scope, $http, $stateParams) {

  getTask(); // Load all available tasks 
  function getTask(){  
  $http.post("http://localhost/apis/todo_ionic/getTask.php").success(function(data){
        $scope.tasks = data;
       });
  };
  $scope.addTask = function (task) {
    $http.post("http://localhost/apis/todo_ionic/addTask.php?task="+task).success(function(data){
        getTask();
        $scope.taskInput = "";
      });
  };
  $scope.deleteTask = function (task) {
    if(confirm("Are you sure to delete this line?")){
    $http.post("http://localhost/apis/todo_ionic/deleteTask.php?task_id="+task).success(function(data){
        getTask();
      });
    }
  };
 
  $scope.toggleStatus = function(item, status, task) {
    if(status=='2'){status='0';}else{status='2';}
      $http.post("http://localhost/apis/todo_ionic/updateTask.php?task_id="+item+"&status="+status).success(function(data){
        getTask();
      });
  };
 
});