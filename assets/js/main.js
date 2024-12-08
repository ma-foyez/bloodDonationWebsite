$(function () {
    // JS function for items section hover effect===============
    $(".item").hover(function () {
        $('#active-hover').css({ "box-shadow": "none", "background-color": "#F0FFF0" });
    }, function () {
        $('#active-hover').css({ "box-shadow": "0px 0px 20px lightgrey", "background-color": "#FFF" });
    });


    // navbar topfix=====================
    var navOffset = $('#nav').offset().top;
    $(window).on('scroll', function () {
        var winOffset = $(window).scrollTop();
        if (winOffset > navOffset) {
            $('#nav').addClass('navfix');
            $('#nav').slideDown(slow)
        } else {
            $('#nav').removeClass('navfix');
        }
    });// navbar fixed class close

    // smoth scrolling from navigation menu
    $('nav a').on('click', function (e) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash; //store value
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1000, function () {
                window.location.hash = hash;
            });
        }
    });//smoth scrolling close

    //scrolling to top by click bottom button==================
    $('.top-scroll').on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    });//bottom button close

    // //Pre loading================================
    $(window).on('load', function () {
        $('.pre-loader').delay(1000).fadeOut(1000);
    });//Pre loader close

    //password hide & show
    function Hide() {
        var x = document.getElementById("password");
        var y = document.getElementById("hidden");
        if (x.type === "password") {
            x.type = "text";
            y.innerHTML = "Hide";
        } else {
            x.type = "password";
            y.innerHTML = "Show";

        }
    }

})//html,body connect function close
