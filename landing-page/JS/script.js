// Collapse
function collapse(){
	var menu_id = document.getElementById('menu-link');
	if (menu_id.className == 'menu-link'){
		menu_id.className += ' collapse'
	} else {
		menu_id.className = 'menu-link';
	}
}

// Slideshow function Start
var slideIndex = 1;
var timer = null;
showSlides(slideIndex);

function plusSlides(n) {
    clearTimeout(timer);
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    clearTimeout(timer);
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (n==undefined){n = ++slideIndex}
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
    timer = setTimeout(showSlides, 7000);
}


// Fullpage scroll buatan sendiri
var divs = $('#fullpage > *');
var scroll = true;
var div = 1;

if($(window).width() >= 960){
  // Reset position onload
  $('document').ready(() => {
    div = 1
    $('html,body').animate({
      scrollTop: divs.eq(div).offset().top
    }, 1000);
  });

  $('body').bind('wheel', function(e) {
    //console.log("berhasil");
    if (scroll == true){
      scroll = false;
      if(e.originalEvent.deltaY < 0) {
        div = div > 1 ? div - 1 : div;
        console.log(div);
        $('html,body').animate({
          scrollTop: divs.eq(div).offset().top
        }, 1000, function(){
          scroll = true;
        });
      } else {
        //console.log("naik");
        scroll = false;
        div = div <= 5 ? div + 1 : 1;
        console.log(div);
        $('html,body').animate({
          scrollTop: divs.eq(div).offset().top
        }, 1000, function(){
          scroll = true;
        });
      }
    }
  });
}

$('body').bind('touchmove', function(e){
  e.preventDefault();
});

$('.sidebar__open').click((e) => {
  e.preventDefault();
  $('#sidebar__toggle').toggleClass('sidebar__body--show'); 
});


$('.sidebar__close').click((e) => {
  e.preventDefault();
  $('#sidebar__toggle').toggleClass('sidebar__body--show'); 
})
