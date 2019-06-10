/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 100) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

// remove the focused state after click,
// otherwise bootstrap will still highlight the link
$("a").mouseup(function(){
    $(this).blur();
})

$(function(){   //function for hide/show conditional question
    $("select").bind('change',function (event) {
        var number = parseInt($( "select option:selected" ).val());
        $("#ad_soyad1").stop().css({display: number>=1?'flex':'none'});
        $("#ad_soyad2").stop().css({display: number>=2?'flex':'none'});
        $("#ad_soyad3").stop().css({display: number>=3?'flex':'none'});
        $("#ad_soyad4").stop().css({display: number>=4?'flex':'none'});
        $("#ad_soyad1_input").attr('required',Boolean(number>=1));
        $("#ad_soyad2_input").attr('required',Boolean(number>=2));
        $("#ad_soyad3_input").attr('required',Boolean(number>=3));
        $("#ad_soyad4_input").attr('required',Boolean(number>=4));
    });
});

// $(function(){ 
//     $("#ad_soyad1").focus(function (event) {
//         $("#ad_soyad1_err").stop().css({display: 'none'});
//     });
// });

// $(function(){ 
//     $("#lcvSubmit").click(function (event) {
//         // event.preventDefault();
//         var number = parseInt($( "select option:selected" ).val());
//         var ad1 = $( "#ad_soyad1" ).val();
//         var ad2 = $( "#ad_soyad2" ).val();
//         var ad3 = $( "#ad_soyad3" ).val();
//         var ad4 = $( "#ad_soyad4" ).val();
//         if((number>=1&&ad1.match(/[\w]+/)) 
//             || (number>=2&&ad2.match(/[\w]+/)) 
//             || (number>=3&&ad3.match(/[\w]+/)) 
//             || (number>=4&&ad4.match(/[\w]+/))){
//             console.log("form submit prevented");
//             event.preventDefault();
//         }
//         $("#ad_soyad1_err").stop().css({display: number>=1&&ad1.match(/[\w]+/)?'none':'flex'});
//         $("#ad_soyad2_err").stop().css({display: number>=2&&ad2.match(/[\w]+/)?'none':'flex'});
//         $("#ad_soyad3_err").stop().css({display: number>=3&&ad3.match(/[\w]+/)?'none':'flex'});
//         $("#ad_soyad4_err").stop().css({display: number>=4&&ad4.match(/[\w]+/)?'none':'flex'});
//         console.log((number>=1&&ad1.match(/[\w]+/)), (number>=2&&ad2.match(/[\w]+/)), (number>=3&&ad3.match(/[\w]+/)), (number>=4&&ad4.match(/[\w]+/)))
//         if((number>=1&&ad1.match(/[\w]+/)) 
//             || (number>=2&&ad2.match(/[\w]+/)) 
//             || (number>=3&&ad3.match(/[\w]+/)) 
//             || (number>=4&&ad4.match(/[\w]+/))){
//             console.log("form submit prevented");
//             event.preventDefault();
//         }
//     });
// });

// Google Maps Scripts
// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);

function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 15,

        // The latitude and longitude to center the map (always required)
        center: new google.maps.LatLng(40.6700, -73.9400), // New York

        // Disables the default Google Maps UI components
        disableDefaultUI: true,
        scrollwheel: false,
        draggable: false,

        // How you would like to style the map. 
        // This is where you would paste any style found on Snazzy Maps.
        styles: [{
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 17
            }]
        }, {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 20
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 17
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 29
            }, {
                "weight": 0.2
            }]
        }, {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 18
            }]
        }, {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 16
            }]
        }, {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 21
            }]
        }, {
            "elementType": "labels.text.stroke",
            "stylers": [{
                "visibility": "on"
            }, {
                "color": "#000000"
            }, {
                "lightness": 16
            }]
        }, {
            "elementType": "labels.text.fill",
            "stylers": [{
                "saturation": 36
            }, {
                "color": "#000000"
            }, {
                "lightness": 40
            }]
        }, {
            "elementType": "labels.icon",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 19
            }]
        }, {
            "featureType": "administrative",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 20
            }]
        }, {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 17
            }, {
                "weight": 1.2
            }]
        }]
    };

    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');

    // Create the Google Map using out element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);

    // Custom Map Marker Icon - Customize the map-marker.png file to customize your icon
    var image = 'img/map-marker.png';
    var myLatLng = new google.maps.LatLng(40.6700, -73.9400);
    var beachMarker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        icon: image
    });
}
