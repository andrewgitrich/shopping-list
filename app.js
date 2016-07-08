$(document).ready(function(){
$('#add').click(function(){
    var text = $('input').val() + '  <button>x</button>';
    if(text.length){
        $('<li />', {html: text}).appendTo('ol.shoppinglist');
    }
    // clears the input field when add button clicked
    $("input").val("");
   
});


// this removes the added list item by clicking the x
$('ol').on('click','button' , function(el){
    $(this).parent().remove();
});












});