const menu = document.querySelector('.menu').childNodes

menu.forEach((option) => option.addEventListener('click', (e) => {
    menu.forEach((option) => option.classList = 'not-clicked')
    e.target.classList = 'clicked'
}))