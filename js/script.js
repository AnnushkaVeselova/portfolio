/*бургер*/

  let header = document.querySelector(".header");
  document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("burger").addEventListener("click", function() {
      header.classList.toggle("open");
    })
  })


  /*слайдер*/

  const Swiper1 = new Swiper('.swiper', {
    direction: 'horizontal',
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },

    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      490: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      1000: {
        slidesPerView: 4,
        spaceBetween: 20,
      }
    }
  });

  /* кнопка еще - добавляем карточки и скрываем кнопку */
  const btn = document.querySelector('.project__btn');
  const cards = document.querySelectorAll('.project__item');

  btn.addEventListener('click', function() {
    for(let card of cards) {
      card.style.display = 'grid'
    }
    btn.style.display = 'none'
  });

/* кнопка скролла на вверх */

const goTopBtn = document.querySelector('.go-top');

goTopBtn.addEventListener('click', goTop);
window.addEventListener('scroll', trackScroll);

function trackScroll() {
  const offset = window.pageYOffset;
  const coords = document.documentElement.clientHeight;
  if (offset > coords) {
    goTopBtn.classList.add('go-top--show');
  } else {
    goTopBtn.classList.remove('go-top--show');
  }
}

function goTop() {
  if (window.pageYOffset > 0) {
    window.scrollBy(0, -75);
    setTimeout(goTop, 0);
  }
}