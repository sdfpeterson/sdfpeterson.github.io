$(document).ready(function() {

	var vague = $(".background-picture").Vague({
			intensity: 2,
			forceSVGurl: true,
			animationOptions: {
				duration: 1000
			}
		});

	var vague2 = $("#title").Vague({
			intensity: 2,
			forceSVGurl: true,
			animationOptions: {
				duration: 1000
			}
		});

	vague2.blur();

	$("#menu").mouseenter(function() {
		vague.blur();
		vague2.unblur();
		var x = 1;
		$("#dropdown-menu").css('opacity', x);
	});

	$("#menu").mouseleave(function() {
		vague.unblur(); 
		vague2.blur();
		var x = 0;
		$("#dropdown-menu").css('opacity', x);
	});

	/* for (var i = 0; i < 4; i = i + 1) {
		if (i == 3) {
		  var i = i - 3;
		  var q = 1;
		  $("#pic1").css('opacity', q);
		  $("#pic2").css("opacity", q);
		  $("#pic3").css("opacity", q);
		  $("#pic4").css("opacity", q);
		} else {
			 setInterval(function(){
			 	var q = 0;
			  $("#pic1").css('opacity', q); }, 600);
			 setInterval(function(){
			 	var q = 0;
			  $("#pic2").css('opacity', q); }, 1200);
			setInterval(function(){
			 	var q = 0;
			  $("#pic3").css('opacity', q); }, 1800);
			setInterval(function(){
			 	var q = 0;
			  $("#pic4").css('opacity', q); }, 2400);
		}; */

});