$(function(){
	$("p").click(function(){
		$("p")
			.addClass("danger")
			.css("margin-bottom", "100px")
	});
	$("p").click(function(){
		setTimeout(function() {
			location.reload()
		}, 2000);
		
	});
});

$(function(){
	$("p")
		.animate({
			opacity: .6,
			marginLeft: "200px"
		}, 3000)
		.animate({
			opacity: 1,
			marginRight: "200px"
		}, 3000)
});