const hambutton = document.querySelector('body > header > div');
const nav = document.querySelector('body > header > nav');
const line_1 = document.querySelector('body > header > div > div:nth-child(1)');
const line_2 = document.querySelector('body > header > div > div:nth-child(2)');
const line_3 = document.querySelector('body > header > div > div:nth-child(3)');

hambutton.addEventListener('click', ()=>{
    nav.classList.toggle('show');
    hambutton.classList.toggle('twist');
    line_1.classList.toggle('line-1');
    line_2.classList.toggle('line-2');
    line_3.classList.toggle('line-3');
})