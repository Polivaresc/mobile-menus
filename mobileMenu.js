const openMenu = document.querySelector('#open-menu')
const closeMenu = document.querySelector('#close-menu')
const menu = document.querySelector('#menu')

openMenu.addEventListener('click', showMenu)

closeMenu.addEventListener('click', hideMenu)

function showMenu() {
    menu.classList.remove('hidden')
    closeMenu.classList.remove('hidden')
    openMenu.classList.add('hidden')
}

function hideMenu() {
    menu.classList.add('hidden')
    closeMenu.classList.add('hidden')
    openMenu.classList.remove('hidden')
}

const options = menu.childNodes

options.forEach((option) => option.addEventListener('click', (e) => {
    options.forEach((option) => option.classList = 'not-clicked')
    e.target.classList = 'clicked'
}))