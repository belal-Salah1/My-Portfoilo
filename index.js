let spans = document.querySelectorAll('span');
let navbar = document.querySelector('.navbar');
let navbarUl = document.querySelector('.navbar ul');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.navbar ul li a');
let burgerIcon = document.querySelector('.burger')
let readMoreButton = document.querySelector('.about-me button');
let readMoreDiv = document.querySelector('.read-more');
let form = document.getElementById('form');
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
    // if(window.innerWidth <=770){
    //     setUlDisplayNone();
    // }
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

