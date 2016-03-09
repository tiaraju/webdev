(function () {
	var library= angular.module('library',['ngAnimate', 'ui.bootstrap']);
	library.controller('libraryController',function($scope, $uibModal){
		var self = this;

		self.books=collection;
		
		$scope.comment;
		$scope.book = {}
		$scope.bookID;

	    $scope.setBookId=function(id) {
	    	 $scope.bookID = id;
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
			self.books.push($scope.book);
    		$scope.modalInstance.close();
  		};

  		$scope.showCommentDialog = function(){
  			 $scope.modalInstance = $uibModal.open({
		      animation: $scope.animationsEnabled,
		      templateUrl: '../view/commentModal.html',
		      controller: 'libraryController',
			  preserveScope:true,
		      clickOutsideToClose: true,
		      scope:$scope
		    });

  		};

  		$scope.saveComment = function(comentario){
  			console.log(comentario);
  			self.books[$scope.bookID].comments.push(comentario);
			$scope.modalInstance.close();
  		};

  		$scope.cancel = function () {
    		$scope.modalInstance.dismiss('cancel');
  		};

	});
})();