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

	$(".img").click(function() {
		var y = $(this).attr("id");
		$(".modal-img").attr("src", "assets/img/" + y + ".JPG");
		$("#modal-container").show();
		$("body").addClass("noscroll");
		var h = parseInt($(".modal-img").css("height").replace("px", ""));
		if (h > 600)
			{$(".modal-img").css("padding-left", "300px")
	} else {
		console.log(false);
	}
	});

	$("#modal-overlay").click(function() {
		$("#modal-container").hide();
		$("body").removeClass("noscroll");
	});

	$("#cancel").click(function() {
		$("#modal-container").hide();
		$("body").removeClass("noscroll");
	})

});
