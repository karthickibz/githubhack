var MainController = function($scope, $http) {

	var onUserComplete = function(response){
		$scope.user = response.data;
		$http.get($scope.user.repos_url)
		.then(onRepos, onError);
	};

	var onError =function(reason){
		$scope.error = "Could not fetch this data.";
	};

	var onRepos =function(response){
		$scope.repos = response.data;
	};

	$scope.search = function(username){
		$http.get("https://api.github.com/users/"+username)
		.then(onUserComplete, onError);
	};

	$scope.username = "angular";
	$scope.message = "Welcome to Github Viewer!";
	$scope.repoSortOrder = "-stargazers_count";
};


// sample github usernames

// android
// angular
// ruby
// psaravanan
// karthick965938
// a
// k
// jonathan
// ajith
// play
