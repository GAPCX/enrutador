(function () {
    angular.module("app.controllers", ["app.services"])
    .controller("appController",function($scope,$state){
        $scope.nav = function(){
                $state.go("app.guitarras")
        }
        console.log("works");      
    })
    .controller("guitarrasController",function(){
        console.log("1111");      
    })
})();