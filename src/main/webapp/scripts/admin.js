$(document).ready(function() {
	var fadeToggle = false;
	$("div#mainMobile").click(function() {
			$("div.sidebar").toggle();
			if (!fadeToggle) {$("div.content").css("margin-left", 0); fadeToggle = true; }
			else {$("div.content").css("margin-left", 180); fadeToggle = false; }
	});

	$("div#secondMobile").click(function() {
			$("div.sidebar").fadeToggle();
	});
	$("div#userMenu").hide();
	$("div#selectMenu").hide();

	$("span#role").click(function() {
			$("div#userMenu").slideToggle('fast');
	});

	window.onresize = function(event) {
		if ($(window).width() > 768) {
			$("div.content").css("margin-left", 180);
			$(".sidebar").show();
			$("div.logo").show();
		};
		if ($(window).width() < 768) {
			$("div.content").css("margin-left", 0);
		};
	};

	$('button.btnInfo').click(function(event){
    	$('p.info-p').slideToggle('fast');
	});
});
$(document).keyup(function(e){
   	 	if(e.keyCode == 27){
        	$("div.send-test").fadeOut("fast");
        	$("div#selectMenu").fadeOut('fast');
        	$("div#userMenu").fadeOut('fast');
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
$(document).on("click","span#select", function(){
	$("div#selectMenu").fadeToggle('fast');
	$("span#select").css("color","#333")
});
$(document).on("click","div.content",function() {
			$("div#userMenu").fadeOut('fast');
	});
$(document).on("click","div#selectMenu",function() {
			$("div#selectMenu").fadeOut('fast');
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