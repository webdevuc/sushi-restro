jQuery(document).ready(function($) {
    "use strict";

    $('body').addClass('pace-done');

    if ($('body').hasClass('rightclick-block')) {
        $(window).on("contextmenu", function(b) {
            if (3 === b.which) {
                showCopyright();
                return false;
            }
        });
    }

    if ($('body').hasClass('left-logo')) {
        var logo_container_width = $('.header-logo-section').width();
        $('.left-logo .homemenu').css('left', logo_container_width + 25);
    }

    if ($.fn.accordion) {
        if ($('.accordions-shortcode').length) {
            $('.accordions-shortcode').each(function() {
                var accordion_id = $(this).data('id');
                $('#'+accordion_id).accordion({"heightStyle":"content","autoHeight":false,"disabled":false,"active":true,"animated":"slide","clearStyle":false,"collapsible":true,"event":"click","fillSpace":false} );
            });
        }
    }

    if ($.fn.tabs) {
        if ($('.tabs-shortcode').length) {
            $('.tabs-shortcode-horizontal').each(function() {
                var tabs_id = $(this).data('id');
                $('#'+tabs_id).tabs({ show: true });
            });
            $('.tabs-shortcode-vertical').each(function() {
                var tabs_id = $(this).data('id');
                $('#'+tabs_id).tabs().addClass( "ui-tabs-vertical ui-helper-clearfix" );
                $('#'+tabs_id).removeClass( "ui-corner-top" ).addClass( "ui-corner-left" );
            });
        }
    }

    Pace.on('done', function() {
        $('.pace').fadeOut( "slow", function() {
            $('.pace').remove();
        });
        $('.woocommerce span.onsale,.woocommerce-page span.onsale').delay(500).fadeIn( "slow" );
        $('.preloader-cover-screen').remove();
    });

    $(".menu-button-toggle").on('click', function() {
        $("body").addClass('reservation-screen-on');
    });
    $(".reservation-modal-exit").click(function(b) {
        $("body").removeClass('reservation-screen-on');
    });

    $(".social-sharing-toggle,.mobile-sharing-toggle").on('click', function() {
        $("body").addClass('social-sharing-on');
    });
    $("#social-modal").click(function(b) {
        $("body").removeClass('social-sharing-on');
    });

    $(window).scroll(function(e){
        text_parallax_fade();
    });

    function text_parallax_fade(){
      var scrolled = $(window).scrollTop();
        $('.text-parallax').css('top',-(scrolled*-0.03)+'rem');
        $('.text-parallax').css('opacity',1-(scrolled*.00075));
    }

    function fullscreenYoutube() {
        if ($.fn.tubular) {
            if ($('.youtube-fullscreen-player').length) {
                var youtubeID = $('#backgroundvideo').data('id');
                console.log(youtubeID);
                var options = { videoId: youtubeID, wrapperZIndex: -1, start: 0, mute: false, repeat: true, ratio: 16/9 };
                $('#backgroundvideo').tubular(options);
            }
        }
    }
    fullscreenYoutube();

    if ( $('#backgroundvideo' ).hasClass( "html5-background-video" ) ) {
        videojs.options.flash.swf = cinnamon_restaurant_vars.mtheme_uri + '/js/videojs/video-js.swf';
        videojs("videocontainer", {}, function(){
          // Player (this) is initialized and ready.
        });
    }

    function swiperSlides() {
        if ($.fn.swiper) {
            if ($('.shortcode-swiper-container').length) {
                var swiperID = '#' + $('.shortcode-swiper-container').data('id');
                console.log(swiperID);
                var swiper = new Swiper(swiperID, {
                    pagination: '.swiper-pagination',
                    paginationClickable: true,
                    loop: false,
                    autoplay: 3000,
                    nextButton: '.swiper-button-next',
                    prevButton: '.swiper-button-prev',
                    slidesPerView: 5,
                    spaceBetween: 0,
                    breakpoints: {
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 0
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 0
                        },
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 0
                        },
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 0
                        }
                    }
                });
            }
        }
    }
    swiperSlides();

    function jPlayerSeek() {
        if ($.fn.jPlayer) {
            $('.single-jplay-video-postformat').each(function() {
                var jplay_video_m4v = $(this).data('m4v');
                var jplay_video_ogv = $(this).data('ogv');
                var jplay_video_poster = $(this).data('poster');
                var jplay_video_selector = $(this).data('selector');
                var jplay_video_swfpath = $(this).data('swfpath');
                var jplay_video_autoplay = $(this).data('autoplay');
                var jplay_video_id = $(this).data('id');
                var jplay_video_videofiles = $(this).data('videofiles');
                $("#jquery_jplayer_"+jplay_video_id).jPlayer({
                    ready: function () {
                        $(this).jPlayer("setMedia", {
                            m4v: jplay_video_m4v,
                            ogv: jplay_video_ogv,
                            poster: jplay_video_poster
                        }).jPlayer("stop");
                    },
                    swfPath: jplay_video_swfpath,
                    supplied: jplay_video_videofiles,
                    size: {
                        width: "100%",
                        height: "auto",
                        cssClass: "jp-video-360p"
                    },
                    cssSelectorAncestor: "#jp_container_"+jplay_video_id
                })
                .bind(jQuery.jPlayer.event.play, function() {
                        $(this).jPlayer("pauseOthers");
                });
            });
            $('.single-jplay-audio-postformat').each(function() {
                var jplay_audio_mp3 = $(this).data('mp3');
                var jplay_audio_m4a = $(this).data('m4a');
                var jplay_audio_oga = $(this).data('ogv');
                var jplay_audio_selector = $(this).data('selector');
                var jplay_audio_swfpath = $(this).data('swfpath');
                var jplay_audio_autoplay = $(this).data('autoplay');
                var jplay_audio_id = $(this).data('id');
                var jplay_audio_audiofiles = $(this).data('audiofiles');
                $("#jquery_jplayer_"+jplay_audio_id).jPlayer({
                    ready: function () {
                        $(this).jPlayer("setMedia", {
                            mp3: jplay_audio_mp3,
                            m4a: jplay_audio_m4a,
                            oga: jplay_audio_oga,
                            end: ""
                        }).jPlayer("stop");
                    },
                    play: function() {
                        $(this).jPlayer("pauseOthers");
                    },
                    swfPath: jplay_audio_swfpath,
                    supplied: jplay_audio_audiofiles,
                    cssSelectorAncestor: "#jp_interface_"+jplay_audio_id
                });
            });
            if ($('.fullscreenslideshow-audio-player').length) {
                var jplay_audio_mp3 = $('.fullscreenslideshow-audio-player').data('mp3');
                var jplay_audio_m4a = $('.fullscreenslideshow-audio-player').data('m4a');
                var jplay_audio_oga = $('.fullscreenslideshow-audio-player').data('ogv');
                var jplay_audio_selector = $('.fullscreenslideshow-audio-player').data('selector');
                var jplay_audio_swfpath = $('.fullscreenslideshow-audio-player').data('swfpath');
                var jplay_audio_autoplay = $('.fullscreenslideshow-audio-player').data('autoplay');
                var jplay_audio_id = $('.fullscreenslideshow-audio-player').data('id');
                var jplay_audio_audiofiles = $('.fullscreenslideshow-audio-player').data('audiofiles');
                var jplay_audio_volume = $('.fullscreenslideshow-audio-player').data('volume');
                var jplay_audio_loop = $('.fullscreenslideshow-audio-player').data('loop');
                $("#jquery_jplayer_"+jplay_audio_id).jPlayer({
                    ready: function () {
                        $(this).jPlayer("setMedia", {
                            mp3: jplay_audio_mp3,
                            m4a: jplay_audio_m4a,
                            oga: jplay_audio_oga,
                            end: ""
                        }).jPlayer("play").jPlayer("volume", jplay_audio_volume);
                    },
                    play: function() {
                        $(this).jPlayer("pauseOthers");
                    },
                    ended: function() {
                        $(this).jPlayer("play");
                    },
                    swfPath: jplay_audio_swfpath,
                    supplied: jplay_audio_audiofiles,
                    cssSelectorAncestor: "#jp_interface_"+jplay_audio_id
                });
            }
        }
    }
    jPlayerSeek();

    function parallaxInit() {
        if ($.fn.parallax) {
            $('.column-parallax').each(function() {
                var speed = 0.3;
                $(this).parallax("50%", speed)
            });
            $('.modular-column-parallax').each(function() {
                var speed = 0.3;
                $(this).parallax("50%", speed)
            });
            $('.is-a-parallax-image').each(function() {
                var speed = 0.3;
                $(this).parallax("50%", speed)
            });
        }
    }
    parallaxInit();

    function showCopyright() {
        $("#dimmer").fadeIn();
        $("#dimmer").click(function(b) {
            $(this).fadeOut();
        });
    }

    $('.slideshow_title,.static_slideshow_title')
        .stop()
        .delay( 10 )
        .animate({ opacity : 1 }, 450, '' );

    $('.slideshow_caption,.static_slideshow_caption')
        .stop()
        .delay( 500 )
        .animate({ opacity : 1 }, 450, '' );

    $('.slideshow_content_links,.static_slideshow_content_link')
        .stop()
        .delay( 700 )
        .animate({ opacity : 1 }, 450, '' );

    $(".modal-trigger-button").on('click', function() {
        var modal_display = $(this).data('modalid');
        displayModal(modal_display);
    });

    function displayModal(modal_id) {
        var modal_id_display = "#" + modal_id;
        $(modal_id_display).fadeIn("fast", function() {
            // Animation complete
            $(modal_id_display).find('.md-modal').addClass('md-show');
        });
        $('body').addClass('modal-active');
        $('.modal-close-button').click(function(b) {
            $(modal_id_display).fadeOut();
            $('body').removeClass('modal-active');
            $(modal_id_display).find('.md-modal').removeClass('md-show');
        });
    }

    var deviceAgent = navigator.userAgent.toLowerCase();
    var isIOS = deviceAgent.match(/(iphone|ipod|ipad)/);
    var ua = navigator.userAgent.toLowerCase();
    var isAndroid = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");
    var curr_menu_item;
    var percent;

    function mobilecheck() {
        var check = false;
        (function(a) {
            if (/(android|ipad|playbook|silk|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true
        })(navigator.userAgent || navigator.vendor || window.opera);
        return check;
    }

    function centerLogo() {
        var countMenuParents = $(".homemenu ul.sf-menu > li").length;
        if (countMenuParents != 0) {
            if (countMenuParents>1) {
                var centerChild = Math.floor(countMenuParents / 2);
            } else {
                centerChild = 1;
            }
            var center_logo = $('body.split-menu');
            if ( center_logo.length ) {
                $( ".header-logo-section" ).detach().insertAfter('.homemenu ul.sf-menu > li:nth-child('+centerChild+')');
                $( ".header-logo-section" ).wrap( '<li id="header-logo"></li>' );
            }
        }
    }
    centerLogo();

    if (isIOS || isAndroid) {
        var now = new Date();
        var day = ("0" + now.getDate()).slice(-2);
        var month = ("0" + (now.getMonth() + 1)).slice(-2);
        var today = now.getFullYear()+"-"+(month)+"-"+(day) ;
        $('.datepicker').attr('type', 'date').val(today);
        $('.contact-datepicker').attr('type', 'date').val(today);
    } else {
        if ($.fn.flatpickr) {
            $('.datepicker').flatpickr({
                dateFormat: "m/d/Y",
            });
            $('.contact-datepicker').flatpickr({
                dateFormat: "Y-m-d",
            });
        }
    }

    if ($.fn.chosen) {
        $(".chosen-select").chosen();
    }

    $(".vertical-menu").niceScroll({
        cursorwidth: 4,
        cursorborder: 0,
        cursorcolor: "#777777",
        touchbehavior: false,
        autohidemode: true
    });

    if ($('#toggle-menu').length) {
 
        $("#toggle-menu").on('click', function() {
            $('#toggle-menu').toggleClass('toggle-menu-open');
            $('body').toggleClass('minimal-menu-fadein sticky-menu-off');
        });

    }

    function OnePageMenuScroll() {
        // One page menu scrolls
        var thebody = $('html, body');
        var one_page_adjust = 0;
        if ( $('body').hasClass('menu-is-vertical') ) {
            var one_page_adjust = -1;
        }
        if ( $('body').hasClass('admin-bar') ) {
            var one_page_adjust = 32;
        }
        if ($(".responsive-menu-wrap:visible").length) {
            var one_page_adjust = 53;
        }
        $('.menu-item a[href*=\\#],.rev_slider_wrapper a[href*=\\#]').click(function(){
            var onepage_url = $(this).attr('href');
            var onepage_hash = '#' + onepage_url.substring(onepage_url.indexOf("#")+1);

            thebody.animate({
                scrollTop: $( onepage_hash ).offset().top - one_page_adjust
            },{
                duration: 1700,
                easing: "easeInOutExpo"
            });
            if ($('body').hasClass('menu-is-onscreen')) {
                MobileMenuAction('resized');
                SimpleMenuAction('resized');
            }
            if ($('body').hasClass('sidebar-is-onscreen')) {
                SidebarMenuAction('resized');
            }
            return false;
        });
    }
    OnePageMenuScroll();

    function MobileMenuAction(action) {

        if (action == "resized") {
            $('#mobile-toggle-menu').removeClass('mobile-toggle-menu-open');
            $('body').removeClass('body-dashboard-push-left');
            $(".responsive-mobile-menu").removeClass('menu-push-onscreen');
            $("body").removeClass('menu-is-onscreen');
        } else {
            $('#mobile-toggle-menu').toggleClass('mobile-toggle-menu-open');
            $('body').toggleClass('body-dashboard-push-left');
        }

        if ( action == "open") {
            $(".responsive-mobile-menu").fadeOut("normal", function() {
                $(".responsive-menu-overlay").fadeOut();
                $(".responsive-mobile-menu").toggleClass('menu-push-onscreen');
                $("body").toggleClass('menu-is-onscreen');
            });
        }
        
        if ( action == "close") {
            $(".responsive-mobile-menu").fadeIn("normal", function() {
                $(".responsive-menu-overlay").fadeIn();
                $(".responsive-mobile-menu").toggleClass('menu-push-onscreen');
                $("body").toggleClass('menu-is-onscreen');
            });
        }
    }

    function SimpleMenuAction(action) {

        if (action == "resized") {
            $('#minimal-toggle-menu').removeClass('mobile-toggle-menu-open');
            $('body').removeClass('body-dashboard-push-left');
            $(".simple-menu").removeClass('menu-push-onscreen');
            $("body").removeClass('menu-is-onscreen');
        } else {
            $('#minimal-toggle-menu').toggleClass('mobile-toggle-menu-open');
            $('body').toggleClass('body-dashboard-push-left');
        }

        if ( action == "open") {
            $(".simple-menu").fadeOut("normal", function() {
                $(".minimal-menu-overlay").fadeOut();
                $(".simple-menu").toggleClass('menu-push-onscreen');
                $("body").toggleClass('menu-is-onscreen');
            });
        }
        
        if ( action == "close") {
            $(".simple-menu").fadeIn("normal", function() {
                $(".minimal-menu-overlay").fadeIn();
                $(".simple-menu").toggleClass('menu-push-onscreen');
                $("body").toggleClass('menu-is-onscreen');
            });
        }
    }

    function SidebarMenuAction(action) {

        if (action == "resized") {
            $('#sidebarinfo-toggle-menu').removeClass('sidebar-toggle-menu-open');
            $('body').removeClass('body-dashboard-push-left');
            $(".sidebarinfo-menu").removeClass('sidebar-push-onscreen');
            $("body").removeClass('sidebar-is-onscreen');
        } else {
            $('#sidebarinfo-toggle-menu').toggleClass('sidebar-toggle-menu-open');
            $('body').toggleClass('body-dashboard-push-left');
        }

        if ( action == "open") {
            $(".sidebarinfo-menu").fadeOut("normal", function() {
                $(".sidebar-menu-overlay").fadeOut();
                $(".sidebarinfo-menu").toggleClass('sidebar-push-onscreen');
                $("body").toggleClass('sidebar-is-onscreen');
            });
        }
        
        if ( action == "close") {
            $(".sidebarinfo-menu").fadeIn("normal", function() {
                $(".sidebar-menu-overlay").fadeIn();
                $(".sidebarinfo-menu").toggleClass('sidebar-push-onscreen');
                $("body").toggleClass('sidebar-is-onscreen');
            });
        }
    }

    if ($('#mobile-toggle-menu').length) {
        $("#mobile-toggle-menu").on('click', function() {
            if ($('body').hasClass('menu-push-onscreen')) {
                MobileMenuAction('open');
            } else {
                MobileMenuAction('close');
            }
        });
        $(".responsive-menu-overlay").on('click', function() {
            MobileMenuAction('close');
        });

    }
    if ($('#minimal-toggle-menu').length) {
        $("#minimal-toggle-menu").on('click', function() {
            if ($('body').hasClass('menu-push-onscreen')) {
                SimpleMenuAction('open');
            } else {
                SimpleMenuAction('close');
            }
        });
        $(".minimal-menu-overlay").on('click', function() {
            SimpleMenuAction('close');
        });
    }
    if ($('#sidebarinfo-toggle-menu').length) {
        $("#sidebarinfo-toggle-menu").on('click', function() {
            if ($('body').hasClass('menu-push-onscreen')) {
                SidebarMenuAction('open');
            } else {
                SidebarMenuAction('close');
            }
        });
        $(".sidebar-menu-overlay").on('click', function() {
            SidebarMenuAction('close');
        });
    }

    $(window).resize(function() {
        if ($('body').hasClass('menu-is-onscreen')) {
            MobileMenuAction('resized');
            SimpleMenuAction('resized');
        }
        if ($('body').hasClass('sidebar-is-onscreen')) {
            SidebarMenuAction('resized');
        }
    });

    function fotoramaResizer() {
        if ($.fn.fotorama) {

            var fotorama_window_width = $(window).width();

            if ($('body').hasClass('menu-is-vertical')) {
                if (fotorama_window_width < 1025) {
                    $('#fotorama-container-wrap').addClass('fotorama-fullwidth');
                } else {
                    $('#fotorama-container-wrap').removeClass('fotorama-fullwidth');
                }
            }

            $('.fotorama').data('fotorama').destroy();

            var fotorama_width = fotorama_window_width;
            var fotorama_header_height = 0;
            fotorama_header_height = $('.outer-wrap').outerHeight();

            if ($('body').hasClass('top-header-present')) {
                fotorama_header_height = fotorama_header_height + 35;
            }
            if ($('body').hasClass('admin-bar')) {
                fotorama_header_height = fotorama_header_height + 32;
            }
            if ($('body').hasClass('compact-menu')) {
                fotorama_header_height = $('.outer-wrap').outerHeight();
            }
            var fotorama_footer_height = $('.fullscreen-footer-wrap').outerHeight();
            var fotorama_outer = fotorama_header_height + fotorama_footer_height;
            var fotorama_height = $(window).height() - fotorama_outer;

            if ($('body').hasClass('fotorama-style-contain')) {
                if ($('body').hasClass('boxed-site-layout')) {
                    fotorama_width = fotorama_window_width - 110;
                    $('#fotorama-container-wrap').css('left', '55px');
                }
                if (fotorama_window_width < 1025) {
                    fotorama_header_height = $('.mobile-menu-toggle').outerHeight();
                    fotorama_outer = fotorama_header_height + fotorama_footer_height;

                    fotorama_height = $(window).height() - fotorama_outer;
                    $('#fotorama-container-wrap').css('left', '0');
                    fotorama_width = '100%';
                }
            } else {
                fotorama_height = '100%';
                fotorama_header_height = 0;
                fotorama_width = '100%';
            }

            if ($('body').hasClass('fullscreen-mode-on')) {
                fotorama_height = '100%';
                fotorama_header_height = 0;
                fotorama_width = '100%';
                $('#fotorama-container-wrap').css('left', '0');
            }
            $('#fotorama-container-wrap').css('top',fotorama_header_height);
            $('.fotorama').fotorama({
                height: fotorama_height,
                width: fotorama_width
            });
        }
    }

    $(window).resize(function() {
        fotoramaResizer();
    });
        if ($.fn.fotorama) {

            var fotorama_window_width = $(window).width();

            if ($('body').hasClass('menu-is-vertical')) {
                if (fotorama_window_width < 1025) {
                    $('#fotorama-container-wrap').addClass('fotorama-fullwidth');
                } else {
                    $('#fotorama-container-wrap').removeClass('fotorama-fullwidth');
                }
            }

            var fotorama_width = fotorama_window_width;
            var fotorama_header_height = 0;
            fotorama_header_height = $('.outer-wrap').outerHeight();

            if ($('body').hasClass('top-header-present')) {
                fotorama_header_height = fotorama_header_height + 35;
            }
            if ($('body').hasClass('admin-bar')) {
                fotorama_header_height = fotorama_header_height + 32;
            }
            if ($('body').hasClass('compact-menu')) {
                fotorama_header_height = $('.outer-wrap').outerHeight();
            }
            var fotorama_footer_height = $('.fullscreen-footer-wrap').outerHeight();
            var fotorama_outer = fotorama_header_height + fotorama_footer_height;
            var fotorama_height = $(window).height() - fotorama_outer;

            if ($('body').hasClass('fotorama-style-contain')) {
                if ($('body').hasClass('boxed-site-layout')) {
                    fotorama_width = fotorama_window_width - 110;
                    $('#fotorama-container-wrap').css('left', '55px');
                }
                if (fotorama_window_width < 1025) {
                    fotorama_header_height = $('.mobile-menu-toggle').outerHeight();
                    fotorama_outer = fotorama_header_height + fotorama_footer_height;

                    fotorama_height = $(window).height() - fotorama_outer;
                    $('#fotorama-container-wrap').css('left', '0');
                    fotorama_width = '100%';
                }
            } else {
                fotorama_height = '100%';
                fotorama_header_height = 0;
                fotorama_width = '100%';
            }

            if ($('body').hasClass('fullscreen-mode-on')) {
                fotorama_height = '100%';
                fotorama_header_height = 0;
                fotorama_width = '100%';
                $('#fotorama-container-wrap').css('left', '0');
            }
            $('#fotorama-container-wrap').css('top',fotorama_header_height);
            $('.fotorama').fotorama({
                height: fotorama_height,
                width: fotorama_width
            });
        }

    // Fullscreen Toggle
    var events_toggle_element = $('.mtheme-events-carousel');
    var fullscreen_toggle_elements = $(".container-outer,#sidebarinfo-toggle-menu,.single-mtheme_photostory .portfolio-nav-wrap,.vertical-left-bar,.horizontal-bottom-bar,.vertical-right-bar,#slidecaption,#static_slidecaption,.tp-bullets,#copyright,.edit-entry,.stickymenu-zone,.social-toggle-wrap,.fullscreen-footer-wrap,.toggle-menu,.page-is-not-fullscreen .container-wrapper");
    var nav_switch_elements = $('.prevnext-nav,#controls-wrapper,.mouse-pointer-wrap,#slidecounter');
    var reverse_switch_elements = $('.page-media-background #slidecaption,.page-media-background #static_slidecaption,.page-media-background .prevnext-nav,.page-media-background #controls-wrapper,.page-media-background .mouse-pointer-wrap,.page-media-background #slidecounter');
    var slideshow_caption = $('#static_slidecaption,#slidecaption');
    //Sidebar toggle function
    $(".fullscreen-toggle-off").on('click', function() {
        $('.outer-wrap').removeClass('animated');
        if ( $('body').hasClass('page-is-not-fullscreen') && $('body').hasClass('page-media-background') ) {
            var slide_color = $('#slideshow-data .data-active-slide').data('color');
            if ( slide_color != undefined) {
                $('body').removeClass('fullscreen-slide-bright');
                $('body').removeClass('fullscreen-slide-dark');
                $('body').addClass('fullscreen-slide-'+ slide_color );
            }
        }

        $('.mtheme-fullscreen-toggle').removeClass('fullscreen-toggle-off').addClass('fullscreen-toggle-on');
        $('body').removeClass('fullscreen-mode-off').addClass('fullscreen-mode-on');
        if ($('body').hasClass('has-fullscreen-eventbox')) {
            $('body').removeClass('has-fullscreen-eventbox').addClass('fullscreen-eventbox-inactive').addClass('fullscreen-eventbox-switched');
        }
        $('.mtheme-fullscreen-toggle').find('i').removeClass('feather-icon-plus').addClass('feather-icon-minus');

        events_toggle_element.addClass('mtheme-events-offscreen');
        fullscreen_toggle_elements.fadeOut();
        nav_switch_elements.fadeOut();
        reverse_switch_elements.fadeIn();

        fotoramaResizer();

    });

    //Sidebar toggle function
    $(".fullscreen-toggle-on").on('click', function() {

        if ( $('body').hasClass('page-is-not-fullscreen') && $('body').hasClass('page-media-background') ) {
            $('body').removeClass('fullscreen-slide-bright');
            $('body').removeClass('fullscreen-slide-dark');
        }

        $('.mtheme-fullscreen-toggle').removeClass('fullscreen-toggle-on').addClass('fullscreen-toggle-off');
        $('body').removeClass('fullscreen-mode-on').addClass('fullscreen-mode-off');
        if ($('body').hasClass('fullscreen-eventbox-switched')) {
            $('body').addClass('has-fullscreen-eventbox').removeClass('fullscreen-eventbox-inactive').removeClass('fullscreen-eventbox-switched');
        }

        events_toggle_element.removeClass('mtheme-events-offscreen');
        fullscreen_toggle_elements.fadeIn();
        nav_switch_elements.fadeIn();
        reverse_switch_elements.fadeOut();

        $('.mtheme-fullscreen-toggle').find('i').addClass('feather-icon-plus').removeClass('feather-icon-minus');

        var $filterContainer = $('#gridblock-container');
        if ($.fn.isotope) {
            $filterContainer.isotope('layout');
        }
        fotoramaResizer();
    });

    // One page menu scrolls
    var thebody = $('html, body');
    var one_page_adjust = 75;
    if ($('body').hasClass('menu-is-vertical')) {
        var one_page_adjust = -1;
    }
    if ($(".responsive-menu-wrap:visible").length) {
        var one_page_adjust = 53;
    }

    $('.button-has-a-color').each(function() {
        var button_color = $(this).data('backgroundafter');
        var button_id = $(this).data('buttonid');
        $('.button-shortcode-'+button_id+' .mtheme-button:after').css('background-color',button_color);
        console.log(button_id,button_color);
    });

    $(".service-column.alignicon-top-horizontal").hover(
        function() {
            var iconcolor = $(this).find('.service-icon').attr('data-iconcolor');
            var bgcolor = $(this).find('.service-icon').attr('data-bgcolor');
            $(this).find('.service-icon').find('.fontawesome').css('color', bgcolor);
            $(this).find('.service-icon').find('.fontawesome').css('background-color', iconcolor);
        },
        function() {
            var iconcolor = $(this).find('.service-icon').attr('data-iconcolor');
            var bgcolor = 'none';
            $(this).find('.service-icon').find('.fontawesome').css('background', bgcolor);
            $(this).find('.service-icon').find('.fontawesome').css('color', iconcolor);
        });

    // Hero image
    var document_height = $(window).height();
    var document_width = $(window).width();
    $(".fullheight-parallax").height(document_height);
    $(".heroimage-wrap").height(document_height);
    $(".page-has-full-background.page-media-top #home").css("margin-top", document_height);

    var header_height = $(".outer-wrap").outerHeight() * -1;
    if (header_height !== 0) {
        // no height
    }
    $(window).resize(function() {

        document_height = $(window).height();

        if ($(".outer-wrap").is(":visible")) {
        	// visible code
        } else {
            $("#heroimage").css({
                "marginTop": "0",
                "background-size": "cover"
            });
        }
        $(".fullheight-parallax").height(document_height);
        $(".heroimage-wrap").height(document_height);
        $(".page-has-full-background.page-media-top #home").css("margin-top", document_height);
    });

    var range = 200;
    // Slideshow Hero titles
    var slidetext = $(".hero-text-wrap ul li");
    var slideIndex = -1;

    function showNextHeroText() {
        slideIndex++;
        slidetext.eq(slideIndex % slidetext.length)
            .fadeIn(2000)
            .delay(2000)
            .fadeOut(2000, showNextHeroText);
    }
    if ($(".hero-text-wrap ul").hasClass("slideshow")) {
        showNextHeroText();
    }
    $('.hero-link-to-base').on("click", function() {
        //dashboard toggle
        var scrollelement = $(this).closest('.heroimage-wrap');
        var fromtop = scrollelement.offset().top;
        var scrolltobase = scrollelement[0].scrollHeight + fromtop;
        $('body,html').animate({
            scrollTop: scrolltobase
        }, 800);
    });
    $('.slideshow-scroll-indicate').on("click", function() {
        //dashboard toggle
        var scrollelement = $('#supersized,#backgroundvideo');
        var fromtop = scrollelement.offset().top;
        var scrolltobase = scrollelement[0].scrollHeight + fromtop;
        $('body,html').animate({
            scrollTop: scrolltobase
        }, 800);
    });
    $('.page-has-full-background .fullpage-link-to-base').on("click", function() {
        var scrolltobase = $(window).height();
        $('body,html').stop().animate({
            scrollTop: scrolltobase
        }, 800);
    });
    $('.hero-demo-to-base').on("click", function() {
        //dashboard toggle
        var demoelement = $('.hero-linked-demo');
        var fromtop = demoelement.offset().top;
        var demoscrolltobase = demoelement[0].scrollHeight + fromtop;
        $('body,html').animate({
            scrollTop: demoscrolltobase
        }, 800);
    });
    $('.hero-demo-to-base2').on("click", function() {
        //dashboard toggle
        var demoelement = $('.hero-linked-demo2');
        var fromtop = demoelement.offset().top;
        var demoscrolltobase = demoelement[0].scrollHeight + fromtop;
        $('body,html').animate({
            scrollTop: demoscrolltobase
        }, 800);
    });
    // Hero image End

    if (isIOS || isAndroid) {
        $('.fullpage-block,.title-container-wrap').css('background-attachment', 'scroll');
    }
    $('.side-dashboard-toggle').on("click", function() {
        //dashboard toggle
        $('body').toggleClass('body-dashboard-push-right');
        $('.side-dashboard-wrap').toggleClass('dashboard-push-onscreen');
    });

    if (isIOS || isAndroid) {
        $('.fullpage-block').css('background-attachment', 'scroll');
    }

    $(".ntips").tooltip({
        position: {
            my: "center bottom+40",
            at: "center bottom"
        },
        show: {
            effect: "fade",
            delay: 5
        }
    });
    $(".stips").tooltip({
        position: {
            my: "center top",
            at: "center top"
        },
        show: {
            effect: "fade",
            delay: 5
        }
    });

    // Detect Search Toggle and ESC

    // Open
    $('.header-search').on("click", function() {
        $('body').toggleClass('msearch-is-on');
        $('#header-search-bar-wrap').fadeIn();
        $("#hs").focus();
    });

    if ($('body').hasClass('error404')) {
        $("#s").focus();
    }

    // Close
    $('.header-search-close,#header-search-bar-wrap').on("click", function() {
        if ($('body').hasClass('msearch-is-on')) {
            $('body').toggleClass('msearch-is-on');
            $('#header-search-bar-wrap').fadeOut();
        }
    });
    $('.header-search-bar').click(function(event) {
        event.stopPropagation();
    });

    // Watch for ESC Key
    $('body').keyup(function(e) {
        //alert(e.keyCode);
        if (e.keyCode == 27) {
            // Close my modal window
            if ($('body').hasClass('msearch-is-on')) {
                $('body').toggleClass('msearch-is-on');
                $('#header-search-bar-wrap').fadeOut();
            }
        }
    });

    // end block of search toggle

    $(".fitVids").fitVids();

    if ($.fn.superfish) {
        $('.homemenu ul.sf-menu').superfish({
            animation: {
                opacity: 'show'
            },
            animationOut: {
                opacity: 'hide'
            },
            speed: 'slow',
            speedOut: 'slow',
            disableHI: true,
            delay: 100,
            autoArrows: true,
            dropShadows: true,
            onInit: function() {},
            onHide: function() {},
            onShow: function() {},
            onBeforeShow: function() {},
            onBeforeHide: function() {}
        });
    }

    $('.support-user-options-trigger').on("click", function() {
        $('.support-user-options-wrap').removeClass('support-monitor-active');
    });

    //Portfolio Hover effects
    $(".gototop,.hrule.top a").click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 'slow');
        return false;
    });

 $('#searchform').submit(function(e) { // run the submit function, pin an event to it
    var s = $( this ).find("#s"); // find the #s, which is the search input id
    if (!s.val()) { // if s has no value, proceed
        e.preventDefault(); // prevent the default submission
        $('#s').focus(); // focus on the search input
    }
});

    // Responsive dropdown list triggered on Mobile platforms
    $('#top-select-menu').bind('change', function() { // bind change event to select
        var url = $(this).val(); // get selected value
        if (url != '') { // require a URL
            window.location = url; // redirect
        }
        return false;
    });

    //Switch the "Open" and "Close" state per click then slide up/down (depending on open/close state)
    $(".toggle-shortcode").click(function() {
        $(this).toggleClass("active").next().slideToggle("fast");
        return false;
    });

    // Faq toggle shortcode
    $(".faq-toggle-shortcode-wrap").click(function() {
        $(this).toggleClass("active").find('a.faq-toggle-link').next().slideToggle("fast");
        return false;
    });
    
    $(".service-item").hover(
        function() {
            $(this).children('.icon-large').animate({
                top: -10
            }, 300);
        },
        function() {
            $(this).children('.icon-large').animate({
                top: 0
            }, 300);
        });

    $("#main-gridblock-carousel .preload").hover(
        function() {
            $(this).stop().fadeTo("fast", 0.6);
        },
        function() {
            $(this).stop().fadeTo("fast", 1);
        });

    $(".gridblock-image-holder").hover(
        function() {
            $(this).stop().fadeTo("fast", 0.6);
        },
        function() {
            $(this).stop().fadeTo("fast", 1);
        });

    $(".thumbnail-image").hover(
        function() {
            $(this).stop().fadeTo("fast", 0.6);
        },
        function() {
            $(this).stop().fadeTo("fast", 1);
        });

    $(".pictureframe").hover(
        function() {
            $(this).stop().fadeTo("fast", 0.6);
        },
        function() {
            $(this).stop().fadeTo("fast", 1);
        });

    $(".filter-image-holder").hover(
        function() {
            $(this).stop().fadeTo("fast", 0.6);
        },
        function() {
            $(this).stop().fadeTo("fast", 1);
        });

    $("#popularposts_list li:even,#recentposts_list li:even").addClass('even');
    $("#popularposts_list li:odd,#recentposts_list li:odd").addClass('odd');

    $(".service-column .service-item:even").addClass('service-order-even');
    $(".service-column .service-item:odd").addClass('service-order-odd');

    $(".close_notice").click(function() {
        $(this).parent('.noticebox').slideUp('fast');
    });

    // fade in #back-top
    $(function() {
        $(window).scroll(function() {
            if ($(this).scrollTop() > 100) {
                $('body').addClass('goto-top-active');
            } else {
                $('body').removeClass('goto-top-active');
            }
        });

        // scroll body to 0px on click
        $('#goto-top').click(function() {
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
    });
    $('.pricing-column ul').each(function(e) {
        $(this).find('li:even').addClass('even');
        $(this).find('li:odd').addClass('odd');
    });

    // WooCommerce Codes
    // Thumnail hover for secondary image

    var header_cart_toggle = $('.header-cart-toggle');
    var header_cart_off = $('.header-cart-close');

    header_cart_toggle.on("click", function() {
        $('.mtheme-header-cart').fadeToggle();
    });
    $('.header-cart-close').on("click", function() {
        $('.mtheme-header-cart').fadeOut();
    });
    $('.container-wrapper').click(function(event) {
        $('.mtheme-header-cart').fadeOut();
    });
    $('.mtheme-header-cart').mouseleave(function() {
        $(this).fadeOut();
    });

    var woocommerce_active = $('body.woocommerce');
    if (woocommerce_active.length) {
        $('ul.products li.mtheme-hover-thumbnail').hover(function() {
            var woo_secondary_thumnail = $(this).find('.mtheme-secondary-thumbnail-image').attr('src');
            if (woo_secondary_thumnail !== undefined) {
                $(this).find('.wp-post-image').removeClass('woo-thumbnail-fadeInDown').addClass('woo-thumbnail-fadeOutUp');
                $(this).find('.mtheme-secondary-thumbnail-image').removeClass('woo-thumbnail-fadeOutUp').addClass('woo-thumbnail-fadeInDown');
            }
        }, function() {
            var woo_secondary_thumnail = $(this).find('.mtheme-secondary-thumbnail-image').attr('src');
            if (woo_secondary_thumnail !== undefined) {
                $(this).find('.wp-post-image').removeClass('woo-thumbnail-fadeOutUp').addClass('woo-thumbnail-fadeInDown');
                $(this).find('.mtheme-secondary-thumbnail-image').removeClass('woo-thumbnail-fadeInDown').addClass('woo-thumbnail-fadeOutUp');
            }
        });


        var woocommerce_ordering = $(".woocommerce-page .woocommerce-ordering select");
        if ((woocommerce_ordering).length) {
            var woocommerce_ordering_curr = $(".woocommerce-ordering select option:selected").text();
            var woocommerce_ordering_to_ul = woocommerce_ordering
                .clone()
                .wrap("<div></div>")
                .parent().html()
                .replace(/select/g, "ul")
                .replace(/option/g, "li")
                .replace(/value/g, "data-value");

            $('.woocommerce-ordering')
                .prepend('<div class="mtheme-woo-order-selection-wrap"><div class="mtheme-woo-order-selected-wrap"><span class="mtheme-woo-order-selected">' + woocommerce_ordering_curr + '</span><i class="woo-sorter-dropdown ion-ios-settings"></i></div><div class="mtheme-woo-order-list">' + woocommerce_ordering_to_ul + '</div></div>');
        }

        $(function() {
            //$('.woocommerce-page .woocommerce-ordering select').hide();
            $('.mtheme-woo-order-selected-wrap').click(function() {
                $('.mtheme-woo-order-list ul').slideToggle('fast');
            });
            $('.mtheme-woo-order-list ul li').click(function(e) {
                //Set value
                var selected_option = $(this).data('value');
                $(".woocommerce-page .woocommerce-ordering select").val(selected_option).trigger('change');

                $('.mtheme-woo-order-selected').text($(this).text());
                $('.mtheme-woo-order-list').slideUp('fast');
                $(this).addClass('current');
                e.preventDefault();
            })
        });
    }

});

//
(function($) {
    $(window).on('load',function() {
        var deviceAgent = navigator.userAgent.toLowerCase();
        var isIOS = deviceAgent.match(/(iphone|ipod|ipad)/);
        var ua = navigator.userAgent.toLowerCase();
        var isAndroid = ua.indexOf("android") > -1;

        $('body').addClass('pace-done').removeClass('pace-running');
        $('.preloader-cover-screen').remove();
        $('.pace').fadeOut( "slow", function() {
            $('.pace').remove();
        });
        wayPointStarter();

    function fullscreenInfoBox() {
        if ($('#owl-fullscreen-infobox').length) {
            $("#owl-fullscreen-infobox").owlCarousel({
                dots: false,
                autoplay: true,
                items: 1,
                nav : true,
                navText : ["",""],
                loop: true
            });
        }
    }
    fullscreenInfoBox();

    function detectCarousels() {
        if ($(".lightbox-carousel-rows").length) {
            $('.lightbox-carousel-rows').each(function(e) {
                var carouselColumns = $(this).data('columns');
                var carouselID = $(this).data('id');
                $("#"+carouselID).owlCarousel({
                    responsive:{
                        0:{
                            items:1
                        },
                        600:{
                            items:3
                        },
                        1000:{
                            items: carouselColumns
                        }
                    },
                    items: carouselColumns,
                    nav : true,
                    dots: false,
                    navText : ["",""],
                    loop: true
                });
            });
        }
    }
    detectCarousels();

        function wayPointStarter() {

            $('body').addClass('loading-done');
            $('body').addClass('preloader-done');

            if ($.fn.waypoint) {

                //Skill Bar
                $('.skillbar').waypoint(function() {
                    $('.skillbar').each(function(e) {
                        percent = $(this).attr('data-percent');
                        $(this).find('.skillbar-bar').delay(e * 300).animate({
                            'width': percent + '%'
                        }, 3000, 'easeInOutExpo').addClass('progressed');
                    });
                }, {
                    offset: '90%'
                });

                $('.animation-standby-portfolio').each(function(){
                    var waypointElement = $(this);
                    new Waypoint({
                        element: waypointElement,
                        handler: function() {
                            waypointElement.removeClass('animation-standby-portfolio').addClass('animation-action');
                        },
                        offset: '90%'
                    });
                });

                $('.animation-standby').each(function(){
                    var waypointElement = $(this);
                    new Waypoint({
                        element: waypointElement,
                        handler: function() {
                            waypointElement.removeClass('animation-standby').addClass('animation-action');
                        },
                        offset: '90%'
                    });
                });

                $('.animation-footer-standby').each(function(){
                    var waypointElement = $(this);
                    new Waypoint({
                        element: waypointElement,
                        handler: function() {
                            waypointElement.removeClass('animation-standby').addClass('animation-action');
                        },
                        offset: 'bottom-in-view'
                    });
                });

                $('.is-animated').each(function(){
                    var waypointElement = $(this);
                    new Waypoint({
                        element: waypointElement,
                        handler: function() {
                            waypointElement.removeClass('is-animated').addClass('animation-action');
                        },
                        offset: '90%'
                    });
                });

            }
        }

    })
    function gridRotator() {
        if ($.fn.gridrotator) {
            if ($('.ri-grid').length) {
                var gridSelect = ('.ri-grid');
                var gridID = '#' + $(gridSelect).data('id');
                $( gridID ).gridrotator( {
                    rows : 2,
                    columns : 2,
                    maxStep : 1,
                    animType        : "fadeInOut",
                    preventClick    : false,
                    slideshow       : true,
                    onhover     : false,
                    w1024 : {
                        rows : 3,
                        columns : 3
                    },
                    w768 : {
                        rows : 3,
                        columns : 3
                    },
                    w480 : {
                        rows : 3,
                        columns : 3
                    },
                    w320 : {
                        rows : 3,
                        columns : 3
                    },
                    w240 : {
                        rows : 3,
                        columns : 3
                    },
                });
            }
        }
    }

    if ( $('#instagram-grid-gen').length ) {
        var populateimages = function() {

            var r = $.Deferred();
        
            var imageset_arr = new Array();
            var linkset_arr = new Array();

            $( '#insta-grid-id-detect #sbi_images img' ).each( function() {
                if ( !$(this).hasClass('emoji') ) {
                    var instaimage = $(this).attr('src');
                    imageset_arr.push( instaimage );
                }
            });
            $( '#insta-grid-id-detect #sbi_images a.sbi_photo' ).each( function() {
                var instalink = $(this).attr('href');
                linkset_arr.push( instalink );
            });
            var totalimages = imageset_arr.length;
            var imagecount = 0;
            var linkcount = 0;

            $( '.insta-grid-wrap ul img' ).each( function() {
                if ( imagecount <= totalimages ) {
                    $( this ).attr( 'data-src', imageset_arr[ imagecount ] );
                }
                imagecount++;
            } );
            $( '.insta-grid-wrap ul .instagram-photos-link' ).each( function() {
                if ( linkcount < totalimages ) {
                    $( this ).attr( 'href', linkset_arr[ linkcount ] );
                    $( this ).parent( '.gridblock-grid-element' ).addClass( 'insta-image-present' ).removeClass( 'insta-image-absent' );
                }
                linkcount++;
            } );
            $('.insta-grid-wrap ul li.insta-image-absent').remove();
            $('#instagram-grid-gen').remove();
            return r;
        
        };
        window.sbi_custom_js = function(){
            populateimages().done( gridRotator() );
        }
        setTimeout(function(){
            if ( $('#instagram-grid-gen').parent().length) {
                populateimages().done( gridRotator() );
            }
        }, 1000);
    } else {
        gridRotator();
    }

})(jQuery);

(function ( $ ) {

    var preloader_logo = $('.logoimage-preloader');
    $("<img/>").on('load',function() {
        $('.logoimage-preloader').animate({
            opacity : 1,
            top: 0
        }, 1000, '' );
    }).attr("src", preloader_logo.attr("src"));
 
}( jQuery ));