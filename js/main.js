function ibg() {
  let ibg = document.querySelectorAll('.ibg');
  for (var i = 0; i < ibg.length; i++) {
    if (ibg[i].querySelector('img')) {
      ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
    }
  }
}

ibg();

const hamburgerIcon = document.querySelector('.hamburgers');
const menu = document.querySelector('.menu');
const menuLinks = document.querySelectorAll('.menu__item');
hamburgerIcon.addEventListener('click', hamburgers);
menuLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    console.log(e);
    hamburgerIcon.classList.toggle('active');
    menu.classList.toggle('active');
  });
});
function hamburgers() {
  if (!hamburgerIcon.classList.contains('active')) {
    hamburgerIcon.classList.toggle('active');
    menu.classList.toggle('active');
  } else {
    hamburgerIcon.classList.toggle('active');
    menu.classList.toggle('active');
  }
}

const formSection = document.querySelector('.worked__form-section');
if (formSection) {
  document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form');
    form.addEventListener('submit', formSend);

    async function formSend(e) {
      e.preventDefault();
      let error = formValudate(form);
      console.log('ok');
    }
    function formValudate(e) {
      let error = 0;
      let formReq = document.querySelectorAll('._req');
      for (let i = 0; i < formReq.length; i++) {
        const input = formReq[i];
        formRemoveError(input);
        if (input.value === '') {
          formAddError(input);
          error++;
        }
      }
      if (error === 0) {
        calcute(formReq);
      }
    }
    function formAddError(input) {
      input.parentElement.classList.add('_error');
      input.classList.add('_error');
    }
    function formRemoveError(input) {
      input.parentElement.classList.remove('_error');
      input.classList.remove('_error');
    }
    function calcute(formReq) {
      const average = 3;
      let current = formReq[0].value;
      let height = formReq[1].value;
      let desiger = formReq[2].value;
      if (current < 20 && height < 120 && desiger < 30) {
        alert('Вы ввели некорректные данные');
        formReq[0].value = '';
        formReq[1].value = '';
        formReq[2].value = '';
        return;
      }
      let ideal = height - 110;
      let month = 0;
      while (current > desiger) {
        current -= average;
        month++;
      }
      addPopup(month, ideal, formReq);
    }
    function addPopup(month, ideal, formReq) {
      const popup = document.querySelector('.popup');
      const close = document.querySelector('.popup__close');
      const monthElem = document.querySelector('.popup__month');
      const popupTable = document.querySelector('.popup__table span');
      popupTable.innerHTML = ideal;
      monthElem.innerHTML = `${month} месяца`;
      popup.classList.add('active');
      popup.addEventListener('click', (e) => {
        console.log(e.target.classList.value);
        if (e.target.classList.value == 'popup active' || e.target.classList == 'popup__close') {
          formReq[0].value = '';
          formReq[1].value = '';
          formReq[2].value = '';
          popup.classList.remove('active');
        }
      });
    }
  });
}

const priceItem = document.querySelectorAll('.price__item');
priceItem.forEach((item) => {
  item.addEventListener('click', handleClick);
});
function handleClick(e) {
  if (e.currentTarget.classList.contains('price__item')) {
    priceItem.forEach((i) => {
      i.classList.remove('active');
    });
    e.currentTarget.classList.add('active');
  }
}

const faqItem = document.querySelectorAll('.faq__label');
faqItem.forEach((e) => {
  e.addEventListener('click', feqHandler);
});
function feqHandler(e) {
  console.log(e);
  e.preventDefault();
  currentContent = e.target.nextElementSibling;
  e.target.classList.toggle('active');
  if (e.target.classList.contains('active')) {
    currentContent.style.maxHeight = currentContent.scrollHeight + 'px';
  } else {
    currentContent.style.maxHeight = 0;
  }
}

const askBtn = document.querySelector('.ask__btn');
askBtn.addEventListener('click', popupAsk);
function popupAsk(e) {
  const askPopup = document.querySelector('.popup-ack');
  askPopup.classList.add('active');
  askPopup.addEventListener('click', (e) => {
    console.log(e.target.classList.value);
    if (
      e.target.classList.value == 'popup-ack active' ||
      e.target.classList.value == 'popup-ack__close'
    ) {
      askPopup.classList.remove('active');
    }
  });
}

const headerElement = document.querySelector('.header');
const callback = function (entries, observer) {
  if (entries[0].isIntersecting) {
    headerElement.classList.remove('_scroll');
  } else {
    headerElement.classList.add('_scroll');
  }
};
const headerObserver = new IntersectionObserver(callback);
headerObserver.observe(headerElement);
