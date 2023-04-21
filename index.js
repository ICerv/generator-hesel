/*
const btn = document.querySelector('#password-ganerator');
btn.addEventListener('click', () => {
  fetch('https://apps.kodim.cz/daweb/trening-api/apis/passwords')
    .then((response) => response.json())
    .then((data) => {
      document.querySelector('.show-password').textContent = data.password;
    });
});
*/
// BONUS
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const input = document.querySelector('#password-length')
  fetch(`https://apps.kodim.cz/daweb/trening-api/apis/passwords?length=${input.value}`)
    .then((response) => response.json())
    .then((data) => {
      document.querySelector('.show-password').textContent = data.password;
    });
});
