const hamburguerBtn = document.getElementById('hamburguer-button')
const navbarLinks = document.getElementById('navbar-links')
const accordion = document.getElementsByClassName('contentBx')

hamburguerBtn.addEventListener('click', ()=>{
    navbarLinks.classList.toggle('active')
    console.log('did')
})
for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', function(){
        this.classList.toggle('active')
    })
}

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}