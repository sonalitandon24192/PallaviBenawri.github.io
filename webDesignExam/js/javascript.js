$(document).ready(function(){
	$('.button1').on('click', function(){
		$('.img1').hide();
		$('#lastimg').removeClass('styling').addClass('img2new');
	});



	$('.button2').on('click', function(){
		$('.img1').show();
	});

});
