/*--------- Tabbed Section  -------*/

$(function() {$( "#tabs" ).tabs({ fx: {
            opacity:'toggle'   
        } , active: 1 });});
		
/*---------	Contact Form  -------*/
 
 $(document).ready(function(){
 
$('#send').click(function(){
 
$.post("mailer.html", $("#contactform").serialize(),  function(response) {
$('#success').html(response);
//$('#success').hide('slow');
});
return false;
 
});
 
});