app.controller('WorkspaceCtrl', function ($scope) {
	$scope.MODULE = 'workspace';

	$scope.taskListShow = true;
	$scope.taskShow = false;

	$scope.mainShow = true;
	$scope.testShow = false;

	$scope.timerRunning = true;

	$scope.codeEditor = {
		'highlightActiveLine': false,
		'useWrapMode' : false,
		'showGutter': true,
		'showPrintMargin': false,	
		'theme':'tomorrow',
		'mode': 'java',
		'maxLines': Infinity
	}

	$scope.console = {
		'useWrapMode' : true,
		'showGutter': false,
		'showPrintMargin': false,	
		'theme':'solarized_dark',
		'mode': 'java',
	}

	$scope.tasks = [
	{
		title: 'First Task',
		description: 'Write a program called CheckOddEven which prints "Odd Number" if the int variable “number” is odd, or “Even Number” otherwise. Hints: n is an even number if (n % 2) is 0.'
	},
	{
		title: 'Second Task',
		description: 'Write a program called CheckPassFail which prints "PASS" if the int variable "mark" is more than or equal to 50; or prints "FAIL" otherwise.Hints'
	},
	{
		title: 'Third Task',
		description: 'Write a program called SumAndAverage to produce the sum of 1, 2, 3, ..., to an upperbound (e.g., 100). Also compute and display the average. The output shall look like'
	}
	];

	$scope.mainCode = 'public class HelloWorld { \n\tpublic static void main(String[] args) { \n\t\t// Prints "Hello, World" to the terminal window. \n\t\tSystem.out.println("Hello, World"); \n\t} \n}';

	$scope.openTaskList = function() {
		$scope.taskListShow = true;
		$scope.taskShow = false;
	};

	$scope.openTask = function(number) {
		$scope.taskListShow = false;
		$scope.taskShow = true;
		$scope.task = $scope.tasks[number];
	};


});