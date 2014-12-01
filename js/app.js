var app = angular.module("app_main",[
    'ngRoute'
]);


app.config(['$routeProvider'],function($routeProvider){
    $routeProvider
        .when('/views/dashboard.html',{
            template: '/views/dashboard.html',
            controller: 'dashboardCtrl'

        }
    )
        .when('/views/profile.html',{
            template: '/views/profile.html',
            controller: 'profileCtrl'

        }
    )
        .otherwise({
        redirectTo: '/index.html'
    });

});

