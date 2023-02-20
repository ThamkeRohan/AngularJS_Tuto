let app=angular.module("myApp",[])
//  module reference   module name   dependencies array


app.controller("FriendController",function($scope){
    // adding property to scope obj
    // This properties are available only in this controller scope
    $scope.developer='sam';
    $scope.friends=["Sam","Rao","Kiran"]
})

app.controller("OrderByController",function($scope){
  let count = 0;
    $scope.removeEmp=function(emp){
      $scope.employees=$scope.employees.filter((e)=>{
        return e.name !== emp.name
      })
    }
    $scope.addEmp=function(){
      count++
      if(count === 5){
        count=1
      }
      $scope.employees.push({
        name: $scope.newEmp.name,
        salary: parseInt($scope.newEmp.salary),
        profile:`content/img/${count}.png`
      });
      $scope.newEmp.name=""
      $scope.newEmp.salary=""
      
    }
    $scope.employees = [
      {
        name: "Rohan",
        salary: 50000,
        profile: "content/img/1.png",
      },
      {
        name: "Sammy",
        salary: 400,
        profile: "content/img/2.png",
      },
      {
        name: "Krish",
        salary: 8900,
        profile: "content/img/4.png",
      },
    ];
})