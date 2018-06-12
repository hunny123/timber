 
$(document).ready(function(){
 
 $(window).scroll(function() {
   if ($(document).scrollTop() > 10) {
      $("#nav1").css("padding-top", "5px");
      $("#nav1").css("background-color", "#3F1D0B");

   } else {

     $("#nav1").css("padding-top", "20px");
      $("#nav1").css("background-color", "transparent");
 }
 });     
// Instantiate the Bootstrap carousel
$('.scrollToTop').click(function(){
    $('html, body').animate({scrollTop : 0},800);
    return false;
  });
  $(".left").click(function(){
    $("#carouselExampleSlidesOnly1").carousel("prev");
    $("#carouselExampleSlidesOnly2").carousel("prev");
});
 $(".right").click(function(){
    $("#carouselExampleSlidesOnly2").carousel("next");
    $("#carouselExampleSlidesOnly1").carousel("next");
});

new WOW().init();
// for every slide in carousel, copy the next slide's item in the slide.
// Do the same for the next, next item.
   
   
   
   
   

$(".menu").click(function(){
  $(this).hide(10);
  $(".menu1").show(10);
  $("#nav1").css("background-color", "#3F1D0B");
}); 
   $(".menu1").click(function(){
  $(this).hide(10);
  $(".menu").show(10);
 
   if ($(document).scrollTop() > 15) {
      
      $("#nav1").css("background-color", "#3F1D0B");

   } else {

     
      $("#nav1").css("background-color", "transparent");
 
 };   
   
});
   
     
   
   
});
