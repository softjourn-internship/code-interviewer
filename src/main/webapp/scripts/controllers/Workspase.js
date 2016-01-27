/* Controllers for Workspace*/
/************************************************************************************/

adminPanelApp.controller('mainCTRL',['$scope','$http',function($scope,$http){
    var anableLog=false;
    console.log("ww");
    $scope.NumberTask=1;
    $http.get("data/tasks.json").then(function (response) {
        $scope.taskForUser=response.data;
        $scope.TaskShow=$scope.taskForUser[1].task;
        $scope.programText=$scope.taskForUser[1].program;
        $scope.testText=$scope.taskForUser[1].test;
        $scope.logText=$scope.taskForUser[1].log;
    });
    $scope.changeText=function(idTask){
      $scope.taskForUser[idTask].program=$scope.programText;
      $scope.taskForUser[idTask].test=$scope.testText;
      $scope.taskForUser[idTask].log=$scope.logText;
    };

    $scope.newText=function(idTask){
    $scope.programText=$scope.taskForUser[idTask].program;
    $scope.testText=$scope.taskForUser[idTask].test;
    $scope.logText=$scope.taskForUser[idTask].log;
  };

    $scope.ShowTask=function(){
        if ($scope.NumberTask==1){$scope.TaskShow=$scope.taskForUser[1].task;}
        if ($scope.NumberTask==2){$scope.TaskShow=$scope.taskForUser[2].task;}
        if ($scope.NumberTask==3){$scope.TaskShow=$scope.taskForUser[3].task;}
  }
      $scope.TaskListVisible=false;


    $scope.ShowTest = function() {
    	$('#testEditor').css("z-index",4);
    	$('#testEditor').css("width",'98%');
    	$('#testEditor').css("left",'0%');
    	$('#IconProg').css("scr","images/Icon1.jpg");
    };

    $scope.ShowPr = function() {
    	$('#testEditor').css("z-index",1);
    	$('#programEditor').css("width",'98%');
    };
    $scope.ShowAll= function(){

    	$('#testEditor').css("width",'48%');
    	$('#programEditor').css("width",'48%');
    	$('#testEditor').css("left",'50%');
    	$("#IconAll").attr("scr","images/Icon3active.jpg");
    };

    $scope.ShowLogMessage = function () {
    	if (!anableLog){
    		$('#testEditor').css("height",'65%');
    		$('#programEditor').css("height",'65%');
    		$('#logMess').css("z-index",7);
    		anableLog=true;}
    	else{
    		$('#testEditor').css("height",'96%');
    		$('#programEditor').css("height",'96%');
    		$('#logMess').css("z-index",-2);
    		anableLog=false;}
    };
}]);


/* directive for timer, needs to change.
adminPanelApp.directive("timer", function () {
    return function (scope, element, attrs) {
    var clock;
      $(document).ready(function() {
        var Timer;
        $.getJSON( "data/tasks.json", function( data ) {
           Timer=data[0].time;
          // console.log(Timer);
            var clock = $('.clock').FlipClock(Timer,{
                  clockFace: 'MinuteCounter',
                  autoStart: false,
                  callbacks: {
                    stop: function() {
                      $('.message').html('The clock has stopped!')
                    }
                  }
              });
              //clock.setTime(438);
              //console.log(Timer);
              clock.setCountdown(true);
              clock.start();
                });
          });
        }
});
*/
