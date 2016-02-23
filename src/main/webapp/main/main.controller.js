app.controller("MainCtrl", ['ngDialog', function ($scope) {
	var sidebarVisible = false;

	$scope.sidebarToggle = function() {
		var sidebar = angular.element(document.querySelector('#sidebarToggle'));
		if (sidebarVisible) {
			sidebar.css('left', 0);
			sidebarVisible = false;
		}
		else { sidebar.css('left', '180px'); sidebarVisible = true;}
	}

	window.onresize = function(event) {
		var sidebar = angular.element(document.querySelector('#sidebarToggle'));
		if(window.innerWidth > 767) {
			sidebar.css('left', '180px');
		}
		else {sidebar.css('left', 0); sidebarVisible = false;}
	}

	

}]);