/*Mr. Console Log*/
const toggleMode = () =>{
    const darkmodeTrigger = document.getElementsByClassName("darkmode")

    for(let l of darkmodeTrigger){//util function
        l.addEventListener('click',()=>{
            //TODO dark mode toggle
            //...

        })
    }
}

/* Jimmy slideshow function */
var slides = 0; //default first slide
showSlide(slides);

function plusSlides(n) {
    slides += n;
    showSlide(slides);
}

function currentSlide(n) {
    slides = n;
    showSlide(slides);
}

function showSlide(index) {
    const slideClass = document.getElementsByClassName("bannerSlides");
    const dotClass = document.getElementsByClassName("dot");

    if (index >= slideClass.length) {
        slides = 0;
    }
    
    if (index < 0) {
        slides = slideClass.length - 1;
    }

    for (var i = 0; i < slideClass.length; i++) {
        slideClass[i].classList.add('slidesHidden'); //hidden all slides by default
        dotClass[i].classList.remove('selecting');
    }

    slideClass[slides].classList.remove('slidesHidden');
    dotClass[slides].classList.add('selecting');

}
