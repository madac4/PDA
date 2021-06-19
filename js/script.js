const heroSwiper = document.querySelector('.hero__swiper');
if(heroSwiper) {
    var swiper = new Swiper(".hero__swiper", {
        effect: 'fade',
        autoplay:true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
}

const headerButton = document.querySelector('.header__button');
if (headerButton) {
    window.addEventListener('resize', () => {
        adaptive_function()
    });

    function adaptive_header(w, h) {
        var navMenu = document.querySelector('.nav');
        var headerContainer = document.querySelector('.header-container');
        var result = headerButton.classList.contains('done');
        if (w < 480) {
            if (!result) {
                headerButton.classList.add('done')
                navMenu.insertBefore(headerButton, navMenu.lastChild)
            }
        } else {
            if (result) {
                headerButton.classList.remove('done')
                headerContainer.insertBefore(headerButton, headerContainer.lastChild)
            }
        }
    }

    function adaptive_function() {
        var w = window.innerWidth;
        var h = window.innerHeight;
        adaptive_header(w, h);
    }
    adaptive_function();
}


const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');

burger.addEventListener('click', () =>{
    burger.classList.toggle('active');
    nav.classList.toggle('active');
    document.body.classList.toggle('lock');
})


const header = document.querySelector('header');
if(header){
    document.addEventListener('scroll', () =>{
        const scrollPos = window.scrollY
        const headerH = header.offsetHeight;

        if(scrollPos > headerH){
            header.classList.add('fixed')
        }else{
            header.classList.remove('fixed')
        }
    })
}

document.addEventListener('DOMContentLoaded', () =>{
    const accodrions = document.querySelectorAll('.accordeon');
    if(accodrions[0]){
        accodrions.forEach(accordeon =>{
            const readMore = accordeon.querySelector('.accordeon-more');
            const content = accordeon.querySelector('.accordeon__content');
            readMore.addEventListener('click', ()=>{
                accordeon.classList.toggle('open')
                if(accordeon.classList.contains('open')){
                    readMore.textContent = 'Citeste mai putin'
                    content.style.maxHeight = content.scrollHeight + 'px';
                }else{
                    readMore.textContent = 'Citeste mai mult'
                    content.style.maxHeight = null
                }
            })
        })
    }

    const tabs = document.querySelectorAll('.tab');
    if(tabs[0]){
        const content = document.querySelectorAll('.content');
        content[0].style.maxHeight = content[0].scrollHeight + 'px';
        for (var i = 0; i < tabs.length; i++) {
            tabs[i].addEventListener("click", function() {
                for (var j = 0; j < tabs.length; j++) {
                    tabs[j].classList.remove("active");
                    this.classList.add('active')
                }
                content.forEach(el =>{
                    if(this.dataset.tab === el.dataset.tab){
                        for(let k = 0; k < content.length; k++){
                            content[k].classList.remove("active");
                        }
                        el.classList.add('active')
                        el.style.maxHeight = el.scrollHeight + 'px';

                    }else{
                        el.style.maxHeight = 0;
                    }
                })
            });
        }
    }

    const qAccordions = document.querySelectorAll('.q-accordion');
    if(qAccordions[0]){
        qAccordions.forEach(qAccordion =>{
            const qControl = qAccordion.querySelector('.q-main');
            const content = qAccordion.querySelector('.q-content');
            qControl.addEventListener('click', () =>{
                qAccordion.classList.toggle('open')
                if(qAccordion.classList.contains('open')){
                    content.style.maxHeight = content.scrollHeight+ 20 + 'px';
                }else{
                    content.style.maxHeight = null
                }
            })
        })
    }
});
