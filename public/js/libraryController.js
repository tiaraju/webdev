(function () {
	var myapp = angular.module("library",['ngAnimate', 'ui.bootstrap']);

	myapp.controller("libraryController", function($scope,$http,$uibModal){

		var self = this;

		self.books = null;
		$scope.bookID;

		$scope.getBooks = function(){
			$http.get("/book/").success(function(response){
				self.books=response.result.data;
			}).error(function (response){
				 console.log("error on get book");
			});
		};

		$scope.getBooks();

	    $scope.setBookId=function(id) {
	    	console.log(id);
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
			$http.post("/book/",newbook).then(function (data,status) {
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
		      templateUrl: '/views/editModal.html',
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
			$http.put("/book/"+$scope.bookID,book).
			then(function (data,status) {
				$scope.modalInstance.close();
				$scope.getBooks();
				location.reload();
			}).then(function (data,status){
				 $scope.modalInstance.close();
			});
			
		};

		$scope.cancel = function () {
			$scope.modalInstance.dismiss('cancel');
			$scope.getBooks();
		};
	});

})();