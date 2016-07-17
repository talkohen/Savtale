var mealApp = angular.module ("mealApp" , ['slick']);


mealApp.controller('mealCtrl', ['$scope', '$http',function($scope, $http) {

    var searchObj = getParameterByName('id');
    $scope.ingredients;
    $scope.illness;
    $scope.meals;

        $http.get("https://savtale.herokuapp.com/getmealsData/" +searchObj).success(function (data) {
        $scope.meals = data;
        console.log(data);
    });

        $http.get("https://savtale.herokuapp.com/getillnessData/").success(function (data) {
        $scope.illness = data;
        console.log(data);
    });
    
    
    $http.get("https://savtale.herokuapp.com/getingredientsData").success(function (data) {
        
        $scope.ingredients = data;
        console.log(data);
    });

    //show all students 
    $scope.showAll = function () {
    $http.get("https://savtale.herokuapp.com/getingredientsData").success(function (data) {
        $scope.ingredients = data;
        console.log(data);
    });
};

    $scope.filterById = function (actionTextId) {
    $http.get("https://savtale.herokuapp.com/getingredientsData/id/" +actionTextId).success(function (data) {
        $scope.ingredients = data;
        console.log(data);
    });
};

}]);

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}