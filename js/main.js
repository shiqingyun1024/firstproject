/*---------  Slider -------*/

$(function() {

    $('.slider').cycle({
       fx:     'fade',
       speed:   1200,
       timeout: 4000,
       
	   pager: '#nav',
	         cleartypeNoBg: true,
	           slideResize: 0,
	   
 pagerAnchorBuilder: function (index) {
            return '<a href="#"> </a>';
        }
    });
     
});

$(function() {

    $('.slides_container').cycle({
       fx:     'fade',
       speed:   1200,
       timeout: 4000,
       speedIn: 1400,
       speedOut: 500,
	   next:   '#next2', 
       prev:   '#prev2' 
        
    });
     
});

$(function() {

    $('.testi').cycle({
       fx:     'fade',
       speed:   600,
       timeout: 4000,
        pager: '#nav2',
	         cleartypeNoBg: true,
	           slideResize: 0,
	   
 pagerAnchorBuilder: function (index) {
            return '<a href="#"> </a>';
        }
        
    });
     
});


/*---------  Features Hover -------*/

$(document).ready(function(){
$(".featu").hover(
function() {
$("img.ft2", this).stop().animate({"opacity": "1","-ms-filter":"progid:DXImageTransform.Microsoft.Alpha(opacity=100)"}, "50");
$("img.ft1", this).stop().animate({"opacity": "0","-ms-filter":"progid:DXImageTransform.Microsoft.Alpha(opacity=0)"}, "50");
},
function() {
$("img.ft2", this).stop().animate({"opacity": "0","-ms-filter":"progid:DXImageTransform.Microsoft.Alpha(opacity=0)"}, "50");
$("img.ft1", this).stop().animate({"opacity": "1","-ms-filter":"progid:DXImageTransform.Microsoft.Alpha(opacity=100)"}, "50");
});

});

/*---------  Screenshots Hover -------*/

$(document).ready(function(){
$("img.b").hover(
function() {
$(this).stop().animate({"opacity": "1","-ms-filter":"progid:DXImageTransform.Microsoft.Alpha(opacity=100)"}, "800");
},
function() {
$(this).stop().animate({"opacity": "0","-ms-filter":"progid:DXImageTransform.Microsoft.Alpha(opacity=0)"}, "fast");
});

});



$(document).ready(function(){
  $("#more").click(function(){
    $("ul.hiden").show();
	$("#less").css('display','block');
	$(this).hide();
	
  });
  
  $("#less").click(function(){
    $("ul.hiden").hide();
	$(this).hide();
	$("#more").show();
  });
  
});



