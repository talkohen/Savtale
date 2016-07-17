var illnessApp = angular.module ("illnessApp" , ['slick', 'angular.filter']);


illnessApp.controller('illnessCtrl', ['$scope', '$http', function($scope, $http) {

 $scope.myFunction = function() {
        var x = document.getElementById("meals");
        x.style.display = "none";

        var y = document.getElementById("mealsCategory");
        y.style.display = "block";

        var mbutton = document.getElementById("mealsButton");
        mbutton.style.display = "none";

        var hbutton = document.getElementById("hideButton");
        hbutton.style.display = "block";
    }

    $scope.hideButtonClicked = function() {

        var x = document.getElementById("meals");
        x.style.display = "block";

        var y = document.getElementById("mealsCategory");
        y.style.display = "none";

        var mbutton = document.getElementById("mealsButton");
        mbutton.style.display = "block";

        var hbutton = document.getElementById("hideButton");
        hbutton.style.display = "none";

    }

var searchObj = getParameterByName('id');
    $scope.ingredients;
    $scope.illness;
    $scope.meals;


        $http.get("https://savtale.herokuapp.com/getmealsData").success(function (data) {
        $scope.meals = data;
        console.log(data);
    });

        $http.get("https://savtale.herokuapp.com/getillnessData/" +searchObj).success(function (data) {
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