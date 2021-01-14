console.log('Hello World!');
gsap.registerPlugin(ScrollTrigger);

// GSAP vabiables
const headerLogo = document.querySelector('.header__logo');
const mobileMenuBtn = document.querySelector('.hamburger');
const menu = document.querySelector('.header__menu');
const heroTitle = document.querySelector('.header__hero-title');
const heroSubTitle = document.querySelector('.header__hero-subtitle');
const heroButton = document.querySelector('.header__button');
const heroArrowDown = document.querySelector('.header__arrow');
const headerMenuIcon = document.querySelector('.header__menu-icon');
const sectionsTitles = document.querySelectorAll('.section-title');
const devIcons = document.querySelectorAll('.dev__icons__icon');

const screenWidth = window.innerWidth;

// GSAP timeline
let tl = gsap.timeline();

if(screenWidth >= 320) {
    // Header animation
    tl.fromTo(headerLogo, {x: 45, y: 250, scale: 1.2, opacity:0}, {opacity:1, duration:1, ease: "easeIn"});
    tl.to(headerLogo, {x:0, y:0 , scale:1, duration:1, ease: "easeIn"});
    tl.fromTo( heroTitle, {y: 100, opacity: 0}, {y: 0, opacity: 1, duration: 1, ease: "easeInOut"});
    tl.fromTo( heroSubTitle, {y: 50, opacity: 0}, {y: 0, opacity: 1, duration: 0.5});
    tl.fromTo( heroButton, {y: 50, opacity: 0}, {y: 0, opacity: 1, duration: 0.5});
    tl.fromTo( heroArrowDown, {y: 50, opacity: 0}, {y: 0, opacity: 1, duration: 0.5});
    tl.fromTo( headerMenuIcon, {x: -25, opacity:0}, {x:0, opacity:1, duration: 0.5, ease: "easeIn"});


    // Section titles animation
    sectionsTitles.forEach( section => {
        gsap.fromTo(
            section,
            {y: "+=100", opacity: 0},
            {y: 0, opacity:1, duration:1, ease: "easeInOut",
                scrollTrigger: {
                    trigger: section,
                    start: 'top 100%',
                    // markers: true,
                }
            }
        )
    }) 
    
    // Dev icons animation
    devIcons.forEach( icon => {
        gsap.fromTo(
            icon.children,
            {y: "+=50", opacity: 0},
            {y: 0, opacity:1, duration:1, ease: "easeInOut",
                scrollTrigger: {
                    trigger: icon,
                    start: 'top 95%',
                    stagger: 0.2,
                }
            }
        )
    })

}

let showMenu = () => {
    menu.classList.toggle('header__menu--shown');
    setTimeout(function(){
        let menuElements = document.querySelectorAll('.header__menu-element');
        gsap.to(
            menuElements,
            {x: 0,opacity: 1, stagger: 0.2}
        );
    }, 1000)
}

mobileMenuBtn.addEventListener('click', showMenu);