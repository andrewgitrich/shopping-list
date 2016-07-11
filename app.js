$(document).ready(function(){
// $('#add').click(function(){
//     var text = $('input').val() + '  <button>x</button>';
//     if(text.length){
//         $('<li />', {html: text}).appendTo('ol.shoppinglist');
//     }
//     // clears the input field when add button clicked
//     $("input").val("");  
// });


// // this removes the added list item by clicking the x
// $('ol').on('click','button' , function(el){
//     $(this).parent().remove();
// });


// // trying to line-through when li is clicked NOT WORKING
//  $("li").click(function() {
//         $(this).toggleClass(".test");
//     });

/*features i want to add
1.enter adds text to list from imput field
2. dropdown menu for general items
3. line-through when a li is clicked, 
and remved when clicked again
*/
$('#add').click(function() {
   $('ol').append('<li>' + $('input').val() + '   <button>x</button></li>');
   $("input").val("");
});


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
  $('ol').append('<li>' + $('input').val() + '   <button>x</button></li>');
   $("input").val("");
  $("p").remove();
  }
});



});