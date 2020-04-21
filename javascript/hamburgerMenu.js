const $hamburger = document.querySelector('nav div')
$hamburger.addEventListener('click', showBurger)

function showBurger () {
    const lis = document.querySelectorAll('li a')
    if (lis[0].classList.contains('open')) {
        let anim = 900
        lis.forEach( link => {
            link.style.animationDuration = anim + "ms"
            link.classList = "close"
            anim -= 150
        })
    } else {
        let anim = 300
        lis.forEach( link => {
            link.style.animationDuration = anim + "ms"
            link.classList = 'open'
            anim += 150
        })
    }
}