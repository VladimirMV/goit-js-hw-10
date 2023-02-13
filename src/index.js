import './css/styles.css';
import _debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import fetchCountries from './js/fetchCountries.js';
import { countryСardTeemplate, countryListTemplate } from './js/markupTemplate';
import {showCountriesCoose} from './js/map.js';
 

const DEBOUNCE_DELAY = 300;

const refs = {
  inputEl: document.querySelector('#search-box'),
  countryListEl: document.querySelector('.country-list'),
  countryInfoEl: document.querySelector('.country-info'),
};


refs.inputEl.addEventListener(
  'input',
  _debounce(onSearchCountryInput, DEBOUNCE_DELAY)
);

const clearMarkup = element => (element.innerHTML = '');
const changeBorderColor = color => (refs.inputEl.style.backgroundColor = color);


function onSearchCountryInput(event) {
  clearMarkup(refs.countryListEl);
  clearMarkup(refs.countryInfoEl);

  changeBorderColor('white');

  if (!event.target.value.trim()) {
    return;
  }

  fetchCountries(event.target.value.trim())
    .then(countries => { 

      if (countries.length > 10) {
        Notify.info(
          '⚠️Too many matches found. Please enter a more specific name.'
        );
        changeBorderColor('lightblue');
        return;
      }
      renderMarkup(countries);
    }).catch(() => {
      Notify.failure('❌Oops, there is no country with that name');
      changeBorderColor('lightcoral');
    });
}

function renderMarkup(countries) {
  changeBorderColor('khaki');

  let markupInfo = '';
  let markupList = '';

  if (countries.length >= 2) {
    markupList = countries.reduce(
      (previousValue, currentValue) =>
        (previousValue += countryListTemplate(currentValue)),
      ''
    );
  } else {
    console.log(...countries);
     markupList = countryListTemplate(...countries);
     markupInfo = countryСardTeemplate(...countries);
     
    changeBorderColor('lightgreen');

    refs.countryInfoEl.insertAdjacentHTML('afterbegin', markupInfo);
  }

  refs.countryListEl.insertAdjacentHTML('afterbegin', markupList);
  
  showCountriesCoose(...countries);
}
