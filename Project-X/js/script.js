// TODO Preloader
$(window).on('load', function() {
    $('.preloader').fadeOut().end().delay(4000).fadeOut('slow');
  });
// TODO Preloader End


// TODO Анимация текста в хедере / Animation of text in the header
function aaa(selector, interval) {
	var $elems = $(selector);

	$elems.slice(1).hide();
  var elemId = 0;

  return setInterval(function() {
  	$elems.eq(elemId).hide();
    elemId = (elemId + 1) % $elems.length;
    $elems.eq(elemId).show();
  }, interval);
}

aaa('.head_block > .head_text_1', 7000) 
// TODO End Animation



// TODO Arrows Bounse

$(document).ready(function(){
	$(".arrow_block").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500);
	});
});