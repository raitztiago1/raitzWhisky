const menu = document.querySelector('.menu')
const navMenu = document.querySelector(".nav-menu")
if (menu) {
    menu.addEventListener('click', () => {
        menu.classList.toggle('ativo')
        navMenu.classList.toggle('ativo')
    })
}