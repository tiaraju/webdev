(function () {
	var myapp = angular.module("library",['ngAnimate', 'ui.bootstrap']);

	myapp.controller("libraryController", function($scope,$http,$uibModal){

		var self = this;

		self.books = null;
		$scope.bookID;
		$scope.currentBook;
		$scope.editing=false;
		$scope.newComment;

		$scope.getBooks = function(){
			$http.get("/book/").success(function(response){
				console.log("gotBooks");
				self.books=response.result.data;
			}).error(function (response){
				 console.log("error on get book");
			});
		};

		$scope.getBooks();

	    $scope.setBookId=function(id) {
	    	 $scope.bookID = id;
	    };

	    $scope.setCurrentBook = function(id){
	    	$scope.currentBook = self.books[id];
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
			$http.post("/book/",newbook).
			then(function (data,status) {
				$scope.modalInstance.close(); 
				$scope.getBooks();
				location.reload();
			}).then(function (data,status){
				 $scope.modalInstance.close();
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

		$scope.showPreviewDialog = function(){
			$scope.newBook = $scope.currentBook;
			console.log($scope.newBook);
			$scope.modalInstance = $uibModal.open({
		      animation: $scope.animationsEnabled,
		      templateUrl: '/views/preview.html',
		      controller: 'libraryController',
			  preserveScope:true,
		      clickOutsideToClose: true,
		      scope:$scope
		    });

		};

		$scope.edit = function(){
			$scope.editing = true;
		}


		$scope.cancelEdition = function(){
			$scope.editing = false;
			$scope.cancel();
		}


		$scope.saveComment = function(){
			$scope.currentBook.comments.push($scope.newComment);
			$http.put("/book/"+$scope.bookID,$scope.currentBook).
			then(function (data,status) {
				$scope.modalInstance.close();
				$scope.getBooks();
				location.reload();
			}).then(function (data,status){
				 $scope.modalInstance.close();
			});
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
			location.reload();
		};
	});

})();