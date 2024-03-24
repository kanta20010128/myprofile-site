$(function () {
    $('.carousel').slick({
        autoplay: true,
        dots: true,
        infinite: true,
        speed: 1500,
        arrows: false,
        fade: true,
        pauseOnHover: false,
    });

    $('a').on('mouseover',function () {
        $(this).animate({
            opacity: 0.6,
        }, 300);
    });

    $('a').on('mouseout',function () {
        $(this).animate({
            opacity: 1.0,
        }, 300);
    });

    $(window).on('scroll',function () {
        if($(this).scrollTop() > 100) {
            $('#page-top').fadeIn();
        }  else {
            $('#page-top').fadeOut();
        }
    });

    $('a[href^="#"]').on('click',function () {
        const speed = 500;
        const href = $(this).attr('href');
        let $target;
        if (href == '#') {
            $target = $('html');
        } else {
            $target = $(href);
        }
        const position = $target.offset().top;
        $('html, body').animate({
            'scrollTop': position
        }, speed, 'swing');
        return false;
    });

    $(window).on('scroll',function () {
        const scrollAmount = $(window).scrollTop();
        const windowHeight = $(window).height();
        $('section').each(function () {
            const position = $(this).offset().top;
            if (scrollAmount > position - windowHeight + 100) {
                $(this).addClass('fade-in');
            }
        });
    });

    $('.hobby img').on('click',function () {
        const imgSrc = $(this).attr('src');
        $('.big-img').attr('src', imgSrc);
        $('.modal').fadeIn();
        return false
    });

    $('.close-btn').on('click',function () {
        $('.modal').fadeOut();
        return false
    });
});