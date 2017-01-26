(function () {
    angular.module("app", ["ui.router", "app.controllers"])
        .config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('app', {
                    url: "/app",
                    templateUrl: "app/views/app.html",
                    controller: "appController"
                })
                .state('app.precios', {
                    url: "/precios",
                    views:{
                      "content":{
                           templateUrl: 'app/views/prizes.html',
                           controller: "guitarrasController"
                      },
                      "banner":{
                           templateUrl: 'app/views/header.html'
                      },
                      "footer":{
                           templateUrl: 'app/views/footer.html'
                      }

                    }
                })
                .state('home', {
                    url: "/home",
                    templateUrl: "app/views/home.html",
                    controller: "appController"
                })
            $urlRouterProvider.otherwise("/app/precios");
        });
})();
