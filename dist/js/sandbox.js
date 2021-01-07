const hambutton = document.querySelector('body > header > div');
const nav = document.querySelector('body > header > nav');
const line_1 = document.querySelector('body > header > div > div:nth-child(1)');
const line_2 = document.querySelector('body > header > div > div:nth-child(2)');
const line_3 = document.querySelector('body > header > div > div:nth-child(3)');
const m_article = document.querySelector('body > main');
const searchBar = document.querySelector('#searchwrap > div > form > input');

hambutton.addEventListener('click', ()=>{
    nav.classList.toggle('show');
    hambutton.classList.toggle('twist');
    line_1.classList.toggle('line-1');
    line_2.classList.toggle('line-2');
    line_3.classList.toggle('line-3');
})

searchBar.addEventListener('keyup', e =>{
    const term = e.target.value.toLowerCase();
    const pages = document.querySelectorAll('.home-article-content');
    console.log(pages);
        pages.forEach(page =>{
        const title = page.firstElementChild.textContent;
        if(title.toLowerCase().indexOf(term)!=-1){
            page.parentElement.style.display = "flex";
        }else{
            page.parentElement.style.display = "none";
        }
    })
})
