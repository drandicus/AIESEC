angular.module('app.controllers', [])
.controller('MainCtrl', ['$scope', function($scope){
}])

.controller('MembersCtrl', ['$scope', '$http', function($scope, $http){
	
	var currentGroup = "EB";
	
	$scope.leader = {};
	$scope.members = [];
	$scope.minions = [];
	
	$scope.people = [];
	
	$http({method: 'GET', url: 'data/members.json'}).
	    success(function(data, status, headers, config) {
	   		$scope.members = data;
			
			$scope.leader = $scope.members[0];

			for (var i = 0; i < $scope.members.length; i++) {
				if ($scope.members[i].Image === "") {
					$scope.members[i].Image = " ";
				}
				
				if ($scope.members[i].Boss === $scope.leader.Name) {
					$scope.minions.push($scope.members[i]);
				}
			}
	    }).
	    error(function(data, status, headers, config) {
	   		alert('Error loading members.');
	    }
	);
    
    $scope.view = function(group){
    	currentGroup = group;
    }
    
	$scope.getMinions = function() {
		return $scope.minions;
	}
	
	$scope.sort = function(x) {
		$scope.show = true;
		
		$scope.people = [];
		
		for (var i=0; i<$scope.members.length; i++) {
			if (x === "OGX") {
				if ($scope.members[i].OGX) {
					if(!$scope.members[i].EB)
						$scope.people.push($scope.members[i]);
				}
			} else if (x === "ICX") {
				if ($scope.members[i].ICX) {
					if(!$scope.members[i].EB)
						$scope.people.push($scope.members[i]);
				}
			} else if (x === "FIN") {
				if ($scope.members[i].FIN) {
					if(!$scope.members[i].EB)
						$scope.people.push($scope.members[i]);
				}
			} else if (x === "CM") {
				if ($scope.members[i].CM) {
					if(!$scope.members[i].EB)
						$scope.people.push($scope.members[i]);
				}
			}else if (x === "TM") {
				if ($scope.members[i].TM) {
					if(!$scope.members[i].EB)
						$scope.people.push($scope.members[i]);
				}
			}
		}
	}
	
	$scope.getPeople = function() {
		$scope.people.sort(function(a,b){
			if (a.Name < b.Name) {
				return -1
			} else if (a.Name > b.Name) {
				return 1;
			}
			return 0;
		})
		
		return $scope.people;
	}
	
}])