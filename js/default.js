$(document).ready(function () {
    $(window).scroll(function (event) {
        var $scroll = $(window).scrollTop();
        headerNavFixed();

        // header fixed on scroll    

        function headerNavFixed(){
            var $headerNav = $('.header__bottom-nav');
            var $headerNavEl = $('.header__bottom-nav-el-link');

            if($scroll >= 320) {
                $headerNav.addClass('fixed fadeIn animated');
            }
            else {
                $headerNav.removeClass('fixed fadeIn animated');
            }
        }
    });

    // btn see more animate

    $('.scroll-down').click(function(){
        $('html, body').animate({
            scrollTop: ($('.about-me').offset().top)
        },500);
    })

    // nav
    
    var $headerBottomNavLink = $('.header__bottom-nav-el-link');

    $headerBottomNavLink.click(function(e){
        e.preventDefault();
        
        var $section = $(this).attr("href");
        console.log($section)

        $('html, body').animate({
            scrollTop: ($($section).offset().top)
        },500);
    });

    // gallery
    
    var $galleryItem = $('.gallery__item');
    var $galleryProject = $('.gallery__project');
    var $galleryProjectClose = $('.gallery__project-close');
    var $body = $('.site');

    $galleryItem.click(function(e){
        e.preventDefault();
        var $galleryProjectContent = $(('[data-id=' + $(this).data('id') + ']'));
        console.log($galleryProjectContent);
        
        $galleryProject.addClass('d-block slideInUp animated');
        $body.css('overflow', 'hidden');

        $galleryProjectContent.addClass('active');
    });

    $galleryProjectClose.click(function(e){
        e.preventDefault();
        
        $galleryProject.removeClass('d-block fadeIn animated');
        $body.css('overflow', 'auto');
        
        $galleryProjectContent = $galleryProject.find('.active');

        $galleryProjectContent.removeClass('active');
    });
});