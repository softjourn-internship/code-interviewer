app.controller("AnalyticsCtrl", function ($scope) {
	$scope.doughnut = {
		labels: ["Java", "HTML", "CSS", "Java Script"],
		data: [50, 15, 26, 12]
	}

	$scope.line = {
		labels: ["January", "February", "March", "April", "May", "June", "July"],
		series: ['Сompleted tests', 'Falied tests'],
		data: [
		[65, 59, 80, 81, 56, 55, 40],
		[28, 48, 40, 19, 86, 27, 90]
		]
	}
	
});