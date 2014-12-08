app.directive('myMate',['api' ,function(api){
    return{
        restrict: 'E',
        templateUrl:'templates/myMateTemplate.html',
        scope: true,
        link: function(scope, element, attrs){
                scope.userName = api.getMate(attrs.myMateId)["name"];
        }
    }
}]);
