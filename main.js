'use strict';

// DATA
const DATA = [
  {
    pageView: 10000,
    pricePerMonth: 8,
  },
  {
    pageView: 50000,
    pricePerMonth: 12,
  },
  {
    pageView: 100000,
    pricePerMonth: 16,
  },
  {
    pageView: 500000,
    pricePerMonth: 24,
  },
  {
    pageView: 1000000,
    pricePerMonth: 36,
  },
];

// SELECTING DOM ELEMENTS
const billingButton = document.querySelector('.billing__btn');
const billingInput = document.querySelector('.billing__input');

const sliderInput = document.getElementById('slide');
const views = document.querySelector('.pricing__views');
const price = document.querySelector('.pricing__price');

// FUNCTIONS
const updateCheckbox = () => (billingButton.dataset.active = billingInput.checked);

const updatePrice = function () {
  const pricePerMonth = DATA[sliderInput.value].pricePerMonth;
  const pricePerYear = pricePerMonth * 12 - 0.25 * (pricePerMonth * 12);

  const markup = billingInput.checked
    ? `<span class="pricing__value">${pricePerYear.toFixed(2)}</span>/year`
    : `<span class="pricing__value">${pricePerMonth.toFixed(2)}</span>/month`;

  price.innerHTML = markup;
};

const updateViews = function () {
  const numView = `${DATA[sliderInput.value].pageView / 1000}k`;
  views.textContent = numView;
};

const renderUpdates = function () {
  updateCheckbox();
  updatePrice();
  updateViews();
};

// EVENTS HANDLERS
billingInput.addEventListener('click', renderUpdates);
window.addEventListener('load', renderUpdates);
sliderInput.addEventListener('input', renderUpdates);
