$(document).ready(function(){
	
	//click button, add input to list
	$('#add').click(function() {
	   $('ol').append('<li>' + $('input').val() + '   <button id="remove" >x</button></li>');
	   $("input").val("");
	});


	//click the x to remove
	$('ol').on('click', 'button', function() {
	   $(this).parent().remove();
	});


	// click on li to create a line through
	$("ol").on("click", "li", function() {
	  $(this).toggleClass("test");
	});


	// add txt to input press enter to add to list
	$("input").on("keypress",function(event){
	    if(event.which === 13){
	  		$('ol').append('<li>' + $('input').val() + '   <button id="remove" >x</button></li>');
	   		$("input").val("");
	  		$("p").remove();
	  	}
	});



});