
// const expandableText = document.querySelector('.expandableText')
const expandBtn = document.querySelectorAll('.expandBtn')


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
            console.log(arrowImg.src);
        } else {
            expandBtnContent.textContent = 'Rozwiń'
            arrowImg.setAttribute('src', './img/arrow_down.svg'); 
        }


        const expandBracket = event.target.closest('div').previousElementSibling.querySelector('.expandBracket')
        expandBracket.classList.toggle('hidden')

    })
})  