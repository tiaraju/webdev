(function () {
	var library= angular.module('library',['ngMaterial']);
	library.controller('libraryController',function($scope,$mdDialog){
		var self = this;

		self.books=collection;
		self.book = {};
		self.comment;

		$scope.bookID;

		

		$scope.showDialog= function() {
	       var parentEl = angular.element(document.body);
	       $mdDialog.show({
	       	scope:$scope,
			parent: parentEl,
			preserveScope:true,
			clickOutsideToClose: true,
			templateUrl:'view/modal.html',
	      });
	    };

	    $scope.setBookId=function(id) {
	    	 $scope.bookID = id;
	    };

	    $scope.showCommentDialog= function() {
	       var parentEl = angular.element(document.body);
	       $mdDialog.show({
	       	scope:$scope,
			parent: parentEl,
			preserveScope:true,
			clickOutsideToClose: true,
			templateUrl:'view/commentModal.html',
	      });
	    };



	    $scope.closeDialog = function() {
	    	if(Object.keys(self.book).length != 0){
		    	self.books.push(self.book);
	    	}else{
	    		console.log(self.books[$scope.bookID].comments.push(self.comment));
	    	}

	    	$mdDialog.hide();

	    };


	

	});
})();