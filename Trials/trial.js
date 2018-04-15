$(document).ready(function(){
	$('p').on('click', function(){
		$(this).hide();
	});

});

document.getElementById('hello').innerHTML="Hey you";

function hellochange(){

	var x = document.getElementById('hello');
	x.style.color= 'blue';

}