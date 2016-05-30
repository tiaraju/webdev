var myapp = angular.module("library",[]);

myapp.controller("libraryController", function($scope,$http){

	$scope.books = null;

	$http.get("/book/").success(function(response){
		$scope.books=response.result.data;
		 
	}).error(function (response){
		 console.log("error on get book");
	});






});