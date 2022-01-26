'use strict';

//https://restcountries.com/v2/data/${data.flag}.svg
const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
const URL = 'https://restcountries.com/v2/name/';
const URL_PORTUGAL = URL + 'portugal';
const URL_NEIGHBOUR = 'https://restcountries.com/v2/name/alpha/';

const renderCountry = function (data, className = '') {
  const html = `
      <article class="country ${className}">
        <img class="country__img" src="${data.flag}" />
        <div class="country__data">
          <h3 class="country__name">${data.name}</h3>
          <h4 class="country__region">${data.region}</h4>
          <p class="country__row"><span>👫</span>${(
            +data.population / 1000000
          ).toFixed(1)} people</p>
          <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
          <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
        </div>
      </article>
      `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

///////////////////////////////////////
// const getCountryAndNeighbour = function (country) {
//   const request = new XMLHttpRequest();

//   request.open('GET', `https://restcountries.com/v2/name/${country}`);
//   request.send();
//   // console.log(request.responseText);

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     //render country 1 (selected)
//     renderCountry(data, country);

//     //render country 2 (neighbour)
//     const [neighbour] = data.borders;

//     if (!neighbour) return;

//     //AJAX call country 2
//     const requestNeighbour = new XMLHttpRequest();
//     requestNeighbour.open(
//       'GET',
//       `https://restcountries.com/v2/alpha/${neighbour}`
//     );
//     requestNeighbour.send();

//     requestNeighbour.addEventListener('load', function () {
//       const dataNeighbour = JSON.parse(this.responseText);
//       renderCountry(dataNeighbour, 'neighbour');
//     });
//   });
// };

// getCountryAndNeighbour('brazil');

const getCountryData = function (country) {
  fetch(URL + `${country}`)
    .then(response => response.json())
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];
      console.log(neighbour);
      if (!neighbour) return;
      return fetch(URL_NEIGHBOUR + `${neighbour}`);
    })
    .then(response => response.json())
    .then(data => renderCountry(data, 'neighbour'));
};

// getCountryData('germany');

// const lotteryPromise = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     if (Math.random() > 0.5) {
//       resolve('You win some money');
//     } else {
//       reject(new Error('You lose your money'));
//     }
//   }, 1000);
// });

// lotteryPromise.then(res => console.log(res)).catch(err => console.log(err));

//promisifying setTimeout
// const wait = seconds => {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// wait(2)
//   .then(() => {
//     console.log(`I waited for 2 seconds`);
//     return wait(1);
//   })
//   .then(() => console.log('I waited for 1 second'));

// Promise.resolve('abc').then(x => console.log(x));
// Promise.resolve('abc').then(x => console.error(x));

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
    // navigator.geolocation.getCurrentPosition(
    //   position => resolve(position),
    //   err => reject(err)
    // );
  });
};

// getPosition().then(pos => console.log(pos));

const whereAmI = async function () {
  try {
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;
    const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    if (!resGeo.ok) throw new Error('Problem getting location');
    const dataGeo = await resGeo.json();

    const res = await fetch(
      `https://restcountries.com/v2/name/${dataGeo.country}`
    );
    const data = await res.json();
    renderCountry(data[0]);
    return `you are in ${dataGeo.city}, ${dataGeo.country}`;
  } catch (err) {
    console.error(`Something went wrong with ${err}`);
    throw err;
  }
};

console.log(`1: Finding my current location right now`);
// whereAmI()
//   .then(msg => console.log(`2: ${msg}`))
//   .catch(err => console.log(`2: ${err.message}`))
//   .finally(() => console.log(`3: Finished getting location`));

// (async function () {
//   try {
//     const msg = await whereAmI();
//     console.log(`2: ${msg}`);
//   } catch (err) {
//     console.log(`2: ${err.message}`);
//   } finally {
//     console.log(`3: Finished getting location`);
//   }
// })();
const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);
    return response.json();
  });
};

// const get3Countries = async function (c1, c2, c3) {
//   try {
//     // const [data1] = await getJSON(`https://restcountries.com/v2/name/${c1}`);
//     // const [data2] = await getJSON(`https://restcountries.com/v2/name/${c2}`);
//     // const [data3] = await getJSON(`https://restcountries.com/v2/name/${c3}`);

//     const data = await Promise.all([
//       getJSON(`https://restcountries.com/v2/name/${c1}`),
//       getJSON(`https://restcountries.com/v2/name/${c2}`),
//       getJSON(`https://restcountries.com/v2/name/${c3}`),
//     ]);

//     console.log(data.map(d => d[0].capital));
//     // console.log([data1.capital, data2.capital, data3.capital]);
//   } catch (err) {
//     console.log(err);
//   }
// };

// get3Countries('portugal', 'canada', 'tanzania');

// Promise.race
(async function () {
  const res = await Promise.race([
    getJSON(`https://restcountries.com/v2/name/italy`),
    getJSON(`https://restcountries.com/v2/name/egypt`),
    getJSON(`https://restcountries.com/v2/name/mexico`),
  ]);
  console.log(res[0]);
})();

const timeout = function (sec) {
  return new Promise(function (_, reject) {
    setTimeout(() => {
      reject(new Error('Request took too long'));
    }, sec * 1000);
  });
};

Promise.race([
  getJSON(`https://restcountries.com/v2/name/italy`),
  timeout(5),
]).then(res => console.log(res[0]));

//promise. all settled
Promise.allSettled([
  Promise.resolve('Success'),
  Promise.reject('ERROR'),
  Promise.resolve('Another Success'),
])
  .then(res => console.log(res))
  .catch(err => console.log(err));

Promise.all([
  Promise.resolve('Success'),
  Promise.reject('ERROR'),
  Promise.resolve('Another Success'),
])
  .then(res => console.log(res))
  .catch(err => console.error(err));

Promise.any([
  Promise.resolve('Success'),
  Promise.reject('ERROR'),
  Promise.resolve('Another Success'),
])
  .then(res => console.log(res))
  .catch(err => console.error(err));
