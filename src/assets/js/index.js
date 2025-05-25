import '../css/styles.css';

import homePageContent from './home.js';
import menuPageContent from './menu.js';
import contactPageContent from './contact.js';

const pageRenderers = {
    home: homePageContent,
    menu: menuPageContent,
    contact: contactPageContent,
};

const contentWrapper = document.querySelector('#contentWrapper');
const navHomeBtn = document.querySelector('.navHomeBtn');
const navMenuBtn = document.querySelector('.navMenuBtn');
const navContactBtn = document.querySelector('.navContactBtn');

const contentCard = document.createElement('div');
contentCard.className = 'contentCard';

let renderType = 'home';

//initialize render
homePageContent(contentCard);
contentWrapper.appendChild(contentCard);

navHomeBtn.addEventListener('click', () => {
    contentCard.innerHTML = '';
    contentWrapper.innerHTML = '';

    navMenuBtn.classList.remove('active');
    navContactBtn.classList.remove('active');
    navHomeBtn.classList.add('active');

    renderType = 'home';
    pageRenderers[renderType](contentCard);
    contentWrapper.appendChild(contentCard);
});

navMenuBtn.addEventListener('click', () => {
    contentCard.innerHTML = '';
    contentWrapper.innerHTML = '';

    navHomeBtn.classList.remove('active');
    navContactBtn.classList.remove('active');
    navMenuBtn.classList.add('active');

    renderType = 'menu';
    pageRenderers[renderType](contentCard);
    contentWrapper.appendChild(contentCard);
});

navContactBtn.addEventListener('click', () => {
    contentCard.innerHTML = '';
    contentWrapper.innerHTML = '';

    navMenuBtn.classList.remove('active');
    navHomeBtn.classList.remove('active');
    navContactBtn.classList.add('active');

    renderType = 'contact';
    pageRenderers[renderType](contentCard);
    contentWrapper.appendChild(contentCard);
});
