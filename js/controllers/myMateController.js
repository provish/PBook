app.controller('myMateCtrl', ['$scope', 'api', function ($scope, api) {
  $scope.matesData = api.getMates();
}]);