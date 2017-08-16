import angular from "angular";
import "../controller/home.ctrl";
function routerConfig($stateProvider, $locationProvider, $urlRouterProvider){
	$locationProvider.hashPrefix('');
	$urlRouterProvider.otherwise('/home');

	$stateProvider
		.state('home',{
			url : "/home",
			templateUrl : "../../tmp/home.tmp.html",
			controller : "homeCtrl"
		})
}
routerConfig.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider'];
export default angular.module('prjApp')
	   .config(routerConfig);