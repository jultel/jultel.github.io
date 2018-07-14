$(document).ready(function() {

$(".portfolio_item").each(function(i){
$(this).find("a").attr("href","#work_" + i);
$(this).find(".podrt_descr").attr("id", "work_" + i);
$("#portfolio_grid").mixItUp();
$("input,select,textarea").jqBootstrapValidation();
$(".top_mnu ul a").mPageScroll2id();
$(".popup").magnificPopup({type:"image"});
$(".popup_content").magnificPopup({type:"inline",midClick:true});
$(".top_text h1").animated("fadeInDown","fadeOutUp");
$(".top_text p ,.section_header ").animated("fadeInUp","fadeOutDown");
$(".animation_1").animated("flipInY","flipOutY");
$(".animation_2").animated("fadeInDown","fadeOutUp");
$(".animation_3").animated("fadeInDown","fadeOutUp");
$(".left .resume_item").animated("fadeInLeft", "fadeOutDown");
$(".right .resume_item").animated("fadeInRight", "fadeOutDown");

function heightDetect(){
$(".main_head").css("height", $(window).height());

};
heightDetect();
$(window).resize(function(){
	heightDetect();
});


$(".toggle_mnu, .menu_item").click(function() {
  $(".sandwich").toggleClass("active");
});

$(".top_mnu li a").click(function(){
	$(".top_mnu").fadeOut(600);
	$(".sandwich").toggleClass("active");
});

$(".toggle_mnu").click(function() {
		if ($(".top_mnu").is(":visible")) {
			$(".top_text").css("opacity", "1");
			$(".top_mnu").fadeOut(600);
			$(".top_mnu li a").removeClass("fadeInUp animated");
		}
		else {
			$(".top_text").css("opacity", "1");
			$(".top_mnu").fadeIn(600);
			$(".top_mnu li a").addClass("fadeInUp animated");
		};
	});

});

$(window).load(function() {
	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");
});


