$(document).ready(function(){

	$('.port-box').hover(function(){
		$(".portfolio-zoom", this).fadeIn('500');
	
	}, function() {
		$(".portfolio-zoom", this).fadeOut('500');
	});

});