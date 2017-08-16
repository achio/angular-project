import angular from "angular";

function homeCtrl($scope) {
	$scope.location = "Home";
};

homeCtrl.$inject = ['$scope'];

export default angular.module('prjApp')
	.controller('homeCtrl', homeCtrl);