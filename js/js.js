// TOOGLE MENU

function openMenu() {
    document.getElementById('nav').classList.toggle('open_menu');
}


// FULL PROGRESS & HIGHLIGHT ACTIVE LIST

$(window).scroll(function (){
    var topOfWindow = $(window).scrollTop();
    $(' .progress-bar').each(function (){
        var barPos = $(this).offset().top;        
        if (barPos < topOfWindow+700) {
            $(this).addClass('full_bar');
        }
    });
    if (topOfWindow > $('#header').offset().top) {
        $('nav menu > li > a').removeClass('active');
        $('nav menu > li:first-of-type > a').addClass('active');
    };
    if (topOfWindow > $('#why').offset().top) {
        $('nav menu > li > a').removeClass('active');
        $('nav menu > li:nth-of-type(2) > a').addClass('active');
    };
    if (topOfWindow > $('#about').offset().top) {
        $('nav menu > li > a').removeClass('active');
        $('nav menu > li:nth-of-type(3) > a').addClass('active');
    }; 
    if (topOfWindow+300 > $('#contact').offset().top) {
        $('nav menu > li > a').removeClass('active');
        $('nav menu > li:last-of-type > a').addClass('active');
    } 
});


// MAP

var map;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 49.838132, lng: 24.020071},
        zoom: 18,
        styles: [
    {
        "featureType": "all",
        "elementType": "all",
        "stylers": [
            {
                "invert_lightness": true
            },
            {
                "saturation": 10
            },
            {
                "lightness": 30
            },
            {
                "gamma": 0.5
            },
            {
                "hue": "#435158"
            }
        ]
    }
]
    });

    var marker = new google.maps.Marker({
        position: {lat: 49.838132, lng: 24.020071},
        map: map,
        title: 'Card with custom style'
    });
}


// FORM
$('#form').submit(function() {
    $.ajax({
        type: 'POST',
        url: '/sendmail.php',
        data: $(this).serialize()
    }).done(function() {
        $('.thank').show();
        setTimeout(function() {
            $('.thank').fadeOut();
        }, 3000);
    });
    return false;
});
 
