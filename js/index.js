var mySwiper = new Swiper('.swiper-container', {
        // Optional parameters
        // direction: 'vertical',
        loop: true,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }

    })



    var $el = $("#swiper-scalable");
    var elHeight = $el.outerHeight();
    var elWidth = $el.outerWidth();

    var $wrapper = $("#scalable-wrapper");


    $(window).on('resize', function(){
        doResize();
    });

    function doResize(event, ui) {

        var scale, origin;

        scale = Math.min(
            $wrapper.width() / elWidth,
            $wrapper.height() / elHeight
        );

        $el.css({
            transform: "translate(-50%, -50%) " + "scale(" + scale + ")"
        });

    }

    var starterData = {
        size: {
            width: $wrapper.width(),
            height: $wrapper.height()
        }
    }


    doResize(null, starterData);