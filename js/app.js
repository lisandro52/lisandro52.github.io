angular.module('myApp', ['angular-table'])
	.controller("ProdsCtrl", ["$scope", "$http", function($scope, $http) {
	
		var vm = $scope;
		vm.products = [];
	
		vm.loadProducts = function() {
			var httpRequest = $http({
				method: 'GET',
				url: 'https://dl.dropboxusercontent.com/u/21135903/clean_table.json',
				data: ''
			}).success(function(data, status) {
				vm.products = data;
			});
		};
		
		vm.loadProducts();

}]);