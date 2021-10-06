// hamburger button click
const navLinks = document.querySelector('.nav-links');
const main = document.querySelector('main');
let mainBefore = window.getComputedStyle(main, ':before');

function hamburgerButtonClick(burger) {
  burger.addEventListener('click', (e) => {
    document.body.classList.toggle('active');
    main.classList.toggle('active');
    navLinks.classList.toggle('fadeup');
    
    if(navLinks.classList.contains("fadeup")) {
      burger.children[0].src = "img/icon-close.svg";
    } else {
      burger.children[0].src = "img/icon-hamburger.svg";
    }
  });
}
hamburgerButtonClick(document.querySelector('.hamburger'))

// if window scrolled
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
  (pageYOffset > 80) ? header.classList.add('active') : header.classList.remove('active')
})


const cards = document.querySelectorAll('.card');
const circleContain = document.querySelector('.circle-btn-contain');
const circleBtns = document.querySelectorAll('.circle-btn');
circleContain.addEventListener('click', e => {
  
})
for(let btn of circleBtns) {
  btn.addEventListener('click', (e) => {
    for(let i = 0; i < circleBtns.length; i++) {
      if(circleBtns[i].classList.contains('active')) circleBtns[i].classList.remove('active');
    }
    e.target.classList.add('active');
    if (e.target.classList.contains('one')) {
      cards[0].style.marginLeft = '0';
    } else if (e.target.classList.contains('two')) {
      cards[0].style.marginLeft = '-100%';
    } else if (e.target.classList.contains('three')) {
      cards[0].style.marginLeft = '-200%';
    } else if (e.target.classList.contains('four')) {
      cards[0].style.marginLeft = '-300%';
    }
  });
}

/*circleBtns[0].addEventListener('click', () => {
  cards[0].style.marginLeft = '0';
});
circleBtns[1].addEventListener('click', () => {
  cards[0].style.marginLeft = '-105vw';
});
circleBtns[2].addEventListener('click', () => {
  cards[0].style.marginLeft = '-205vw';
});
circleBtns[3].addEventListener('click', () => {
  cards[0].style.marginLeft = '-305vw';
});*/

// email input valid or unvalid
const formButton = document.querySelector('.form-inbox button');
const emailTxt = document.querySelector('.form-inbox input');
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

formButton.addEventListener('click', e => {
  if(emailTxt.value.match(emailRegex)) {
  } else {
    e.preventDefault();
    emailTxt.classList.add('active');
    document.querySelector('.error-txt').classList.add('active');
  }
});