let spans = document.querySelectorAll('span');
let navbar = document.querySelector('.navbar');
let navbarUl = document.querySelector('.navbar ul');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.navbar ul li a');
let burgerIcon = document.querySelector('.burger')
let readMoreButton = document.querySelector('.about-me button');
let readMoreDiv = document.querySelector('.read-more');
let form = document.getElementById('form');
let jobTitle = document.querySelector('.landing .text h2');
let hiddensElements = document.querySelectorAll('.hidden');
let logo = document.querySelector('.navbar .logo');
let navbarLies = document.querySelectorAll('.navbar ul li');
let landingH1 = document.querySelector('.landing h1');
let landingH2 = document.querySelector('.landing h2');
let landingparagraph = document.querySelector('.landing p');
let landingButtons = document.querySelector('.landing .buttons');
let landingSocialLinkes = document.querySelector('.landing .social-linkes');
let landingImage = document.querySelector('.landing img');
let aboutMeH1 = document.querySelector('.about-me h1');
let aboutMeImage = document.querySelector('.about-me img');
let aboutMeH2 = document.querySelector('.about-me h2');
let aboutMeP = document.querySelector('.about-me p');
let aboutMeButton = document.querySelector('.about-me button');
let contactMeInputLeft = document.querySelector('.contact-me .input-left');
let contactMeInputRight = document.querySelector('.contact-me .input-right');
let contactMeTextArea = document.querySelector('.contact-me .textArea');
let contactMeButton = document.querySelector('.contact-me button');
let animatedElements = document.querySelectorAll('.animated');
let contactMeH1 = document.querySelector('.contact-me h1');
console.log(landingSocialLinkes)
// handle job title 
const jobTitleLetters = ['F','r','o','n','t','e','n','d', ' ', 'D','e','v','e','l','o','p','e','r'];
let counter = 0;
function typewriter() {
  if (counter < jobTitleLetters.length) {
    jobTitle.textContent += jobTitleLetters[counter];
    counter++;
    setTimeout(typewriter, 150); 
  }else {
    jobTitle.textContent = jobTitle.textContent.slice(0, -1);
    if (jobTitle.textContent.length > 0) {
      setTimeout(typewriter, 150);
    } else {
      counter = 0;
      setTimeout(typewriter, 1000); 
    }
  }
}
typewriter(); 
// handle burger icon 
burgerIcon.addEventListener('click' , ()=>{
    if(window.innerWidth <=770){

        if(isUlDisplayNone()) return setUlDisplayBLock();
        return setUlDisplayNone();
    }
})  

function isUlDisplayNone(){
 return navbarUl.style.display === 'none';
}
function setUlDisplayNone(){
 return navbarUl.style.display = 'none';
}
function setUlDisplayBLock(){
 return navbarUl.style.display = 'block';
}

// hadle navbar style
window.onscroll = function(){
    if(checkWindowSrollY()){
        setBorder();
         setBackground();
    }
    else{
        removeBorder();
        removeBackground();
    }
    
    function checkWindowSrollY(){
        return window.scrollY >= 115;
    }
   function setBorder(){
    return navbar.style.borderBottom= ' 1px solid #eeeeee2c';
   }
   function setBackground(){
    return navbar.style.borderBottom= navbar.style.backgroundColor = 'black';
   }
   function removeBorder(){
    return navbar.style.borderBottom= '';
   }
   function removeBackground(){
    return navbar.style.borderBottom= navbar.style.backgroundColor = '';
   }





    sections.forEach((sec)=>{
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(checkSectionLocation()){
            navLinks.forEach((links)=>{
                links.classList.remove('active');
                document.querySelector(`.navbar ul li a[href*='${id}']`).classList.add('active')
            })
        }
        function checkSectionLocation(){
            return top >= offset && top < offset + height;
        }
    })

}

//handle aboutus button
readMoreDiv.style.display = 'none'
readMoreButton.addEventListener('click',()=>{
    toggleReadMore();
})  

function toggleReadMore(){
    const isHidden = readMoreDiv.style.display === 'none';

    readMoreDiv.style.display = isHidden? 'block' :'none';
    readMoreButton.innerHTML = isHidden? 'Back' :'Read More';
}


//handle spans width

spans.forEach((span)=>{
    const widthAttr = span.getAttribute('data-width')
    span.style.width = widthAttr;
})

//handle contact me 

form.onsubmit = function (e){
    
    let nameInputVal = document.getElementById('name').value;
    const nameRegex = /^[a-zA-Z\s'-]{2,50}$/;
    let nameValidationRes = nameRegex.test(nameInputVal);

    if(nameInputVal < 3 && nameInputVal > 15){
        alert('please enter name between 3 and 15 char')
        e.preventDefault();
    }

    let emailInputVal = document.getElementById('email').value;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let emailValidationRes = emailRegex.test(emailInputVal);

    if(!emailValidationRes){
        alert('please enter a valid email');
        e.preventDefault();
    }

    let mobileInputVal = document.getElementById('mobile').value;
    const mobileRegex = /^\+?[0-9]{10,15}$/;
    let mobileValidationRes = mobileRegex.test(mobileInputVal);
    if(!mobileValidationRes){
        alert('please enter a valid phone num');
        e.preventDefault();
    }


    let subjectInputVal = document.getElementById('subject').value;
    const subjectRegex = /^[a-zA-Z0-9\s.,'-]{5,100}$/;
    let subjectValidationRes = subjectRegex.test(subjectInputVal);

    if(!subjectValidationRes){
        alert('please enter a subject between 5 and 100 chars');
        e.preventDefault();
    }

    let textAreaInputVal = document.getElementById('textArea').value;
    const textAreaRegex = /^[a-zA-Z0-9\s.,'"\-!?()]{10,500}$/;
    let textValidationRes = textAreaRegex.test(textAreaInputVal);

    if(!textValidationRes){
        alert('please enter a subject between 10 and 500 chars');
        e.preventDefault();
    }

    
    alert('Form submit sucessfully')

}

const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add('show');

            if(entry.target.classList.contains('nav-container')){
                logo.classList.add('logo-animation');
                navbarLies.forEach((li)=>{
                    li.classList.add('navbarLies-animation');
                })
            }
            if(entry.target.classList.contains('landing')){
                landingH1.classList.add('landing-h1-animation');
                landingH2.classList.add('landing-h2-animation');
                landingparagraph.classList.add('landing-p-animation');
                landingButtons.classList.add('landing-buttons-animation');
                // landingSocialLinkes.classList.add('landing-social-linkes-animation');
                landingImage.classList.add('landing-image-animation');
            }
            if(entry.target.classList.contains('about-me')){
                aboutMeH1.classList.add('about-me-h1-animation');
                aboutMeImage.classList.add('about-me-image-animation');
                aboutMeH2.classList.add('about-me-h2-animation');
                aboutMeP.classList.add('about-me-p-animation');
                aboutMeButton.classList.add('about-me-button-animation');
            }
            if(entry.target.classList.contains('contact-me')){
                contactMeH1.classList.add('contact-me-h1-animation');
                // contactMeInputLeft.classList.add('contact-me-input-left-animation');
                // contactMeInputRight.classList.add('contact-me-input-right-animation');
                contactMeTextArea.classList.add('contact-me-textArea-animation');
                contactMeButton.classList.add('contact-me-button-animation');
            }
            
            //     if(entry.target === logo){
                // entry.target.classList.add('logo-animation');
            // observer.unobserve(entry.target);
        // }
        // else if(entry.target === navbarLies){
        //     entry.target.classList.add('navbarLies-animation');
        //     // observer.unobserve(entry.target);
        // }
        // else if(entry.target === landingH1){
        //     entry.target.classList.add('h1-animation');
        //     // observer.unobserve(entry.target);
        // }
        // else if(entry.target === landingH2){
        //     entry.target.classList.add('h2-animation');
        //     // observer.unobserve(entry.target);
        // }
        // else  if(entry.target === landingparagraph){
        //     entry.target.classList.add('p-animation');
        //     // observer.unobserve(entry.target);
        // }
        observer.unobserve(entry.target);
    }

            
        else entry.target.classList.remove('show');
    })
}, {
    threshold: .3
})
hiddensElements.forEach((el)=> observer.observe(el))


