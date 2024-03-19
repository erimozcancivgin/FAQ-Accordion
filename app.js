document.addEventListener('DOMContentLoaded', () => {
    const faqContainer = document.querySelector('.faq-accordion')
    const firstDropdownIcon = document.querySelector(".faq-dropdown-header:first-child .faq-icon");
    firstDropdownIcon.classList.add("open");
    faqContainer.addEventListener('click', (e) => {
        const groupHeader = e.target.closest('.faq-dropdown-header')
     
        if (!groupHeader) return;
     
        const group = groupHeader.parentElement;
        const groupBody = group.querySelector('.faq-dropdown-body')
        const icon = groupHeader.querySelector('.faq-icon')
        console.log(icon);

        icon.classList.toggle('open')
        groupBody.classList.toggle('open')

        const otherGroups = faqContainer.querySelectorAll('.faq-dropdown')
        
        otherGroups.forEach((otherGroup) => {
            if (otherGroup !== group) {
               
                const otherGroupBody = otherGroup.querySelector('.faq-dropdown-body')
                const otherIcon = otherGroup.querySelector('.faq-icon')
                
                otherGroupBody.classList.remove('open')
                otherIcon.classList.remove('open')
            }
        })
    })
})