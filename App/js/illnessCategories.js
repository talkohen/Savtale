var illnessCatApp = angular.module ("illnessCatApp" , []);


illnessCatApp.controller('illnessCatCtrl', ['$scope', '$http',function($scope, $http) {

    $scope.illnesses;


        $http.get("https://savtale.herokuapp.com/getillnessData").success(function (data) {
        $scope.illnesses = data;
        console.log(data);
    });

        $scope.filterById = function (Id) {
    $http.get("https://savtale.herokuapp.com/getillnessData/" +Id).success(function (data) {
        $scope.illnesses = data;
        console.log(data);
    });
};
    

        $scope.illnessId = function(path){
        location.href = 'index.html?id='+ path;
    }

}]);



