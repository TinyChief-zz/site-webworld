import 'normalize.css';
import '../../scss/main.scss';
import '../../assets/fonts/line-awesome/line-awesome.min.css'
import '../../assets/js/slick/slick.css'
import '../../assets/js/slick/slick.min.js';
import '../../assets/js/main.js'

$('document').ready(function () {
  $('.slider').slick({
    dots: true,
    prevArrow: $('.slick-prev'),
    nextArrow: $('.slick-next'),
    // appendDots: $('.slider-dots')
  })
  const buttons = $('.slick-dots button')
  Array.from(buttons).map((el) => {
    el.innerHTML = ''
  })
});
const testimonials = [
  {
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since type specimen book !!",
    author: "Robart Markel",
    company: "Coca-Cola"
  },
  {
    text: "Есть много вариантов Lorem Ipsum, но большинство из них имеет не всегда приемлемые модификации, например, юмористические вставки или слова, которые даже отдалённо не напоминают латынь.",
    author: "Jordan JR",
    company: "NBA"
  },
  {
    text: "Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор слов, но это не совсем так. Его корни уходят в один фрагмент классической латыни 45 года н.э., то есть более двух тысячелетий назад.",
    author: "Somebody",
    company: "Something"
  },
]
// console.log($('.testimonial')) 
let i = 0
const testimonial = document.querySelector('.testimonial')
const author = document.querySelector('.author')
const company = document.querySelector('.company')
const testimonialDots = document.querySelectorAll('.testimonial-dot')

testimonialDots[0].classList.add('active')
console.log(testimonialDots)

testimonial.addEventListener('click', (e) => {
  testimonialDots[i].classList.remove('active')
  i++
  if (i >= testimonials.length) {
    i = 0
  }
  
  testimonial.classList.add('transition')
  author.classList.add('transition')
  company.classList.add('transition')
  setTimeout(()=> {
    testimonial.classList.remove('transition')
    author.classList.remove('transition')
    company.classList.remove('transition')
  }, 300)
  setTimeout(()=> {
    testimonial.innerHTML = testimonials[i].text
    author.innerHTML = testimonials[i].author + ', '
    company.innerText = testimonials[i].company
  }, 200),
  testimonialDots[i].classList.add('active')

})
console.log($('.company'))