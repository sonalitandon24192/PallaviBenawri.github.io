$(document).ready(function(){
	$('.button1').on('click', function(){
		$('.img1').hide();
		$('img').addClass('imgnew');
	});


	$('.button2').on('click', function(){
		$('.img1').show();
		$('img').removeClass('imgnew');
	});

});
