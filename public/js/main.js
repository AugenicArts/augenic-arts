document.querySelector('.portfolio-welcome-main-bg').classList.add('first-fadeIn');


$(function() {
    $('.hamburger').click(function() {
        $('#navigation-menu').toggleClass('active');
    });
});

$(document).ready(function() {
    $('.navigation-menu ul li a').click(function() {
        $('.navigation-menu').removeClass('active');
        $('.hamburger--emphatic').removeClass('is-active');
    });
});

$(document).ready(function() {
    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
                }, 1500, function() {
                window.location.hash = hash;
            });
        }
    });
});

var forEach = function(t, o, r) { if("[object Object]" === Object.prototype.toString.call(t)) for(var c in t) Object.prototype.hasOwnProperty.call(t, c)&&o.call(r, t[c], c, t); else for(var e = 0, l = t.length; l > e; e++) o.call(r, t[e], e, t)};

var hamburgers = document.querySelectorAll(".hamburger");
if (hamburgers.length > 0) {
    forEach(hamburgers, function(hamburger) {
    hamburger.addEventListener("click", function() {
        this.classList.toggle("is-active");
        }, false);
    });
}

$(function(){
	var $window = $(window);
	var scrollTime = 0.6;
    var scrollDistance = 370;

	$window.on("mousewheel DOMMouseScroll", function(event) {
		event.preventDefault();
		var delta = event.originalEvent.wheelDelta/120 || -event.originalEvent.detail/3;
		var scrollTop = $window.scrollTop();
		var finalScroll = scrollTop - parseInt(delta*scrollDistance);

		TweenMax.to($window, scrollTime, {
			scrollTo: { y: finalScroll, autoKill: true },
				ease: Power1.easeOut,
				autoKill: true,
				overwrite: 5
        });
	});
});