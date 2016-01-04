$(document).ready(function() {
	$("div.mobile").click(function() {
			$("div.sidebar").fadeToggle();
	});

	// $("div.sidebar").click(function(){
	// 	$("div.sidebar").fadeOut();
	// })

	$("#view").click(function() {
			// $("div.sidebar").fadeOut();
	});

	window.onresize = function(event) {
		if ($(window).width() > 700) {
			$(".sidebar").show();
			$("div.logo").show();
		};
	};

	$('button.btnInfo').click(function(event){
    	$('p.info-p').slideToggle('fast');
	});
});
$(document).keyup(function(e){
   	 	if(e.keyCode == 27){
        	$("div.send-test").fadeOut("fast");
			$("div.chart").fadeIn("fast");
			$("div.right-container").fadeIn("fast");
			$("#filter").fadeIn("fast");
			$("#activity").show();
			$("#chart-profile").show();
			$("div.send-test").fadeOut("fast");
			$("#send-profile").fadeIn("fast");
			$(".info-profile").fadeIn("fast");
			$("div.profile div.info-profile div.details").fadeIn("fast");	
    	}
	});
