/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 


// Job Title Animation
const jobTitles = [
    "Web Developer", 
    "Laravel Developer", 
    "Vue.js Specialist",
];

let currentTitle = 0;
let currentChar = 0;
let currentText = '';
const jobTitleElement = document.getElementById('job-title');

function changeTitle() {
    currentText = jobTitles[currentTitle];
    jobTitleElement.textContent = '';
    currentChar = 0;
    typeEffect();
}

function typeEffect() {
    if (currentChar < currentText.length) {
        jobTitleElement.textContent += currentText.charAt(currentChar);
        currentChar++;
        setTimeout(typeEffect, 150); // Delay to simulate typing
    } else {
        setTimeout(() => {
            currentTitle = (currentTitle + 1) % jobTitles.length;
            changeTitle();
        }, 1000); // Wait for 2 seconds before switching to the next job title
    }
}

changeTitle();


// Change About Image
function changeImage() {
    const imgElement = document.getElementById('about-image');
    
    // Fade out the current image
    imgElement.style.opacity = 0;
    
    setTimeout(() => {
        // Change image source after fade out
        imgElement.src = imgElement.src.includes('about.jpg') ? 'assets/img/about2.jpg' : 'assets/img/about.jpg';
        
        // Fade in the new image
        imgElement.style.opacity = 1;
    }, 1000); // Wait for 1 second to complete the fade out effect
}

// Change image every 1.5 seconds
setInterval(changeImage, 3000);