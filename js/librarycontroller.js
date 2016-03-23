(function () {
	var library= angular.module('library',['ngAnimate', 'ui.bootstrap']);
	library.controller('libraryController',function($scope, $uibModal,$http){
		var self = this;
		var URL = "http://localhost:3000/";

		
		$scope.getBooks = function(){
			console.log("chamou");
			$http.get(URL+"books")
				.then(function(result) {
		        	self.books = result.data;
		    	},function (response) {
		    		console.log(response);
	    	});
		};

		$scope.getBooks();
		
		$scope.comment;
		$scope.book = {}
		$scope.bookID;

	    $scope.setBookId=function(id) {
	    	 $scope.bookID = id;
	    };

	    $scope.showModal = function(){
		    $scope.modalInstance = $uibModal.open({
		      animation: $scope.animationsEnabled,
		      templateUrl: '/views/modal.html',
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
  			console.log("entrou");
  			$http.post(URL+"books",newbook).then(function (data,status) {
    			 $scope.modalInstance.close(); 
  			}).then(function (data,status){
    			 $scope.modalInstance.close();
  			});
  		};

  		$scope.showCommentDialog = function(){
  			 $scope.modalInstance = $uibModal.open({
		      animation: $scope.animationsEnabled,
		      templateUrl: '/views/commentModal.html',
		      controller: 'libraryController',
			  preserveScope:true,
		      clickOutsideToClose: true,
		      scope:$scope
		    });

  		};

		$scope.showEditDialog = function(){
			$scope.modalInstance = $uibModal.open({
		      animation: $scope.animationsEnabled,
		      templateUrl: '../view/editModal.html',
		      controller: 'libraryController',
			  preserveScope:true,
		      clickOutsideToClose: true,
		      scope:$scope
		    });

  		};

  		$scope.saveComment = function(comentario){
  			self.books[$scope.bookID].comments.push(comentario);
			$scope.modalInstance.close();
			$scope.getBooks();
  		};

  		$scope.saveBook = function(book){
  			self.books[$scope.bookID]=book;
			$scope.modalInstance.close();
			$scope.getBooks();

  		};

  		$scope.cancel = function () {
    		$scope.modalInstance.dismiss('cancel');
			$scope.getBooks();

  		};

	});
})();