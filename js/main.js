$(function(){

	$('.accordion .ac-title-wrapper').click(function(){

		$(this).next('.accordion .ac-content').slideToggle();

		$('.accordion .ac-title-wrapper').not($(this)).next('.accordion .ac-content').slideUp();
	});

  $('a[href^="#"]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});
