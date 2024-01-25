/*=============== SHOW SIDEBAR ===============*/


/*===== SIDEBAR SHOW =====*/
/* Validate If Constant Exists */


/*===== SIDEBAR HIDDEN =====*/
/* Validate If Constant Exists */


/*=============== SKILLS TABS ===============*/
const tabs = document.querySelectorAll('[data-target]'),

    tabContent = document.querySelectorAll('[data-content]')
tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        const target = document.querySelector(tab.dataset.target)
        tabContent.forEach(tabContents => {
            tabContents.classList.remove('skills_active')



        })
        target.classList.add('skills_active')


        tabs.forEach(tab => {
            tab.classList.remove('skills_active')



        })
        tab.classList.add('skills_active')
    })





})




/*=============== MIXITUP FILTER PORTFOLIO ===============*/
let mixerportfolio = mixitup('.work_container', {
    selectors: {
        target: '.work_card'
    },
    animation: {
        duration: 300
    }
});

/*===== Link Active Work =====*/
/*const linkwork = document.querySelectorAll('.work_item ')*/

/*
**function Activework() {
    linkwork.forEach(L => I.classList.remove('active-work'))
    this.classList.add('active-work')

}*/
/*linkwork.forEach(L => I.addEventListener("click", Activework))*/

/*===== Work Popup =====*/
document.addEventListener("click", (e) => {
    if (e.target.classList.contains("work-button")) {
        toggleportfoliopupup();
        portfolioItemDetail(e.target.parentElement);
    }
})

function toggleportfoliopupup() {
    document.querySelector(".portfolio_popup").classList.toggle("open");
}
document.querySelector(".portfolio_popup-close").addEventListener("click", toggleportfoliopupup)

function portfolioItemDetail(portfolioItem) {
    document.querySelector(".pp_thumbnail img").src = portfolioItem.querySelector(".work_img").src;
    document.querySelector(".potfolio_popup-subtitle span").innerHTML = portfolioItem.querySelector(".work_title").innerHTML;
    document.querySelector(".potfolio_popup-body ").innerHTML = portfolioItem.querySelector(".portfolio_item-details").innerHTML;
}
/*=============== SERVICES MODAL ===============*/
/*
**const modalViews = document.querySelectorAll('.services_modal'),
    modelBtns = document.querySelectorAll('.sevices_button'),
    modalCloses = document.querySelectorAll('.services_modal-close')
let modal = function(modalClick) {
    modalViews[modalClick].classList.add('active-modal')
}
modelBtns.forEach((modelBtn, i) => {
    modelBtn.addEventListener('click', () => {
        modal(i);
    })
})

modalCloses.forEach((modalClose) => {
        modalClose.addEventListener('click', () => {
            modalViews.forEach((modalview) => {
                modalview.classList.remove('active-modal')
            })
        })
    })

    */

    document.addEventListener("click", (i) => {
        if (i.target.classList.contains("sevices_button")) {
            toggleportfoliopupupp();
            portfolioItemDetaill(i.target.parentElement);
        }
    })

    function toggleportfoliopupupp() {
        document.querySelector(".portfolio_item-details").classList.toggle("open");
    }

    document.querySelector(".portfolio_popup-close").addEventListener("click", toggleportfoliopupup)
    function portfolioItemDetaill(portfolioItemm) {
        document.querySelector(".details_description").src = portfolioItemm;
        
    }
    /*=============== SWIPER TESTIMONIAL =====

    ==========*/


/*=============== INPUT ANIMATION ===============*/


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SHOW SCROLL UP ====)===========*/