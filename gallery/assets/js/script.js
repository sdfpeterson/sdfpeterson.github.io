$(document).ready(function(){

	$(".grid").masonry({
		itemSelector:".grid-item",
		columnWidth: ".grid-sizer",
		percentPosition: true,
	});

	$("#top-arrow").click(function() {
		$("html, body").animate({ scrollTop: 0 }, "slow");
  		return false;
	});

	$("#grid-item").click(function() {
		$("#modal-container").show();
	});

	$("#modal-overlay").click(function() {
		$("#modal-container").hide();
	});

});