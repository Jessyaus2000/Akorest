let slideshows = document.querySelectorAll('[data-component="slideshow"]');
        slideshows.forEach(initSlideShow);
        function initSlideShow(slideshow) {
            let slides = document.querySelectorAll(`#${slideshow.id} [role="list"] .slide`);
            let i = 0, time = 6000;
            slides[i].classList.add('active');
            setInterval( () => {
                slides[i].classList.remove('active');
                i++;
                if (i === slides.length) i = 0; 
                slides[i].classList.add('active');
            }, time);
}
