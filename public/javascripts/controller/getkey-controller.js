app.controller('getKeyController',function($scope, $http){
  $scope.myvar = 10;
  $scope.result1 = null;
  $scope.getKey = function(){

    $http.get('http://drdave.herokuapp.com/api/getkey?chord=' + $('input').val().replace(/[#]/g,'%23') ).
    //$http.get('http://localhost:3000/api/getkey?chord=' + $('input').val().replace(/[#]/g,'%23') ).
      success(function(data) {
        $scope.result1 = data[0];
        $scope.result2 = data[1];
        $scope.result3 = data[2];
      });
  }
});
