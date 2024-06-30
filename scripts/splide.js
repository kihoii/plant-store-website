document.addEventListener('DOMContentLoaded', function () {
    new Splide('#new-plants', {
        type: 'loop',
        padding: '6%',
        pagination: false,
        arrows: false,
        autoplay: true,
        speed: 400,
        mediaQuery: 'min',
        breakpoints: {
            900: {
                destroy: true,
            },
            800: {
                padding: '27%',
            },
            700: {
                padding: '25%',
            },
            600: {
                padding: '20%',
            },
            500: {
                padding: '15%',
            },
            400: {
                padding: '9%',
            }
        }
    }).mount();

    new Splide('#feedback', {
        type: 'loop',
        pagination: false,
        autoplay: true,
        speed: 400,
        mediaQuery: 'min',
        breakpoints: {
            900: {
                destroy: true,
            },
        }
    }).mount();
});