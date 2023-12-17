const swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});

const menu = document.querySelector('.menu-icon')
const navbar = document.querySelector('.navbar') 

menu.addEventListener('click', () => {
    menu.classList.toggle('move')
    navbar.classList.toggle('open-navbar')
})

window.onscroll = () => {
    menu.classList.remove('move')
    navbar.classList.remove('open-navbar')
}

const scrollReveal = new ScrollReveal({
    origin: "top",
    distance: '60px',
    duration: "2500",
    delay: "400",
})

scrollReveal.reveal(".nav")
scrollReveal.reveal(".left-content", {origin: "left"})
scrollReveal.reveal(".right-content", {origin: "bottom"})
scrollReveal.reveal(".service-content, .product-card, .team-card, .book-data", {interval: 100})
