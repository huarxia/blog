$(document).ready(function() {
    var  bodyWidth = $('body').width();
    $('a.blog-button').click(function() {
        currentWidth = $('.panel-cover').width();
        if (currentWidth < 960) {
            console.log(1);
            $('.panel-cover').css('max-width', '30%');
            $('.panel-cover').animate({
                'max-width': '100%',
                'width': '100%'
            }, 400, swing = 'swing', function() {});
            window.location.hash = "#";
        } else {
            $('.panel-cover').css('max-width', currentWidth);
            $('.panel-cover').animate({
                'max-width': '700px',
                'width': '30%'
            }, 400, swing = 'swing', function() {});
            window.location.hash = "#blog";
        }
        // If already in blog, return early without animate overlay panel again.
        if (location.hash && location.hash == "#blog") {
            $('.panel-cover').removeClass('panel-cover--collapsed');
            $('.main-post-list').removeClass('hidden');
        }else {
            $('.panel-cover').addClass('panel-cover--collapsed');
            $('.main-post-list').addClass('hidden');
        }
        return false;
    });
    $('a.blog-index').click(function () {
        if (bodyWidth >= 960) {
            $('.panel-cover').css('max-width', currentWidth);
            $('.panel-cover').css({
                'max-width': '700px',
                'width': '30%'
            });
            $('.main-post-list').removeClass('hidden');
        } 
    });
    if (window.location.hash && (window.location.hash == "#blog" || window.location.hash == "###")) {
        $('.panel-cover').addClass('panel-cover--collapsed');
        $('.main-post-list').removeClass('hidden');
    }

    if (window.location.pathname.substring(0, 5) == "/tag/") {
        $('.panel-cover').addClass('panel-cover--collapsed');
    }

    $('.btn-mobile-menu__icon').click(function() {
        if ($('.navigation-wrapper').css('display') == "block") {
            $('.navigation-wrapper').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                $('.navigation-wrapper').toggleClass('visible animated bounceOutUp');
            });
            $('.navigation-wrapper').toggleClass('animated bounceInDown animated bounceOutUp');

        } else {
            $('.navigation-wrapper').toggleClass('visible animated bounceInDown');
        }
        $('.btn-mobile-menu__icon').toggleClass('fa fa-list fa fa-angle-up animated fadeIn');
    });

    $('.navigation-wrapper .blog-button').click(function() {
        if ($('.navigation-wrapper').css('display') == "block") {
            $('.navigation-wrapper').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                $('.navigation-wrapper').toggleClass('visible animated bounceOutUp');
            });

            $('.navigation-wrapper').toggleClass('animated bounceInDown animated bounceOutUp');
        }

        $('.btn-mobile-menu__icon').toggleClass('fa fa-list fa fa-angle-up animated fadeIn');
    });
});
$(document.links).filter(function() {
    return this.hostname != window.location.hostname;
}).attr('target', '_blank');