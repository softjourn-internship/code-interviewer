$(document).ready(function() {
	$("div.mobile").click(function() {
			$("div.sidebar").fadeToggle();
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
    	}
	});
$(document).on("click","button.send", function(){
	$("div.send-test").fadeIn("fast");
});
$(document).on("click","button#close", function(){
	$("div.send-test").fadeOut("fast");
});
$(document).on("click","div#close-box", function(){
	$("div.send-test").fadeOut("fast");
});

// $(document).on("mouseover","button.send", function(){
// 	$(this).data('timeout', setTimeout( function () {
// 		$("div.alt").fadeIn("fast");
// 	}, 500));
// 	// $("div.alt").fadeOut(500);
// });
// $(document).on("mouseout","button.send", function(){
// 	$("div.alt").fadeOut("fast");
// });