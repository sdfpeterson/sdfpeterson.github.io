$(document).ready(function(){

	$("#top-arrow").click(function() {
		$("html, body").animate({ scrollTop: 0 }, "slow");
  		return false;
	});

	$("#nav-menu").mouseenter(function() {
		var x = 1;
		$("#dropdown-menu").css('opacity', x);
		$("#box").css("opacity", .5);
	});

	$("#nav-menu").mouseleave(function() {
		var x = 0;
		$("#dropdown-menu").css('opacity', x);
		$("#box").css("opacity", 0);
	});

});