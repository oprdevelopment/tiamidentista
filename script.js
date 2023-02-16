const hamburguerBtn = document.getElementsByClassName('hamburguer-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

hamburguerBtn.addEventListener('click', ()=>{
    navbarLinks.classList.toggle('active')
})