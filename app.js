
$(document).ready(function() {

   
$('#header-fade-bar').hide();


$(window).scroll(function(e) {

  var scrollPercent = window.scrollY
  		if (scrollPercent >= 250) {

    	$('#header-fade-bar').fadeIn(200);

   /*$('#header-fade-bar').css({"background-color" : "black"});*/
 	 } else {
 	 	    	$('#header-fade-bar').fadeOut(200);

 	 }
 	 
	})
})
