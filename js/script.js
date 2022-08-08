$(document).ready(function(){

	var firstchild=$('.mySlides').first();
	$(firstchild).addClass('active');

	$('.next').click(function(){
		var firstchild=$('.mySlides').first();
		var nxtEle=$('.mySlides.active').next('.mySlides');

		$('.mySlides.active').removeClass('active');
		if(nxtEle.length > 0){
			nxtEle.addClass('active');
		}else{
			firstchild.addClass('active');
		}
	});
	
	$('.prev').click(function(){
		var lastchild=$('.mySlides').last();
		var prevEle=$('.mySlides.active').prev('.mySlides');

		$('.mySlides.active').removeClass('active');

		if(prevEle.length > 0){
			prevEle.addClass('active');
		}else{
			lastchild.addClass('active');
		}
	});
});