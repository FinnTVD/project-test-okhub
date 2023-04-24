$(document).ready(function () {
    var screenWidth = $(window).width();
    var previousScrollPosition = $(window).scrollTop();

    // scroll event
    $(window).on("scroll", () => {
        screenWidth = $(window).width();
        if (screenWidth < 768) {
            const currentScrollPosition = $(window).scrollTop();

            //check user scroll up or scroll down now
            if (currentScrollPosition > previousScrollPosition) {
                // scroll up
                if ($(document).scrollTop() >= 70) {
                    $(".header-nav").addClass("active");
                }
                $(".nav-footer").removeClass("active");
            } else {
                //scroll down
                $(".nav-footer").addClass("active");
                $(".header-nav").removeClass("active");
            }
            previousScrollPosition = currentScrollPosition;
        } else {
            $(".header-nav").removeClass("active");
            $(".nav-footer").removeClass("active");
        }
    });

    // resize event
    $(window).resize(function () {
        screenWidth = $(window).width();

        if (screenWidth < 768) {
            const currentScrollPosition = $(window).scrollTop();

            if (currentScrollPosition > previousScrollPosition) {
                // scroll up
                if ($(document).scrollTop() >= 70) {
                    $(".header-nav").addClass("active");
                }
                $(".nav-footer").removeClass("active");
            } else {
                //scroll down
                $(".nav-footer").addClass("active");
                $(".header-nav").removeClass("active");
            }

            previousScrollPosition = currentScrollPosition;
            $(".header-nav .menu-btn").remove();
            $(".menu-nav").remove();
            $(".nav-footer").remove();

            $(".header-nav").prepend(
                "<div class='flex items-center md:hidden menu-btn'><img class='w-4 h-4 cursor-pointer'src='./images/menu.svg'alt=''/></div>",
            );

            $(".App").prepend(
                "<div class='menu-nav md:hidden bg-[#002634] h-screen w-screen px-[29px] py-8 fixed z-[9999999] top-0 -translate-x-full'><div class='flex justify-end'><img class='object-cover close-btn w-9 h-9' src='./images/close-x.svg' alt='' /></div><hr /><ul class='mt-5 font-bold list-none'><li class='cursor-pointer py-3 hover:bg-white hover:text-[#002634] active:text-[#002634]'>Home</li><li class='cursor-pointer py-3 hover:bg-white hover:text-[#002634] active:text-[#002634]'>Destinations</li><li class='cursor-pointer py-3 hover:bg-white hover:text-[#002634] active:text-[#002634]'>Travel styles</li><li class='cursor-pointer py-3 hover:bg-white hover:text-[#002634] active:text-[#002634]'>About us</li><li class='cursor-pointer py-3 hover:bg-white hover:text-[#002634] active:text-[#002634]'>Blog</li><li class='cursor-pointer py-3 hover:bg-white hover:text-[#002634] active:text-[#002634]'>Contact</li></ul><div class='flex flex-col gap-y-[18px] absolute bottom-10 w-[calc(100%-64px)]'><div class='px-2 py-[5px] menu-item-contact rounded-[28px] flex justify-between'><div class='flex gap-x-[6px] items-center'><div class='flex items-center justify-center bg-white rounded-full w-9 h-9'><img class='object-cover' src='./images/zalo-mb.svg' alt='' /></div><div class='flex flex-col justify-start !font-man'><h5 class='text-xs font-bold'>Kết nối Zalo</h5><span class='text-[8.5px] font-medium'>0339.867.688</span></div></div><div class='flex items-center mr-[10px]'><img class='object-cover' src='./images/arrow-mb.svg' alt='' /></div></div><div class='px-2 py-[5px] menu-item-contact rounded-[28px] flex justify-between'><div class='flex gap-x-[6px] items-center'><div class='flex items-center justify-center bg-[#21695B] rounded-full w-9 h-9'><img class='object-cover' src='./images/phone-mb.svg' alt='' /></div><div class='flex flex-col justify-start !font-man'><h5 class='text-xs font-bold'>Liên hệ</h5><span class='text-[8.5px] font-medium'>0339.867.688</span></div></div><div class='flex items-center mr-[10px]'><img class='object-cover' src='./images/arrow-mb.svg' alt='' /></div></div></div></div>",
            );

            $("footer").append(
                "<div class='absolute -bottom-[2px] w-full h-12 nav-footer md:hidden'><div class='relative w-full'><img class='w-full h-full' src='./images/nav-footer.png' alt='' /><div class='absolute footer-icon-location flex items-center justify-center w-10 h-10 -translate-x-1/2 rounded-full -top-5 left-1/2 bg-linearBtn'><img class='w-4 h-4' src='./images/location-mb.svg' alt='' /></div><div class='absolute footer-category flex justify-center w-full -translate-y-1/2 top-[46%] px-11 gap-x-8 left-1/2 -translate-x-1/2'><img src='./images/home-mb.svg' alt='' /><img src='./images/search-mb.svg' alt='' /><div class='w-[104px]'></div><img src='./images/doc-mb.svg' alt='' /><img src='./images/user-mb.svg' alt='' /></div></div></div>",
            );

            $(".menu-btn").click(() => {
                $(".menu-nav").toggleClass("active");
            });

            $(".close-btn").click(() => {
                $(".menu-nav").toggleClass("active");
            });
            $("div[data-set='vhl-pc']").width("auto");
        } else {
            $(".nav-footer").removeClass("active");
            $(".header-nav").removeClass("active");
            $(".header-nav .menu-btn").remove();
            $(".menu-nav").remove();
            $(".nav-footer").remove();
        }
        $("div[data-set='vhl-pc']").width(screenWidth - 180 - 392 - 21);
    });

    $(window).trigger("resize");

    $(".head-banner-slide").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        fade: true,
        cssEase: "linear",
        speed: 500,
    });

    $(".list-tour").slick({
        slidesToShow: 2,
        dots: true,
        centerMode: false,
        variableWidth: false,
        prevArrow:
            "<button class='slick-prev slick-tour slick-tour-active slick-tour-prev pull-left'><svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' class='w-6 h-6'><path stroke-linecap='round' stroke-linejoin='round' d='M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75'/></svg></button>",
        nextArrow:
            "<button class='slick-next slick-tour slick-tour-next pull-right'><svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' class='w-6 h-6'><path stroke-linecap='round' stroke-linejoin='round' d='M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75' /></svg></button>",
        asNavFor: ".list-location",
        focusOnSelect: true,
        infinite: true,
        responsive: [
            {
                breakpoint: 767.8,
                settings: {
                    slidesToShow: 1,
                    dots: true,
                    infinite: true,
                    variableWidth: true,
                    prevArrow:
                        "<button class='slick-prev slick-tour slick-tour-active slick-tour-prev pull-left'><svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' class='w-6 h-6'><path stroke-linecap='round' stroke-linejoin='round' d='M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75'/></svg></button>",
                    nextArrow:
                        "<button class='slick-next slick-tour slick-tour-next pull-right'><svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' class='w-6 h-6 !text-[#ddb152]'><path stroke-linecap='round' stroke-linejoin='round' d='M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75' /></svg></button>",
                },
            },
        ],
    });

    $(".list-location").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: ".list-tour",
        arrows: false,
        vertical: true,
        focusOnSelect: true,
        dot: true,
    });

    const btn_prev_tour = document.querySelector(".slick-tour-prev");
    const btn_next_tour = document.querySelector(".slick-tour-next");
    const slickTourActive = "slick-tour-active";

    btn_prev_tour.onclick = function () {
        let isCheckTour = this.getAttribute("aria-disabled");
        if (isCheckTour === "true") {
            this.classList.add(slickTourActive);
        } else {
            btn_next_tour.classList.remove(slickTourActive);
        }
    };

    btn_next_tour.onclick = function () {
        let isCheckTour = this.getAttribute("aria-disabled");
        if (isCheckTour === "true") {
            this.classList.add(slickTourActive);
        } else {
            btn_prev_tour.classList.remove(slickTourActive);
        }
    };
});
