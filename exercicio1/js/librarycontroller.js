(function () {
	var library= angular.module('library',['ngAnimate', 'ui.bootstrap']);
	library.controller('libraryController',function($scope, $uibModal){
		var self = this;

		self.books=collection;
		
		$scope.comment;
		$scope.book = {}
		$scope.bookID;

	    $scope.setBookId=function(id) {
	    	console.log(id);
	    	 $scope.bookID = id;
	    	 $scope.book=self.books[id];
	    	 console.log($scope.book);
	    };

	    $scope.showModal = function(){
		    $scope.modalInstance = $uibModal.open({
		      animation: $scope.animationsEnabled,
		      templateUrl: '../view/modal.html',
		      controller: 'libraryController',
			  preserveScope:true,
		      clickOutsideToClose: true,
		      scope:$scope
		    });
		    
		 };

		$scope.toggleAnimation = function () {
    		$scope.animationsEnabled = !$scope.animationsEnabled;
  		};

  		$scope.addBook = function (newbook) {
  			$scope.book = newbook;
  			console.log($scope.book);
			self.books.push($scope.book);
    		$scope.modalInstance.close();
  		};

  		$scope.showCommentDialog = function(){
  			 $scope.modalInstance = $uibModal.open({
		      animation: $scope.animationsEnabled,
		      templateUrl: '../view/commentModal.html',
		      //controller: 'libraryController',
			  preserveScope:true,
		      clickOutsideToClose: true,
		      scope:$scope
		    });
  		};

  		$scope.saveComment = function(){
  			console.log($scope.bookID);
  			self.books[$scope.bookID].comments.push($scope.comment);
			$scope.modalInstance.close();
  		};

  		$scope.cancel = function () {
    		$scope.modalInstance.dismiss('cancel');
  		};

	});
})();