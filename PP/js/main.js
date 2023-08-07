new Swiper('.image-slider', {
    //    Стрелки
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },

    //    Навигация(Буллеты)
    pagination: {
        el: '.swiper-pagination',
        // bullets
        clickable: true,

        //Динамические точки
        dynamicBullets: true,
    },


    //Свайп true/false
    simulateTouch: true,

    //Кол-во слайдов для показа. Можно писать не целые числа!
    slidesPerView: 3,

    //Отступ меджу слайдами
    spaceBetween: 10,

    //Автопрокрутка
    autoplay: {
        //Задержка
        delay: 1500,


        //Отключение после ручного переключения true/false
        disableOnInteraction: true,
    },

    //Скорость перелистывания
    speed: 1000,


    //Адаптивность(Mobile first)
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        480: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        },
    },
});





var $page = $('html, body');
$('a[href*="#"]').click(function () {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top + 0
    }, 700);
    return false;
});



var w = window.screen.width;
console.log(w);
if (w > 992) {
    window.addEventListener('scroll', () => {
        let scrollDistance = window.scrollY;
        document.querySelectorAll('.section').forEach((el, i) => {
            if (el.offsetTop - document.querySelector('.nav').clientHeight <= scrollDistance) {
                document.querySelectorAll('.nav a').forEach((el) => {
                    if (el.classList.contains('active')) {
                        el.classList.remove('active');
                    }
                });

                document.querySelectorAll('.nav li')[i].querySelector('a').classList.add('active');
            }
        });
    });







    if (w > 992) {
        window.onscroll = function () {
            scrollfunction();
        };
    };

    function scrollfunction() {
        let scrollPos = 100;
        let nav = document.getElementById("nav");

        if (document.body.scrollTop > scrollPos || document.documentElement.scrollTop > scrollPos) {
            nav.classList.add('fixed');
        } else {
            nav.classList.remove('fixed');
        };
    };
};




function addclass() {
    var width = window.screen.width;
    var element = document.getElementById("mn");
    element.classList.toggle("act");
    var element1 = document.getElementById("mn1");
    element1.classList.toggle("act1");
    if (width < 993) {
        var element2 = document.getElementById("bd");
        element2.classList.toggle("lock");
    }
};







var userDeviceArray = [
    {
        device: 'iPhone',
        platform: /iPhone/
    },
    {
        device: 'iPad',
        platform: /iPad/
    },

];

var platform = navigator.userAgent;

function getPlatform() {
    for (var i in userDeviceArray) {
        if (userDeviceArray[i].platform.test(platform)) {
            return userDeviceArray[i].device;
        }
    }
}
if (getPlatform() == "iPhone" || getPlatform() == "iPad") {
    document.getElementById("wrpr").style.backgroundAttachment = "scroll";
};
