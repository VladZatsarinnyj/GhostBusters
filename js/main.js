'use strict'

const mobMenuBtn = document.querySelector('.mob-menu'),
    mobileMenu = document.querySelector('.mobile-menu'),
    trailerModal = document.querySelector('.modal-window_trailer'),
    playBtn = document.querySelector('.play-button'),
    actorsTitle = document.querySelector('.actors-title'),
    creatorsTitle = document.querySelector('.creators-title'),
    actorsCards = document.querySelector('.actors'),
    creatorsCards = document.querySelector('.creators');



mobMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('active-menu');
    document.body.classList.toggle('no-scroll');
});

trailerModal.addEventListener('click', event => {
	const target = event.target;
	if (trailerModal == target) {
		trailerModal.classList.add('hide');
	}
});

playBtn.addEventListener('click', () => {
	trailerModal.classList.remove('hide');
});

creatorsTitle.addEventListener('click', () => {
   actorsCards.classList.add('hide');
   creatorsCards.classList.remove('hide');
   creatorsTitle.classList.add('active-title');
   actorsTitle.classList.remove('active-title');
});
actorsTitle.addEventListener('click', () => {
   actorsCards.classList.remove('hide');
   creatorsCards.classList.add('hide');
   actorsTitle.classList.add('active-title');
   creatorsTitle.classList.remove('active-title');
   

});

//slider
const slideBackBtn = document.querySelector('.slide-back'),
	slideNextBtn = document.querySelector('.slide-next'),
	newsCard = document.querySelector('.news-card');

var slider = Peppermint(document.getElementById('peppermint'),{
	mouseDrag: false,
	onSlideChange: (sliderNum) => {
		if (sliderNum == 0) {
			slideBackBtn.classList.add('hide');
			newsCard.style.borderLeft = 'none';
		} else if (sliderNum == 3) {
			slideNextBtn.classList.add('hide');
		} else {
			slideBackBtn.classList.remove('hide');
			slideNextBtn.classList.remove('hide');
		}
	},
});

const slideNext = document.querySelector('.slide-next'),
	slideBack = document.querySelector('.slide-back');

slideNext.addEventListener('click', slider.next);
slideBack.addEventListener('click', slider.prev);


