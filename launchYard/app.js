(function() {
  var app = angular.module('app', []);
  app.controller('launchyardController', ['$http',
    function($http) {
      var self = this;
      self.flage = false;
      self.errmessage = '';
      self.list = [];
      $http.get('product.json').success(function(data) {
        self.list = data;
      }).error(function(err) {
        self.flage = true;
        self.errmessage = err.message;
      });
      self.addEntry = function() {
        console.log("inside the entry");
        self.list.push({
          name: self.search,
          designation: self.designation,
          avatar:'male.jpeg'
        });
          self.search='';
          self.designation='';
      };
    }
  ]);
})();