$(document).ready(function () {
    $(".gef-mobile-items").owlCarousel({
        items: 1,
        dots: false,
        nav: true,
        loop: true,
        navText: ['<img src="assets/images/icons/arrow-left.svg" />','<img src="assets/images/icons/arrow-right.svg" />']
    });
    $(".our-news .news-items").owlCarousel({
        items: 4,
        dots: false,
        margin: 30,
        nav: false,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        navText: ['<img src="assets/images/icons/arrow-left.svg" />','<img src="assets/images/icons/arrow-right.svg" />'],
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2, 
            },
            768: {
                items: 3
            },
            992: {
                items: 4
            }
        }
    });
    $(".commitee .commitee-slider").owlCarousel({
        items: 6,
        dots: false,
        margin: 30,
        nav: false,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        navText: ['<img src="assets/images/icons/arrow-left.svg" />','<img src="assets/images/icons/arrow-right.svg" />'],
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2, 
            },
            768: {
                items: 3
            },
            992: {
                items: 4
            },
            1200: {
                items: 6
            }
        }
    }); 
});


!function () {
    var selector = (selector, areAll) => {
        var all = document.querySelectorAll(selector)
        var single = document.querySelector(selector)
        return areAll ? all : single
    }

    // Header
    function Header() {
        this.header = selector('header');
        this.buttons = selector('header a.logo + img,header a.logo + img + svg', true);

        this.eventListeners = function () {
            for (let i = 0; i < this.buttons.length; i++) {
                this.buttons[i].addEventListener('click', function () {
                    this.header.classList.toggle('active');
                    document.body.classList.toggle('overflow-hidden');
                }.bind(this));
            }
        }
        this.init = function () {
            this.eventListeners();
        }
        this.init();
    }


    document.addEventListener('DOMContentLoaded', function () {
        const header = new Header();

    })
}()
