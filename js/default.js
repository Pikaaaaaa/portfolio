$(document).ready(function () {
    $(window).scroll(function (event) {
        var $scroll = $(window).scrollTop();
        headerNavFixed();

        // header fixed on scroll    

        function headerNavFixed(){
            var $headerNav = $('.header__bottom-nav');

            if($scroll >= 320) {
                $headerNav.addClass('fixed fadeIn animated');
            }
            else {
                $headerNav.removeClass('fixed fadeIn animated');
            }
        }
    });

    // btn see more animate

    $('.btn--see-more').click(function(){
        $('html, body').animate({
            scrollTop: ($('.about-me').offset().top)
        },500);
    })
    
});