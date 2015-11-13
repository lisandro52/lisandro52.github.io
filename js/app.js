angular.module('myApp', ['angular-table'])
	.controller("ProdsCtrl", ["$scope", "$http", function($scope, $http) {
	
		var vm = $scope;
		vm.products = [];
	
		vm.loadProducts = function() {
			var httpRequest = $http({
				method: 'GET',
				url: 'http://lisandro52.github.io/clean_table_big.json',
				data: ''
			}).success(function(data, status) {
				vm.products = data;
				vm.total_productos = data.length;
			});
		};
		
		vm.config_at = {
			itemsPerPage: 50,
			fillLastPage: true
		};
		
		vm.loadProducts();

}]);
