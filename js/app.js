var app = angular.module("app_main",[
    'ngRoute'
]);


app.config(function ($routeProvider) {
    $routeProvider
        .when('/views/dashboard.html',{
            templateUrl: 'views/dashboard.html',
            controller: 'dashboardCtrl'

        }
    )
        .when('/views/profile.html',{
            templateUrl: 'views/profile.html',
            controller: 'profileCtrl'

        }
    )
        .when('/', {
            templateUrl: 'views/dashboard.html',
            controller: 'dashboardCtrl'

        }
    )
        .otherwise({
            redirectTo: '/'
    });

});

