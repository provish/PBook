var app = angular.module("app_main", [
  'ngRoute'
]);


app.config(function ($routeProvider) {
  $routeProvider
    .when('/views/home.html', {
      templateUrl: 'views/home.html',
      controller: 'dashboardCtrl'

    }
  )
    .when('/views/profile.html', {
      templateUrl: 'views/profile.html',
      controller: 'profileCtrl'

    }
  )
    .when('/', {
      templateUrl: 'views/home.html',
      controller: 'dashboardCtrl'

    }
  )
    .otherwise({
      redirectTo: '/'
    });

});

