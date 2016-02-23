app.controller('WorkspaceCtrl', function ($scope) {
	$scope.MODULE = 'workspace';
	
	$scope.codeEditor = {
		'useWrapMode' : true,
		'showGutter': true,
		'showPrintMargin': false,	
		'theme':'tomorrow',
		'mode': 'java',
		'firstLineNumber': 1,
		'highlightActiveLine': false
	}

	$scope.console = {
		'useWrapMode' : true,
		'showGutter': false,
		'showPrintMargin': false,	
		'theme':'solarized_dark',
		'mode': 'java',
		'firstLineNumber': 1
	}


});