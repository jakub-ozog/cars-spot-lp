const expandBtn = document.querySelectorAll('.expandBtn')
const mobileBtn = document.querySelector('.mobile-btn')
const mobileBtnCls = document.querySelector('.mobile-btn-cls')
const mobileMenu = document.querySelector('.mobile-menu')
const heroSection = document.getElementById('#hero')
const body = document.querySelector('body')
const mobileLinks = mobileMenu.querySelectorAll('li')


mobileBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden')
    mobileMenu.classList.toggle('grid')
    heroSection.classList.toggle('hidden')
    mobileBtnCls.classList.remove('hidden');
    body.classList.add('body-no-scroll')
})

mobileBtnCls.addEventListener('click', () => {
    mobileMenu.classList.remove('open', 'grid');
    mobileMenu.classList.toggle('hidden')
    mobileBtnCls.classList.toggle('hidden');
    heroSection.classList.toggle('hidden')
    body.classList.remove('body-no-scroll')
});



mobileLinks.forEach(item => {
    item.addEventListener('click', () => {
        mobileMenu.classList.remove('open', 'grid');
        mobileMenu.classList.toggle('hidden')
        mobileBtnCls.classList.toggle('hidden');
        heroSection.classList.toggle('hidden')
        body.classList.remove('body-no-scroll')
    })
})

expandBtn.forEach(button => {
    button.addEventListener('click', () => {
        const expandableText = event.target.closest('div').previousElementSibling.querySelector('.expandableText')
        expandableText.classList.toggle('hidden')
        expandableText.classList.toggle('expanded')

        const isExpanded = expandableText.classList.contains('expanded')
        const arrowImg = button.querySelector('img')
        const expandBtnContent = button.querySelector('span')

        if (isExpanded) {
            expandBtnContent.textContent = 'Zwiń'
            arrowImg.setAttribute('src', './img/arrow_up.svg');
        } else {
            expandBtnContent.textContent = 'Rozwiń'
            arrowImg.setAttribute('src', './img/arrow_down.svg');
        }

        const expandBracket = event.target.closest('div').previousElementSibling.querySelector('.expandBracket')
        expandBracket.classList.toggle('hidden')

    })
})      