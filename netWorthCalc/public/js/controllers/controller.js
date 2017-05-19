// const calc = require('./nwCalc');
// var total = 0;

var cont = angular.module('ic', []);
cont.controller('Ctrl', function informationController($scope){
 	$scope.calcData = function(){  
 	var debt = Number($scope.debt);
    var age = Number($scope.age);
    var yrsgrad = Number($scope.yrsgrad);
    var yrspay = Number($scope.yrspay);

    if(debt > 0 && age > 0 && yrsgrad > 0 && yrspay > 0){
        var price = debt + age + yrsgrad + yrspay;
    }                
    if(price > 0){
        // return price*1;
        $scope.totalValue = price;
    }          
 	}
})