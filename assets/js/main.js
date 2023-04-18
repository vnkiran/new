/* Scripts */

(function($){ "use strict";
             
    $(window).on('load', function() {
        $('body').addClass('loaded');
    });
//  Search Help Page COntent Start

$(document).ready(function(){
    $('input#filtersearch').bind('keyup change', function () {
    if ($(this).val().trim().length !== 0) {
    
        $('#search-text .search-text-result').show().hide().each(function () {
            if ($(this).is(':icontains(' + $('input#filtersearch').val() + ')')){
                $(".ripple").addClass("d-flex").delay(1000).queue(function(next){
                $(this).removeClass("d-flex");
                next();
                }); 
                $(this).show(500);
              }
        });    
    }
    else {
        $('#search-text .search-text-result').show().hide().each(function () {
            $(this).show();
        });
    }
    });
    
    $.expr[':'].icontains = function (obj, index, meta, stack) {
    return (obj.textContent || obj.innerText || jQuery(obj).text() || '').toLowerCase().indexOf(meta[3].toLowerCase()) >= 0;
    };
    });

    $(document).ready(function(){
        $('input#filtersearch1').bind('keyup change', function () {
            if ($(this).val().trim().length !== 0) {
            
              $('#search-text .search-text-result1').show().hide().each(function () {
                  if ($(this).is(':icontains(' + $('input#filtersearch1').val() + ')')){
                    $(".ripple").addClass("d-flex").delay(1000).queue(function(next){
                        $(this).removeClass("d-flex");
                        next();
                        }); 
                        $(this).show(500);
                    }
              });    
            }
            else {
              $('#search-text .search-text-result1').show().hide().each(function () {
                  $(this).show();
              });
            }
            });
            
            $.expr[':'].icontains = function (obj, index, meta, stack) {
            return (obj.textContent || obj.innerText || jQuery(obj).text() || '').toLowerCase().indexOf(meta[3].toLowerCase()) >= 0;
            };
    });
    //  Search Help Page COntent Start
/*=========================================================================
	Sticky Header
=========================================================================*/
    function headerHeight(){
        var height = $("#header").height();
        $('.header-height').css('height', height+'px');
    }

	$(function() {
		var header = $("#header"),
			yOffset = 0,
			triggerPoint = 80;
        headerHeight();
        $(window).resize(headerHeight);
		$(window).on( 'scroll', function() {
			yOffset = $(window).scrollTop();

			if (yOffset >= triggerPoint) {
				header.addClass("navbar-fixed-top animated slideInDown");
                $('.slicknav_nav').css('display', 'none');
                
			} else {
				header.removeClass("navbar-fixed-top animated slideInDown");
			}

		});
	});

/*=========================================================================
    Mobile Menu
=========================================================================*/  
    $('.menu-wrap ul.nav').slicknav({
        prependTo: '.header-section .navbar',
        label: '',
        allowParentLinks: true,
        closeOnClick: true
    });
    function show_enquiry_form() {
        $('.ftco_enquiry_warp').show();
        $('.slicknav_nav').css('display', 'none');
    }
/*=========================================================================
    Button Style
=========================================================================*/               
    $('.default-btn, .anim-btn').on('mouseenter', function (e) {
        var parentOffset = $(this).offset(),
                relX = e.pageX - parentOffset.left,
                relY = e.pageY - parentOffset.top;
        $(this).find('span').css({top: relY, left: relX})
    }).on('mouseout', function (e) {
        var parentOffset = $(this).offset(),
                relX = e.pageX - parentOffset.left,
                relY = e.pageY - parentOffset.top;
        $(this).find('span').css({top: relY, left: relX})
    }); 

/*=========================================================================
    Screenshot Carousel
=========================================================================*/
    $('#screenshot-carousel').owlCarousel({
        loop: true,
        margin: 15,
        autoplay: true,
        smartSpeed: 500,
        nav: true,
        navText: ['<i class="fas fa-arrow-left"></i>', '<i class="fas fa-arrow-right"></i>'],
        dots: false,
        responsive : {
            0 : {
                items: 1
            },
            580 : {
                items: 2,
            },
            768 : {
                items: 2,
            },
            992 : {
                items: 3,
            }
        }
    });
    
/*=========================================================================
    Testimonial Carousel
=========================================================================*/
    $('#testimonial-carousel').owlCarousel({
        loop: true,
        margin: 15,
        autoplay: false,
        smartSpeed: 500,
        nav: true,
        navText: ['<i class="fas fa-arrow-left"></i>', '<i class="fas fa-arrow-right"></i>'],
        dots: false,
        responsive : {
            0 : {
                items: 1
            },
            580 : {
                items: 1,
            },
            768 : {
                items: 2,
            },
            992 : {
                items: 3,
            }
        }
    });

/*=========================================================================
    Testimonial Carousel 2
=========================================================================*/
    $('#testimonial-carousel-2').owlCarousel({
        loop: true,
        margin: 10,
        center: false,
        autoplay: true,
        smartSpeed: 500,
        nav: true,
        navText: ['<i class="fas fa-arrow-left"></i>', '<i class="fas fa-arrow-right"></i>'],
        dots: false,
        responsive : {
            0 : {
                items: 1
            },
            480 : {
                items: 1,
            },
            768 : {
                items: 1,
            },
            992 : {
                items: 1,
            }
        }
    });
             
/*=========================================================================
    Sponsor Carousel
=========================================================================*/
    $('#sponsor-carousel').owlCarousel({
        loop: true,
        margin: 15,
        center: false,
        autoplay: true,
        smartSpeed: 500,
        nav: false,
        navText: ['<i class="fas fa-arrow-left"></i>', '<i class="fas fa-arrow-right"></i>'],
        dots: false,
        responsive : {
            0 : {
                items: 2
            },
            480 : {
                items: 3,
            },
            768 : {
                items: 3,
            },
            992 : {
                items: 6,
            }
        }
    });
             
/*=========================================================================
	Odometer JS
=========================================================================*/
    $('.odometer').waypoint(
        function() {
            var odo = $(".odometer");
            odo.each(function() {
                var countNumber = $(this).attr("data-count");
                $(this).html(countNumber);
            });
        },
        {
            offset: "80%",
            triggerOnce: true
        }
    );
  
/*=========================================================================
    Faq Accordion
=========================================================================*/
    $('.collapse').on('shown.bs.collapse',function(){
        $(".collapse.show").parent().addClass('active-acc');
    });                              
    $('.collapse').on('hidden.bs.collapse',function(){
        $(".collapse").parent().removeClass('active-acc');
    });                     
    $('.acc-item h5 a').click(function(e){
        $(this).closest(".acc-item").siblings().removeClass('active-acc');
        $(this).closest(".acc-item").toggleClass('active-acc');  
        $(this).animate({scrollTop: $(this).offset().top},200)
}); 
// $('.active-acc h5 a').click(function(e){
//     $(this).closest(".acc-item").removeClass('active-acc');
//         event.stopPropagation();
//         $(this).toggleClass('mm-active').siblings().removeClass('mm-active');
//         $(this).siblings().children(".mm-collapse").removeClass('mm-show');
//         $(this).children(".mm-collapse").toggleClass('mm-show');
// });        
/*=========================================================================
	Initialize smoothscroll plugin
=========================================================================*/
	smoothScroll.init({
		offset: 60
	});
	 
/*=========================================================================
	Scroll To Top
=========================================================================*/ 
    $(window).on( 'scroll', function () {
        if ($(this).scrollTop() > 100) {
            $('#scroll-to-top').fadeIn();
        } else {
            $('#scroll-to-top').fadeOut();
        }
    });

/*=========================================================================
    VenoBox
=========================================================================*/ 
    $('.lightbox').venobox({
        numeratio  : true,
        infinigall : true,
        share      : ['facebook', 'twitter', 'pinterest'] 
    });

/*=========================================================================
	WOW Active
=========================================================================*/ 
   new WOW().init();

/*=========================================================================
	MAILCHIMP
=========================================================================*/ 

    if ($('.subscribe_form').length>0) {
        /*  MAILCHIMP  */
        $('.subscribe_form').ajaxChimp({
            language: 'es',
            callback: mailchimpCallback,
            url: "//alexatheme.us14.list-manage.com/subscribe/post?u=48e55a88ece7641124b31a029&amp;id=361ec5b369" 
        });
    }

    function mailchimpCallback(resp) {
        if (resp.result === 'success') {
            $('#subscribe-result').addClass('subs-result');
            $('.subscription-success').text(resp.msg).fadeIn();
            $('.subscription-error').fadeOut();

        } else if(resp.result === 'error') {
            $('#subscribe-result').addClass('subs-result');
            $('.subscription-error').text(resp.msg).fadeIn();
        }
    }
    // $.ajaxChimp.translations.es = {
    //     'submit': 'Submitting...',
    //     0: 'We have sent you a confirmation email',
    //     1: 'Please enter your email',
    //     2: 'An email address must contain a single @',
    //     3: 'The domain portion of the email address is invalid (the portion after the @: )',
    //     4: 'The username portion of the email address is invalid (the portion before the @: )',
    //     5: 'This email address looks fake or invalid. Please enter a real email address'
    // };
    
    // Get Current Year
    var currentYear = new Date().getFullYear();
    $('#currentYear').append(currentYear);

})(jQuery);