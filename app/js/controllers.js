(function () {
    angular.module("app.controllers", ["app.services"])
    .controller("appController",function($scope,$state){
        $scope.nav = function(){
                $state.go("app.guitarras")
        }
        console.log("works");
    })
    .controller("guitarrasController",function(){
      this.guitarras = [
                        {'id' : '1' , 'nombre':'Arroz F', 'valor':'260000' ,    'url':'img/arroz.jpg'},
                        {'id' : '2' , 'nombre':'Leche',   'valor':'300000' ,    'url':'img/arroz.jpg'},
                        {'id' : '3' ,'nombre':'Panela',   'valor':'12000' ,     'url':'img/arroz.jpg'},
                        {'id' : '4' ,'nombre':'Cafe',     'valor':'266000000' , 'url':'img/arroz.jpg'},
                        {'id' : '5' ,'nombre':'vive 100', 'valor':'20000' ,     'url':'img/arroz.jpg'}
                      ];
    })
})();
