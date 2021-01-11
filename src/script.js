console.log('Hello World!');

// GSAP vabiables
const heroTitle = document.querySelector('.header__hero-title');
const heroSubTitle = document.querySelector('.header__hero-subtitle');
const heroButton = document.querySelector('.header__button');


// GSAP timeline
let tl = gsap.timeline();

// Header animation
tl.fromTo( heroTitle, {y: 100, opacity: 0}, {y: 0, opacity: 1, duration: 1, ease: "easeInOut"});
tl.fromTo( heroSubTitle, {y: 50, opacity: 0}, {y: 0, opacity: 1, duration: 0.5});
tl.fromTo( heroButton, {y: 50, opacity: 0}, {y: 0, opacity: 1, duration: 0.5});
