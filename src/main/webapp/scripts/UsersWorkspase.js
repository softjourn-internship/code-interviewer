var anableLog=false;
function ShowTest () {
	$('#testEditor').css("z-index",4);
	$('#testEditor').css("width",'98%');
	$('#testEditor').css("left",'0%');
	$('#IconProg').css("scr","images/Icon1.jpg");
}

function ShowPr () {
	$('#testEditor').css("z-index",1);
	$('#programEditor').css("width",'98%');	
}

function ShowAll(){
	$('#testEditor').css("width",'48%');
	$('#programEditor').css("width",'48%');
	$('#testEditor').css("left",'50%');
	$("#IconAll").attr("scr","images/Icon3active.jpg");
}

function ShowLogMessage () {
	if (!anableLog){
		$('#testEditor').css("height",'65%');
		$('#programEditor').css("height",'65%');
		$('#logMess').css("z-index",7);
		anableLog=true;}
	else{
		$('#testEditor').css("height",'98%');
		$('#programEditor').css("height",'98%');
		$('#logMess').css("z-index",-2);
		anableLog=false;}
}
