angular.module('ic', []).controller('informationController', function informationController($scope){
	$scope.randomCount = 10;
})
// function informationController($scope) {
//     $scope.randomCount = 10;
    
//     $scope.datas = [
//         { value: "example value" },
//         { value: "example value" },
//     ]
//     $scope.createData = function () {
//         $scope.data.push({ value: $scope.debtVal });
//         $scope.debtVal = '';
//     }
// }