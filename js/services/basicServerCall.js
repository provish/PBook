app.service('api', [
  '$http',
  function ($http,
            $resource) {

    var api = api || {},
      relativeUrl = '',
      url;

    var matesData = {
      "list": [{"id": 0, "name": "Adam", "company": "TCS"},
        {"id": 1, "name": "Mathews", "company": "Info"}
      ]
    };

    api.getMates = function () {
      ///<summary>
      /// Get method for api services
      ///</summary>
      //url = relativeUrl + method + (!!id ? id: "")+ (!!query ? query : "");
      return matesData;
    };

    api.getMate = function (id) {
      ///<summary>
      /// Get method for api services
      ///</summary>
      //url = relativeUrl + method + (!!id ? id: "")+ (!!query ? query : "");
      return matesData.list[id];
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