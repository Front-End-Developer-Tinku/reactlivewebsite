(function() {
    "use strict";
    var winH = "",
        winW = "",
        hdrH = "",
        topHdr = "",
        ftrH = "",
        st = "";
    winH = $(window).height();



    // Change text value of headEnq-btn on mobile screen
    function headEnq() {
        if (winW <= 767) {
            // $('.headEnq-btn').text('Enquiry');

        } else {
            // $('.headEnq-btn').text('Enquiry For Lease');

        }
    }

    $(window).resize(function() {
        winH = $(window).height();
        winW = $(window).width();
        hdrH = $('header').innerHeight();
        ftrH = $('footer').innerHeight();
        topHdr = $('header').innerHeight()
        $('main').css({ 'margin-top': topHdr })
        console.log(hdrH)

        // Call headEnq() function 
        headEnq()
    });
    $(window).load(function() {
        $(window).trigger('resize');
    });



    $(window).scroll(function() {
        st = $(this).scrollTop();
        if (st > winH) {

        } else {

        }
    });


    $(document).ready(function() {

        journyOwl();
        journyOwl1();

         $('.CreNameSec').click(function () {
            // $('.DrpDownSec').removeClass('MinusAdd')  
            $(this).parents('.OppSecRpt').siblings().find('.CntSecDrpDown').slideUp('slow');
            $(this).parents('.OppSecRpt').siblings().find('.DrpDownSec').removeClass('MinusAdd');
            $(this).parents('.OppSecRpt').find('.CntSecDrpDown').slideToggle('slow');
            $(this).find('.DrpDownSec').toggleClass('MinusAdd');
        });

         $(".Lngmn").click(function () {
                    $(".LngCnt").slideToggle("slow");
         });



         $(window).scroll(function() {
            if(($(window).scrollTop()) > ($(window).height()) / 100) {
                    $('header').addClass('hdrDown');   
              }else {
                $('header').removeClass('hdrDown');
              }
            });
             

        $("body").click(function (e) {
            var catFilterCont = $(".Lngmn,.LngCnt");
            if (!catFilterCont.is(e.target) && catFilterCont.has(e.target).length === 0) {
                $(".LngCnt").slideUp("slow");
            }
        });


                 $('.SldrAwr').owlCarousel({
                     items: 1,
                     loop: false,
                     margin: 0,
                     dots: true,
                     nav: false,
                     autoplayTimeout: 3000,
                     autoplayHoverPause: true,
                     smartSpeed: 3000,
                     slideSpeed: 1000,
                     autoplay: false,
                     responsive: {
                         0: {
                             items: 1
                         },
                         600: {
                             items: 1
                         },
                         1000: {
                             items: 1
                         }
                     }
                 });

                 $('.SrcCtmNfn').owlCarousel({
                     items: 5,
                     loop: false,
                     margin: 10,
                     dots: true,
                     nav: false,
                     autoplayTimeout: 3000,
                     autoplayHoverPause: true,
                     smartSpeed: 3000,
                     slideSpeed: 1000,
                     autoplay: false,
                     responsive: {
                         0: {
                             items: 3
                         },
                         600: {
                             items: 4
                         },
                         1000: {
                             items: 5
                         }
                     }
                 });

                  $('.SmplePrdctMn').owlCarousel({
                     items: 1,
                     loop: false,
                     margin: 35,
                     dots: false,
                     nav: true,
                     autoplayTimeout: 3000,
                     autoplayHoverPause: true,
                     smartSpeed: 3000,
                     slideSpeed: 1000,
                     autoplay: false,
                     animateIn: 'slideInUp',
                     animateOut: 'slideOutDown',
                     navText: ["<div class='lftCr'></div>", "<div class='rgtCr'></div>"],
                     responsive: {
                         0: {
                             items: 1
                         },
                         600: {
                             items: 1
                         },
                         1000: {
                             items: 1
                         }
                     }
                 });

                $('.ReltdBlgMn').owlCarousel({
                     items: 2,
                     loop: false,
                     margin: 30,
                     dots: false,
                     nav: true,
                     autoplayTimeout: 3000,
                     autoplayHoverPause: true,
                     smartSpeed: 3000,
                     slideSpeed: 1000,
                     autoplay: false,
                     navText: ["<div class='lftCr'></div>", "<div class='rgtCr'></div>"],
                     responsive: {
                         0: {
                             items: 1
                         },
                         600: {
                             items: 1
                         },
                         1000: {
                             items: 2
                         }
                     }
                 });

                $('.CustbrOwlSmn').owlCarousel({
                     items: 1,
                     loop: false,
                     margin: 35,
                     dots: true,
                     nav: false,
                     autoplayTimeout: 3000,
                     autoplayHoverPause: true,
                     smartSpeed: 3000,
                     slideSpeed: 1000,
                     autoplay: false,
                     animateIn: 'slideInUp',
                     animateOut: 'zoomOut',
                     responsive: {
                         0: {
                             items: 1
                         },
                         600: {
                             items: 1
                         },
                         1000: {
                             items: 1
                         }
                     }
                });

                $('.SldrmnWlCln').owlCarousel({
                     items: 5,
                     loop: false,
                     margin: 35,
                     dots: true,
                     nav: false,
                     autoplayTimeout: 3000,
                     autoplayHoverPause: true,
                     smartSpeed: 3000,
                     slideSpeed: 1000,
                     autoplay: false,
                     responsive: {
                         0: {
                             items: 3 
                         },
                         600: {
                             items: 3 
                         },
                         1000: {
                             items: 5 
                         }
                     }
                });

                $('.GlbMrkBx span').click(function() {
                  $(this).parents('.GlbMrkBx').siblings().find('.MrkAdrBx').slideUp('slow')
                  $(this).parents('.GlbMrkBx').find('.MrkAdrBx').slideToggle('slow')
                });

                 (function(){
                    $('.formGrp').focusout(function () {
                        if ($(this).val() != "") {
                            $(this).siblings('.frm-label').addClass('hasVal')
                        } else {
                            $(this).siblings('.frm-label').removeClass('hasVal')
                        }
                 });        
               })();

               $('.Arwmnvl').click(function(){
                   $('.menu').addClass('is-active');
                   $('.BckClremn').addClass('ActBckClr');
               });

               $('.ClseHdr').click(function () {
                  $('.menu').removeClass('is-active');
                  $('.BckClremn').removeClass('ActBckClr');
               });

                $('.BckClremn').click(function () {
                  $('.menu').removeClass('is-active');
                  $(this).removeClass('ActBckClr');
               });

             
       $(".viewmre").on("click", function () {
            var txt = $(".Morecnt").is(':visible') ? 'Read More ' : 'Read Less';
            $(this).children('span').text(txt);
            $('.Morecnt').slideToggle('slow');
       });

         $('.CrmSlnvl').click(function (){
           $('.onnPopup').addClass('add_onnPopup');
            var TmSl =  $(this).attr('data-tm');
           $('.Inn_0nnPopup').each(function (){
               if ($(this).attr('data-popr') == TmSl) {
                    $(this).slideDown('slow');  
               }
           });
        });

        $('.PopBxCls').click(function (){
           $('.onnPopup').removeClass('add_onnPopup');
           $('.Inn_0nnPopup').slideUp('slow');
        });

        $("body").click(function (e) {
            var catFilterCont = $(".Inn_0nnPopup,.CrmSlnvl");
            if (!catFilterCont.is(e.target) && catFilterCont.has(e.target).length === 0) {
                $('.onnPopup').removeClass('add_onnPopup');
                $('.Inn_0nnPopup').slideUp('slow');
            }
        });

        $('.TabningMnPatnt ul li').click(function (){
             
             $('.TabningMnPatnt ul li').removeClass('ActMnvl');
             $(this).addClass('ActMnvl'); 
             var mnvrpr = $(this).attr('data-tbinpro');
             $('.DatrTabrCnt').slideUp('slow');
             $('.DatrTabrCnt').each(function () {
                  
                  if ($(this).attr('data-tbnt') == mnvrpr ) {
                     
                      $(this).slideDown('slow');

                  }

             });


        });



    function journyOwl1() {
        var yearSlide = $('#cnt_bx_sld2');
        var dataSlide = $('.HrtgDataSlide1');
        var currentItem = 0,
            activeItem = 0;
        yearSlide.on('initialized.owl.carousel', function(event) {
            currentItem = event.item.index;
            yearSlide.find(".owl-item").eq(currentItem).addClass("current");
            yearSlide.find(".owl-item").eq(currentItem).next().addClass("currentMn");
            dataSliderFn();
        })
        dataSlide.on('initialized.owl.carousel', function(event) {
            activeItem = event.item.index;
            dataSlide.find(".owl-item").eq(currentItem).addClass("current");
            dataSlide.find(".owl-item").eq(currentItem).next().addClass("currentMn");
            yearSliderFn()
        })
        yearSlide.owlCarousel({
            loop: false,
            margin: 0,
            nav: false,
            dots: false,
            touchDrag: true,
            mouseDrag: true,
            smartSpeed: 2000,
            autoplaySpeed: 2000,
            autoplayTimeout: 10000,
            //autoplay: true,
            animateOut: 'fadeOut',
            items: 3,
            responsive: {
                0: {
                    items: 3
                },
                767: {
                    items: 3
                },
                860: {
                    items: 3
                },
                991: {
                    items: 3
                }
            }
        });
        dataSlide.owlCarousel({
            loop: false,
            margin: 0,
            nav: true,
            navText: ["<div class='lftCr'></div>", "<div class='rgtCr'></div>"],
            dots: false,
            touchDrag: false,
            mouseDrag: false,
            smartSpeed: 2000,
            autoplaySpeed: 2000,
            autoplayTimeout: 10000,
            autoHeight: true,
            //  animateOut: 'slideOutLeft',
            items: 1 
        });

        yearSlide.on('changed.owl.carousel', function(event) {
            currentItem = event.item.index;
            yearSlide.find(".owl-item").removeClass("current");
            yearSlide.find(".owl-item").removeClass("currentMn");
            yearSlide.find(".owl-item").eq(currentItem).addClass("current");
            yearSlide.find(".owl-item").eq(currentItem).next().addClass("currentMn");
            dataSliderFn()
        })


        yearSlide.find(".owl-item").click(function() {
            currentItem = $(this).index();
            $(".owl-item").removeClass("current");
            $(".owl-item").removeClass("currentMn");
            $(this).addClass("current");
            $(this).next().addClass("currentMn");
            var n = $(this).index()
            yearSlide.trigger('to.owl.carousel', [n, 500, true]);
            dataSliderFn()
        })

        function dataSliderFn() {
            dataSlide.trigger('to.owl.carousel', [currentItem, 500, true]);
            dataSlide.find(".owl-item").removeClass("current");
            dataSlide.find(".owl-item").removeClass("currentMn");
            dataSlide.find(".owl-item").eq(currentItem).addClass("current");
            dataSlide.find(".owl-item").eq(currentItem).next().addClass("currentMn");
        }
        dataSlide.on('changed.owl.carousel', function(event) {
            activeItem = event.item.index;
            dataSlide.find(".owl-item").removeClass("current");
            dataSlide.find(".owl-item").removeClass("currentMn");
            dataSlide.find(".owl-item").eq(activeItem).addClass("current");
            dataSlide.find(".owl-item").eq(activeItem).next().addClass("currentMn");
            yearSliderFn();
        })

        function yearSliderFn() {
            yearSlide.trigger('to.owl.carousel', [activeItem, 500, true]);
            yearSlide.find(".owl-item").removeClass("current");
            yearSlide.find(".owl-item").removeClass("currentMn");
            yearSlide.find(".owl-item").eq(activeItem).addClass("current");
            yearSlide.find(".owl-item").eq(activeItem).next().addClass("currentMn");
        }

    }


    function journyOwl() {
        var yearSlide = $('#cnt_bx_sld1');
        var dataSlide = $('.HrtgDataSlide');
        var currentItem = 0,
            activeItem = 0;
        yearSlide.on('initialized.owl.carousel', function(event) {
            currentItem = event.item.index;
            yearSlide.find(".owl-item").eq(currentItem).addClass("current");
            yearSlide.find(".owl-item").eq(currentItem).next().addClass("currentMn");
            dataSliderFn();
        })
        dataSlide.on('initialized.owl.carousel', function(event) {
            activeItem = event.item.index;
            dataSlide.find(".owl-item").eq(currentItem).addClass("current");
            dataSlide.find(".owl-item").eq(currentItem).next().addClass("currentMn");
            yearSliderFn()
        })
        yearSlide.owlCarousel({
            loop: false,
            margin: 0,
            nav: false,
            dots: false,
            touchDrag: true,
            mouseDrag: true,
            smartSpeed: 2000,
            autoplaySpeed: 2000,
            autoplayTimeout: 10000,
            //autoplay: true,
            animateOut: 'fadeOut',
            items: 3,
            responsive: {
                0: {
                    items: 3
                },
                767: {
                    items: 3
                },
                860: {
                    items: 3
                },
                991: {
                    items: 3
                }
            }
        });
        dataSlide.owlCarousel({
            loop: false,
            margin: 0,
            nav: true,
            navText: ["<div class='lftCr'></div>", "<div class='rgtCr'></div>"],
            dots: false,
            touchDrag: false,
            mouseDrag: false,
            smartSpeed: 2000,
            autoplaySpeed: 2000,
            autoplayTimeout: 10000,
            autoHeight: true,
            //  animateOut: 'slideOutLeft',
            items: 1 
        });

        yearSlide.on('changed.owl.carousel', function(event) {
            currentItem = event.item.index;
            yearSlide.find(".owl-item").removeClass("current");
            yearSlide.find(".owl-item").removeClass("currentMn");
            yearSlide.find(".owl-item").eq(currentItem).addClass("current");
            yearSlide.find(".owl-item").eq(currentItem).next().addClass("currentMn");
            dataSliderFn()
        })


        yearSlide.find(".owl-item").click(function() {
            currentItem = $(this).index();
            $(".owl-item").removeClass("current");
            $(".owl-item").removeClass("currentMn");
            $(this).addClass("current");
            $(this).next().addClass("currentMn");
            var n = $(this).index()
            yearSlide.trigger('to.owl.carousel', [n, 500, true]);
            dataSliderFn()
        })

        function dataSliderFn() {
            dataSlide.trigger('to.owl.carousel', [currentItem, 500, true]);
            dataSlide.find(".owl-item").removeClass("current");
            dataSlide.find(".owl-item").removeClass("currentMn");
            dataSlide.find(".owl-item").eq(currentItem).addClass("current");
            dataSlide.find(".owl-item").eq(currentItem).next().addClass("currentMn");
        }
        dataSlide.on('changed.owl.carousel', function(event) {
            activeItem = event.item.index;
            dataSlide.find(".owl-item").removeClass("current");
            dataSlide.find(".owl-item").removeClass("currentMn");
            dataSlide.find(".owl-item").eq(activeItem).addClass("current");
            dataSlide.find(".owl-item").eq(activeItem).next().addClass("currentMn");
            yearSliderFn();
        })

        function yearSliderFn() {
            yearSlide.trigger('to.owl.carousel', [activeItem, 500, true]);
            yearSlide.find(".owl-item").removeClass("current");
            yearSlide.find(".owl-item").removeClass("currentMn");
            yearSlide.find(".owl-item").eq(activeItem).addClass("current");
            yearSlide.find(".owl-item").eq(activeItem).next().addClass("currentMn");
        }

    }



    });


})();