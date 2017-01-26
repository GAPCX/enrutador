(function () {
    angular.module("app.controllers", ["app.services"])
    .controller("appController",function($scope,$state){
       $scope.nav = function(){
                $state.go("app.guitarras")
        }
    })
    .controller("guitarrasController",function($scope){
      $scope.guitarras = [
                        {'id' : '1' , 'nombre':'Invie classic', 'valor':'100000' ,    'descripcion':'super guitarra'},
                        {'id' : '2' , 'nombre':'Invie classic',   'valor':'300000' ,    'descripcion':'super guitarra'},
                        {'id' : '3' ,'nombre':'Panela',   'valor':'12000' ,     'descripcion':'super guitarra'},
                        {'id' : '4' ,'nombre':'Cafe',     'valor':'266000000' , 'descripcion':'super guitarra'},
                        {'id' : '5' ,'nombre':'vive 100', 'valor':'20000' ,     'descripcion':'super guitarra'}
                      ];
      $scope.img = 'app/images/invie-classic.png';

    })
})();
