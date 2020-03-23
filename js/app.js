$('[data-fancybox="gallery"]').fancybox({
	loop:true,
	animationDuration: 150,
	animationEffect: "fade",
	buttons: [
		//"zoom",
		//"share",
		//"slideShow",
		//"fullScreen",
		//"download",
		//"thumbs",
		"close"
	  ],
});

const $fuzzy = $('.fuzzy');
const $images = $('img')

$fuzzy.keyup(function(evt) {
  const value = $fuzzy.val().toLowerCase();
  $images.show();
  if (value !== '') {
    $images.not('[caption*="' + value + '"]').hide();
  }
});

