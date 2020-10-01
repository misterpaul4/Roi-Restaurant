import Icon from '../img/logo.png';
import home from './location';
import contact from './contact';
import menu from './menu';

const navBar = () => {
  const container = document.createElement('nav');
  const navItemsContainer = document.createElement('div');
  const logo = document.createElement('img');
  const navLinkItemsContainer = document.createElement('div');
  const socialsContainer = document.createElement('div');

  socialsContainer.innerHTML = `
    <a href="https://twitter.com/paulajuze"><i class="fab fa-twitter-square"></i></a>
    <a href="https://www.instagram.com/paulajuze/"><i class="fab fa-instagram-square mx-2"></i></a>
    <a href="mailto: ajuzepaul@gmail.com"><i class="fas fa-paper-plane"></i></a>
  `

  logo.src = `${Icon}`;

  navItemsContainer.classList.add('d-flex', 'justify-content-between', 'align-items-center', 'nav-item-container', 'mx-5', 'px-5');
  navLinkItemsContainer.className = 'nav-links';
  logo.classList.add('logo');

  container.appendChild(navItemsContainer);
  navItemsContainer.appendChild(logo);
  navItemsContainer.appendChild(navLinkItemsContainer);
  navItemsContainer.appendChild(socialsContainer);
  navLinkItemsContainer.appendChild(home.link());
  navLinkItemsContainer.appendChild(menu.link());
  navLinkItemsContainer.appendChild(contact.link());

  return container
}

export default navBar