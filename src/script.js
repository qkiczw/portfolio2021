console.log('Hello World!');

// GSAP vabiables
const headerLogo = document.querySelector('.header__logo');
const heroTitle = document.querySelector('.header__hero-title');
const heroSubTitle = document.querySelector('.header__hero-subtitle');
const heroButton = document.querySelector('.header__button');
const headerMenuIcon = document.querySelector('.header__menu-icon');

const screenWidth = window.innerWidth;

// GSAP timeline
let tl = gsap.timeline();

if(screenWidth <= 320) {
    // Header animation
    tl.fromTo(headerLogo, {x: 45, y: 250, scale: 1.2, opacity:0}, {opacity:1, duration:1, ease: "easeIn"});
    tl.to(headerLogo, {x:0, y:0 , scale:1, duration:1, ease: "easeIn"});
    tl.fromTo( heroTitle, {y: 100, opacity: 0}, {y: 0, opacity: 1, duration: 1, ease: "easeInOut"});
    tl.fromTo( heroSubTitle, {y: 50, opacity: 0}, {y: 0, opacity: 1, duration: 0.5});
    tl.fromTo( heroButton, {y: 50, opacity: 0}, {y: 0, opacity: 1, duration: 0.5});
    tl.fromTo( headerMenuIcon, {x: -25, opacity:0}, {x:0, opacity:1, duration: 0.5, ease: "easeIn"});
    
    
}

