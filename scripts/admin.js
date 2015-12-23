$(document).ready(function() {
	
	$("div.mobile").click(function() {
			$("div.sidebar").fadeToggle();
	});

	$("#view").click(function() {
			// $("div.sidebar").fadeOut();
	});

	$("button.send").click(function() {
			$("div.send-test").fadeIn();
			$("div.profile div.info-profile div.details").fadeOut();
			$("#send-profile").fadeOut();
			$(".info-profile").fadeOut();
	});

	$("#close").click(function() {
			$("div.send-test").fadeOut();
			$("#send-profile").fadeIn();
			$(".info-profile").fadeIn();
			$("div.profile div.info-profile div.details").fadeIn();		
	});


	window.onresize = function(event) {
		if ($(window).width() > 700) {
			$(".sidebar").show();
			$("div.logo").show();
		};
	};


	// alert(window.location.pathname);
	// alert(window.location.hash);
	// if(window.location.hash === '#/' ){
	// 	$("a#dachboard").css('color', '#fff');
	// 	$("a#dachboard").css('background-image', 'url(/images/db-h.png)');
		
	// }
	// if (window.location.hash === '#/participants' ){
	// 	$("a#participants").css('color', '#fff');
	// 	$("a#participants").css('background-image', 'url(/images/pib-h.png)');
	// }
	// if(window.location.hash != '#/participants'){
	// 	$("a#participants").css('color', '#577a9d');
	// 	$("a#participants").css('background-image', 'url(/images/pib.png)');
	// }
	// else{alert(window.location.hash );}
	// alert(window.location.hash);
 //    $('tr.hover-tr').click(function(event){
 //    	info = "<tr><td colspan='5'><p>Test sent: <br>Test return: <br>Completion: <br></p></td></tr>"
	// 	$('table.info').append(info);
	// 	return false;
	// });

	$('button.btnInfo').click(function(event){
    	$('p.info-p').slideToggle('fast');
	});
});
