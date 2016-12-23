(function () {
    angular.module("app", ["ui.router", "app.controllers"])
        .config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('app', {
                    url: "/app",
                    templateUrl: "app/views/app.html",
                    controller: "appController"
                })
                .state('precios', {
                    url: "/precios",
                    templateUrl: 'app/views/prizes.html',
                    controller: "guitarrasController"
                })
                .state('home', {
                    url: "/home",
                    templateUrl: "app/views/home.html",
                    controller: "appController"
                })
            $urlRouterProvider.otherwise("/home");
        });
})();
