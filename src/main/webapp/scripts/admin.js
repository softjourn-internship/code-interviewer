$(document).ready(function() {
	
	$("div.mobile").click(function() {
			$(".sidebar").slideToggle('fast');
	});

	window.onresize = function(event) {
		if ($(window).width() > 700) {
			$(".sidebar").show();
			$("div.logo").show();
		};
	};

 //    $('tr.hover-tr').click(function(event){
 //    	info = "<tr><td colspan='5'><p>Test sent: <br>Test return: <br>Completion: <br></p></td></tr>"
	// 	$('table.info').append(info);
	// 	return false;
	// });

	$('button.btnInfo').click(function(event){
    	$('p.info-p').slideToggle('fast');
	});
});
