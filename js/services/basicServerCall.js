var placedBookServices = angular.module('PlacedBookServices', ["ngResource"]);

atomServices.factory('api', [
    '$http',
    '$resource',
    function (
        $http,
        $resource) {

        var api = api || {},
            relativeUrl = 'http://dev-atom.com/',
            url;

        api.get = function (method, id, query) {
            ///<summary>
            /// Get method for api services
            ///</summary>
            url = relativeUrl + method + (!!id ? id: "")+ (!!query ? query : "");
            return $http.get(url);
        };

        api.post = function (method, id, query, postData) {
            ///<summary>
            /// Post method for api services
            ///</summary>
            url = relativeUrl + method + (!!id ? id : "") + (!!query ? query : "");
            return $http.post(url, postData);
        };

//        api.resource = function (jsonPath) {
//            /// <summary>
//            ///     Return parsed JSON from give json path
//            /// </summary>
//            /// <param name="jsonPath"> The given path(url) for json file </param>
//            /// <returns type="Object"> Parsed object </returns>
//            jsonPath = 'http://dev-atom.azurewebsites.net/data/' + jsonPath;
//
//            return $resource(jsonPath, {});
//        };

        return api;
    }
]);