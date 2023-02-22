const hamburguerBtn = document.getElementsByClassName('hamburguer-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]
const accordion = document.getElementsByClassName('contentBx')

hamburguerBtn.addEventListener('click', ()=>{
    navbarLinks.classList.toggle('active')
})
for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', function(){
        this.classList.toggle('active')
    })
}
