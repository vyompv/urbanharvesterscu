(function() {
  'use strict';

  angular
    .module('app')
    .factory('donorAPI', donorAPI);

  donorAPI.$inject = ['$http'];

  function donorAPI($http) {

    return {
      getAllUsers: getAllUsers,
      getOneUser: getOneUser,
      deleteUser: deleteUser,
	  getReceivers:getReceivers,
      getTransactions:getTransactions,
      saveItems:saveItems
    }

    function getAllUsers() {
      var url = '/api/users';
      return $http.get(url, {
        cache: true
      });
    }

    function getOneUser(id) {
      var url = '/api/users/' + id;
      return $http.get(url);
    }

    function deleteUser(user) {
      var url = '/api/users/' + user._id;
      return $http.delete(url);
    }
	
    function getReceivers(item) {
		console.log("inside getreceivers api factory",item);
      var url = '/api/donor/getReceivers';
      return $http.post(url, {
		filters:item,
        cache: true
      });
    }

    function getTransactions(dateRange) {
      console.log("inside gettransactions api factory",dateRange);
      var url = '/api/donor/getTransactions';
      return $http.post(url, {
        dateRange:dateRange,
        cache: true
      });
    }

    function saveItems(items) {
      console.log("inside saveitems api factory",items);
      var url = '/api/donor/saveItems';
      return $http.post(url, {
        items:items,
        cache: true
      });
    }
  }
})();